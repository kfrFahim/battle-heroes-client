import React, { useContext, useState } from "react";
import { FaAlignRight, FaRegWindowClose } from "react-icons/fa";
import { Link, NavLink } from "react-router-dom";
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
    <div className="">
      <div className="max-w-[1200px] p-5 mb-4 flex justify-between items-center mx-auto shadow">
        <div >
<Link className="flex gap-3 items-center" to="/">
<img
            className="w-12 h-12 rounded-full"
            src="https://pbs.twimg.com/profile_images/1466072342816243718/9A_DD3bJ_400x400.png"
            alt=""
          />
          <p className="text-xl font-bold">BattleHeroes</p>
</Link>
        </div>

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
          <li>
            <NavLink
              to="/"
              aria-label="Home"
              title="Home"
              className={({ isActive }) =>
                isActive
                  ? "bg-blue-600 px-5 py-2 text-white rounded-lg"
                  : "default"
              }
            >
              Home
            </NavLink>
          </li>
          {user?.email ? (
            <>
              <li>
                <NavLink
                  to="/alltoys"
                  aria-label="Statistics"
                  title="statistics"
                  className={({ isActive }) =>
                    isActive
                      ? "bg-blue-600 px-5 py-2 text-white rounded-lg"
                      : "default"
                  }
                >
                  All Toys
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/mytoys"
                  aria-label="Statistics"
                  title="statistics"
                  className={({ isActive }) =>
                    isActive
                      ? "bg-blue-600 px-5 py-2 text-white rounded-lg"
                      : "default"
                  }
                >
                  My Toys
                </NavLink>
              </li>

              <li>
                <NavLink
                  to="/addtoy"
                  aria-label="Statistics"
                  title="statistics"
                  className={({ isActive }) =>
                    isActive
                      ? "bg-blue-600 px-5 py-2 text-white rounded-lg"
                      : "default"
                  }
                >
                  Add A Toy
                </NavLink>
              </li>
            </>
          ) : (
            ""
          )}

          <li>
            <NavLink
              to="/blog"
              aria-label="Statistics"
              title="statistics"
              className={({ isActive }) =>
                isActive
                  ? "bg-blue-600 px-5 py-2 text-white rounded-lg"
                  : "default"
              }
            >
              Blogs
            </NavLink>
          </li>
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
        {user?.photoURL ? (
          <img
            className="w-10 h-10"
            src={user.photoURL}
            title={user.displayName}
          />
        ) : (
          ""
        )}

        {/* Resposive Menu */}

        <ul
          className={`duration-300 md:hidden w-full text-white fixed bg-black top-[92px] ${
            toogle ? "left-[0]" : "left-[-100%]"
          }`}
        >
          <li className="p-3"><Link to="/">Home</Link></li>
          <li className="p-3"><Link to="/alltoys">All toys</Link></li>
          <li className="p-3"><Link to="/mytoys">My Toys</Link></li>
          <li className="p-3"><Link to="/addtoy">Add a Toy</Link></li>
          <li className="p-3"><Link to="/blog">Blog</Link></li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
