import Stripe from 'stripe'

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY, {
  apiVersion: '2022-11-15'
})

export async function createPaymentIntent() {
  return await stripe.paymentIntents.create({
    amount: 2000,
    currency: 'usd',
    automatic_payment_methods: {
      enabled: true
    },
    description: 'Enjoy your premium account!'
  })
}

export async function retrievePaymentIntent(id) {
  return await stripe.paymentIntents.retrieve(id)
}
