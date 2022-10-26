import React from 'react';
import { useLoaderData } from 'react-router-dom';

const CourseDetail = () => {
    const course= useLoaderData()
    console.log(course, 'hehehe');
    return (
        <div>
            <h2>All course here</h2>
        </div>
    );
};

export default CourseDetail;