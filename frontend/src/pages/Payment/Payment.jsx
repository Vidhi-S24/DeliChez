import React, { useEffect, useState, useContext } from 'react';
import './Payment.css';
import { useNavigate } from 'react-router-dom';
import { assets } from '../../assets/assets';
import { StoreContext } from '../../context/contextProvider';
import axios from 'axios';


const Payment = () => {
  const { token } = useContext(StoreContext);
  const [orderData, setOrderData] = useState(null);
  const [paymentMethod, setPaymentMethod] = useState('');
  const [isPaid, setIsPaid] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const data = localStorage.getItem("orderData");
    if (data) {
      setOrderData(JSON.parse(data));
    } else {
      navigate("/");
    }
  }, []);

  // const handlePayment = () => {
  //   if (!paymentMethod) {
  //     alert("Please select a payment method!");
  //     return;
  //   }

  //   setTimeout(() => {
  //     setIsPaid(true);
  //     localStorage.removeItem("orderData");

  //     setTimeout(() => {
  //       navigate("/");
  //     }, 5000);
  //   }, 2000);
  // };

  const handlePayment = async () => {
    if (!paymentMethod) {
      alert("Please select a payment method!");
      return;
    }

    setTimeout(async () => {
      try {
        // Call backend clearCart API
        await axios.post("http://localhost:4000/api/cart/clear", {}, {
          headers: {
            Authorization: `Bearer ${token}`, // or use token from context
          },
        });

        // Show success message
        setIsPaid(true);
        localStorage.removeItem("orderData");

        // Redirect to homepage after 5s
        setTimeout(() => {
          navigate("/");
        }, 5000);
      } catch (error) {
        console.error("Failed to clear cart:", error);
        alert("Error clearing cart.");
      }
    }, 2000);
  };

  const handleCancelOrder = () => {
    localStorage.removeItem("orderData");
    navigate("/");
  };

  if (!orderData) return <p>Loading...</p>;

  return (
    <div className="payment-container">
      {!isPaid ? (
        <>
          <h2>Order Payment</h2>
          <p>Total Amount: €{orderData.amount}</p>

          <div className="payment-methods">
            <label>
              <input
                type="radio"
                name="paymentMethod"
                value="card"
                onChange={(e) => setPaymentMethod(e.target.value)}
              />
              Credit/Debit Card
            </label>

            <label>
              <input
                type="radio"
                name="paymentMethod"
                value="paypal"
                onChange={(e) => setPaymentMethod(e.target.value)}
              />
              PayPal
            </label>

            <label>
              <input
                type="radio"
                name="paymentMethod"
                value="cash"
                onChange={(e) => setPaymentMethod(e.target.value)}
              />
              Cash on Delivery
            </label>
          </div>

          <div className="pay-btn">
            <button onClick={handlePayment} disabled={!paymentMethod}>
              Pay Now
            </button>
            <button onClick={handleCancelOrder}>
              Cancel Order
            </button>
          </div>
        </>
      ) : (
        <div className="payment-success">
          <img src={assets.success_icon} alt="" className='success-img' /><h2>Order Placed Successfully!</h2>
          <p>Enjoy your meal!!! </p>
        </div>
      )}
    </div>
  );
};

export default Payment;