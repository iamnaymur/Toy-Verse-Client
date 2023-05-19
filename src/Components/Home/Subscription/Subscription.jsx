import React from "react";

const Subscription = () => {
  return (
    <div className="bg-pink-200 flex justify-evenly">
      <div>
              <img
          src="https://i.ibb.co/R4KDdmf/Screenshot-2023-05-19-211904-removebg-preview.png"
          alt=""
        />
      </div>
      <div className="space-y-10 flex flex-col justify-center">
        <p className="text-6xl font-semibold">Subscribe for offers!</p>
        <p className="text-lg">ToyVerse signup.</p>

        <div class="relative border-b-2 border-black  shadow-sm">
          <input
            type="email"
            class="appearance-none relative block w-full px-3 py-2  bg-transparent"
            placeholder="example@gmail.com"
          />
        </div>
        <div className="form-control">
          <label className="label cursor-pointer">
            <span className="label-text">
              I agree to all the terms and conditions and I have read the whole documentation.
            </span>
            
            <input type="checkbox" checked className="checkbox" />
            
          </label>
        </div>
      </div>
    </div>
  );
};

export default Subscription;
