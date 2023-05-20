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
          <h1 className="text-2xl md:text-5xl font-semibold text-black text-center my-4">Shop By Category</h1>
          <hr className="w-[10%] h-1 bg-black mx-auto" />

          <div className="flex justify-center">
          <FaAngleDown className="text-2xl"></FaAngleDown>
          </div>
     </div>


      <Tabs>
        
    <TabList className="text-center">
      
      <Tab><p className="md:text-xl font-bold">Marvel</p></Tab>
      <Tab><p className="md:text-xl font-bold">Star Wars</p></Tab>
      <Tab><p className="md:text-xl font-bold">Transformer</p></Tab>
      <Tab><p className="md:text-xl font-bold">Avengers</p></Tab>
      <hr />
    </TabList>

    <TabPanel>
       
<div className="grid grid-cols md:grid-cols-3 my-3">
{
        allToys.slice(0,3).map((alltoy)=>
 
        <div className="" >
        <div className="card card-compact w-64 h-full bg-base-100 shadow-xl mx-auto ">
        <figure><img  src={alltoy.image} alt="Shoes" /></figure>
        <div className="card-body">
          <h2 className="card-title">{alltoy.name}</h2>
          <p className="font-medium text-[16px]">Price : ${alltoy.price}</p>
          <p className="font-medium">Ratings : {alltoy.ratings}</p>
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
       
<div className="grid grid-cols md:grid-cols-3 my-3">
{
        allToys.slice(3,6).map((alltoy)=>
 
        <div className="" >
        <div className="card card-compact w-64 h-full bg-base-100 shadow-xl mx-auto ">
        <figure><img  src={alltoy.image} alt="Shoes" /></figure>
        <div className="card-body">
        <h2 className="card-title">{alltoy.name}</h2>
          <p className="font-medium text-[16px]">Price : ${alltoy.price}</p>
          <p className="font-medium">Ratings : {alltoy.ratings}</p>
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
       
<div className="grid grid-cols md:grid-cols-3 my-3">
{
        allToys.slice(6,9).map((alltoy)=>
 
        <div className="" >
        <div className="card card-compact w-64 h-full bg-base-100 shadow-xl mx-auto ">
        <figure><img  src={alltoy.image} alt="Shoes" /></figure>
        <div className="card-body">
        <h2 className="card-title">{alltoy.name}</h2>
          <p className="font-medium text-[16px]">Price : ${alltoy.price}</p>
          <p className="font-medium">Ratings : {alltoy.ratings}</p>
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
       
       <div className="grid grid-cols md:grid-cols-3 my-3">
       {
               allToys.slice(9,12).map((alltoy)=>
        
               <div className="" >
               <div className="card card-compact w-64 h-full bg-base-100 shadow-xl mx-auto ">
               <figure><img  src={alltoy.image} alt="Shoes" /></figure>
               <div className="card-body">
               <h2 className="card-title">{alltoy.name}</h2>
          <p className="font-medium text-[16px]">Price : ${alltoy.price}</p>
          <p className="font-medium">Ratings : {alltoy.ratings}</p>
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

  </Tabs>

    </div>
  );
};

export default CategoryShop;
