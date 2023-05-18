import React, { useContext, useState } from "react";
import { FaAlignRight, FaRegWindowClose } from "react-icons/fa";
import { Link } from "react-router-dom";
import { AuthContext } from "../../../Providers/AuthProvider";

const Navbar = () => {
  const { user, logOut } = useContext(AuthContext);

  const [toogle, setToogle] = useState(false);

  const handleLogOut = () => {
    logOut()
      .then(() => {})
      .catch((error) => console.log(error));
  };

  return (
    <div className="bg-slate-100 p-4 shadow">
      <div className="max-w-[1200px] py-5 flex justify-between items-center mx-auto">
        <div className="flex gap-3 items-center">
          <img className="w-12 h-12 rounded-full" src="https://pbs.twimg.com/profile_images/1466072342816243718/9A_DD3bJ_400x400.png" alt="" />
          <p className="text-xl font-bold">BattleHeroes</p></div>

        {toogle ? (
          <FaRegWindowClose
            onClick={() => setToogle(!toogle)}
            className="text-2xl md:hidden block"
          ></FaRegWindowClose>
        ) : (
          <FaAlignRight
            onClick={() => setToogle(!toogle)}
            className="text-2xl md:hidden block"
          ></FaAlignRight>
        )}

        <ul className="hidden md:flex items-center gap-10 font-medium text-base">

          <li><Link to="/" className={({ isActive }) => isActive ? "bg-blue-600 px-5 py-2 text-white rounded-lg": "default" }> Home </Link> </li>
          {user?.email ? (
            <>
              <li>All Toys</li>
              <li> My Toys</li>
              <li> Add A Toy</li>
            </>
          ) : (
            ""
          )}

          <li><Link to="/blogs" > Blogs </Link> </li>
        </ul>

        {user?.email ? (
          <button
            className="btn btn-outline btn-accent "
            onClick={handleLogOut}
          >
            Logout
          </button>
        ) : (
          <button className="btn btn-outline btn-primary ">
            <Link to="/login">Login</Link>
          </button>
        )}

        {/* Resposive Menu */}

        <ul
          className={`duration-300 md:hidden w-full text-white fixed bg-black top-[92px] ${
            toogle ? "left-[0]" : "left-[-100%]"
          }`}
        >
          <li className="p-3">Home</li>
          <li className="p-3">Blog</li>
          <li className="p-3">Blog</li>
          <li className="p-3">Blog</li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
