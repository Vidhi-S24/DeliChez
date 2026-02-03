import React, { useState, useEffect, useContext } from 'react';
import './Navbar.css';
import { assets } from '../../assets/assets.js';
import { Link, useNavigate } from 'react-router-dom';
import { StoreContext } from '../../context/contextProvider.jsx';

const Navbar = ({ setShowLogin }) => {
  const [menu, setMenu] = useState("home");
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  const { getTotalCartAmount, token, setToken } = useContext(StoreContext);
  const navigate = useNavigate();

  const logout = () => {
    localStorage.removeItem("token")
    setToken("")
    navigate("/")
  }

  const handleMenuClick = (selected) => {
    setMenu(selected);
    setIsMobileMenuOpen(false);
  };

  useEffect(() => {
    const handleResize = () => setWindowWidth(window.innerWidth);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const isTablet = windowWidth <= 903;
  const isMobile = windowWidth <= 475;

  return (
    <div className='navbar'>
      <Link to='/'><img src={assets.logo} alt="logo" className="logo" /></Link>

      {!isTablet && (
        <ul className='navbar-menu'>
          <Link to='/' onClick={() => handleMenuClick("home")} className={menu === "home" ? "active" : ""}>Home</Link>
          <a href='#explore-menu' onClick={() => handleMenuClick("menu")} className={menu === "menu" ? "active" : ""}>Menu</a>
          <a href='#app-download' onClick={() => handleMenuClick("mobile-app")} className={menu === "mobile-app" ? "active" : ""}>Mobile-App</a>
          <a href='#footer' onClick={() => handleMenuClick("contact-us")} className={menu === "contact-us" ? "active" : ""}>Contact Us</a>
        </ul>
      )}

      <div className="navbar-right">
        {!isMobile && (
          <>
            {/* <img src={assets.search_icon} alt="search" /> */}
            <div className="navbar-search-icon">
              <Link to='/cart'><img src={assets.cart} alt="cart" /></Link>
              <div className={getTotalCartAmount() === 0 ? "" : "dot"}></div>
            </div>
            {!token ? <button onClick={() => setShowLogin(true)}>Sign In</button> : <div className='navbar-profile'>
              <img src={assets.profile} alt="" />
              <ul className="nav-profile-dropdown">
                {/* <li><img src={assets.bag_icon} alt="" /><p>Order</p></li> */}
                {/* <hr /> */}
                <li onClick={logout}><img src={assets.logout_icon} alt="" /><p>Logout</p></li>
              </ul>
            </div>}
            {/* <button onClick={() => setShowLogin(true)}>Sign In</button> */}
          </>
        )}

        {isTablet && (
          <div className="hamburger" onClick={() => setIsMobileMenuOpen(true)}>
            <span className="bar"></span>
            <span className="bar"></span>
            <span className="bar"></span>
          </div>
        )}
      </div>

      <div className={`mobile-menu-overlay ${isMobileMenuOpen ? 'open' : ''}`} onClick={() => setIsMobileMenuOpen(false)}>
        <div className="mobile-menu" onClick={(e) => e.stopPropagation()}>
          <span className="close-btn" onClick={() => setIsMobileMenuOpen(false)}>×</span>

          {isMobile && (
            <div className="mobile-top-items">
              {/* <img src={assets.search_icon} alt="search" height="20px" width="20px" /> */}
              <div className="navbar-search-icon">
                <Link to='/cart'><img src={assets.cart} alt="cart" /></Link>
                <div className={getTotalCartAmount() === 0 ? "" : "dot"}></div>
              </div>
              {!token ? <button onClick={() => setShowLogin(true)}>Sign In</button> : <div className='navbar-profile'>
                <img src={assets.profile} alt="" />
                <ul className="nav-profile-dropdown">
                  {/* <li><img src={assets.bag_icon} alt="" /><p>Order</p></li> */}
                  {/* <hr /> */}
                  <li onClick={logout}><img src={assets.logout_icon} alt="" /><p>Logout</p></li>
                </ul>
              </div>}
              {/* <button onClick={() => setShowLogin(true)}>Sign In</button> */}
            </div>
          )}

          <ul>
            <Link to='/' onClick={() => handleMenuClick("home")} className={menu === "home" ? "active" : ""}>Home</Link>
            <a href='#explore-menu' onClick={() => handleMenuClick("menu")} className={menu === "menu" ? "active" : ""}>Menu</a>
            <a href='#app-download' onClick={() => handleMenuClick("mobile-app")} className={menu === "mobile-app" ? "active" : ""}>Mobile-App</a>
            <a href='#footer' onClick={() => handleMenuClick("contact-us")} className={menu === "contact-us" ? "active" : ""}>Contact Us</a>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Navbar;


// import React, { useState, useEffect, useContext } from 'react';
// import './Navbar.css';
// import { assets } from '../../assets/assets.js';
// import { Link, useNavigate } from 'react-router-dom';
// import { StoreContext } from '../../context/contextProvider.jsx';

// const Navbar = ({ setShowLogin }) => {
//   const [menu, setMenu] = useState("home");
//   const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
//   const [windowWidth, setWindowWidth] = useState(window.innerWidth);
//   const [showSearchBar, setShowSearchBar] = useState(false);
//   const [searchText, setSearchText] = useState('');

//   const { getTotalCartAmount, token, setToken } = useContext(StoreContext);
//   const navigate = useNavigate();

//   const logout = () => {
//     localStorage.removeItem("token");
//     setToken("");
//     navigate("/");
//   };

//   const handleMenuClick = (selected) => {
//     setMenu(selected);
//     setIsMobileMenuOpen(false);
//   };

//   useEffect(() => {
//     const handleResize = () => setWindowWidth(window.innerWidth);
//     window.addEventListener("resize", handleResize);
//     return () => window.removeEventListener("resize", handleResize);
//   }, []);

//   const isTablet = windowWidth <= 903;
//   const isMobile = windowWidth <= 475;

//   return (
//     <div className='navbar'>
//       <Link to='/'><img src={assets.logo} alt="logo" className="logo" /></Link>

//       {!isTablet && (
//         <ul className='navbar-menu'>
//           <Link to='/' onClick={() => handleMenuClick("home")} className={menu === "home" ? "active" : ""}>Home</Link>
//           <a href='#explore-menu' onClick={() => handleMenuClick("menu")} className={menu === "menu" ? "active" : ""}>Menu</a>
//           <a href='#app-download' onClick={() => handleMenuClick("mobile-app")} className={menu === "mobile-app" ? "active" : ""}>Mobile-App</a>
//           <a href='#footer' onClick={() => handleMenuClick("contact-us")} className={menu === "contact-us" ? "active" : ""}>Contact Us</a>
//         </ul>
//       )}

//       <div className="navbar-right">
//         {!isMobile && (
//           <>
//             <div className="navbar-search-wrapper">
//               <img
//                 src={assets.search_icon}
//                 alt="search"
//                 onClick={() => setShowSearchBar(prev => !prev)}
//                 style={{ cursor: 'pointer' }}
//               />
//               {showSearchBar && (
//                 <input
//                   type="text"
//                   placeholder="Search..."
//                   value={searchText}
//                   onChange={(e) => setSearchText(e.target.value)}
//                   className="navbar-search-input"
//                 />
//               )}
//             </div>

//             <div className="navbar-search-icon">
//               <Link to='/cart'><img src={assets.cart} alt="cart" /></Link>
//               <div className={getTotalCartAmount() === 0 ? "" : "dot"}></div>
//             </div>

//             {!token ? (
//               <button onClick={() => setShowLogin(true)}>Sign In</button>
//             ) : (
//               <div className='navbar-profile'>
//                 <img src={assets.profile} alt="" />
//                 <ul className="nav-profile-dropdown">
//                   <li onClick={logout}><img src={assets.logout_icon} alt="" /><p>Logout</p></li>
//                 </ul>
//               </div>
//             )}
//           </>
//         )}

//         {isTablet && (
//           <div className="hamburger" onClick={() => setIsMobileMenuOpen(true)}>
//             <span className="bar"></span>
//             <span className="bar"></span>
//             <span className="bar"></span>
//           </div>
//         )}
//       </div>

//       {/* Mobile Menu Overlay */}
//       <div className={`mobile-menu-overlay ${isMobileMenuOpen ? 'open' : ''}`} onClick={() => setIsMobileMenuOpen(false)}>
//         <div className="mobile-menu" onClick={(e) => e.stopPropagation()}>
//           <span className="close-btn" onClick={() => setIsMobileMenuOpen(false)}>×</span>

//           {isMobile && (
//             <div className="mobile-top-items">
//               <div className="navbar-search-wrapper">
//                 <img
//                   src={assets.search_icon}
//                   alt="search"
//                   height="20px"
//                   width="20px"
//                   onClick={() => setShowSearchBar(prev => !prev)}
//                   style={{ cursor: 'pointer' }}
//                 />
//                 {showSearchBar && (
//                   <input
//                     type="text"
//                     placeholder="Search..."
//                     value={searchText}
//                     onChange={(e) => setSearchText(e.target.value)}
//                     className="navbar-search-input"
//                   />
//                 )}
//               </div>

//               <div className="navbar-search-icon">
//                 <Link to='/cart'><img src={assets.cart} alt="cart" /></Link>
//                 <div className={getTotalCartAmount() === 0 ? "" : "dot"}></div>
//               </div>

//               {!token ? (
//                 <button onClick={() => setShowLogin(true)}>Sign In</button>
//               ) : (
//                 <div className='navbar-profile'>
//                   <img src={assets.profile} alt="" />
//                   <ul className="nav-profile-dropdown">
//                     <li onClick={logout}><img src={assets.logout_icon} alt="" /><p>Logout</p></li>
//                   </ul>
//                 </div>
//               )}
//             </div>
//           )}

//           <ul>
//             <Link to='/' onClick={() => handleMenuClick("home")} className={menu === "home" ? "active" : ""}>Home</Link>
//             <a href='#explore-menu' onClick={() => handleMenuClick("menu")} className={menu === "menu" ? "active" : ""}>Menu</a>
//             <a href='#app-download' onClick={() => handleMenuClick("mobile-app")} className={menu === "mobile-app" ? "active" : ""}>Mobile-App</a>
//             <a href='#footer' onClick={() => handleMenuClick("contact-us")} className={menu === "contact-us" ? "active" : ""}>Contact Us</a>
//           </ul>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Navbar;

