import React from "react";
import "../styles/_whychooseus.scss";
import { wcudata } from "../utils/wcudata";

const WhyChooseUs = () => {
  
  return (
    <section id="WhyChooseUs" className="why-choose-us">
      <h1>Why Choose Us</h1>
      <h4>We are Professional and
        Experience Team</h4>
      <div className="reasons">
        {wcudata.map((item, index) => {
          const { image, title, content } = item
          return (
            <div className="sub-r">
              <img src={image} alt="loading" />
              <hr />
              <h3>{title}</h3>
              <p>{content}</p>
            </div>
          )
        })
        }
      </div>
    </section>
  );
};

export default WhyChooseUs;
