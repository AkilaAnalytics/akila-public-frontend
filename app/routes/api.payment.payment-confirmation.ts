//import type { ActionArgs } from '@remix-run/node'; // or cloudflare/deno
//
//import { PutCommand, UpdateCommand } from '@aws-sdk/lib-dynamodb';
//import { json } from '@remix-run/node'; // or cloudflare/deno
//import { v4 as uuidv4 } from 'uuid';
//
//import { createEmailCommand } from '~/services';
//import { getUserByEmail } from '~/services/auth';
//import { logger, ddbDocClient, TierTypes, AuthTypes, sesClient, EmailTypes } from '~/utils';
//
//export const action = async ({ request }: ActionArgs) => {
//  logger.log('---------- inside action from api/payment/payment-confirmation');
//  // config
//  logger.log(process.env.STRIPE_SECRET_KEY, '<<< STRIPE_SECRET_KEY');
//  const stripe = require('stripe')(process.env.STRIPE_SECRET_KEY);
//
//  logger.log(request.method, '---------- request.metho');
//  if (request.method !== 'POST') {
//    return json({ message: 'Method not allowed' }, 405);
//  }
//
//  /* validate and process the webhook (e.g. enqueue a background job) */
//  const signature = request.headers.get('stripe-signature');
//  const payload = await request.text();
//
//  // Only verify the event if you have an endpoint secret defined.
//  // Otherwise use the basic event deserialized with JSON.parse
//  if (signature) {
//    try {
//      event = stripe.webhooks.constructEvent(
//        payload,
//        signature,
//        process.env.STRIPE_WEBHOOK_SECRET_KEY
//      );
//      logger.log(event.type, '<<< event.type');
//    } catch (err) {
//      logger.log('error in payment/payment-confirmation: ', err.message);
//      return json({ status: 'failed', message: err.message });
//    }
//  }
//
//  // Handle the event
//  switch (event.type) {
//    case 'payment_intent.created': {
//      const paymentIntentCreated = event.data.object;
//      //logger.log(paymentIntentCreated, "<<< payment_intent.created");
//      break;
//    }
//    case 'charge.succeeded': {
//      logger.log('---------- inside charge.succeeded from payment-confirmation');
//      //logger.log(Object.keys(event['data']['object']), '<<< event from charge.succeeded');
//      const name = event['data']['object']['billing_details']['name'].split(' ');
//      const lastName = name.slice(1).join(' ');
//      const firstName = name[0];
//      let email = event['data']['object']['receipt_email'];
//      let receiptUrl = event['data']['object']['receipt_url'];
//      logger.log(receiptUrl, '<<< receiptUrl from top');
//      email = email.toLowerCase();
//
//      const handlePaymentIntentSucceeded = event.data.object;
//      // check if email exists
//      let response = await getUserByEmail(email);
//      //logger.log(
//      //    response,
//      //    "<<< response from getUserByEmail in charge.succeeded"
//      //);
//      logger.log('---------- inside charge.succeeded from payment-confirmation');
//      if (response?.Items?.length === 0) {
//        // create a new user in the DB
//        const currentTimestamp = new Date().getTime();
//        const premiumEndDate = new Date(Date.now() + 1000 * 60 * 60 * 24 * 366).getTime();
//        let params = {
//          TableName: 'allUsers',
//          Item: {
//            userId: uuidv4(),
//            email: email,
//            accountCreatedDate: currentTimestamp,
//            firstName: firstName,
//            lastName: lastName,
//            tier: TierTypes.TIER_1,
//            premiumSignUpDate: currentTimestamp,
//            premiumEndDate: premiumEndDate,
//            numberOfVisits: 1,
//            lastLoginDate: currentTimestamp,
//            emailVerified: 0,
//            authMethod: AuthTypes.NOT_SELECTED,
//            numberOfIncorrectPasswordAttempts: 0
//          }
//        };
//        response = await ddbDocClient.send(new PutCommand(params));
//      }
//      if (response?.Items?.length > 0) {
//        // create a new user in the DB
//        const userId = response.Items[0].userId;
//        const premiumEndDate = new Date(Date.now() + 1000 * 60 * 60 * 24 * 366).getTime();
//        const params = {
//          TableName: 'allUsers',
//          Key: {
//            userId: userId
//          },
//          UpdateExpression:
//            'SET  tier = :tier, premiumSignUpDate = :premiumSignUpDate, premiumEndDate = :premiumEndDate',
//          ExpressionAttributeValues: {
//            ':tier': TierTypes.TIER_1,
//            ':premiumSignUpDate': new Date().getTime(),
//            ':premiumEndDate': premiumEndDate
//          }
//        };
//        await ddbDocClient.send(new UpdateCommand(params));
//      }
//      logger.log('after updating user from payment-confirmation');
//      await sesClient.send(
//        createEmailCommand(email, firstName, receiptUrl, EmailTypes.PURCHASE_THANK_YOU)
//      );
//      logger.log('---------- sending email from api/payment/payment-confirmation');
//s
//      // if email does not exist then create User object
//      break;
//    }
//    case 'payment_method.attached': {
//      const paymentMethod = event.data.object;
//      break;
//    }
//    default:
//      // Unexpected event type
//      console.log(`Unhandled event type ${event.type}.`);
//  }
//
//  return json({ success: true }, 200);
//};
