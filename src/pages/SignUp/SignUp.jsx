import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useContext } from 'react';
import { AuthContext } from '../../Providers/AuthProvider';


const SignUp = () => {
    const [error, setError] = useState("");
     const { createUser } = useContext(AuthContext);

     const navigate = useNavigate();

     const handleSignUp = event => {
         event.preventDefault();
         const form = event.target;
         const name = form.name.value;
         const email = form.email.value;
         const password = form.password.value;
         console.log(name, email, password)


         const regTest = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{6,}$/

         setError("");
     
         if (email === "") {
           setError("Please Enter Email");
         } else if (password === "") {
           setError("Please Enter Password");
         } else if (!regTest.test(password)) {
           setError("Your Password is not valid");
         } else {
           setError("");
           alert("Sign up Successfully")
         }
 
 
         createUser(email, password)
             .then(result => {
                 const user = result.user;
                 console.log('created user', user);
                 form.reset("");
             })
             .catch((error) => {
                console.log(error);
                setError(error.message);
              });
 
     }




     return (
          <div className="hero min-h-screen bg-base-200">
          <div className="hero-content flex-col lg:flex-row gap-10">
              <div className="w-1/2 mr-12">
                  <img className='rounded-lg' src="https://cdn.shopify.com/s/files/1/0403/7899/0751/products/14ed796df8b6440196b921bf6677cdc1xl_1200x1200.jpg?v=1668795356" alt="" />
              </div>
              <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                  <div className="card-body">
                      <h1 className="text-3xl text-center font-bold">Sign Up</h1>
                      <form onSubmit={handleSignUp}>

                      <p className="ml-[40px] my-3 text-red-500">{error}</p>
                          <div className="form-control">
                              <label className="label">
                                  <span className="label-text">Name</span>
                              </label>
                              <input type="text" name='name' placeholder="name" className="input input-bordered" />
                          </div>
                          <div className="form-control">
                              <label className="label">
                                  <span className="label-text">Email</span>
                              </label>
                              <input type="text" name='email' placeholder="email" className="input input-bordered" />
                          </div>
                          {/* <div className="form-control">
                              <label className="label">
                                  <span className="label-text">Password</span>
                              </label>
                              <input type="password" name='password' placeholder="password" className="input input-bordered" />
                          </div> */}
                          <div className="form-control">
                              <label className="label">
                                  <span className="label-text">Confirm Password</span>
                              </label>
                              <input type="password" name='password' placeholder="password" className="input input-bordered" />
                              <label className="label">
                                  <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                              </label>
                          </div>
                          <div className="form-control mt-6">
                              <input className="btn btn-primary" type="submit" value="Sign Up" />
                          </div>
                      </form>
                      <p className='my-4 text-center'>Already Have an Account? <Link className='text-orange-600 font-bold' to="/login">Login</Link> </p>
                  </div>
              </div>
          </div>
      </div>
     );
};

export default SignUp;