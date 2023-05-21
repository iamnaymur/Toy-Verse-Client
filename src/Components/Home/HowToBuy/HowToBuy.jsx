import React from "react";


const HowToBuy = () => {
  return (
    <div className="mt-20">
      <h2 className="bold text-center text-5xl">How to Buy?</h2>
      <div
        data-aos="zoom-in"
        className="container mx-auto mt-10 grid gap-4 grid-cols-1 md:grid-cols-3"
      >
        <div>
          <div className="flex justify-center">
            <img
              src="https://i.ibb.co/W3wQWzW/15-157975-cartoon-iron-man-png-iron-man-chibi-png-removebg-preview-2.png"
              alt="Iron Man Toy"
              className="w-96 h-96"
            />
          </div>
          <div className="text-center">
            <h3 className="text-2xl font-bold">Choose a Toy</h3>
            <p className="font-semibold text-gray-500">
              Explore short descriptions and toy pictures to get an idea. You
              can also visit our available stores.
            </p>
          </div>
        </div>
        <div>
          <div className="flex justify-center">
            <img
              src="https://i.ibb.co/JkQdKN4/360-F-332799148-55-PKYZ6-Ok-LWfu-QTTZ0je-D8gz-Nnwe-Z0m-U.jpg"
              alt="Delivery Man"
              className="w-96 h-96"
            />
          </div>
          <div className="text-center">
            <h3 className="text-2xl font-bold">
              Fill up the delivery location form
            </h3>
            <p className="font-semibold text-gray-500">
              We have our own delivery system and it is totally managed by our
              own company. Our delivery man will arrive at your selected
              location on time and deliver the product to you safe.
            </p>
          </div>
        </div>
        <div>
          <div className="flex justify-center">
            <img
              src="https://i.ibb.co/c1V80cy/delivery-box-open-cartoon-vector-19323833-removebg-preview.png"
              alt="Product return box"
              className="w-96 h-96"
            />
          </div>
          <div className="text-center">
            <h3 className="text-2xl font-bold">Swap and repeat</h3>
            <p className="font-semibold text-gray-500">
              Return any unloved toy and swap it for something else. We would
              love to do that for you!
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HowToBuy;
