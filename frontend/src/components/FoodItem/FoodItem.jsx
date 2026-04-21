// import React, { useContext } from 'react'
// import './FoodItem.css'
// import { assets } from '../../assets/assets.js';
// import { StoreContext } from '../../context/contextProvider.jsx';

// const FoodItem = ({ id, name, price, description, image }) => {

//   const { cartItems, addToCart, removeFromCart, url } = useContext(StoreContext);

//   return (
//     <div className='food-item'>
//       <div className="food-item-img-container">
//         <img className='food-item-image' src={url+"/images/"+image} alt="" />
//         {!cartItems[id]
//           ? <img className='add' onClick={() => addToCart(id)} src={assets.add_icon_white} alt="" />
//           : <div className='food-item-counter'>
//             <img onClick={() => removeFromCart(id)} src={assets.remove_icon_red} alt="" />
//             <p>{cartItems[id]}</p>
//             <img onClick={() => addToCart(id)} src={assets.add_icon_green} alt="" />
//           </div>
//         }
//       </div>
//       <div className="food-item-info">
//         <div className="food-item-name-rating">
//           <p>{name}</p>
//           <p className="food-item-price">€{price}</p>
//           {/* <img src={assets.rating_stars} alt="" /> */}
//         </div>
//         <p className="food-item-desc">{description}</p>

//       </div>
//     </div>
//   )
  
// }

// export default FoodItem

import React, { useContext } from 'react';
import './FoodItem.css';
import { assets, food_list } from '../../assets/assets.js';
import { StoreContext } from '../../context/contextProvider.jsx';

const FoodItem = ({ id, name, price, description, image }) => {

  const { cartItems, addToCart, removeFromCart } = useContext(StoreContext);

  // Get the correct image from `food_list` (or `assets` if dynamic)
  const foodImage = assets[image] || image; // If `image` is not in assets, fallback to direct path

  return (
    <div className='food-item'>
      <div className="food-item-img-container">
        {/* Use the imported image directly */}
        <img className='food-item-image' src={foodImage} alt={name} />
        {!cartItems[id]
          ? <img className='add' onClick={() => addToCart(id)} src={assets.add_icon_white} alt="Add" />
          : <div className='food-item-counter'>
            <img onClick={() => removeFromCart(id)} src={assets.remove_icon_red} alt="Remove" />
            <p>{cartItems[id]}</p>
            <img onClick={() => addToCart(id)} src={assets.add_icon_green} alt="Add More" />
          </div>
        }
      </div>
      <div className="food-item-info">
        <div className="food-item-name-rating">
          <p>{name}</p>
          <p className="food-item-price">€{price}</p>
          {/* <img src={assets.rating_stars} alt="Rating" /> */}
        </div>
        <p className="food-item-desc">{description}</p>
      </div>
    </div>
  );
}

export default FoodItem;
