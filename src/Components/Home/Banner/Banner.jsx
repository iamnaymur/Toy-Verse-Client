import React from "react";
// import bannerImage from "../../../assets/mb_april-toys-action-figures_20230410_2x.jpg";

const Banner = () => {
  return (
    <div className="relative container flex justify-center mx-auto">
      <div className=" mx-auto bg-cover bg-center">
        <img
          className="w-screen "
          src="https://i.ibb.co/qJ6N1py/nriLaN.webp"
          alt=""
        />
        <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black">
          <div className="absolute inset-0 flex flex-col items-center justify-center">
            <h1 className="md:text-5xl text-white font-bold text-center px-4 mb-5">
              Welcome to
              <span className="text-indigo-500  bold">
                Toy<span className="text-yellow-500">Verse</span>
              </span>
            </h1>
            <p className=" md:text-lg sm:text-sm text-transparent bg-gradient-to-r from-gray-200 to-green-200 bg-clip-text font-bold text-center px-4">
              Your ultimate destination for all things fun and imaginative! Step
              into a world where play knows no bounds and where every child's
              dream becomes a reality. At ToyVerse, we bring you a carefully
              curated collection of toys that inspire creativity,spark joy, and
              ignite the imagination.
            </p>
            <div className="block">
              <h1 className="text-white text-xl mt-10">
                You can also find us here.
              </h1>
              <div className="flex justify-center gap-4 mt-2">
                <img
                  className="w-16"
                  src="https://i.ibb.co/Bn8ycB7/Daraz-Logo.png"
                  alt=""
                />
                <img
                  className="w-20"
                  src="https://i.ibb.co/cFssnnK/download-removebg-preview.png"
                  alt=""
                />
                <img
                  className="w-16"
                  src="https://i.ibb.co/4NFCDH3/Flipkart-logo.png"
                  alt=""
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
