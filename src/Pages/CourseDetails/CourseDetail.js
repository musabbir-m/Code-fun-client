import React from "react";
import { FaUser } from "react-icons/fa";
import { useLoaderData } from "react-router-dom";
import { Link } from "react-router-dom";

const CourseDetail = () => {
  const course = useLoaderData();
  const id= course.id
  console.log(course.id, "hehehe");
  return (
    <div>
      {/* <button> <Link to={`/courses/${course.id}`}>{course.name}</Link></button>
     <img src={course.thumbnail_url} alt=""/>
     <p>{course.description}</p> */}

      {/* <div>
        <div
          className="hero "
          style={{
            backgroundImage: `url("https://placeimg.com/1000/800/arch")`,
          }}
        >
          <div className="hero-overlay bg-opacity-60"></div>
          <div className="hero-content text-center text-neutral-content">
            <div className="max-w-md">
              <h1 className="mb-5 text-5xl font-bold">Hello there</h1>
              <p className="mb-5">
                Provident cupiditate voluptatem et in. Quaerat fugiat ut
                assumenda excepturi exercitationem quasi. In deleniti eaque aut
                repudiandae et a id nisi.
              </p>
              <button className="btn btn-primary">Get Started</button>
            </div>
          </div>
        </div>
      </div> */}

      <div className="card  md:card-side bg-base-100 shadow-xl mx-5 mt-5">
        <figure>
          <img className="w-2/3 rounded" src={course.thumbnail_url} alt="Movie" />
        </figure>
        <div>
          <div className="card-body ">
            <div>
              <h2 className="card-title justify-center text-4xl mb-3">
                {course.name}
              </h2>
              <p className="text-xl">{course.description}.</p>
            </div>

            <div className="stats shadow">
              <div className="stat place-items-center">
                <div className="stat-title">Starts at</div>
                <div className="stat-value">{course.duration} </div>
                <div className="stat-desc"></div>
              </div>

              <div className="stat place-items-center">
                <div className="stat-title">Total enrollment</div>
                <div className="stat-value text-secondary">
                  {course.total_enrolled}
                </div>
                <div className="stat-desc text-secondary"></div>
              </div>

              <div className="stat place-items-center">
                <div className="stat-title">Total hour</div>
                <div className="stat-value">{course.total_hour}</div>
                <div className="stat-desc">↘︎ 90 (14%)</div>
              </div>
            </div>
            <div className="card-actions justify-center">
              <Link to={`/checkout/${id}`}>
                <button className="btn btn-primary">Go Premium</button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CourseDetail;
