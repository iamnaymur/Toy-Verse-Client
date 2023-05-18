import React, { useEffect, useState } from "react";

const MyToys = () => {
  const [addedToys, setAddedToys] = useState([]);
  console.log(addedToys);

  useEffect(() => {
    fetch("http://localhost:5000/addedToys/nrtusher1@gmail.com")
      .then((res) => res.json())
      .then((data) => setAddedToys(data));
  }, []);
  return (
    <>
      <div >
        <div className="overflow-x-auto ">
          <table className="table w-full ">
            <thead>
              <tr>
                <th>Product Serial</th>
                <th>Toys Name</th>
                <th>Toys Category</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {addedToys.map((toyInfo, index) => (
                <tr className="hover">
                  <th>{index + 1}</th>
                  <td>{toyInfo.name}</td>
                  <td>{toyInfo.category}</td>
                  <td>
                    <button className="btn">Delete</button>{" "}
                    <button className="btn">Edit</button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
};

export default MyToys;
