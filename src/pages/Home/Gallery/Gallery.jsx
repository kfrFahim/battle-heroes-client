import React, { useEffect } from "react";
import img1 from "../../../assets/images/gallery/img1.jpg";
import img2 from "../../../assets/images/gallery/img2.jpg";
import img3 from "../../../assets/images/gallery/img3.jpg";
import img4 from "../../../assets/images/gallery/img4.jpg";
import img5 from "../../../assets/images/gallery/img5.jpg";
import img6 from "../../../assets/images/gallery/img6.jpg";
import img7 from "../../../assets/images/gallery/img7.jpg";
import img8 from "../../../assets/images/gallery/img8.jpg";
import img9 from "../../../assets/images/gallery/img9.jpg";
import img10 from "../../../assets/images/gallery/img10.jpg";
import img11 from "../../../assets/images/gallery/img11.png";
import img12 from "../../../assets/images/gallery/img12.jpg";
import { FaAngleDown } from "react-icons/fa";
import AOS from "aos";
import "aos/dist/aos.css";

const Gallery = () => {

  useEffect(()=> {
    AOS.init();
},[])

  return (
    <div className="max-w-[1200px] mx-auto my-10">
     <div className="my-12">
          <h1 className="text-2xl md:text-5xl font-semibold text-black text-center my-4">Take a look around</h1>
          <hr className="w-[10%] h-1 bg-black mx-auto" />

          <div className="flex justify-center">
          <FaAngleDown className="text-2xl"></FaAngleDown>
          </div>
     </div>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-2">
        <div>
          {" "}
          <img
            className="w-[250px] h-[250px] mx-auto border-4 border-green-400 rounded-md"
            src={img1}
            alt=""
          />
          <p className="text-center text-[18px] text-green-900 font-semibold my-1">Avengers</p>
        </div>
        <div>
          {" "}
          <img
            className="w-[250px] h-[250px] mx-auto border-4 border-green-400 rounded-md"
            src={img2}
            alt=""
            data-aos="fade-right"
          />
          <p className="text-center text-[18px] text-green-900 font-semibold my-1">Transformer</p>
        </div>

        <div>
          {" "}
          <img
            className="w-[250px] h-[250px] mx-auto border-4 border-green-400 rounded-md"
            src={img3}
            alt=""
          />
          <p className="text-center text-[18px] text-green-900 font-semibold my-1">Marvel</p>
        </div>

        <div>
          {" "}
          <img
            className="w-[250px] h-[250px] mx-auto border-4 border-green-400 rounded-md"
            src={img4}
            alt=""
          />
          <p className="text-center text-[18px] text-green-900 font-semibold my-1">Star Wars</p>
        </div>

        <div>
          {" "}
          <img
            className="w-[250px] h-[250px] mx-auto border-4 border-green-400 rounded-md"
            src={img5}
            alt=""
            data-aos="fade-left"
          />
          <p className="text-center text-[18px] text-green-900 font-semibold my-1">Transformer</p>
        </div>
        <div>
          {" "}
          <img
            className="w-[250px] h-[250px] mx-auto border-4 border-green-400 rounded-md"
            src={img6}
            alt=""
            data-aos="fade-right"
          />
          <p className="text-center text-[18px] text-green-900 font-semibold my-1">Star Wars</p>
        </div>

        <div>
          {" "}
          <img
            className="w-[250px] h-[250px] mx-auto border-4 border-green-400 rounded-md"
            src={img7}
            alt=""
            data-aos="fade-left"
          />
          <p className="text-center text-[18px] text-green-900 font-semibold my-1">Marvel</p>
        </div>

        <div>
          {" "}
          <img
            className="w-[250px] h-[250px] mx-auto border-4 border-green-400 rounded-md"
            src={img8}
            alt=""
            data-aos="fade-left"
          />
          <p className="text-center text-[18px] text-green-900 font-semibold my-1">Transformer</p>
        </div>

        <div>
          {" "}
          <img
            className="w-[250px] h-[250px] mx-auto border-4 border-green-400 rounded-md"
            src={img9}
            alt=""
            data-aos="fade-left"
          />
          <p className="text-center text-[18px] text-green-900 font-semibold my-1">Star Wars</p>
        </div>
        <div>
          {" "}
          <img
            className="w-[250px] h-[250px] mx-auto border-4 border-green-400 rounded-md"
            src={img10}
            alt=""
            data-aos="fade-right"
          />
          <p className="text-center text-[18px] text-green-900 font-semibold my-1">Star Wars</p>
        </div>
        <div>
          {" "}
          <img
            className="w-[250px] h-[250px] mx-auto border-4 border-green-400 rounded-md"
            src={img11}
            alt=""
            data-aos="fade-left"
          />
          <p className="text-center text-[18px] text-green-900 font-semibold my-1">Avengers</p>
        </div>
        <div>
          {" "}
          <img
            className="w-[250px] h-[250px] mx-auto border-4 border-green-400 rounded-md"
            src={img12}
            alt=""
          />
          <p className="text-center text-[18px] text-green-900 font-semibold my-1">Transformer</p>
        </div>

      </div>
    </div>
  );
};

export default Gallery;
