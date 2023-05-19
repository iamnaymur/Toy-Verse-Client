import React from "react";
// import bannerImage from "../../../assets/mb_april-toys-action-figures_20230410_2x.jpg";

const Banner = () => {
  return (
    // <div>
    //   <div className="text-center mt-10 relative">
    //     <div>
    //       <p className="text-4xl ">
    //         Welcome to{" "}
    //         <span className="text-indigo-500 font-semibold">
    //           Toy<span className="text-pink-300">Verse</span>
    //         </span>
    //       </p>
    //     </div>
    //     <div>
    //       <div>
    //         <img
    //           className=" md:h-2/4 md:w-5/6 mx-auto mt-5 rounded-lg "
    //           src="https://cdn.wallpapersafari.com/27/4/nriLaN.jpg"
    //           alt=""
    //         />
    //       </div>
    //       <div className="md:absolute md:h-[890px] left-40 top-16 bg-gradient-to-r from-black">
    //         <p className="md:text-white font-semibold text-2xl ">
    //           <span className="text-indigo-500 text-3xl bold">
    //             Toy<span className="text-pink-300">Verse</span>
    //           </span>
    //           . <br /> Your ultimate destination for all things fun and
    //           imaginative! <br /> Step into a world where play knows no <br />
    //           bounds and where every child's dream becomes a reality. <br /> At
    //           ToyVerse, we bring you a carefully curated collection of toys that
    //           inspire creativity, <br /> spark joy, and ignite the imagination.
    //         </p>
    //         <div className="mt-10">
    //           <button className="btn btn-wide bg-indigo-500 border-none me-2">
    //             Get started
    //           </button>

    //           <div className="text-center mt-10">
    //             <p className="text-2xl  text-white">
    //               You can also find us here.
    //             </p>
    //             <div className="flex justify-center gap-4 mt-2">
    //               <img
    //                 className="w-16"
    //                 src="https://i.ibb.co/Bn8ycB7/Daraz-Logo.png"
    //                 alt=""
    //               />
    //               <img
    //                 className="w-16"
    //                 src="https://i.ibb.co/qkVSnsY/Amazon-logo-svg.png"
    //                 alt=""
    //               />
    //               <img
    //                 className="w-16"
    //                 src="https://i.ibb.co/4NFCDH3/Flipkart-logo.png"
    //                 alt=""
    //               />
    //             </div>
    //           </div>
    //         </div>
    //       </div>
    //     </div>
    //   </div>
    // </div>
    <div className="relative container flex justify-center mx-auto">
      <div className=" mx-auto bg-cover bg-center">
        <img
          className="w-screen "
          src="https://cdn.wallpapersafari.com/27/4/nriLaN.jpg"
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
