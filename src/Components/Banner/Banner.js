import React from "react";
import banner from "../../Images/Website Banner New (1)-02.jpg";
import mbBanner from "../../Images/banner-mb.png";
import bottle from "../../Images/bottle.glb";

const Banner = () => {
  return (
    <div className="relative">
      <img src={window.innerWidth > 700 ? banner : banner} alt="" />
      <div className="sm:w-[50%] mx-auto absolute top-[30%] left-[50%]">
        {/* <model-viewer
          src={bottle}
          alt="Pamper Me Hair Oil Bottle"
          auto-rotate
          camera-controls
          style={{ width: "100%", height: "500px" }}
          background-color="#FFF"
        /> */}
      </div>
    </div>
  );
};

export default Banner;
