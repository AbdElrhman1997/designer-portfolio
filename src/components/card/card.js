import React from "react";
import { AiFillBehanceCircle } from "react-icons/ai";
import "./card.css";

const card = ({ head, img, body, projectLink, props }) => {
  const handleClick = () => {
    localStorage.clear();
    localStorage.setItem("head", head);
    localStorage.setItem("body", body);
    localStorage.setItem("img", img);
    localStorage.setItem("props", props);
  };
  return (
    <div class="max-w-sm m-2 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 w-full overflow-hidden">
      <div className="project-img">
        <img
          onClick={handleClick}
          class="rounded-t-lg h-48 portfolioImg"
          src={img}
          alt="project-img"
        />
        <a className="project-txtx" href={projectLink} target="_blank">
          <AiFillBehanceCircle className="text-6xl font-bold text-white m-auto cursor-pointer hover:text-slate-200" />
        </a>
      </div>
      <div class="p-5">
        <a onClick={handleClick} href="/ProjectDetails">
          <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
            {head}
          </h5>
        </a>
        <p class="proj-body mb-4 font-normal text-gray-700 dark:text-gray-400">
          {body}
        </p>
        <a
          href="/ProjectDetails"
          class="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-red-700 rounded-lg hover:bg-red-800 focus:ring-4 focus:outline-none focus:ring-red-300 dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-800"
          onClick={handleClick}
        >
          Read more
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
        </a>
      </div>
    </div>
  );
};

export default card;
