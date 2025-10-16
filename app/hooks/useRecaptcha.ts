import { useEffect, useState, useCallback } from 'react';

declare global {
  interface Window {
    grecaptcha: {
      ready: (callback: () => void) => void;
      execute: (siteKey: string, options: { action: string }) => Promise<string>;
    };
    RECAPTCHA_SITE_KEY?: string;
  }
}

export function useRecaptcha() {
  const [isLoaded, setIsLoaded] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const siteKey = typeof window !== 'undefined' ? window.RECAPTCHA_SITE_KEY : undefined;

  useEffect(() => {
    if (!siteKey) {
      console.warn('reCAPTCHA site key is not available');
      return;
    }

    // Check if reCAPTCHA is already loaded
    if (window.grecaptcha) {
      window.grecaptcha.ready(() => {
        setIsLoaded(true);
      });
      return;
    }

    // Wait for script to load (it's loaded in the document head)
    const checkForRecaptcha = () => {
      if (window.grecaptcha) {
        window.grecaptcha.ready(() => {
          setIsLoaded(true);
          setIsLoading(false);
        });
      } else {
        setTimeout(checkForRecaptcha, 100);
      }
    };

    setIsLoading(true);
    checkForRecaptcha();
  }, [siteKey]);

  const executeRecaptcha = useCallback(async (action: string): Promise<string | null> => {
    if (!isLoaded || !window.grecaptcha || !siteKey) {
      console.warn('reCAPTCHA not loaded or site key missing');
      return null;
    }

    try {
      const token = await window.grecaptcha.execute(siteKey, { action });
      return token;
    } catch (error) {
      console.error('reCAPTCHA execution failed:', error);
      return null;
    }
  }, [isLoaded, siteKey]);

  return {
    isLoaded,
    isLoading,
    executeRecaptcha,
  };
}