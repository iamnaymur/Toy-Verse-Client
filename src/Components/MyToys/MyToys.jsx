import React, { useContext, useEffect, useState } from "react";
import { AuthContext } from "../Authprovider/AuthProvider";
import { Link } from "react-router-dom";

const MyToys = () => {
  const [addedToys, setAddedToys] = useState([]);
  const { user } = useContext(AuthContext);

  // console.log(addedToys);

  useEffect(() => {
    fetch(`http://localhost:5000/addedToys/${user?.email}`)
      .then((res) => res.json())
      .then((data) => setAddedToys(data));
  }, []);

  const handleDelete = (id) => {
    fetch(`http://localhost:5000/addedToys/${id}`, {
      method: "DELETE",
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.deletedCount > 0) {
          const newToys = addedToys.filter((toy) => toy._id !== id);
          setAddedToys(newToys);
        }
      });
  };

  return (
    <div>
      <h1 className="font-semibold text-3xl m-10">
        All of your selected toys are here given below..
      </h1>
      <table className="table mx-auto">
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
            <tr key={toyInfo._id} className="hover">
              <th>{index + 1}</th>
              <td>{toyInfo.name}</td>
              <td>{toyInfo.category}</td>
              <td>
                <button
                  onClick={() => handleDelete(toyInfo._id)}
                  className="btn me-2"
                >
                  Delete
                </button>
                <>
                  <button>
                    <Link to={`/updateToyData/${toyInfo._id}`} className="btn">
                      Edit
                    </Link>
                    {/* The button to open modal */}
                  </button>
                </>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default MyToys;
