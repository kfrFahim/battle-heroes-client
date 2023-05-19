import React, { useEffect, useState } from 'react';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';


const CategoryShop = () => {

     const [allToys , setAllToys] = useState([]);

     useEffect( () => {
          fetch("http://localhost:5000/alltoys")
          .then(res => res.json())
          .then(data => setAllToys(data))
     })

     return (
          <div className='max-w-[1200px] mx-auto'>
               categoruy {allToys.length}

               {
                    allToys.map(alltoy => <>
                      <Tabs>
    <TabList>
      <Tab>Title 1</Tab>
      <Tab>Title 2</Tab>
    </TabList>

    <TabPanel>
      <h2>Any content 1</h2>
    </TabPanel>
    <TabPanel>
      <h2>Any content 2</h2>
    </TabPanel>
  </Tabs>
                    </> )
               }




          </div>
     );
};

export default CategoryShop;