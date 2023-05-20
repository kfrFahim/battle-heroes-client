import React, { useEffect, useState } from "react";

const CategoryShop = () => {
  const [allToys, setAllToys] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5000/alltoys")
      .then((res) => res.json())
      .then((data) => setAllToys(data));
  });

  return (
    <div>
      <h1>Category = {allToys.length}</h1>

    </div>
  );
};

export default CategoryShop;
