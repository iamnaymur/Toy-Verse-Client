import React, { useEffect, useState } from "react";

const AllToys = () => {
  const [allToyData, setAllToyData] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5000/addedToys")
      .then((res) => res.json())
      .then((data) => setAllToyData(data));
  }, []);
  return (
    <div className="container mx-auto mt-20">
      <h1 className="text-center mb-10 font-semibold">
        Here are all the toys you can see added by our users. For safety reasons
        we can not share much information about any user. <br /> From this page you can
        just get an good idea about the product reviews and some details so that
        you can think of joining us soon.
      </h1>
      <div className="overflow-x-auto ">
        <table className="table  w-full ">
          <thead>
            <tr>
              <th>No.</th>
              <th>Seller</th>
              <th>Toy Name</th>
              <th>Sub-Category</th>
              <th>Price</th>
              <th>Available Quantity</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {allToyData.map((data, index) => (
              <>
                <tr>
                  <th>{index + 1}</th>
                  <td>{data.seller}</td>
                  <td>{data.name}</td>
                  <td>{data.category}</td>
                  <td>{data.price}</td>
                  <td>{data.quantity}</td>
                  <td>
                    <button className="btn-xs btn">View Details</button>
                  </td>
                </tr>
              </>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default AllToys;
