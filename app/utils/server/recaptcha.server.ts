import { logger } from "./index.server";

export interface RecaptchaResponse {
  success: boolean;
  score?: number;
  action?: string;
  challenge_ts?: string;
  hostname?: string;
  'error-codes'?: string[];
}

export async function verifyRecaptcha(token: string): Promise<{ success: boolean; score?: number; error?: string }> {
  const secretKey = process.env.RECAPTCHA_SECRET_KEY;
  
  if (!secretKey) {
    logger.warn('RECAPTCHA_SECRET_KEY is not configured - allowing request in development');
    // In development, allow the request to proceed if reCAPTCHA is not configured
    if (process.env.NODE_ENV === 'development') {
      return { success: true, score: 1.0 };
    }
    return { success: false, error: 'reCAPTCHA not configured' };
  }

  if (!token) {
    return { success: false, error: 'No reCAPTCHA token provided' };
  }

  try {
    const response = await fetch('https://www.google.com/recaptcha/api/siteverify', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
      },
      body: new URLSearchParams({
        secret: secretKey,
        response: token,
      }).toString(),
    });

    const data: RecaptchaResponse = await response.json();
    logger.log(data, 'reCAPTCHA verification response');

    if (!data.success) {
      const errorCodes = data['error-codes']?.join(', ') || 'Unknown error';
      logger.error(`reCAPTCHA verification failed: ${errorCodes}`);
      return { success: false, error: `reCAPTCHA verification failed: ${errorCodes}` };
    }

    // For reCAPTCHA v3, check the score (0.0 to 1.0, higher is better)
    const score = data.score || 0;
    const minScore = 0.5; // Adjust this threshold as needed

    if (score < minScore) {
      logger.warn(`reCAPTCHA score too low: ${score}`);
      return { success: false, score, error: 'reCAPTCHA score too low' };
    }

    // Optionally verify the action matches what we expect
    if (data.action && data.action !== 'contact_form') {
      logger.warn(`reCAPTCHA action mismatch: expected 'contact_form', got '${data.action}'`);
      return { success: false, error: 'reCAPTCHA action mismatch' };
    }

    return { success: true, score };
  } catch (error) {
    logger.error(error, 'reCAPTCHA verification error');
    return { success: false, error: 'reCAPTCHA verification failed' };
  }
}