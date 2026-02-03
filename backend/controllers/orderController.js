// import orderModel from "../models/orderModel.js";
// import userModel from "../models/userModel.js";

// const stripe = new Stripe(process.env.STRIPE_SECRET_KEY)

// //placing user order for frontend
// const placeOrder = async (req, res) => {
// const frontend_url="https:localhost:5173"

//     try {
//         const newOrder = new orderModel({
//             userId: req.body.userId,
//             items: req.body.items,
//             amount: req.body.amount,
//             address: req.body.address
//         })
//         await newOrder.save();
//         await userModel.findByIdAndUpdate(req.body.userId, { cartData: {} });

//         const line_items = req.body.items.map((item) => ({
//             price_data: {
//                 product_data: {
//                     name: item.name
//                 },
//                 unit_amount: item.price * 80 * 100
//             },
//             quantity: item.quantity
//         }))

//         line_items.push({
//             price_data: {
//                 currency: "INR",
//                 product_data: {
//                     name: "Delivery Charges"
//                 },
//                 unit_amount: 2 * 100 * 80
//             },
//             quantity: 1
//         })

//         const sessiom = await stripe.checkout.sessions.create({
//             line_items: line_items,
//             mode: 'payment',
//             success_url: `${frontend_url}/verify?success=true&orderId=${newOrder._id}`,
//             cancel_url: `${frontend_url}/verify?success=false&orderId=${newOrder._id}`,
//         })

//         res.json({success:true,session_url:session.url})

//     } catch (error) {
//         console.log(error)
//         res.json({success:false,message:"error"})
//     }
// }

// export { placeOrder }

import orderModel from "../models/orderModel.js";
import userModel from "../models/userModel.js";

// Placing user order for frontend - mock payment
const placeOrder = async (req, res) => {
  try {
    const newOrder = new orderModel({
      userId: req.body.userId,
      items: req.body.items,
      amount: req.body.amount,
      address: req.body.address
    });

    await newOrder.save();

    // Clear cart for the user
    await userModel.findByIdAndUpdate(req.body.userId, { cartData: {} });

    // Send orderId directly for mock payment handling
    res.json({
      success: true,
      orderId: newOrder._id
    });

  } catch (error) {
    console.error("Error placing order:", error);
    res.status(500).json({
      success: false,
      message: "Failed to place order"
    });
  }
};

export { placeOrder };
