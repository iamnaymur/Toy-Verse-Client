import React from "react";
import { useLoaderData } from "react-router-dom";

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
    <div className="flex justify-center">
      <div className="card w-3/12 glass ">
        <div className="card-body text-end">
          <h2 className="bold text-2xl">Toy Name: {name}</h2>
          <p>Seller email: {email}</p>
          <p>Seller name: {seller}</p>
          <p>Product Price: {price}</p>
          <p>Short Description: {description}</p>
          <p>Product Category: {category}</p>
          <p>Available Quantity: {quantity}</p>
          <p>Overall Rating: {rating}</p>
        </div>
        <div>
          <img src={photo} />
        </div>
      </div>
    </div>
  );
};

export default ViewDetails;
