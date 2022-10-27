import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import { Link } from "react-router-dom";

const AllCourseCards = () => {
  const [courses, setCourses] = useState([]);
  console.log(courses);
  useEffect(() => {
    fetch("http://localhost:5000/courses")
      .then((res) => res.json())
      .then((data) => setCourses(data));
  }, []);
  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-2">
      {courses.map((course) => {
        return (
          <div className="mx-auto">
            {/* <div className="card card-side bg-base-100 shadow-xl mb-3 mx-3">
              <figure>
                <img src="https://placeimg.com/200/280/arch" alt="Movie" />
              </figure>
              <div className="card-body">
                <h2 className="card-title">New movie is released!</h2>
                <p>Click the button to watch on Jetflix app.</p>
                <div className="card-actions justify-end">
                  <button className="btn btn-primary">
                    <Link to={`/courses/${course.id}`}>See details</Link>
                  </button>
                </div>
              </div>
            </div> */}

            <div className="card w-auto bg-base-100 shadow-xl">
  <figure><img src="https://placeimg.com/400/225/arch" alt="Shoes" /></figure>
  <div className="card-body">
    <h2 className="card-title">
      Shoes!
      <div className="badge badge-secondary">NEW</div>
    </h2>
    <p>If a dog chews shoes whose shoes does he choose?</p>
    <div className="card-actions justify-end">
      <div className="badge badge-outline">Fashion</div> 
      <div className="badge badge-outline">Products</div>
    </div>
  </div>
</div>
          </div>
        );
      })}
    </div>
  );
};

export default AllCourseCards;
