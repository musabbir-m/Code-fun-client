import React from 'react';
import AllCourseCards from '../AllCourseCards/AllCourseCards';
import CourseDetail from '../CourseDetails/CourseDetail';
import LeftSideNav from '../LeftSideNav/LeftSideNav';

const Courses = () => {
    return (
        <div className='l md:grid gap-3 grid-cols-3   lg: mr-12'>
            <div className='bg-blue-200'>
            <LeftSideNav></LeftSideNav>
            </div>
            <div className='col-span-2'>
            <AllCourseCards></AllCourseCards>
            </div>
           
        </div>
    );
};

export default Courses;