import React, { useContext } from 'react';
import { useForm } from "react-hook-form";
import { AuthContext } from '../../Providers/AuthProvider';

const AddToy = () => {

     const {user} = useContext(AuthContext);

     const { register, handleSubmit, watch, formState: { errors } } = useForm();


     const onSubmit = data => {
          fetch("http://localhost:5000/addtoy",{
               method:"POST",
               headers: {
                    "content-type" : "application/json"
               },
               body: JSON.stringify(data)
          })
          .then(res => res.json())
          .then(result => console.log(result) )
          
          console.log(data);
     };

     return (
          <div className='max-w-[1200px] mx-auto'>
               <h1>Add a toy</h1>

               <div className='shadow-xl p-5 my-8'>
               <form  onSubmit={handleSubmit(onSubmit)}>
      {/* register your input into the hook by invoking the "register" function */}
<div className='grid grid-cols md:grid-cols-2 gap-5'>
<input className='text-black font-semibold rounded shadow border border-gray-400 bg-gray-200  p-3' placeholder='Name' {...register("name")} />
      
      <input className='text-black font-semibold rounded shadow border border-gray-400 bg-gray-200  p-3' value={user?.name} placeholder='Seller Name' defaultValue="" {...register("seller-name")} />

      <input className='text-black font-semibold rounded shadow border border-gray-400 bg-gray-200  p-3' placeholder='Photo URL' defaultValue="" {...register("photoURL")} />
      
      {/* include validation with required or other standard HTML validation rules */}
      <input type='email' value={user?.email} className='text-black font-semibold rounded shadow border border-gray-400 bg-gray-200  p-3' placeholder='Email'   {...register("postedBy", { required: true })} />

      <select className='text-black font-semibold rounded shadow border border-gray-400 bg-gray-200  p-3' placeholder='Toy Category' {...register("toy-category")}>
        <option value="avengers">Avengers</option>
        <option value="marvel">Marvel</option>
        <option value="transformer">Transformer</option>
        <option value="star-wars">Star Wars</option>
      </select>

      <input className='text-black font-semibold rounded shadow border border-gray-400 bg-gray-200 p-3' placeholder='Price' defaultValue="" {...register("price")} />    
      <input className='text-black font-semibold rounded shadow border border-gray-400 bg-gray-200  p-3' placeholder='Rating' defaultValue="" {...register("rating")} />    
      <input className='text-black font-semibold rounded shadow border border-gray-400 bg-gray-200  p-3' placeholder='Available quantity' defaultValue="" {...register("quantity")} /> 
      <input className='text-black font-semibold rounded shadow border border-gray-400 bg-gray-200  px-3 py-5' placeholder='Description' defaultValue="" {...register("description")} /> 





      {/* errors will return when field validation fails  */}
      {errors.exampleRequired && <span>This field is required</span>}
</div>


      
      <div className='flex justify-center'>
      <input className='btn bg-blue-300 text-black px-8 py-3 my-6' type="submit" />
      </div>
    </form>
               </div>
          </div>
     );
};

export default AddToy;