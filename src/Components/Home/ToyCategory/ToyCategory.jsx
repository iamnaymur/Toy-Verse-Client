import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Tab, TabList, TabPanel, Tabs } from "react-tabs";
import "react-tabs/style/react-tabs.css";

const ToyCategory = () => {
  const [categoryToys, setCategoryToys] = useState([]);
  // console.log(categoryToys);
  useEffect(() => {
    fetch(`http://localhost:5000/addedToys`)
      .then((res) => res.json())
      .then((data) => setCategoryToys(data));
  }, []);

  const marvelToys = categoryToys.filter((toys) => toys.category === "marvel");
  const dcToys = categoryToys.filter((toys) => toys.category === "Dc");
  const transformersToys = categoryToys.filter((toys) => toys.category === "transformers");
  // console.log(marvelToys);

  return (
    <div className="md:container mx-auto mt-20 ">
      <h1 className="text-3xl mb-5">
        Select your desired toys from this category below.
      </h1>
      <div className="w-3/4 mx-auto mt-10 bg-indigo-300 p-5">
        <Tabs forceRenderTabPanel defaultIndex={1}>
          <TabPanel>
            <div>
              <Tabs forceRenderTabPanel>
                <div className="text-center ">
                  <TabList>
                    <Tab>Marvel</Tab>
                    <Tab>Dc</Tab>
                    <Tab>Transformers</Tab>
                  </TabList>
                </div>
                <TabPanel>
                  <div className="md:grid gap-5 grid-cols-2  p-5">
                    {marvelToys.slice(0, 4).map((toy) => (
                      <div key={toy._id}>
                        <div className="rounded-lg bg-base-100 shadow-xl">
                          <figure className="px-10 pt-10">
                            <img
                              src={toy.photo}
                              alt="Shoes"
                              className="rounded-xl w-auto h-52 "
                            />
                          </figure>
                          <div className="card-body items-start text-center">
                            <h2 className="card-title">Name: {toy.name}</h2>
                            <p>
                              <span className="bold">Price: </span>
                              {toy.price}
                            </p>
                            <p>
                              <span className="bold">Ratings: </span>
                              {toy.rating}
                            </p>

                            <Link to={`/viewCategoryDetails/${toy._id}`}>
                              <button className="btn btn-sm border-none bg-indigo-500">
                                View Details
                              </button>
                            </Link>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </TabPanel>
                <TabPanel>
                  <div className="md:grid gap-5 grid-cols-2 p-5">
                    {dcToys.slice(0, 4).map((toy) => (
                      <div key={toy._id}>
                        <div className="rounded-lg bg-base-100 shadow-xl">
                          <figure className="px-10 pt-10">
                            <img
                              src={toy.photo}
                              alt="Shoes"
                              className="rounded-xl w-auto h-52"
                            />
                          </figure>
                          <div className="card-body items-start text-center">
                            <h2 className="card-title">Name: {toy.name}</h2>
                            <p>
                              <span className="bold">Price: </span>
                              {toy.price}
                            </p>
                            <p>
                              <span className="bold">Ratings: </span>
                              {toy.rating}
                            </p>

                            <Link to={`/viewCategoryDetails/${toy._id}`}>
                              <button className="btn btn-sm border-none bg-indigo-500">
                                View Details
                              </button>
                            </Link>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </TabPanel>
                <TabPanel>
                  <div className="md:grid gap-5 grid-cols-2 p-5">
                    {transformersToys.slice(0, 4).map((toy) => (
                      <div key={toy._id}>
                        <div className="rounded-lg bg-base-100 shadow-xl">
                          <figure className="px-10 pt-10">
                            <img
                              src={toy.photo}
                              alt="Shoes"
                              className="rounded-xl w-auto h-52"
                            />
                          </figure>
                          <div className="card-body items-start text-center">
                            <h2 className="card-title">Name: {toy.name}</h2>
                            <p>
                              <span className="bold">Price: </span>
                              {toy.price}
                            </p>
                            <p>
                              <span className="bold">Ratings: </span>
                              {toy.rating}
                            </p>

                            <Link to={`/viewCategoryDetails/${toy._id}`}>
                              <button className="btn btn-sm border-none bg-indigo-500">
                                View Details
                              </button>
                            </Link>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </TabPanel>
              </Tabs>
            </div>
          </TabPanel>
        </Tabs>
      </div>
    </div>
  );
};

export default ToyCategory;
