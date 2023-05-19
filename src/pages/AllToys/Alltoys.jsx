import React, { useEffect, useState } from 'react';


const Alltoys = () => {

     const [allToys , setAllToys] = useState([]);

     useEffect( () => {
          fetch("http://localhost:5000/alltoys")
          .then(res => res.json())
          .then(data => setAllToys(data))
     })

     return (
          <div>
                    All toys {allToys.length}

               {
                    allToys.map(alltoy => <>
                 <div className="card card-compact w-96 bg-base-100 shadow-xl">
  <figure><img src={alltoy.image} alt="Shoes" /></figure>
  <div className="card-body">
    <h2 className="card-title">{alltoy.name}</h2>
    <p>If a dog chews shoes whose shoes does he choose?</p>
    <div className="card-actions justify-end">
      <button className="btn btn-primary">Buy Now</button>
    </div>
  </div>
</div>
                    </>)
               }


          </div>
     );
};

export default Alltoys;