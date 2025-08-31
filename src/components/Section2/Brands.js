import React from "react";
import "./Brands.css";
import omnienergy from "../../images/brands/omnienergy.svg";
import worthsight from "../../images/brands/worthsight.svg";
import pencildigital from "../../images/brands/pencildigital.png";
function Brands() {
  const brandLogoList = [worthsight, pencildigital, omnienergy];
  return (
    <div className="py-12 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-center items-center space-x-8 md:space-x-16">
          {brandLogoList.map((logo) => (
            <div
              className="brand-logo-container"
              key={logo}
            >
              <img
                className="brand-logo h-12"
                src={logo}
                alt="clients"
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Brands;
