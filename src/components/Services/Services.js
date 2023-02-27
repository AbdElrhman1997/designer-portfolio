import React from "react";
import ServicesCard from "../ServicesCard/ServicesCard";
import { TiSocialFacebook } from "react-icons/ti";
import { MdSportsSoccer, MdSwitchVideo } from "react-icons/md";
import { IoLogoPython } from "react-icons/io";
import { HiIdentification } from "react-icons/hi";
import { SiAdobephotoshop } from "react-icons/si";

const Services = () => {
  return (
    <section class="pt-20 pb-12 px-6 lg:pt-[120px] lg:pb-[90px] overflow-hidden">
      <div class="container mx-auto">
        <div class="-mx-4 flex flex-wrap">
          <div class="w-full px-4">
            <div class="mx-auto mb-12 max-w-[510px] text-center lg:mb-20">
              <p className="text-center text-red-600" data-aos="fade-left">
                Our Services
              </p>
              <h2 class="text-dark mb-4 text-3xl font-bold sm:text-4xl md:text-[40px]">
                What We Offer
              </h2>
            </div>
          </div>
        </div>
        <div class="-mx-4 flex flex-wrap">
          <div class="w-full px-4 md:w-1/2 lg:w-1/3 text-center">
            <div class="mb-8 rounded-[20px] bg-white p-10 shadow-md hover:shadow-lg md:px-7 xl:px-10">
              <TiSocialFacebook className="text-red-700 m-auto text-3xl my-2" />
              <h4 class="text-dark mb-3 text-xl font-semibold">
                SOCIAL DESIGNS
              </h4>
              <p class="text-body-color h-64">
                ethical exercise of design, or as militant design next to
                political and social movement, or as an effort added to worldly
                social improvement. Actually, social design is more than a
                practice, is a tendency that can certainly find itself with
                ethical exercise or militant design, but what defines it is the
                knowledge and exercise of design's social impact
              </p>
            </div>
          </div>
          <div class="w-full px-4 md:w-1/2 lg:w-1/3 text-center">
            <div class="mb-8 rounded-[20px] bg-white p-10 shadow-md hover:shadow-lg md:px-7 xl:px-10">
              <MdSportsSoccer className="text-red-700 m-auto text-3xl my-2" />
              <h4 class="text-dark mb-3 text-xl font-semibold">SPORT WEAR</h4>
              <p class="text-body-color h-64">
                A sports jersey is a shirt worn by members of a team to identify
                their affiliation with the team. Jerseys identify their wearers'
                names and/or numbers, generally showing the colors and logo of
                the team. Numbers are frequently used to identify players, since
                uniforms give players a similar appearance.
              </p>
            </div>
          </div>
          <div class="w-full px-4 md:w-1/2 lg:w-1/3 text-center">
            <div class="mb-8 rounded-[20px] bg-white p-10 shadow-md hover:shadow-lg md:px-7 xl:px-10">
              <IoLogoPython className="text-red-700 m-auto text-3xl my-2" />
              <h4 class="text-dark mb-3 text-xl font-semibold">LOGO DESIGN</h4>
              <p class="text-body-color h-64">
                A logo is an easily recognizable graphic symbol that identifies
                a company, a commercial product, or any public or private
                entity. It is one of the ways to distinguish a brand in a
                competitive world, full of graphic elements that try to attract
                our attention every day. A logo is generally a combination of
                typographies, graphics/symbols, and colors. It is a graphic
                element that is part of the visual identity of a brand.
              </p>
            </div>
          </div>
          <div class="w-full px-4 md:w-1/2 lg:w-1/3 text-center">
            <div class="mb-8 rounded-[20px] bg-white p-10 shadow-md hover:shadow-lg md:px-7 xl:px-10">
              <HiIdentification className="text-red-700 m-auto text-3xl my-2" />
              <h4 class="text-dark mb-3 text-xl font-semibold">
                BRAND IDENTITY
              </h4>
              <p class="text-body-color h-64">
                Brand identity is the collection of all elements that a company
                creates to portray the right image to its consumer. Brand
                identity is different from “brand image” and “branding,” even
                though these terms are sometimes treated as interchangeable.
              </p>
            </div>
          </div>
          <div class="w-full px-4 md:w-1/2 lg:w-1/3 text-center">
            <div class="mb-8 rounded-[20px] bg-white p-10 shadow-md hover:shadow-lg md:px-7 xl:px-10">
              <SiAdobephotoshop className="text-red-700 m-auto text-3xl my-2" />
              <h4 class="text-dark mb-3 text-xl font-semibold">MANIPULATION</h4>
              <p class="text-body-color h-64">
                Image Manipulation refers to a process of bringing changes to a
                digitized image for transforming it to a desired image. The
                changes are made possible by resorting to image processing.
                Image manipulation is utilized to create magazine covers and
                albums from photographs. A single photograph may be modified to
                suit the requirement, or several photographs can be combined to
                form a collage
              </p>
            </div>
          </div>
          <div class="w-full px-4 md:w-1/2 lg:w-1/3 text-center">
            <div class="mb-8 rounded-[20px] bg-white p-10 shadow-md hover:shadow-lg md:px-7 xl:px-10">
              <MdSwitchVideo className="text-red-700 m-auto text-3xl my-2" />
              <h4 class="text-dark mb-3 text-xl font-semibold">
                VIDEO PRODUCING&EDITING
              </h4>
              <p class="text-body-color h-64">
                Video editing is the process of manipulating and rearranging
                video shots to create a new work. Editing is usually considered
                to be one part of the post production process — other
                post-production tasks include titling, colour correction, sound
                mixing, etc.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
