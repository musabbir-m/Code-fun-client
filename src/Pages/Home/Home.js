import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
    return (
        <div>
            <div className="hero min-h-screen" style={{ backgroundImage: `url("https://img.freepik.com/free-vector/network-mesh-wire-digital-technology-background_1017-27428.jpg?w=2000")` }}>
  <div className="hero-overlay bg-opacity-60"></div>
  <div className="hero-content text-center text-neutral-content">
    <div className="max-w-md">
      <h1 className="mb-5 text-5xl font-bold">Welcome to <span className='text-blue-800 decoraton-inherit'>Code<span>Fun</span> </span></h1>
      <p className="mb-5 text-xl">The emerging leaning platform for competetive programming. Codefun is recognized by the top tech-companies. Awarded one of the best beginner-friendly learning platform of 2022! </p>
     <Link to="/register"><button className="btn btn-primary">Get Started</button></Link> 
    </div>
  </div>
</div>
        </div>
    );
};

export default Home;