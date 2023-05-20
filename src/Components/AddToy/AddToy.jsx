import React, { useContext } from "react";
import { AuthContext } from "../Authprovider/AuthProvider";
import { toast } from "react-toastify";
import DynamicPageTitle from "../DynamicPageTitle/DynamicPageTitle";

const AddToy = () => {
  const { user } = useContext(AuthContext);
  const handleAddToy = (event) => {
    event.preventDefault();
    const form = event.target;
    const name = form.name.value;
    const photo = form.photo.value;
    const seller = user?.displayName;
    const email = user?.email;
    const category = form.category.value;
    const price = form.price.value;
    const rating = form.rating.value;
    const quantity = form.quantity.value;
    const description = form.description.value;

    const addedToy = {
      name,
      photo,
      seller,
      email,
      category,
      price,
      rating,
      quantity,
      description,
    };
    // console.log(addedToy);

    fetch("http://localhost:5000/addedToys", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(addedToy),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data)
        if (data.acknowledged === true) {
          toast.success('Added Successfully')
          form.reset()
        }
      });
  };
  return (
    <div className="mt-10 text-xl text-center space-y-10">
      <DynamicPageTitle title="Add Toy" />
      <div className="space-y-10">
        <h1 className="text-3xl font-semibold">
          What are you waiting for? <br /> Add your desired toy here.
        </h1>
        <h1>
          Who doesn't love having toys? Specially when you are a fan of the
          comic books, you must have an action figure of your favorite
          superhero. <br /> From the mighty superheroes of Marvel and DC Comics
          to the iconic characters from the Star Wars universe, our store is a
          paradise for fans of all ages. We Love You 3000!
        </h1>
      </div>
      <div>
        <div>
          <form
            onSubmit={handleAddToy}
            className="space-y-2 text-start font-semibold md:w-3/5 mx-auto mb-10"
          >
            <div>
              <label>
                <p>Name -</p>
              </label>
              <div className="form-control">
                <input
                  name="name"
                  type="text"
                  placeholder="Full Name"
                  className="input input-bordered"
                />
              </div>
            </div>
            <div>
              <label>
                <p>Photo Url -</p>
              </label>
              <div className="form-control">
                <input
                  name="photo"
                  type="text"
                  placeholder="Photo URL"
                  className="input input-bordered"
                />
              </div>
            </div>
            <div>
              <label>
                <p>Seller Name -</p>
              </label>
              <div className="form-control">
                <input
                  defaultValue={user?.displayName}
                  type="text"
                  placeholder="Seller Name"
                  className="input input-bordered"
                />
              </div>
            </div>
            <div>
              <label>
                <p>Seller Email -</p>
              </label>
              <div className="form-control">
                <input
                  defaultValue={user?.email}
                  name="email"
                  type="email"
                  placeholder="Seller Email"
                  className="input input-bordered"
                />
              </div>
            </div>
            <div>
              <label>
                <p>Toy Category -</p>
              </label>
              <div className="form-control">
                <input
                  name="category"
                  type="text"
                  placeholder="Product Category"
                  className="input input-bordered"
                />
              </div>
            </div>
            <div>
              <label>
                <p>Price -</p>
              </label>
              <div className="form-control">
                <input
                  name="price"
                  type="text"
                  placeholder="Price of this toy"
                  className="input input-bordered "
                />
              </div>
            </div>

            <div>
              <label>
                <p>Rating -</p>
              </label>
              <div className="form-control">
                <input
                  type="text"
                  name="rating"
                  placeholder="rating of this toy"
                  className="input input-bordered"
                />
              </div>
            </div>
            <div>
              <label>
                <p>Available Quantity -</p>
              </label>
              <div className="form-control ">
                <input
                  type="text"
                  name="quantity"
                  placeholder="Available Quantity of this toy"
                  className="input input-bordered"
                />
              </div>
            </div>
            <div>
              <label>
                <p>Description -</p>
              </label>
              <div className="form-control ">
                <input
                  type="text"
                  name="description"
                  placeholder="Description of the product"
                  className="input input-bordered"
                />
              </div>
            </div>
            <div className="form-control mt-6">
              <button className="btn bg-indigo-500 border-none ">
                Add This
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default AddToy;
