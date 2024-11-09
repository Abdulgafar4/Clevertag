import React from "react";
import "./testimonial.css";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";
import Akata from "../../../src/images/testimonies/Akata.jpeg";
import Bamtak from "../../../src/images/testimonies/Bamtak.jpeg";
import Herysoft from "../../../src/images/testimonies/Herysoft.png";
import moreshud from "../../../src/images/testimonies/moreshud.jpeg";
import olumoh from "../../../src/images/testimonies/olumoh.png";

const testimonials = [
  {
    image: Bamtak,
    name: "Bamtak",
    text: "Collaborating with Abdulgafar was a game-changer. His creativity and attention to detail brought my product ideas to life in a way that exceeded all expectations. I look forward to working with him again.",
    linkedin: "https://www.linkedin.com/in/bamtak/",
    jobTitle: "Senior Software Engineer",
    company: "Clipboard Health",
  },
  {
    image: Akata,
    name: "Arafat Akata",
    text: "Working alongside Abdulgafar was an incredible experience. The quality of work he produced surpassed our goals and resulted in a stunning final product. He is my go-to for any web development needs.",
    linkedin: "https://www.linkedin.com/in/arafat-akata/",
    jobTitle: "Software Developer | Project Management",
    company: "DeepIntel Limited",
  },
  {
    image: moreshud,
    name: "Olawale Moshood",
    text: "Abdulgafar's customer service and professionalism stood out during our collaboration. He consistently went above and beyond to ensure our web development project met all requirements. I highly recommend him.",
    linkedin: "https://www.linkedin.com/in/moshood-yekini-67b6431aa/",
    jobTitle: "Software Engineer | Data Scientist",
    company: "DeepIntel Limited",
  },
  {
    image: Herysoft,
    name: "Abiodun Adam",
    text: "The experience of collaborating with Abdulgafar was exceptional. His software development expertise turned my complex software idea into a user-friendly, reliable program. I can't recommend him enough.",
    linkedin: "https://www.linkedin.com/in/abiodunadam/",
    jobTitle: "HR Recruiter | Fullstack Developer",
    company: "HerbeySoft Inc",
  },
  {
    image: olumoh,
    name: "Tunde Abdulkareem",
    text: "Abdulgafar displayed extraordinary creativity and innovation while we worked together. He brought my product ideas to life beyond what I imagined. For any product design needs, he is the person to contact.",
    linkedin: "https://www.linkedin.com/in/abdulkareemolumoh/",
    jobTitle: "Software Engineer",
    company: "DeepIntel Ltd",
  },
];

export default function Testimonial() {
  return (
    <div id="testmonial" className="carousel-root">
      <h3>Those I've Collaborated With</h3>
      <Carousel
        infiniteLoop={true}
        showThumbs={false}
        showStatus={false}
        autoPlay={true}
        interval={5000}
      >
        {testimonials.map((testimonial, index) => (
          <div key={index} id="testimonial" className="myCarousel-root">
            <div className="myCarousel">
              <img
                src={testimonial.image}
                alt={`${testimonial.name}_testimonial`}
              />
              <h3>{testimonial.name}</h3>
              <p className="job-info">{`${testimonial.jobTitle} at ${testimonial.company}`}</p>
              <p>{testimonial.text}</p>
              <a
                href={testimonial.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="linkedin-link"
              >
                Get in Touch for Confirmation
              </a>
            </div>
          </div>
        ))}
      </Carousel>
    </div>
  );
}
