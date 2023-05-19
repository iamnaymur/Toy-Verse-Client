import React, { useContext } from "react";
import { useLoaderData } from "react-router-dom";
import ViewDetails from "../../AllToys/ViewDetails";
import { AuthContext } from "../../Authprovider/AuthProvider";

const CategoryDetails = () => {
    const toyDetails = useLoaderData();
    const {user}= useContext(AuthContext)
  console.log(toyDetails);
//   const {
//     email,
//     seller,
//     price,
//     description,
//     category,
//     quantity,
//     rating,
//     photo,
//   } = toyDetails;
  return <ViewDetails></ViewDetails>;
};

export default CategoryDetails;
