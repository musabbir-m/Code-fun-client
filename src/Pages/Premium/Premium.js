import React from "react";
import { FaCheck } from "react-icons/fa";
import { useLoaderData } from "react-router-dom";

const Premium = () => {
  const course = useLoaderData();
  console.log("premium", course);
  return (
    <div>
      
      <div className=" px-16 h-20 mb-6 w-1/2 justify-end bg-green-500 mx-auto rounded-lg text-white py-5 ">
          <h2 className="text-4xl">{course.name}</h2>
        </div>
      <div className="flex justify-center mt-10">
        
        <div className=" justify-center gird grid-cols-2 card w-full md:w-1/2 bg-violet-600 text-primary-content">
          <div className="card-body">
            <h2 className="card-title ">Get Premium Access </h2>
            <div className="grid grid-cols-2">
              <div className=" w-40 ">
                <button className="btn glass mx-auto mb-5">
                  <FaCheck></FaCheck> Unlimited access{" "}
                </button>
              </div>
              <div className=" w-40 ">
                <button className="btn glass mx-auto mb-5">
                  <FaCheck></FaCheck> Personalised support{" "}
                </button>
              </div>
              <div className=" w-40 ">
                <button className="btn glass mx-auto mb-5">
                  <FaCheck></FaCheck> Email support{" "}
                </button>
              </div>
              <div className=" w-40 ">
                <button className="btn glass mx-auto mb-5">
                  <FaCheck></FaCheck> Access to the forum{" "}
                </button>
              </div>
              <div className=" w-40 ">
                <button className="btn glass h-28 mx-auto mb-5">
                  <FaCheck></FaCheck> Access to premium resources{" "}
                </button>
              </div>
            </div>

            <div className="card-actions justify-center">
              <button className="btn btn-secondary">Proceed</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Premium;
