import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import { FaLocationArrow } from "react-icons/fa";

// Import Swiper styles
import "swiper/css";
import "swiper/css/scrollbar";

import "./TopCustomer.css";

// import required modules
import { Scrollbar } from "swiper";

const TopCustomer = () => {
  return (
    <div className="container mx-auto mt-20">
      <div className="text-center">
        <h1 className="text-5xl bold">Some of our top customer's reviews!</h1>
        <small>Swipe left to see more.</small>
      </div>
      <Swiper
        scrollbar={{
          hide: true,
        }}
        modules={[Scrollbar]}
        className="mySwiper"
      >
        <SwiperSlide>
          <div className="space-y-10">
            <div className=" flex justify-center">
              <img
                style={{ width: "200px" }}
                className="rounded-full"
                src="https://i.ibb.co/FVQg4s2/5403292396-0804de9bcf-b.jpg"
                alt=""
              />
            </div>
            <div className="leading-relaxed">
              <h1 className="text-center">
                ToyVerse is a dream come true for action figure enthusiasts like
                me! The website has an incredible selection of action figures
                from various popular franchises. The user interface is smooth
                and intuitive, making it easy to browse through the vast
                collection. I was impressed with the quality of the figures I
                ordered—they were well-packaged and arrived in perfect
                condition. ToyVerse is definitely my go-to destination for all
                things action figures!
              </h1>
              <p className="mt-3 font-semibold text-center text-indigo-400 text-sm">
                {" "}
                Ella, USA
              </p>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="space-y-10">
            <div className=" flex justify-center">
              <img
                style={{ width: "200px" }}
                className="rounded-full"
                src="https://i.ibb.co/PskXFvN/photo-1507003211169-0a1dd7228f2d.jpg"
                alt=""
              />
            </div>
            <div className="leading-relaxed">
              <h1 className="text-center">
                I recently discovered ToyVerse, and I'm blown away by the range
                of action figures they offer. Whether you're into superheroes,
                movie characters, or video game icons, this website has it all.
                The search function is robust and helps me quickly find the
                specific figures I'm looking for. The checkout process is
                seamless, and the shipping is prompt. ToyVerse has become my
                favorite place to shop for action figures online!
              </h1>
              <p className="mt-3 font-semibold text-center text-indigo-400 text-sm">
                {" "}
                Aurthur, Japan
              </p>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="space-y-10">
            <div className=" flex justify-center">
              <img
                style={{ width: "200px" }}
                className="rounded-full"
                src="https://i.ibb.co/qjdH1Nz/photo-1525134479668-1bee5c7c6845.jpg"
                alt=""
              />
            </div>
            <div className="leading-relaxed">
              <h1 className="text-center">
                As a collector, I value authenticity and rarity in action
                figures, and ToyVerse has exceeded my expectations. Their
                inventory includes exclusive and limited-edition items that are
                hard to find elsewhere. The website provides detailed
                descriptions and high-resolution images, giving me confidence in
                my purchases. The packaging of the figures is top-notch,
                ensuring they arrive in mint condition. ToyVerse has become an
                essential part of my action figure collection journey!
              </h1>
              <p className="mt-3 font-semibold text-center text-indigo-400 text-sm">
                {" "}
                Ada, London
              </p>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="space-y-10">
            <div className=" flex justify-center">
              <img
                style={{ width: "200px" }}
                className="rounded-full"
                src="https://i.ibb.co/M9PNQgR/photo-1530268729831-4b0b9e170218.jpg"
                alt=""
              />
            </div>
            <div className="leading-relaxed">
              <h1 className="text-center">
                ToyVerse is the ultimate destination for action figure
                enthusiasts of all ages. I recently purchased a gift for my
                nephew, and the entire experience was fantastic. The website is
                visually appealing and easy to navigate. I appreciate that they
                have a wide range of figures suitable for kids as well. The
                customer service team was friendly and responsive when I had a
                question about my order. I highly recommend ToyVerse for anyone
                looking to find the perfect action figure!
              </h1>
              <p className="mt-3 font-semibold text-center text-indigo-400 text-sm">
                {" "}
                Paul, Germany
              </p>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default TopCustomer;
