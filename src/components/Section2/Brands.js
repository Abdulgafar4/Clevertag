import React from "react";
import "./Brands.css";
import omnienergy from "../../images/brands/omnienergy.svg";
import worthsight from "../../images/brands/worthsight.svg";
import pencildigital from "../../images/brands/pencildigital.png";
import dot from "../../images/brands-dot.svg";

function Brands() {
  const brandLogoList = [worthsight, pencildigital, omnienergy];
  return (
    <div
      className="flex flex-col items-center justify-between mx-auto max-w-[1700px]"
      id="client"
    >
      <div className="flex flex-col items-center w-1/2">
        <h2 className="pb-4 font-bold text-2xl my-3">
          Professional Experience: Companies I've Collaborated With and Where
          I’ve Made an Impact
        </h2>
        <img src={dot} alt="" />
      </div>
      <div className="w-1/2 m-3 flex flex-col md:flex-row items-center justify-between ">
        {brandLogoList.map((logo) => (
          <div
            className="brand-logo-container w-[70%] flex items-center justify-center m-2.5 h-20 cursor-[var(--pointer)]"
            key={logo}
          >
            <img
              className="brand-logo w-[90%] xl:w-[70%] h-16 opacity-100"
              src={logo}
              alt="clients"
            />
          </div>
        ))}
      </div>
    </div>
  );
}

export default Brands;
