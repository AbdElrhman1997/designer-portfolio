import React from "react";
import HomeImg from "../../assets/Images/imgHome.png";
import "./Home.css";

function Home() {
  return (
    <section className="home">
      <div className=" grid grid-cols-12 h-full">
        <div className=" lg:col-span-4 md:col-span-4 col-span-12 flex justify-center lg:justify-end items-center">
          <img src={HomeImg} className="imgHome h-96" />
        </div>
        <div className="lg:flex lg:col-span-4 md:flex md:col-span-4 col-span-7 hidden  flex-col justify-center items-start text-left">
          <p className=" ml-8 font-bold text-7xl ">
            D<span className="text-red-600">e</span>sign
          </p>
          <p className=" ml-8 font-bold text-3xl px-2 py-1 leading-relaxed">
            <p className="bg-black w-fit text-white px-2 my-2">Is A Formal</p>
            <p className="bg-black w-fit text-white px-2 my-2">Respones</p>
            <p className="bg-black w-fit text-white px-2">To A Strategic</p>
          </p>
          <p className=" ml-10 font-bold text-4xl bg-red-600 px-2 py-1 text-white">
            Question
          </p>
        </div>
      </div>
    </section>
  );
}

export default Home;
