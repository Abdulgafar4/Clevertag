import React from "react";
import "./Brands.css";
import omnienergy from "../../images/brands/omnienergy.svg";
import worthsight from "../../images/brands/worthsight.svg";
import pencildigital from "../../images/brands/pencildigital.png";
import dot from "../../images/brands-dot.svg";

function Brands() {
  const brandLogoList = [worthsight, pencildigital, omnienergy];
  return (
    <div className="brands-container" id="client">
      <div className="brand-heading">
        <h2>
          Professional Experience: Companies I've Collaborated With and Where
          I’ve Made an Impact
        </h2>
        <img src={dot} alt="" />
      </div>
      <div className="brand-logo-list">
        {brandLogoList.map((logo) => (
          <div className="brand-logo-container" key={logo}>
            <img className="brand-logo" src={logo} alt="clients" />
          </div>
        ))}
      </div>
    </div>
  );
}

export default Brands;
