import React from "react";
import { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../Context/UserContext";
import { FaGoogle, FaGithub } from "react-icons/fa";

const Register = () => {
  const { user, signUp, googleSignIn, githubSignIn } = useContext(AuthContext);
  const handleSubmit = (event) => {
    event.preventDefault();
    const form = event.target;
    const email = form.email.value;
    const password = form.password.value;
    const name = form.name.value;
    console.log(email, password, name);
    signUp(email, password)
      .then((result) => {
        const user = result.user;
        console.log(user);
      })
      .catch((error) => {
        console.error(error);
      });
  };
  //signin with google
  const googleSingInHandler = () => {
    googleSignIn();
  };

  //signin with github
  const githubSignInHandler = () => {
    githubSignIn()
    .then(result=>{
        const user=result.user
    })
    .catch(error=>{
        console.log(error);
    })

    
  };

  return (
    <div>
      <div className="hero min-h-screen bg-base-200">
        <div className="hero-content flex-col ">
          <div className="text-center lg:text-left">
            <h1 className="text-4xl font-bold">Please Register</h1>
          </div>
          <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
            <form onSubmit={handleSubmit} className="card-body">
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Full Name</span>
                </label>
                <input
                  name="name"
                  type="text"
                  placeholder="your name"
                  className="input input-bordered"
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Photo URL</span>
                </label>
                <input
                  name="photoURL"
                  type="text"
                  placeholder="photo url"
                  className="input input-bordered"
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input
                  name="email"
                  type="email"
                  placeholder="email"
                  className="input input-bordered"
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Password</span>
                </label>
                <input
                  name="password"
                  type="password"
                  placeholder="password"
                  className="input input-bordered"
                />
                <label className="label">
                  <p>
                    Already have an accout?
                    <Link
                      className="link link-hover bg-blue-100 rounded px-1 hover:bg-slate-400"
                      to="/login"
                    >
                      login
                    </Link>
                  </p>
                </label>
              </div>
              <div className="form-control mt-6">
                <button className="btn btn-primary">Register</button>
              </div>
              <p className="text-md">Or</p>
            </form>
            <button
              onClick={googleSingInHandler}
              className="btn btn-success mx-auto mb-5"
            >
              Sign in with Google <FaGoogle></FaGoogle>
            </button>
            <button
              onClick={githubSignInHandler}
              className="btn btn-success mx-auto mb-5"
            >
              {" "}
              Sign in with GitHub <FaGithub></FaGithub>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;
