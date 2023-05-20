import React from 'react';

const AboutUs = () => {
     return (
          <div className='max-w-[1200px] mx-auto my-8 '>

<div className="my-12">
          <h1 className="text-5xl font-semibold text-black text-center my-4">About BattleHeroes</h1>
          <hr className="w-[10%] h-1 bg-black mx-auto" />
     </div>

               <div className='grid grid-cols md:grid-cols-2 gap-5 p-5 bg-gray-200'>
                    <div className='ml-5 p-5'>
                         <h1 className='text-xl md:text-5xl font-bold my-3'>About BattleHeroes Toy Store</h1>
                         <p className='text-black my-5'>Battlehouse Toy Store actively supports positive creative expression. As literal pieces of culture, toys and collectibles mold our communal views. We believe toys should spark genuine love, fun, and wonder. Sometimes, that means we swim against the tide of our own industry, which still has a soft spot for nostalgia. We pursue this mission explicitly in our purchasing decisions through our choice of product lines and by highlighting independent designers.</p>

                         <button className='btn btn-active'>Learn more</button>
                    </div>
                    <div>
                         <img className='w-[300px] h-[300px] mx-auto shadow-2xl' src="https://i0.wp.com/www.mymytoystore.com/wp-content/uploads/2021/10/Screen-Shot-2021-10-05-at-11.36.26-PM-min.png?resize=1016%2C1024&ssl=1" alt="" />
                    </div>
               </div>
          </div>
     );
};

export default AboutUs;