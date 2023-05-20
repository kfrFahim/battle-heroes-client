import React from "react";
import { FaFacebookF, FaGoogle, FaTwitter } from "react-icons/fa";

const Footer = () => {
  return (
    <div className="max-w-[1200px] mx-auto bg-gray-300 my-5">
      <div className="grid grid-cols md:grid-cols-4 p-5 text-black">
        <div className="flex gap-3 items-center">
          <img
            className="w-12 h-12 rounded-full"
            src="https://pbs.twimg.com/profile_images/1466072342816243718/9A_DD3bJ_400x400.png"
            alt=""
          />
          <p className="text-xl font-bold">BattleHeroes</p>
        </div>
        <div>
          <h3 className="text-xl font-semibold my-5">BRANDS</h3>
          <ul>
            <li>Avengers</li>
            <li>Transformers</li>
            <li>Marvel</li>
            <li>Star Wars</li>
          </ul>
        </div>
        <div>
          <h3 className="text-xl font-semibold my-5">ABOUT US</h3>
          <ul>
            <li>Help Center</li>
            <li>Store Location</li>
            <li>Privacy Policy</li>
            <li>Terms of Service</li>
          </ul>
        </div>
        <div>
          <h3 className="text-xl font-semibold my-4">CONTACT</h3>
          <p className="font-medium">101 Independence Avenue. S.E </p>
          <p className="my-2 font-medium"><a href="#">Phone : +67 14874575</a></p>
          <p className="font-medium">Email : <a href="#">battleheroes@gmail.com</a></p>
          <div >
            <ul className="flex gap-8 my-4">
              <li className="text-2xl text-blue-700 hover:text-orange-500"> <FaFacebookF></FaFacebookF> </li>
              <li className="text-2xl text-blue-900 hover:text-blue-700"><FaGoogle></FaGoogle></li>
              <li  className="text-2xl text-sky-400 hover:text-blue-700"><FaTwitter></FaTwitter></li>
            </ul>
          </div>
        </div>
      </div>
      <hr />
      <p className="text-center py-4">THE BATTLEHEROES TOY STORE © 2023 </p>
    </div>
  );
};

export default Footer;
