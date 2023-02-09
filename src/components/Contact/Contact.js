import React from "react";
import "./Contsct.css";
const Contact = () => {
  return (
    <section class="w-full Contact">
      <div class="w-full flex items-center justify-center my-12">
        <div class="bg-white dark:bg-gray-800 shadow rounded py-16 lg:px-28 px-8">
          <p class="md:text-3xl text-xl font-bold leading-7 text-center text-gray-700 dark:text-white">
            Let’s chat and get a quote!
          </p>
          <div class="md:flex items-center mt-12">
            <div class="md:w-72 flex flex-col">
              <label class="text-base font-semibold leading-none text-gray-800 dark:text-white">
                Name
              </label>
              <input
                tabindex="0"
                arial-label="Please input name"
                type="name"
                class="text-base leading-none text-gray-900 p-3 focus:oultine-none focus:border-red-700 mt-4 bg-gray-100 border rounded border-gray-200 placeholder-gray-100"
                placeholder="Please input  name"
              />
            </div>
            <div class="md:w-72 flex flex-col md:ml-6 md:mt-0 mt-4">
              <label class="text-base font-semibold leading-none text-gray-800 dark:text-white">
                Email Address
              </label>
              <input
                tabindex="0"
                arial-label="Please input email address"
                type="name"
                class="text-base leading-none text-gray-900 p-3 focus:oultine-none focus:border-red-700 mt-4 bg-gray-100 border rounded border-gray-200 placeholder-gray-100"
                placeholder="Please input email address"
              />
            </div>
          </div>
          <div>
            <div class="w-full flex flex-col mt-8">
              <label class="text-base font-semibold leading-none text-gray-800 dark:text-white">
                Message
              </label>
              <textarea
                tabindex="0"
                aria-label="leave a message"
                role="textbox"
                type="name"
                class="h-36 text-base leading-none text-gray-900 p-3 focus:oultine-none focus:border-indigo-700 mt-4 bg-gray-100 border rounded border-gray-200 placeholder-gray-100 resize-none"
              ></textarea>
            </div>
          </div>
          <p class="text-xs leading-3 text-gray-600 dark:text-gray-200 mt-4">
            By clicking submit you agree to our terms of service, privacy policy
            and how we use data as stated
          </p>
          <div class="flex items-center justify-center w-full">
            <button class="mt-9 text-base font-semibold leading-none text-white py-4 px-10 bg-red-700 rounded hover:bg-red-600 focus:ring-2 focus:ring-offset-2 focus:ring-red-700 focus:outline-none">
              SUBMIT
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
