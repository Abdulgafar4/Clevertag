import React from "react";
import "./Services.css";
import { FaReact } from "react-icons/fa";
import { TbBrandNextjs } from "react-icons/tb";
import {
  SiAntdesign,
  SiTailwindcss,
  SiExpo,
  SiReactquery,
} from "react-icons/si";

function Services() {
  const serviceList = [
    {
      icon: <TbBrandNextjs />,
      title: "NextJS",
    },
    {
      icon: <FaReact />,
      title: "React/React Native",
    },

    {
      icon: <SiReactquery />,
      title: "React Query",
    },
    {
      icon: <SiExpo />,
      title: "Expo Native",
    },
    {
      icon: <SiAntdesign />,
      title: "UI Design",
    },
    {
      icon: <SiTailwindcss />,
      title: "Tailwind CSS",
    },
  ];

  return (
    <div className="service-container" id="service">
      <h2>My Frontend Toolkit</h2>
      <div className="service-cards-container">
        {serviceList.map(({ icon, title }) => (
          <div className="service-card">
            <div className="service-card-icon">{icon}</div>
            <h3>{title}</h3>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Services;
