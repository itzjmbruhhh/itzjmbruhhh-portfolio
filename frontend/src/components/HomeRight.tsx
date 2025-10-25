import React from "react";
import homeImage from "../assets/images/home.jpg";

function HomeRight() {
  return (
    <div className="home-right">
      <div className="image-container box-shadow hover my-0.5">
        <div className="p-5">
            <img src={homeImage} alt="" className="w-auto h-[475px]" />
        </div>
      </div>
    </div>
  );
}

export default HomeRight;
