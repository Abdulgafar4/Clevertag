import "./Navbar.css";
import { FaLinkedinIn, FaGithub } from "react-icons/fa";

export const socialIcons = [
  <a
    href="https://www.linkedin.com/in/clevertag/"
    target="_blank"
    rel="noreferrer"
    className="nav-icon"
  >
    <FaLinkedinIn />
  </a>,
  <a
    href="https://github.com/Abdulgafar4"
    target="_blank"
    rel="noreferrer"
    className="nav-icon"
  >
    <FaGithub />
  </a>,
];

export const navItems = [
  {
    name: "Home",
    id: "#",
  },
  {
    name: "Clients",
    id: "#client",
  },
  {
    name: "Services",
    id: "#service",
  },
  {
    name: "Projects",
    id: "#portfolio",
  },
  {
    name: "Testimonials",
    id: "#testmonial",
  },
  {
    name: "Message Me",
    id: "#contact",
  },
];
