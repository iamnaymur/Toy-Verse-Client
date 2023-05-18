import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const AllToys = () => {
  const [allToyData, setAllToyData] = useState([]);

  const [revalid, setRevalid] = useState([false]);

  const handleSearch = (event) => {
    if (event === "") {
      setRevalid(!revalid);
      return;
    }
    fetch(`http://localhost:5000/toyName/${event}`)
      .then((res) => res.json())
      .then((data) => setAllToyData(data));
  };

  useEffect(() => {
    fetch("http://localhost:5000/addedToys")
      .then((res) => res.json())
      .then((data) => setAllToyData(data));
  }, [revalid]);
  return (
    <div className="mt-20">
      <div className="flex justify-center">
        <input
          onChange={(event) => handleSearch(event.target.value)}
          type="text"
          placeholder="Search for toy..."
          className="input input-bordered input-info w-full max-w-xs"
        />
      </div>
      <div className="container mx-auto mt-10">
        <h1 className="text-center mb-10 font-semibold">
          Here are all the toys you can see added by our users. For safety
          reasons we can not share much information about any user. <br /> From
          this page you can just get an good idea about the product reviews and
          some details so that you can think of joining us soon.
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
                <tr key={data._id}>
                  <td>{index + 1}</td>
                  <td>{data.seller}</td>
                  <td>{data.name}</td>
                  <td>{data.category}</td>
                  <td>{data.price}</td>
                  <td>{data.quantity}</td>
                  <td>
                    <Link to={`/viewDetails/${data._id}`}>
                      <button className="btn-xs btn">View Details</button>
                    </Link>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default AllToys;
