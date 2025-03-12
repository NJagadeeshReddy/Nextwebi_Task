import React, { useRef } from "react";
import { data } from "../utils/data";
import "../styles/_testimonials.scss";

const Testimonials = () => {
  const scrollRef = useRef(null);

  const scroll = (direction) => {
    if (scrollRef.current) {
      const { scrollLeft, clientWidth } = scrollRef.current;
      const scrollAmount = clientWidth * 0.8;

      if (direction === "left") {
        scrollRef.current.scrollTo({ left: scrollLeft - scrollAmount, behavior: "smooth" });
      } else {
        scrollRef.current.scrollTo({ left: scrollLeft + scrollAmount, behavior: "smooth" });
      }
    }
  };

  return (
    <section id="Testimonials" className="testimonials">

      <h1>Testimonials</h1>
      <div className="testimonials-container">
        <button className="scroll-btn left" onClick={() => scroll("left")}>◀</button>
        <div className="testimonials-wrapper" ref={scrollRef}>
          {data.map((item, index) => (
            <div key={index} className="testimonial-card">
              <img src={`/${item.imageUrl}`} alt={item.name} className="testimonial-img" />
              <h3>{item.name}</h3>
              <p className="work">{item.work}</p>
              <p className="desc">{item.desc}</p>
            </div>
          ))}
        </div>
        <button className="scroll-btn right" onClick={() => scroll("right")}>▶</button>
      </div>

    </section>
  );
};

export default Testimonials;

