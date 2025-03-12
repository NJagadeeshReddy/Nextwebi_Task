import React from "react";
import "../styles/_services.scss";
import { datas } from "../utils/datas"; 

const Services = () => {

  return (
    <section id="Services" className="services">
      <h1>Our Services</h1>
      <h4>Comprehensive Website Services to Ignite Your Online Success. Empower Your Business with Powerful Online Services from our Website.</h4>
      <div className="sub-s1">
        {datas.map((item, index)=>{
         const {imageurl, title, mainimageUrl }= item
          return(
            <div key={index} className="sub-s2">
            <img src={imageurl} alt="loading" />
            <h3>{title}</h3>
            <img src={mainimageUrl} alt="loading" />
          </div>
          )
        })}
      </div>
    </section>
  );
};

export default Services;
