import React, { useContext } from "react";
import { useForm } from "react-hook-form";
import { AuthContext } from "../../Providers/AuthProvider";
import useTtile from "../../hooks/useTitle";
import { ToastContainer, toast } from 'react-toastify';
  import 'react-toastify/dist/ReactToastify.css';

const AddToy = () => {
  const { user } = useContext(AuthContext);

  useTtile("Add a toy")

  const notify = () => toast("Added Successfully");

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    fetch("https://battle-heroes-server-kfrfahim.vercel.app/addtoy", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(data),
    })
      .then((res) => res.json())
      .then((result) => console.log(result));
      form.reset("");
      alert('Toy Added');
      return false;

    console.log(data);
  };

 

  return (
    <div className="max-w-[1200px] mx-auto">
      <h1 className="text-3xl text-center my-5 font-bold">Add a toy</h1>

      <div className="shadow-xl p-5 my-8">
        <form onSubmit={handleSubmit(onSubmit)}>
          {/* register your input into the hook by invoking the "register" function */}
          <div className="grid grid-cols md:grid-cols-2 gap-5">
            <input
              className="text-black font-semibold rounded shadow border border-gray-400 bg-gray-200  p-3"
              placeholder="Name"
              {...register("name")}
            />

            <input
              className="text-black font-semibold rounded shadow border border-gray-400 bg-gray-200  p-3"
              value={user?.name}
              placeholder="Seller Name"
              defaultValue=""
              {...register("sellerName")}
            />

            <input
              className="text-black font-semibold rounded shadow border border-gray-400 bg-gray-200  p-3"
              placeholder="Photo URL"
              defaultValue=""
              {...register("image")}
            />

            {/* include validation with required or other standard HTML validation rules */}
            <input
              type="email"
              value={user?.email}
              className="text-black font-semibold rounded shadow border border-gray-400 bg-gray-200  p-3"
              placeholder="Email"
              {...register("postedBy", { required: true })}
            />

            <select
              className="text-black font-semibold rounded shadow border border-gray-400 bg-gray-200  p-3"
              placeholder="Toy Category"
              {...register("subcategory")}
            >
              <option value="Avengers">Avengers</option>
              <option value="Marvel">Marvel</option>
              <option value="Transformer">Transformer</option>
              <option value="Star Wars">Star Wars</option>
            </select>

            <input
              className="text-black font-semibold rounded shadow border border-gray-400 bg-gray-200 p-3"
              placeholder="Price"
              defaultValue=""
              {...register("price")}
            />
            <input
              className="text-black font-semibold rounded shadow border border-gray-400 bg-gray-200  p-3"
              placeholder="Rating"
              defaultValue=""
              {...register("rating")}
            />
            <input
              className="text-black font-semibold rounded shadow border border-gray-400 bg-gray-200  p-3"
              placeholder="Available quantity"
              defaultValue=""
              {...register("quantity")}
            />
            <input
              className="text-black font-semibold rounded shadow border border-gray-400 bg-gray-200  px-3 py-5"
              placeholder="Description"
              defaultValue=""
              {...register("description")}
            />

            {/* errors will return when field validation fails  */}
            {errors.exampleRequired && <span>This field is required</span>}
          </div>

          <div className="flex justify-center">
          <input
              className="btn bg-blue-300 text-black px-8 py-3 my-6"
              type="submit"
              onClick={notify}
              
            />
            <ToastContainer />
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddToy;
