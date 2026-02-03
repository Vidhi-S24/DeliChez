import userModel from "../models/userModel.js"
// add items to user cart
// const addToCart = async (req, res) => {
//     try {
//         let userData = await userModel.findById(req.body.userId)
//         let cartData = await userData.cartData;
//         if (!cartData[req.body.itemId]) {
//             cartData[req.body.itemId] = 1;
//         }
//         else {
//             cartData[req.body.itemId] += 1;
//         }
//         await userModel.findByIdAndUpdate(userId, {
//             $set: { cartData: cartData }
//         }); res.json({ success: true, message: "Added to Cart" })
//     } catch (error) {
//         console.log(error)
//         res.json({ success: false, message: "Error" })
//     }
// }

const addToCart = async (req, res) => {
    try {
        const userId = req.userId;         
        const itemId = req.body.itemId; 

        if (!itemId) {
            return res.status(400).json({ success: false, message: "Missing itemId" });
        }

        const userData = await userModel.findById(userId);
        if (!userData) {
            return res.status(404).json({ success: false, message: "User not found" });
        }
        let cartData = userData.cartData || {};
        cartData[itemId] = (cartData[itemId] || 0) + 1;
        await userModel.findByIdAndUpdate(userId, { $set: { cartData } });

        res.json({ success: true, message: "Added to Cart" });

    } catch (error) {
        console.error("Add to Cart Error:", error);
        res.status(500).json({ success: false, message: "Internal Server Error" });
    }
};


// remove items to user cart
const removeToCart = async (req, res) => {
    // try {
    //     let userData=await userModel.findById(req.body.userId)
    //     let cartData=await userData.cartData;
    //     if (cartData[req.body.itemId]>0) {
    //         cartData[req.body.itemId]-=1;
    //     }
    //     //update new cartData
    //     await userModel.findByIdAndUpdate(req.body.userId,{cartData});
    //     res.json({success:true,message:"Removed from Cart"})
    // } catch (error) {
    //     console.log(error)
    //     res.json({success:false,message:"Error"})
    // }
    try {
        const userId = req.userId;         
        const itemId = req.body.itemId; 

        if (!itemId) {
            return res.status(400).json({ success: false, message: "Missing itemId" });
        }

        const userData = await userModel.findById(userId);
        if (!userData) {
            return res.status(404).json({ success: false, message: "User not found" });
        }
        let cartData = userData.cartData || {};
        if (cartData[itemId]>0) {
            cartData[itemId] -= 1;
        }     
        await userModel.findByIdAndUpdate(userId, { $set: { cartData } });

        res.json({ success: true, message: "Removed from Cart" });

    } catch (error) {
        console.error("Remove from Cart Error:", error);
        res.status(500).json({ success: false, message: "Internal Server Error" });
    }
}

// fetch user cart data
const getCart = async (req, res) => {
    try {
        // let userData=await userModel.findById(req.body.userId)
        // let cartData=await userData.cartData
        // res.json({success:true,cartData})

        const userId = req.userId;         
        const userData = await userModel.findById(userId);
        let cartData=await userData.cartData;
        res.json({success:true,cartData});

    } catch (error) {
        console.log(error)
        res.json({success:false,message:"error"})
    }
}
const clearCart = async (req, res) => {
  try {
    const userId = req.userId;

    await userModel.findByIdAndUpdate(userId, { cartData: {} });

    res.json({ success: true, message: "Cart cleared" });
  } catch (error) {
    console.error("Clear cart error:", error);
    res.status(500).json({ success: false, message: "Internal Server Error" });
  }
};

export { addToCart, removeToCart, getCart, clearCart }