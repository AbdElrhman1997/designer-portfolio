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
    <section className="portfolio mb-24" id="Portfolio">
      <p className="text-center text-slate-400" data-aos="fade-left">
        My Reacent Work
      </p>
      <p className="text-center text-4xl text-black mb-4" data-aos="fade-left">
        Portfolio
      </p>
      <div className="flex flex-wrap justify-evenly gap-4">
        <Card
          head="Advertisement for REDBULL"
          body="There is only one can left in the world and there is a struggle over it
          The power of the struggle appears in the destruction that befell the city, and only two people remain, and the conflict between them continues
          The intensity of the conflict illustrates the strong desire to obtain it, which reflects the fame of the product"
          props="cyberpunk style,adobe photoshop"
          img={img1}
          projectLink="https://www.behance.net/gallery/162828715/Advertisement-for-REDBULL"
        />
        <Card
          head="LAMAR PROJECT"
          body="Orange juice with the company's bottle inside a piece of orange and the presence of a splash of orange juice suggests the beauty of the product
          "
          props="Use decent ad fonts
          ,Orange color is common in design for
          ,adobe photoshop"
          img={img2}
          projectLink="https://www.behance.net/gallery/149454383/LAMAR-PROJECT"
        />
        <Card
          head="Nike Air Jordan"
          body="Use scribbled background with the same colors of product expresses a sporty look"
          props="Use suitable ad fonts
          ,adobe photoshop"
          img={img3}
          projectLink="https://www.behance.net/gallery/149626069/Nike-Air-Jordan"
        />
        <Card
          head="CHEVORLET CAMARO"
          body="This iconic sports car combines aerodynamic performance with classic style and will attract attention wherever you go.
          Use uniqe  background with the same colors of product expresses a sporty look 
          The character of the tires in the background gives an elegant look"
          props="Use suitable ad fonts
          ,adobe photoshop"
          img={img4}
          projectLink="https://www.behance.net/gallery/149470265/CHEVORLET-CAMARO"
        />
        <Card
          head="G- CLASS POSTER"
          body="The G-Class is known for its durability and toughness
          organization of colors suggests to eye  a harsh character"
          props="Use suitable ad fonts
          ,adobe photoshop"
          img={img5}
          projectLink="https://www.behance.net/gallery/153550889/G-CLASS-POSTER"
        />
        <Card
          head="VOLKSWAGEN TIGUAN"
          body="Volkswagen Tiguan has a very elegant and distinctive design
          "
          props="Use suitable ad fonts
          ,adobe photoshop"
          img={img6}
          projectLink="https://www.behance.net/gallery/153792655/VOLKSWAGEN-TIGUAN-POSTER"
        />
      </div>
    </section>
  );
}

export default Portfolio;
