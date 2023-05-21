import React, { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';

const ToyDetails = () => {

     const {id} = useParams()

     const [mytoys , setMytoys] = useState([])

     useEffect(() => {
          fetch(`https://battle-heroes-server-kfrfahim.vercel.app/toy/${id}`)
            .then((res) => res.json())
            .then((data) => setMytoys(data));
        });
 


     return (
          <div className='flex justify-center my-16'>
              <div className="card card-compact w-96 bg-base-100 shadow-xl">
  <figure><img src={mytoys.image} alt="Shoes" /></figure>
  <div className="card-body">
    <h2 className="card-title">{mytoys.name}</h2>
    <p>Price : ${mytoys.price}</p>
    <p>Quantity : {mytoys.quantity}</p>
    <p>Description : {mytoys.description}</p>
    <div className="card-actions justify-end">
      <Link to="/alltoys"><button className="btn btn-primary">All Toys</button></Link>
    </div>
  </div>
</div>
          </div>
     );
};

export default ToyDetails;