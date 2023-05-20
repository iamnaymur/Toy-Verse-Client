import React from "react";

const GallerySection = () => {
  return (
    <div>
      <h1 className="text-center text-4xl bold m-20">Most selling online!</h1>
      <div class="container mx-auto shadow-2xl shadow-indigo-400 border-4">
        <div class="grid grid-cols-2 md:grid-cols-4 gap-4">
          <div class="bg-gray-100 p-4 ">
            <div className="badge badge-primary">New Shipment!</div>
            <img
              src="https://i.ibb.co/ys1TZ5s/61-GPk-Uebfv-L-AC-SL1000.jpg"
              alt=""
              class="w-96"
            />
            <div className="text-center ">
              <h1>
                Name: <span className="bold">Jazz</span>
              </h1>
              <p>
                Price: <span className="bold">2400</span>
              </p>
              <p>
                People who loved this: <span className="bold">3453</span>
              </p>
              <p>
                Total Ratings: <span className="bold">4.5/5</span>
              </p>
            </div>
          </div>
          <div class="bg-gray-100 p-4">
            <img
              src="https://i.ibb.co/K2SYrq2/61k75yi8qg-L.jpg"
              alt=""
              class="w-96"
            />
            <div className="text-center">
              <h1>
                Name: <span className="bold">Joker</span>
              </h1>
              <p>
                Price: <span className="bold">4200</span>
              </p>
              <p>
                People who loved this: <span className="bold">2300</span>
              </p>
              <p>
                Total Ratings: <span className="bold">5/5</span>
              </p>
            </div>
          </div>
          <div class="bg-gray-100 p-4">
            <img
              src="https://i.ibb.co/b7yNQmr/71frql-Rl-GL.jpg"
              alt=""
              class="w-96 "
            />
            <div className="text-center">
              <h1>
                Name: <span className="bold">Black Panther</span>
              </h1>
              <p>
                Price: <span className="bold">3400</span>
              </p>
              <p>
                People who loved this: <span className="bold">4234</span>
              </p>
              <p>
                Total Ratings: <span className="bold">4.7/5</span>
              </p>
            </div>
          </div>
          <div class="bg-gray-100 p-4">
            <div className="badge badge-primary">New Shipment!</div>
            <img
              src="https://i.ibb.co/xXXpSk1/a8722c40a1eacc93abe8f348c19392ca11b87dd3.jpg"
              alt=""
              class="w-96 "
            />

            <div className="text-center">
              <h1>
                Name: <span className="bold">CliffJumper</span>
              </h1>
              <p>
                Price: <span className="bold">2950</span>
              </p>
              <p>
                People who loved this: <span className="bold">2752</span>
              </p>
              <p>
                Total Ratings: <span className="bold">4.3/5</span>
              </p>
            </div>
          </div>
          <div class="bg-gray-100 p-4">
            <img
              src="https://i.ibb.co/q7CRKtM/6000203884399.jpg"
              alt=""
              class="w-96 "
            />
            <div className="text-center">
              <h1>
                Name: <span className="bold">Goop</span>
              </h1>
              <p>
                Price: <span className="bold">2650</span>
              </p>
              <p>
                People who loved this: <span className="bold">4303</span>
              </p>
              <p>
                Total Ratings: <span className="bold">4.3/5</span>
              </p>
            </div>
          </div>
          <div class="bg-gray-100 p-4">
            <img
              src="https://i.ibb.co/X5RVhdh/b8fce1f0-f538-405b-a2cf-6ff21909d60c-ab607c89da662ee51a0cabfdba611592.webp"
              alt=""
              class="w-96"
            />
            <div className="text-center">
              <h1>
                Name: <span className="bold">Batman</span>
              </h1>
              <p>
                Price: <span className="bold">2400</span>
              </p>
              <p>
                People who loved this: <span className="bold">3453</span>
              </p>
              <p>
                Total Ratings: <span className="bold">4.9/5</span>
              </p>
            </div>
          </div>
          <div class="bg-gray-100 p-4">
            <div className="badge badge-primary">New Shipment!</div>
            <img
              src="https://i.ibb.co/PDRnn56/download-7.jpg"
              alt=""
              class="w-96 h-auto"
            />
            <div className="text-center">
              <h1>
                Name: <span className="bold">Luke</span>
              </h1>
              <p>
                Price: <span className="bold">3285</span>
              </p>
              <p>
                People who loved this: <span className="bold">3455</span>
              </p>
              <p>
                Total Ratings: <span className="bold">4.5/5</span>
              </p>
            </div>
          </div>
          <div class="bg-gray-100 p-4">
            <img
              src="https://i.ibb.co/QrYyb8x/download-2.jpg"
              alt=""
              class="w-96 h-auto"
            />
            <div className="text-center">
              <h1>
                Name: <span className="bold">Hulk</span>
              </h1>
              <p>
                Price: <span className="bold">2690</span>
              </p>
              <p>
                People who loved this: <span className="bold">4300</span>
              </p>
              <p>
                Total Ratings: <span className="bold">5/5</span>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GallerySection;
