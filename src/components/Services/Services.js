import React from "react";
import ServicesCard from "../ServicesCard/ServicesCard";

const Services = () => {
  return (
    <section class="pt-20 pb-12 lg:pt-[120px] lg:pb-[90px]">
      <div class="container mx-auto">
        <div class="-mx-4 flex flex-wrap">
          <div class="w-full px-4">
            <div class="mx-auto mb-12 max-w-[510px] text-center lg:mb-20">
              <span class="text-primary mb-2 block text-lg font-semibold">
                Our Services
              </span>
              <h2 class="text-dark mb-4 text-3xl font-bold sm:text-4xl md:text-[40px]">
                What We Offer
              </h2>
              <p class="text-body-color text-base">
                There are many variations of passages of Lorem Ipsum available
                but the majority have suffered alteration in some form.
              </p>
            </div>
          </div>
        </div>
        <div class="-mx-4 flex flex-wrap">
          <ServicesCard />
          <ServicesCard />
          <ServicesCard />
          <ServicesCard />
          <ServicesCard />
          <ServicesCard />
        </div>
      </div>
    </section>
  );
};

export default Services;
