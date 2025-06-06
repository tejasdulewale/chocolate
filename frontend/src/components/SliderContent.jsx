import React from "react";
import "../css/slidercontainer.css";
const SliderContent = ({title,subtitle,image}) => {
  return (
    <div className="slidercontainer">
      <div className="slidercontent">
        <h1>{title}</h1>
        <p>
        {subtitle}
        </p>
      </div>
      <div className="sliderimage">
        <img
          src={image}
          alt={title}
        />
      </div>
    </div>
  );
};

export default SliderContent;
