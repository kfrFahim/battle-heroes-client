import React, { useEffect } from 'react';
import Banner from '../Banner/Banner';
import Gallery from '../Gallery/Gallery';
import CategoryShop from '../CategoryShop/CategoryShop';
import AboutUs from '../AboutUs/AboutUs';
import Review from '../../Review/Review';
import useTtile from '../../../hooks/useTitle';
import AOS from "aos";
import "aos/dist/aos.css";





const Home = () => {

     useEffect(()=> {
          AOS.init();
     },[])

     useTtile("Home")


     return (
          <div >
              <Banner ></Banner>
              <AboutUs data-aos="fade-right"></AboutUs>
              <Gallery data-aos ="fade-left"></Gallery >
              <CategoryShop data-aos="fade-right"></CategoryShop>
              <Review></Review>

          
             
          </div>
     );
};

export default Home;