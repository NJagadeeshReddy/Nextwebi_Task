import React from "react";
import "../styles/_footer.scss";

const Footer = () => {
    return (
        <footer className="footer">
            <div className="footer_main">
                <div className="tag">
                    <h3>Contact</h3>
                    <li><img src="https://www.vhv.rs/dpng/d/73-733170_address-icon-png-transparent-png-download.png" alt="loading" />123/Bangalore/India</li>
                    <li><img src="https://www.freeiconspng.com/thumbs/telephone-icon/mobile-phone-icon-phone-telephone-icon-22.png" alt="" />+91 91 345 67891</li>
                    <li><img src="https://www.iconpacks.net/icons/1/free-mail-icon-142-thumb.png" alt="loading" />contact@gmail.com</li>
                </div>

                <div className="tag">
                    <h3>Get Help</h3>
                    <li className="center">FAQ</li>
                    <li className="center">Optimize</li>
                    <li className="center">Services</li>
                    <li className="center">Payment Options</li>
                </div>

                <div className="tag">
                    <h3>Our Branch</h3>
                    <li className="center">Bangalore</li>
                    <li className="center">Kochi</li>
                    <li className="center">USA</li>
                    <li className="center">Dubai</li>
                </div>

                <div className="tag">
                    <h3>Follw Us</h3>
                    <div className="social_link">
                        <a href="https://www.facebook.com/"><img src="assets/images/facebook.png" alt="..." /> </a>
                        <a href="https://twitter.com/i/flow/login?input_flow_data=%7B%22requested_variant%22%3A%22eyJsYW5nIjoiZW4ifQ%3D%3D%22%7D"><img src="assets/images/twitter.png" alt="..." /></a>
                        <a href="https://www.instagram.com/"><img src="assets/images/instagram.png" alt=".." /></a>
                        <a href="https://in.linkedin.com/"><img src="assets/images/linkin.png" alt=".." /></a>
                    </div>
                </div>

                <div className="tag">
                    <h3>Newsletter</h3>
                    <div className="search_bar">
                        <input type="text" placeholder="You email id here" />
                        <button type="submit">Subscribe</button>
                    </div>
                </div>

            </div>
        </footer>
    )
};

export default Footer;
