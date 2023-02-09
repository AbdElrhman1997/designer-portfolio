import React, { useState } from "react";
import MainNavigation from "../layout/MainNavigation/MainNavigation";

const Product3 = () => {
  const imgSrc = localStorage.getItem("img");
  const head = localStorage.getItem("head");
  const body = localStorage.getItem("body");

  const handleClick = () => {
    window.history.back();
  };
  return (
    <section
      className="md:flex items-start justify-center py-12 2xl:px-20 md:px-6 px-4"
      id="ProjectDetails"
    >
      <div className="xl:w-2/6 lg:w-2/5 w-80 md:block hidden">
        <img className=" w-full" alt="img of a girl posing" src={imgSrc} />
      </div>
      <div className="md:hidden">
        <img className="w-full" alt="img of a girl posing" src={imgSrc} />
      </div>
      <div className="xl:w-2/5 md:w-1/2 lg:ml-8 md:ml-6 md:mt-0 mt-6">
        <div className="border-b border-gray-200 pb-6">
          <h1
            className="
							lg:text-2xl
							text-xl
							font-semibold
							lg:leading-6
							leading-7
							text-gray-800
							mt-2
						"
          >
            {head}
          </h1>
        </div>

        <div>
          <p className="xl:pr-48 text-base lg:leading-tight leading-normal text-gray-600 mt-7">
            {body}
          </p>
          <p className="text-base leading-4 mt-7 text-gray-600">
            Product Code: 8BN321AF2IF0NYA
          </p>
          <p className="text-base leading-4 mt-4 text-gray-600">
            Length: 13.2 inches
          </p>
          <p className="text-base leading-4 mt-4 text-gray-600">
            Height: 10 inches
          </p>
          <p className="text-base leading-4 mt-4 text-gray-600">
            Depth: 5.1 inches
          </p>
          <p className="md:w-96 text-base leading-normal text-gray-600 mt-4">
            Composition: 100% calf leather, inside: 100% lamb leather
          </p>
        </div>
        <button
          class="inline-flex items-center px-3 py-2 my-6 text-sm font-medium text-center text-white bg-red-700 rounded-lg hover:bg-red-800 focus:ring-4 focus:outline-none focus:ring-red-300 dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-800"
          onClick={handleClick}
        >
          Back
          <svg
            aria-hidden="true"
            class="w-4 h-4 ml-2 -mr-1"
            fill="currentColor"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fill-rule="evenodd"
              d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
              clip-rule="evenodd"
            ></path>
          </svg>
        </button>
      </div>
    </section>
  );
};

export default Product3;
