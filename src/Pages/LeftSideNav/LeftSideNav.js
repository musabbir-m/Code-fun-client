import React from 'react';
import { useState } from 'react';
import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import Category from '../Category/Category';

const LeftSideNav = () => {
    const [courses, setCourses]= useState([])
    console.log(courses);
    useEffect(()=>{
    fetch('http://localhost:5000/courses')
    .then(res=>res.json())
    .then(data=> setCourses(data))
 } ,[])
    return (
        <div>
            <div>
                {
                    courses.map(course=> <p key={course.id}>
                        <Link to={`/courses/${course.id}`}>{course.name}</Link>
                    </p>
                        
                        )
                }
            </div>
        </div>
    );
};

export default LeftSideNav;