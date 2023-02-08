import React from "react";
import { TiSocialFacebook } from "react-icons/ti";

const ServicesCard = () => {
  return (
    <div class="w-full px-4 md:w-1/2 lg:w-1/3 text-center">
      <div class="mb-8 rounded-[20px] bg-white p-10 shadow-md hover:shadow-lg md:px-7 xl:px-10">
        <TiSocialFacebook className="text-red-700 m-auto text-3xl my-2" />
        <h4 class="text-dark mb-3 text-xl font-semibold">Regular Updates</h4>
        <p class="text-body-color">
          We dejoy working with discerning clients, people for whom qualuty,
          service, integrity & aesthetics.
        </p>
      </div>
    </div>
  );
};

export default ServicesCard;
