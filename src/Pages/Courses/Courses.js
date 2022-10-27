import React from "react";
import AllCourseCards from "../AllCourseCards/AllCourseCards";
import CourseDetail from "../CourseDetails/CourseDetail";
import LeftSideNav from "../LeftSideNav/LeftSideNav";

const Courses = () => {
  return (
    <div className=" flex flex-col lg:grid gap-3 grid-cols-3   lg: mr-12">
      <div className=" bg-purple-900 text-white p-5 w-screen lg:w-72 ">
        <LeftSideNav></LeftSideNav>
      </div>
      <div className="col-span-2">
        <AllCourseCards></AllCourseCards>
      </div>
    </div>
  );
};

export default Courses;
