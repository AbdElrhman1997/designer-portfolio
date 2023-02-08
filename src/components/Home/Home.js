import React from "react";
import HomeImg from "../../assets/Images/imgHome.png";
import "./Home.css";

function Home() {
  return (
    <section className="home py-20" id="#">
      <div className=" lg:grid md:grid grid-cols-12 h-full">
        <div className="lg:flex md:flex lg:col-span-4 md:col-span-4 col-span-12  justify-center lg:justify-end items-center">
          <img src={HomeImg} className="imgHome h-96 m-auto" />
        </div>
        <div className="flex lg:col-span-4 md:col-span-4 flex-col justify-center items-center h-full gap-y-6 lg:gap-y-0 lg:text-left lg:items-start">
          <p className=" ml-8 font-bold text-7xl ">
            D<span className="text-red-600">e</span>sign
          </p>
          <p className=" ml-8 font-bold text-3xl px-2 py-1 leading-relaxed">
            <p className="bg-black w-fit text-white px-2 my-2">Is A Formal</p>
            <p className="bg-black w-fit text-white px-2 my-2">Respones</p>
            <p className="bg-black w-fit text-white px-2">To A Strategic</p>
          </p>
          <p className=" lg:ml-10 font-bold text-4xl bg-red-600 px-2 py-1 text-white">
            Question
          </p>
        </div>
      </div>
    </section>
  );
}

export default Home;
