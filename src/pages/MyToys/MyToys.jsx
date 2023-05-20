import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../../Providers/AuthProvider';

const MyToys = () => {

     const {user} = useContext(AuthContext);
     const [mytoys , setMytoys] = useState([]);

     useEffect(()=>{
          fetch(`http://localhost:5000/mytoys/${user?.email}`)
          .then(res => res.json())
          .then(data => setMytoys(data))
     },[user])




     return (
          <div className='max-w-[1200px] mx-auto'>
               <h1 className='text-center text-3xl font-bold my-8'>My Toys</h1>

<div className='w-[30%] mx-auto my-8'>
<input className='px-8 py-3 border border-gray-200' type="text" placeholder='Search' />
               <button className='btn'>Search</button>
</div>


               <div >
               <div className="overflow-x-auto w-full">
  <table className="table w-full">
    {/* head */}
    <thead>
      <tr>
        <th>
          <label>
            <input type="checkbox" className="checkbox" />
          </label>
        </th>
        <th>Name</th>
        <th>Email</th>
        <th>Price</th>
        <th>Quantity</th>
        <th>Update</th>
        <th>Delete</th>
        <th></th>
      </tr>
    </thead>





    <tbody>
      {/* row 1 */}
               {
               mytoys.map(mytoy => (
                    <tr>
                    <th>
                      <label>
                        <input type="checkbox" className="checkbox" />
                      </label>
                    </th>
                    <td>
                      <div className="flex items-center space-x-3">
                        <div className="avatar">
                          <div className="mask mask-squircle w-12 h-12">
                            <img src={mytoy?.photoURL} alt="Avatar Tailwind CSS Component" />
                          </div>
                        </div>
                        <div>
                          <div className="font-bold">{mytoy.name}</div>
                        </div>
                      </div>
                    </td>
                    <td>
                      {user?.email}
                    </td>
                    <td>{mytoy.price}</td>
                    <td>{mytoy.quantity}</td>
                    <td> <button className="btn btn-secondary btn-xs">Update</button></td>
                    <td> <button className="btn btn-accent btn-xs">Delete</button></td>
                  </tr>
               ) )
               }


    </tbody>
    
  </table>
</div>
               </div>
          </div>
     );
};

export default MyToys;