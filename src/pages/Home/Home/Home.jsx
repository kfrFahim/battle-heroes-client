import React from 'react';
import Banner from '../Banner/Banner';
import Gallery from '../Gallery/Gallery';
import CategoryShop from '../CategoryShop/CategoryShop';
import AboutUs from '../AboutUs/AboutUs';
import Review from '../../Review/Review';





const Home = () => {
     return (
          <div >
              <Banner></Banner>
              <AboutUs></AboutUs>
              <Gallery></Gallery>
              <CategoryShop></CategoryShop>
              <Review></Review>

          
             
          </div>
     );
};

export default Home;