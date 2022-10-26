import React from "react";
import { useLoaderData } from "react-router-dom";
import { Link } from "react-router-dom";

const CourseDetail = () => {
  const course = useLoaderData();
  console.log(course, "hehehe");
  return (
    <div>
    
     <button> <Link to={`/courses/${course.id}`}>{course.name}</Link></button>
     <p>{course.description}</p>
    </div>
  );
};

export default CourseDetail;
