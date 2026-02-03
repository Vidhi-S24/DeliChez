import React, { useContext } from 'react'
import './Cart.css'
import { StoreContext } from '../../context/contextProvider.jsx'
import { useNavigate } from 'react-router-dom'
const Cart = () => {

  const { cartItems, food_list, removeFromCart, getTotalCartAmount, url } = useContext(StoreContext)
  const navigate = useNavigate();

  return (
    <div className='cart'>
      <div className="cart-items">
        <div className="cart-items-title">
          <h3>Items</h3>
          <h3>Title</h3>
          <h3>Price</h3>
          <h3>Quantity</h3>
          <h3>Total</h3>
          <h3>Remove</h3>
        </div>
        <br />
        <hr />
        {/* {food_list.map((item, index) => {
          if (cartItems[item._id] > 0) {
            return (
              <div>
                <div className="cart-items-title cart-items-item">
                  <img src={url+"/images/"+item.image} alt="" />
                  <p>{item.name}</p>
                  <p>€{item.price}</p>
                  <p>{cartItems[item._id]}</p>
                  <p>€{item.price * cartItems[item._id]}</p>
                  <p onClick={() => removeFromCart(item._id)} className='cross'>x</p>
                </div>
                <hr />
              </div>
            )
          }
        })} */}
        {food_list.map((item, index) => {
  if (cartItems[item._id] > 0) {
    return (
      <div key={item._id}>
        <div className="cart-items-title cart-items-item">
          <img src={url + "/images/" + item.image} alt="" />
          <p>{item.name}</p>
          <p>€{item.price}</p>
          <p>{cartItems[item._id]}</p>
          <p>€{item.price * cartItems[item._id]}</p>
          <p onClick={() => removeFromCart(item._id)} className="cross">x</p>
        </div>
        <hr />
      </div>
    );
  } else {
    return null;
  }
})}

      </div>
      <div className="cart-bottom">
        <div className="cart-total">
          <h3>Cart Totals</h3>
          <div className="cart-total-details">
            <p>Subtotal</p>
            <p>€{getTotalCartAmount()}</p>
          </div>
          <hr />
          <div className="cart-total-details">
            <p>Delivery Fee</p>
            <p>€{getTotalCartAmount()===0?0:2}</p>
          </div>
          <hr />
          <div className="cart-total-details">
            <p>Total</p>
            <p>€{getTotalCartAmount()===0?0:getTotalCartAmount() + 2}</p>
          </div>
          <button onClick={()=>navigate('/order')}>Proceed To Checkout</button>
        </div>

        <div className="cart-promocode">
          <div>
            <p>If you have a promo code, Enter it here</p>
            <div className="cart-promocode-input">
              <input type="text" placeholder='PROMO CODE' />
              <button>Apply</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Cart