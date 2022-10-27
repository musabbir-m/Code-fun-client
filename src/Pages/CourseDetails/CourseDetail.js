import React from "react";
import { useLoaderData } from "react-router-dom";
import { Link } from "react-router-dom";

const CourseDetail = () => {
  const course = useLoaderData();
  console.log(course, "hehehe");
  return (
    <div>
      {/* <button> <Link to={`/courses/${course.id}`}>{course.name}</Link></button>
     <img src={course.thumbnail_url} alt=""/>
     <p>{course.description}</p> */}

      <div className="card  lg:card-side bg-base-100 shadow-xl mx-5 mt-5">
        <figure>
          <img className="w-auto" src={course.thumbnail_url} alt="Movie" />
        </figure>
        <div>
          <div className="card-body ">
            <div>
              <h2 className="card-title justify-center">{course.name}</h2>
              <p>{course.description}.</p>
            </div>

            <div className="stats shadow">
              <div className="stat place-items-center">
                <div className="stat-title">Downloads</div>
                <div className="stat-value">31K</div>
                <div className="stat-desc">
                  From January 1st to February 1st
                </div>
              </div>

              <div className="stat place-items-center">
                <div className="stat-title">Users</div>
                <div className="stat-value text-secondary">4,200</div>
                <div className="stat-desc text-secondary">↗︎ 40 (2%)</div>
              </div>

              <div className="stat place-items-center">
                <div className="stat-title">New Registers</div>
                <div className="stat-value">1,200</div>
                <div className="stat-desc">↘︎ 90 (14%)</div>
              </div>
            </div>
            <div className="card-actions justify-center">
              <button className="btn btn-primary">Go Premium</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CourseDetail;
