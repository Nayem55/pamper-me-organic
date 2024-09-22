import React, { useEffect } from "react";
import { Outlet, useLocation } from "react-router-dom";
import Header from "../Components/Header/Header";
import Footer from "../Components/Footer/Footer";




const Main = () => {

  const {pathname} = useLocation() 

  useEffect(() => {
    window.scrollTo(0,0);
  },[pathname])


  return (
    <div className="bg-[#FAF9F6]">
      {/* <Header></Header> */}
      <Outlet></Outlet>
      <Footer></Footer>
    </div>
  );
};

export default Main;