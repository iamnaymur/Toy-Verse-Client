import React from "react";
import { useLoaderData } from "react-router-dom";

const UpdateToyData = () => {
  const toyData = useLoaderData();
  // console.log(toyData);

  const handleToyUpdateInfo = (e) => {
    e.preventDefault();
    const form = event.target;
    const price = form.price.value;
    const quantity = form.quantity.value;
    const description = form.description.value;
    const updatedToyInfo = { price, quantity, description };
    console.log(updatedToyInfo);

    fetch(`http://localhost:5000/addToys/${toyData._id}`, {
      method: 'PUT',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(updatedToyInfo)
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
      });
  };

  return (
    <div>
      <form
        onSubmit={handleToyUpdateInfo}
        className="card-body mx-auto  w-2/4 mb-20 space-y-5"
      >
        <h1 className="text-center text-3xl font-semibold mt-10">
          Update the selected toy here.
        </h1>
        <div className="form-control">
          <label className="label">
            <span className="label-text bold">Price</span>
          </label>
          <input
            name="price"
            type="text"
            placeholder="Price of the selected toy"
            className="input input-bordered h-16"
          />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text bold">Quantity</span>
          </label>
          <input
            name="quantity"
            type="text"
            placeholder="Quantity of the selected toy"
            className="input input-bordered  h-16"
          />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text bold">Description</span>
          </label>
          <input
            type="text"
            name="description"
            placeholder="Short Description"
            className="input input-bordered  h-16"
          />
        </div>
        <div className="form-control mt-6">
          <button
            style={{ backgroundColor: "#FF7F50" }}
            className="btn border-0"
          >
            Update
          </button>
        </div>
      </form>
    </div>
  );
};

export default UpdateToyData;
