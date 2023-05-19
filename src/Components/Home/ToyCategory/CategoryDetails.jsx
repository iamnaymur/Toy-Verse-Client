import React, { useContext } from "react";
import { useLoaderData } from "react-router-dom";
import ViewDetails from "../../AllToys/ViewDetails";
import { AuthContext } from "../../Authprovider/AuthProvider";
import { toast } from "react-toastify";

const CategoryDetails = () => {
    const toyDetails = useLoaderData();
    const {user}= useContext(AuthContext)
  console.log(toyDetails);
  const {
    email,
    seller,
    price,
    description,
    category,
    quantity,
    rating,
    photo,
  } = toyDetails;
  return (
    <div>
      <div style={{ backgroundImage: "" }} className="mt-10">
        <h1 className="text-center text-3xl font-semibold">
          Here are some details below about the toy. Please check it out if you
          need!{" "}
        </h1>
        <div className="card w-2/4 mx-auto mt-20 card-side bg-base-100 shadow-2xl">
          <figure>
            <img className="w-96 " src={photo} alt="Movie" />
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
    </div>
    
  );
};

export default CategoryDetails;
