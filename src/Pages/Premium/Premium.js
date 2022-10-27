import React from "react";
import { FaCheck } from "react-icons/fa";
import { useLoaderData } from "react-router-dom";

const Premium = () => {
  const course = useLoaderData();
  console.log("premium", course);
  return (
    <div className="flex justify-center mt-10">
      <div className=" justify-center card w-full md:w-1/2 bg-blue-500 text-primary-content">
        <div className="card-body">
          <h2 className="card-title ">Get Premium Access!</h2>
          
          <div className=" w-40 ">
          <button className="btn glass mx-auto mb-5">
               <FaCheck></FaCheck> Unlimited access  </button>
          </div>
          <div className=" w-40 ">
          <button className="btn glass mx-auto mb-5">
               <FaCheck></FaCheck> Personalised support  </button>
          </div>
          <div className=" w-40 ">
          <button className="btn glass mx-auto mb-5">
               <FaCheck></FaCheck> Email support  </button>
          </div>
          <div className=" w-40 ">
          <button className="btn glass mx-auto mb-5">
               <FaCheck></FaCheck> Access to the forum  </button>
          </div>
          <div className=" w-40 ">
          <button className="btn glass h-28 mx-auto mb-5">
               <FaCheck></FaCheck> Access to premium resources </button>
          </div>
          
          <div className="card-actions justify-center">
            <button className="btn">Buy Now</button>
          </div>
        </div>
      </div>
    </div>
   
  );
};

export default Premium;
