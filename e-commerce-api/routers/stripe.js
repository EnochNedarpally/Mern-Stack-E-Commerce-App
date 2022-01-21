// const router = require("express").Router();
// const KEY = process.env.STRIPE_KEY
// const stripe = require("stripe")(KEY)

// ("sk_test_51KHSLzSFPuZ7XZqycVQ02woDcFkIpqgHxPYkREF4W3lZXpgbjN2kk3Pj83KqBhrH667Q7H5ta09ZeZd4NyNYBsuP00ViUmYxfF");

// router.post("/payment", async(req, res) => {
//    await stripe.charges.create(
//     {
//       source: req.body.tokenId,
//       amount: req.body.amount,
//       currency: "usd",
//     },
//     (stripeErr, stripeRes) => {
//       if (stripeErr) {
//         res.status(500).json(stripeErr);
//       } else {
//         res.status(200).json(stripeRes);
//       }
//     }
//   );
// });

// This is your test secret API key.
const router = require("express").Router();
const stripe = require('stripe')('sk_test_51KHSLzSFPuZ7XZqycVQ02woDcFkIpqgHxPYkREF4W3lZXpgbjN2kk3Pj83KqBhrH667Q7H5ta09ZeZd4NyNYBsuP00ViUmYxfF');


// const YOUR_DOMAIN = 'http://localhost:4242';

router.post('/payment', async (req, res) => {
  const session = await stripe.checkout.sessions.create({
    line_items: [
      {
        // Provide the exact Price ID (for example, pr_1234) of the product you want to sell
        price: 'price_1KJHHISFPuZ7XZqyLKVWTerj',
        quantity: 1,
      },
    ],
    mode: 'payment',
    success_url: `/success`,
    cancel_url: `/?canceled=true`,
  });

  res.redirect(303, session.url);
});



module.exports = router;