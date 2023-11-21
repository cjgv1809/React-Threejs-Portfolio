import React from "react";
import { Link } from "react-router-dom";
import arrow from "../assets/icons/arrow.svg";

const InfoBox = ({ text, link, btnText }) => (
  <div className="info-box">
    <p className="font-medium sm:text-xl text-center">{text}</p>
    <Link className="neo-brutalism-white neo-btn" to={link}>
      {btnText}
      <img src={arrow} alt="" className="w-4 h-4 object-contain" />
    </Link>
  </div>
);

const renderInfo = {
  1: (
    <h1 className="sm:text-xl sm:leading-snug text-center neo-brutalism-blue py-4 px-8 text-white mx-5">
      Hi, I am <span className="font-semibold">Carlos</span>
      <br />A <span className="font-semibold">Frontend Developer</span> from
      Argentina
    </h1>
  ),
  2: <InfoBox text="About" link="/about" btnText="About" />,
  3: <InfoBox text="Projects" link="/projects" btnText="Projects" />,
  4: <InfoBox text="Contact" link="/contact" btnText="Contact" />,
};

function HomeInfo({ currentStage }) {
  return renderInfo[currentStage] || null;
}

export default HomeInfo;
