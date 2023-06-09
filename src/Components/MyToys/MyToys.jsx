import React, { useContext, useEffect, useState } from "react";
import { AuthContext } from "../Authprovider/AuthProvider";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";
import { FaEdit, FaTrash } from "react-icons/fa";
import DynamicPageTitle from "../DynamicPageTitle/DynamicPageTitle";

const MyToys = () => {
  const [addedToys, setAddedToys] = useState([]);
  const { user } = useContext(AuthContext);

  const [sorting, setSorting] = useState("true");

  const handleSorting = () => {
    setSorting(!sorting);
  };

  useEffect(() => {
    fetch(
      `https://toy-verse-server-azure.vercel.app/addedToys/${user?.email}?sort=${sorting}`
    )
      .then((res) => res.json())
      .then((data) => setAddedToys(data));
  }, [sorting]);

  const handleDelete = (id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        fetch(`https://toy-verse-server-azure.vercel.app/addedToys/${id}`, {
          method: "DELETE",
        })
          .then((res) => res.json())
          .then((data) => {
            if (data.deletedCount > 0) {
              Swal.fire("Deleted!", "Your file has been deleted.", "success");
              const newToys = addedToys.filter((toy) => toy._id !== id);
              setAddedToys(newToys);
            }
          });
      }
    });
  };

  return (
    <div>
      <DynamicPageTitle title="My Toys" />
      <h1 className="font-semibold text-3xl m-10">
        All of your selected toys are here given below..
      </h1>

      <table className="table mx-auto ">
        <thead>
          <tr>
            <th>Photo</th>
            <th>Product Serial</th>
            <th>Toys Name</th>
            <th>Toys Category</th>
            <th>Description</th>
            <th>
              Seller & <br /> Seller's Email
            </th>
            <th>
              Price <br />{" "}
              <input
                onClick={handleSorting}
                type="checkbox"
                className="toggle"
              />
            </th>
            <th>Quantity</th>
            <th>Rating</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {addedToys.map((toyInfo, index) => (
            <tr key={toyInfo._id}>
              <td>
                <img className="w-12" src={toyInfo.photo} alt="" />
              </td>
              <td>{index + 1}</td>
              <td>{toyInfo.name}</td>
              <td>{toyInfo.category}</td>
              <td>{toyInfo.description.slice(0, 100)}...</td>
              <td>
                {toyInfo.seller} <br />
                {toyInfo.email}
              </td>
              <td>{toyInfo.price}</td>
              <td>{toyInfo.quantity}</td>
              <td>{toyInfo.rating}</td>

              <td>
                <button
                  onClick={() => handleDelete(toyInfo._id)}
                  className="btn btn-sm me-2"
                >
                  <FaTrash /> Delete
                </button>
                <>
                  <button>
                    <Link
                      to={`/updateToyData/${toyInfo._id}`}
                      className="btn btn-sm"
                    >
                      <FaEdit /> Edit
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
