import React from "react";
import { useLoaderData } from "react-router-dom";
import DynamicPageTitle from "../DynamicPageTitle/DynamicPageTitle";

const ViewDetails = () => {
  const productDetails = useLoaderData();
  console.log(productDetails);
  const {
    photo,
    email,
    name,
    price,
    description,
    category,
    quantity,
    rating,
    seller,
  } = productDetails;

  return (
    <div style={{ backgroundImage: "" }} className="mt-10">
      <DynamicPageTitle title="Toy Details" />
      <h1 className="text-center text-3xl font-semibold">
        Here are some details below about the toy. Please check it out if you
        need!{" "}
      </h1>
      <div className="card w-3/4 border border-indigo-400 mx-auto mt-20 card-side bg-base-100 shadow-indigo-500 shadow-2xl">
        <figure>
          <img className="w-[450px]" src={photo} alt="action figure" />
        </figure>
        <div className="card-body">
          <h2 className="card-title text-3xl">{name}</h2>
          <p>
            <span className="bold">Seller Name</span> : {seller}
          </p>
          <p>
            <span className="bold">Email</span>: {email}
          </p>
          <p>
            <span className="bold">Price</span>: {price}
          </p>
          <p>
            <span className="bold">Category</span>: {category}
          </p>
          <p>
            <span className="bold">Quantity</span>: {quantity}
          </p>
          <p>
            <span className="bold">Rating</span>: {rating}
          </p>
          <p>
            <span className="bold">Description</span>: {description}
          </p>
        </div>
      </div>
    </div>
  );
};

export default ViewDetails;
