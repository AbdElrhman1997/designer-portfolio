import React from "react";
import img1 from "../../assets/Images/portfolio1.jpg";
import img2 from "../../assets/Images/portfolio2.jpg";
import img3 from "../../assets/Images/portfolio3.jpg";
import img4 from "../../assets/Images/portfolio4.jpg";
import img5 from "../../assets/Images/portfolio5.jpg";
import img6 from "../../assets/Images/portfolio6.jpg";
import Card from "../card/card";

import "./Portfolio.css";

function Portfolio() {
  return (
    <section className="portfolio my-12" id="Portfolio">
      <p className="text-center text-slate-400" data-aos="fade-left">
        My Reacent Work
      </p>
      <p className="text-center text-4xl text-black mb-4" data-aos="fade-left">
        Portfolio
      </p>
      <div className="flex flex-wrap justify-evenly gap-4">
        <Card head="anything" body="" img={img1} />
        <Card head="anything" body="" img={img2} />
        <Card head="anything" body="" img={img3} />
        <Card head="anything" body="" img={img4} />
        <Card head="anything" body="" img={img5} />
        <Card head="anything" body="" img={img6} />
      </div>
    </section>
  );
}

export default Portfolio;
