import React from "react";
// import "../Bootstrap/bootstrap.min.css";
import { BsFillPersonFill } from "react-icons/bs";
import { AiFillProject } from "react-icons/ai";
import { MdStars } from "react-icons/md";
import aboutImg from "../../assets/Images/about.png";
import "./About.css";

function About() {
  return (
    <section className="about text-center m-auto text-black" id="About">
      <p className="text-center mt-8 text-slate-400" data-aos="fade-left">
        My Reacent Work
      </p>
      <p className=" text-4xl mb-12 text-black" data-aos="fade-right">
        About Me
      </p>
      <div className="grid grid-cols-12 m-8">
        <div
          className="col-span-5 image"
          data-aos="fade-right"
          data-aos-delay="300"
        >
          <img src={aboutImg} className="aboutImg" />
        </div>
        <div
          className="lg:col-span-7 col-span-12 m-auto text-black"
          data-aos="fade-left"
          data-aos-delay="100"
        >
          <div className="lg:flex md:flex sm:flex flex-wrap justify-between text-black w-full m-auto">
            <div className=" mt-8 bg-red-700 btn btn-primary">
              <MdStars className="m-auto text-lg my-2" />
              <p>Experience</p>
              <p className="">3+ Year Working</p>
            </div>
            <div className=" mt-8 bg-red-700 btn btn-primary">
              <BsFillPersonFill className="m-auto text-lg my-2" />
              <p>Clients</p>
              <p className="">30+ WorldWide</p>
            </div>
            <div className=" mt-8 bg-red-700 btn btn-primary">
              <AiFillProject className="m-auto text-lg my-2" />
              <p>Projects</p>
              <p className="">50+ Completed</p>
            </div>
          </div>
          <p className="col-span-12 mt-5 space">
            I am highly accomplished creative leader with three years of
            experience in strategic branding, graphic design as a VP of Design
            and Executive Creative designer for some of the world's most
            successful global retailers and consumer products companies. With a
            unique blend of expertise gained from both the client and agency
            perspectives
          </p>
          <div className="col-span-12">
            <button class="bg-transparent hover:bg-red-700 text-red-700 font-bold hover:text-white py-2 px-4 border border-red-700 hover:border-transparent rounded">
              <a href="#Contact">Let`s Talk</a>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}

// AiFillProject
// BsPersonCircle

export default About;
