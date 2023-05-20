import React, { useEffect, useState } from "react";

const Alltoys = () => {
  const [mytoys, setAllToys] = useState([]);
  const [searchText, setSearchText] = useState("");

  useEffect(() => {
    fetch("http://localhost:5000/alltoys")
      .then((res) => res.json())
      .then((data) => setAllToys(data));
  });

  const handleSearch = () => {
    fetch(`http://localhost:5000/searchtoy/${searchText}`)
      .then((res) => res.json())
      .then((data) => {
        setSearchText(data);
      });
  };

  return (
    <div className="max-w-[1200px] mx-auto">
      <h1 className="text-center text-3xl font-bold my-8">My Toys</h1>

      <div className="w-[30%] mx-auto my-8">
        <input
          onChange={(e) => setSearchText(e.target.value)}
          className="px-8 py-3 border border-gray-200"
          type="text"
          placeholder="Search"
        />
        <button onClick={handleSearch} className="btn">
          Search
        </button>
      </div>

      <div>
        <div className="overflow-x-auto w-full">
          <table className="table w-full">
            {/* head */}
            <thead>
              <tr>
                <th>
                  <label>
                    <input type="checkbox" className="checkbox" />
                  </label>
                </th>
                <th>Name</th>
                <th>Email</th>
                <th>Price</th>
                <th>Quantity</th>
                <th>Update</th>
                <th>Delete</th>
                <th></th>
              </tr>
            </thead>

            <tbody>
              {/* row 1 */}
              {mytoys.map((mytoy) => (
                <tr>
                  <th>
                    <label>
                      <input type="checkbox" className="checkbox" />
                    </label>
                  </th>
                  <td>
                    <div className="flex items-center space-x-3">
                      <div className="avatar">
                        <div className="mask mask-squircle w-12 h-12">
                          <img
                            src={mytoy.image}
                            alt="Avatar Tailwind CSS Component"
                          />
                        </div>
                      </div>
                      <div>
                        <div className="font-bold">{mytoy.name}</div>
                      </div>
                    </div>
                  </td>
                  <td>{mytoy.email}</td>
                  <td>{mytoy.price}</td>
                  <td>{mytoy.quantity}</td>
                  <td>
                    {" "}
                    <button className="btn btn-secondary btn-xs">Update</button>
                  </td>
                  <td>
                    {" "}
                    <button className="btn btn-accent btn-xs">Delete</button>
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

export default Alltoys;