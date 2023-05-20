import React from 'react';
import { Link } from 'react-router-dom';

const Error = () => {
     return (
          <div>
                   <div className="mx-14 my-12">
      <img
        className="w-[600px] h-[450px] m-auto rounded-lg shadow-2xl"
        src="https://technabob.com/blog/wp-content/uploads/2010/10/101810_rg_Stormtrooper404_01.jpg"
        alt=""
      />

      <div className="flex justify-center my-8">
        <Link className="text-center" to="/">
          <button className="btn border bg-white text-blue-500">Home</button>
        </Link>
      </div>
    </div>
          </div>
     );
};

export default Error;