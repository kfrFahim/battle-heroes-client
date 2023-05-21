import { Link, useLocation, useNavigate } from 'react-router-dom';
import { FaGoogle, FaGithub } from "react-icons/fa";
import { useContext, useState } from 'react';
import { AuthContext } from '../../Providers/AuthProvider';
import {
    GithubAuthProvider,
    GoogleAuthProvider,
    getAuth,
    signInWithPopup,
  } from "firebase/auth";
import app from '../../Firebase/firebase.config';
import useTtile from '../../hooks/useTitle';


const Login = () => {

    const { signIn } = useContext(AuthContext);

    const auth = getAuth(app);
    const provider = new GoogleAuthProvider();
  const githubProvider = new GithubAuthProvider();
    const navigate = useNavigate();

    useTtile("Login")

    const location = useLocation();
    const from = location.state?.from?.pathname || "/";

    const [error, setError] = useState("");

    const handleLogin = event => {
        event.preventDefault();
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;
        console.log(email, password)

        signIn(email, password)
            .then(result => {
                const user = result.user;
                console.log(user);
                navigate(from)
            })
            .catch((error) => {
                console.log(error);
                setError(error.message);
              });

              if (password.length < 6) {
                setError("Your Password must be 6 characters");
              } else if (email === "") {
                setError("Enter Your Email");
              } else if (password === "") {
                setError("Enter Your password");
              }




            
    }

    const handleGoogleSignIn = () => {
        console.log("tip lagse");
        signInWithPopup(auth, provider)
          .then((result) => {
            const user = result.user;
            console.log(user);
            navigate("/");
          })
          .catch((error) => {
            error;
          });
      };
    
      const handleGithubSignIn = () => {
        signInWithPopup(auth, githubProvider)
          .then((result) => {
            const user = result.user;
            console.log(user);
            navigate(form);
          })
          .catch((error) => {
            error;
          });
      };



    return (
        <div className="hero min-h-screen bg-base-200">
            <div className="hero-content flex-col lg:flex-row gap-10">
                <div className="w-1/2 mr-12">
                    <img className='rounded-lg' src="https://cdn.shopify.com/s/files/1/0403/7899/0751/products/14ed796df8b6440196b921bf6677cdc1xl_1200x1200.jpg?v=1668795356" alt="" />
                </div>
                <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                    <div className="card-body">
                        <h1 className="text-3xl text-center font-bold">Login</h1>
                        <form onSubmit={handleLogin}>

                        <p className="ml-[40px] my-3 text-red-500">{error}</p>

                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Email</span>
                                </label>
                                <input type="text" name='email' placeholder="email" className="input input-bordered" />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Password</span>
                                </label>
                                <input type="text" name='password' placeholder="password" className="input input-bordered" />
                                <label className="label">
                                    <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                                </label>
                            </div>
                            <div className="form-control mt-6">
                                <input className="btn btn-primary" type="submit" value="Login" />
                            </div>
                        </form>
                        <p className='my-4 text-center'>New to BattleHeroes <Link className='text-orange-600 font-bold' to="/signup">Sign Up</Link> </p>

                        <div className="flex justify-center gap-3 ">
        <button
          onClick={handleGoogleSignIn}
          className="btn normal-case btn-info mb-2"
        >
          {" "}
          <FaGoogle />
          Login with Google
        </button>
        <button
         onClick={handleGithubSignIn}
          className="btn normal-case">
          {" "}
          <FaGithub></FaGithub>Login with Github
        </button>
      </div>

                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;