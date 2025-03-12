import React, { useState } from "react";

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [showLogin, setShowLogin] = useState(false);
  const [showSignUp, setShowSignUp] = useState(false);

  return (
    <section id="Nwebi">
    <header  className="header">
      <div className="logo"><h2>N<span><a href="#Nwebi">WEBI</a></span></h2></div>
      <nav>
        <ul>
          <li><a href="#Clients">Clients</a></li>
          <li><a href="#Services">Services</a></li>
          <li><a href="#WhyChooseUs">WhyChooseUs</a></li>
          <li><a href="#Testimonials">Testimonials</a></li>
        </ul>
      </nav>

      {/* Dropdown for Login/Signup */}
      <div className="auth">
        <button className="auth-btn" onClick={() => setMenuOpen(!menuOpen)}>
          {/* Account ▼ */}
          <img src="https://freesvg.org/img/abstract-user-flat-4.png" alt="login" />▼ 
        </button>
        {menuOpen && (
          <div className="dropdown">
            <button onClick={() => setShowLogin(true)}>Login</button>
            <button onClick={() => setShowSignUp(true)}>Signup</button>
          </div>
        )}
      </div>

      {/* Login Popup */}
      {showLogin && (
        <div className="popup">
          <div className="popup-content">
            <h2>Login</h2>
            <input type="text" placeholder="Email" />
            <input type="password" placeholder="Password" />
            <button className="login-btn">Login</button>
            <button className="close-btn" onClick={() => setShowLogin(false)}>Close</button>
          </div>
        </div>
      )}
       {/* Signup Popup */}
       {showSignUp && (
        <div className="popup">
          <div className="popup-content">
            <h2>SignUp</h2>
            <input type="text" placeholder="Name" />
            <input type="text" placeholder="Email" />
            <input type="password" placeholder="CreatePassword" />
            <button className="login-btn">Sign Up</button>
            <button className="close-btn" onClick={() => setShowSignUp(false)}>Close</button>
          </div>
        </div>
      )}
    </header>
     <section className="homeimg">
     <img src="assets/images/homeimg.jpg" alt="" />
   </section>
 </section>
  );
};

export default Header;
