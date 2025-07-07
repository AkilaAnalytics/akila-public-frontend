import pool from "./pool.server";
import { randomUUID } from "crypto";
export async function createUserIfNotExists(
  customerEmail: string,
  customerName: string | null,
  session: any // Your Stripe session object
) {
  const client = await pool.connect();

  try {
    // Check if user already exists
    const existingUserQuery = `
      SELECT user_id, email FROM users 
      WHERE email = $1
    `;
    const existingUserResult = await client.query(existingUserQuery, [
      customerEmail,
    ]);

    if (existingUserResult.rows.length === 0) {
      // --- THE FIX IS HERE ---
      // 1. Generate a new UUID in your application code.
      const newUserId = randomUUID();

      // 2. Add user_id to your INSERT statement.
      const insertUserQuery = `
        INSERT INTO users (
          user_id, email, first_name, last_name, license, 
          login_method, tenant, last_login, stripe_customer_id, 
          stripe_subscription_id, created_at, updated_at
        ) VALUES (
          $1, $2, $3, $4, $5, $6, $7, $8, $9, $10, $11, $12
        ) RETURNING email
      `;

      const firstName = customerName?.split(" ")[0] || "User";
      const lastName = customerName?.split(" ").slice(1).join(" ") || "";
      const now = new Date();

      // 3. Add the new UUID to your values array.
      const insertValues = [
        newUserId, // $1 - user_id
        customerEmail, // $2 - email
        firstName, // $3 - first_name
        lastName, // $4 - last_name
        "auto_invoice", // $5 - license
        "password", // $6 - login_method
        "akila", // $7 - tenant
        now, // $8 - last_login
        session.customer?.id || null, // $9 - stripe_customer_id
        session.subscription?.id || null, // $10 - stripe_subscription_id
        now, // $11 - created_at
        now, // $12 - updated_at
      ];

      const result = await client.query(insertUserQuery, insertValues);
      console.log(`User created successfully: ${customerEmail}`);
      return result.rows[0];
    } else {
      console.log(`User already exists: ${customerEmail}`);
      return existingUserResult.rows[0];
    }
  } catch (error) {
    console.error("Error creating user:", error);
    throw error;
  } finally {
    client.release();
  }
}
