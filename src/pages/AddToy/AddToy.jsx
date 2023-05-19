import React from 'react';
import { useForm } from "react-hook-form";

const AddToy = () => {

     const { register, handleSubmit, watch, formState: { errors } } = useForm();
     const onSubmit = data => console.log(data);

     return (
          <div className='max-w-[1200px] mx-auto'>
               <h1>Add a toy</h1>

               <div className='border border-gray-600 p-5'>
               <form  onSubmit={handleSubmit(onSubmit)}>
      {/* register your input into the hook by invoking the "register" function */}
<div className='grid grid-cols md:grid-cols-2 gap-5'>
<input className='border border-black p-3' placeholder='Name' {...register("name")} />
      
      <input className='border border-black p-3' placeholder='Seller Name' defaultValue="" {...register("seller-name")} />

      <input className='border border-black p-3' placeholder='Photo URL' defaultValue="" {...register("photo-url")} />
      
      {/* include validation with required or other standard HTML validation rules */}
      <input type='email' className='border border-black p-3' placeholder='Email'   {...register("email", { required: true })} />

      <select className='border border-black' placeholder='Toy Category' {...register("toy-category")}>
        <option value="female">Avengers</option>
        <option value="male">Marvel</option>
        <option value="other">Transformer</option>
        <option value="other">Star Wars</option>
      </select>

      <input className='border border-black p-3' placeholder='Price' defaultValue="" {...register("price")} />    
      <input className='border border-black p-3' placeholder='Rating' defaultValue="" {...register("rating")} />    
      <input className='border border-black p-3' placeholder='Available quantity' defaultValue="" {...register("quantity")} /> 
      <input className='border border-black p-3' placeholder='Description' defaultValue="" {...register("description")} /> 





      {/* errors will return when field validation fails  */}
      {errors.exampleRequired && <span>This field is required</span>}
</div>


      
      <input className='btn btn-block bg-blue-300 p-4 my-6' type="submit" />
    </form>
               </div>
          </div>
     );
};

export default AddToy;