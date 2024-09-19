import React from "react";
import banner from "../../Images/banner.png";
import mbBanner from "../../Images/banner-mb.png";

const Banner = () => {
  return (
    <div>
      <img src={window.innerWidth > 700 ? banner : mbBanner} alt="" />
    </div>
  );
};

export default Banner;
