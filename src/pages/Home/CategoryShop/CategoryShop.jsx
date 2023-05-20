import React, { useEffect, useState } from "react";
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import { FaAngleDown } from "react-icons/fa";

const CategoryShop = () => {
  const [allToys, setAllToys] = useState([]);



  useEffect(() => {
    fetch("http://localhost:5000/alltoys")
      .then((res) => res.json())
      .then((data) => setAllToys(data));
  });

  return (
    <div className="max-w-[1200px] mx-auto my-5 p-4">
          <div className="my-12">
          <h1 className="text-2xl md:text-5xl font-semibold text-black text-center my-4">Take a look around</h1>
          <hr className="w-[10%] h-1 bg-black mx-auto" />

          <div className="flex justify-center">
          <FaAngleDown className="text-2xl"></FaAngleDown>
          </div>
     </div>


      <Tabs>
        
    <TabList className="text-center">
      
      <Tab><p className="text-xl font-bold">Marvel</p></Tab>
      <Tab><p className="text-xl font-bold">Star Wars</p></Tab>
      <Tab><p className="text-xl font-bold">Transformer</p></Tab>
      <Tab><p className="text-xl font-bold">Avengers</p></Tab>
      <hr />
    </TabList>

    <TabPanel>
       
<div className="grid grid-cols md:grid-cols-3">
{
        allToys.slice(0,3).map((alltoy)=>
 
        <div className="flex" >
        <div className="card card-compact w-96 bg-base-100 shadow-xl ">
        <figure><img src={alltoy.image} alt="Shoes" /></figure>
        <div className="card-body">
          <h2 className="card-title">Shoes!</h2>
          <p>If a dog chews shoes whose shoes does he choose?</p>
          <div className="card-actions justify-end">
            <button className="btn btn-primary">Buy Now</button>
          </div>
        </div>
      </div>
        </div>
 )
      }
</div>
    </TabPanel>


    <TabPanel>
      <h2>
      {
        allToys.slice(1,4).map((alltoy)=> <h2> {alltoy.name}</h2> )
      }
      </h2>
    </TabPanel>
    <TabPanel>
      <h2>
      {
        allToys.slice(1,4).map((alltoy)=> <h2> {alltoy.name}</h2> )
      }
      </h2>
    </TabPanel>
  </Tabs>

    </div>
  );
};

export default CategoryShop;
