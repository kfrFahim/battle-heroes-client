import React from "react";

const Footer = () => {
  return (
    <div className="max-w-[1200px] mx-auto bg-gray-300">
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
          <p>101 Independence Avenue. S.E </p>
          <p>Phone : +67 14874575</p>
          <p>Email : battleheroes@gmail.com</p>
          <div>
            <ul>
              <li>Google</li>
              <li>Facebook</li>
              <li>Tetter</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
