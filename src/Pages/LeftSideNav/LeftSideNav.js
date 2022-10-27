import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import { Link } from "react-router-dom";

const LeftSideNav = () => {
  const [courses, setCourses] = useState([]);
  console.log(courses);
  useEffect(() => {
    fetch("https://codefun-server.vercel.app/allcourses")
      .then((res) => res.json())
      .then((data) => setCourses(data));
  }, []);
  return (
    <div>
      <div>
        {courses.map((course) => (
          <h4 key={course.id}>
            <Link to={`/courses/${course.id}`}>{course.name}</Link>
          </h4>
        ))}
      </div>
    </div>
  );
};

export default LeftSideNav;
