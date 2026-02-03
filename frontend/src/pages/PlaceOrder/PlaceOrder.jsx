import React, { useContext, useState } from 'react'
import './PlaceOrder.css'
import { StoreContext } from '../../context/contextProvider.jsx'
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
const PlaceOrder = () => {
  // const { getTotalCartAmount, token, food_list, cartItems, url } = useContext(StoreContext)
  const { getTotalCartAmount, token, food_list, cartItems, url } = useContext(StoreContext);


  const [data, setData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    street: "",
    city: "",
    state: "",
    zipcode: "",
    country: "",
    phone: ""
  })

  const onChangeHandler = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    setData(data => ({ ...data, [name]: value }))
  }
  const navigate = useNavigate();
  // const placeOrder = async (event) => {
  //   event.preventDefault();
  //   let orderItems = [];

  //   food_list.forEach((item) => {
  //     if (cartItems[item._id] > 0) {
  //       orderItems.push({ ...item, quantity: cartItems[item._id] });
  //     }
  //   });

  //   const orderData = {
  //     address: data,
  //     items: orderItems,
  //     amount: getTotalCartAmount() + 2,
  //   };

  //   try {
  //     const response = await axios.post(url + "/api/order/place", orderData, {
  //       headers: {
  //         Authorization: `Bearer ${token}`,
  //       },
  //     });

  //     if (response.data.orderId) {
  //       // Save full order data locally for the fake payment
  //       localStorage.setItem("orderData", JSON.stringify({
  //         ...orderData,
  //         orderId: response.data.orderId
  //       }));

  //       navigate("/payment");
  //     } else {
  //       alert("Failed to place order. Please try again.");
  //     }

  //   } catch (error) {
  //     console.error("Order error:", error);
  //     alert("An error occurred while placing your order.");
  //   }
  // };




  const placeOrder = async (event) => {
    event.preventDefault();

    let orderItems = [];
    food_list.forEach((item) => {
      if (cartItems[item._id] > 0) {
        let itemInfo = { ...item, quantity: cartItems[item._id] };
        orderItems.push(itemInfo);
      }
    });

    let orderData = {
      address: data,
      items: orderItems,
      amount: getTotalCartAmount() + 2,
    };

    // You can save this in localStorage, context, or state management
    localStorage.setItem("orderData", JSON.stringify(orderData));

    // Navigate to fake payment page
    navigate("/payment");
  }

  return (
    <form onSubmit={placeOrder} className="place-order">
      <div className="place-order-left">
        <p className="title">Delivery Information</p>
        <div className="multi-fields">
          <input required name='firstName' onChange={onChangeHandler} value={data.firstName} type="text" placeholder='First Name' />
          <input required name='lastName' onChange={onChangeHandler} value={data.lastName} type="text" placeholder='Last Name' />
        </div>
        <input required name='email' onChange={onChangeHandler} value={data.email} type="email" placeholder='Email address' />
        <input required name='street' onChange={onChangeHandler} value={data.street} type="text" placeholder='Street' />
        <div className="multi-fields">
          <input required name='city' onChange={onChangeHandler} value={data.city} type="text" placeholder='City' />
          <input required name='state' onChange={onChangeHandler} value={data.state} type="text" placeholder='State' />
        </div>
        <div className="multi-fields">
          <input required name='zipcode' onChange={onChangeHandler} value={data.zipcode} type="text" placeholder='Zip Code' />
          <input required name='country' onChange={onChangeHandler} value={data.country} type="text" placeholder='Country' />
        </div>
        <input required name='phone' onChange={onChangeHandler} value={data.phone} type="number" placeholder='Phone' />
      </div>
      <div className="place-order-right">
        <div className="cart-total">
          <h3>Cart Totals</h3>
          <div className="cart-total-details">
            <p>Subtotal</p>
            <p>€{getTotalCartAmount()}</p>
          </div>
          <hr />
          <div className="cart-total-details">
            <p>Delivery Fee</p>
            <p>€{getTotalCartAmount() === 0 ? 0 : 2}</p>
          </div>
          <hr />
          <div className="cart-total-details">
            <p>Total</p>
            <p>€{getTotalCartAmount() === 0 ? 0 : getTotalCartAmount() + 2}</p>
          </div>
          <button type='submit'>Proceed To Payment</button>
        </div>
      </div>
    </form>
  )
}

export default PlaceOrder