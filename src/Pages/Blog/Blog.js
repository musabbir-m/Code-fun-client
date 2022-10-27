import React from "react";
import { Link } from "react-router-dom";

const Blog = () => {
  return (
    <div>
      <div>
        <div>
          <div
            className="hero h-96 "
            style={{
              backgroundImage: `url("https://img.freepik.com/free-photo/abstract-dark-blurred-background-smooth-gradient-texture-color-shiny-bright-website-pattern-banner-header-sidebar-graphic-art-image_1258-83087.jpg?w=1380&t=st=1666878273~exp=1666878873~hmac=1286f7c9e4d7568a24aae734742e7f1efe8b2dd9b52699944d073e0fa4e4d1da")`,
            }}
          >
            <div className="hero-overlay bg-opacity-60"></div>
            <div className="hero-content text-center text-neutral-content">
              <div className="max-w-md">
                <h1 className="mb-5 text-5xl font-bold">Welcome to CodeFun blog</h1>
                <p className="mb-5">
                 
                </p>
                <Link to="/register" ><button className="btn btn-primary">Get Started</button></Link>
                
              </div>
            </div>
          </div>
        </div>
        <div className="text-4xl shadow-sm rounded mx-3 mt-2 bg-slate-300 px-5 py-3 mb-4">
          <h2 className="mb-4">What is CORS?</h2>
          <p className="text-xl">
            CORS is the mechanism that provides the ability to alter the
            behavior of this policy, enabling you to do things like hosting
            static content at www.example.com and the backend API at
            api.example.com. This kind of request would be called a Cross-Origin
            request, as a resource from one subdomain is requesting a resource
            from another subdomain. This is all controlled through preflight
            requests that exchange a set of HTTP request headers and
            corresponding response headers collectively referred to as "CORS
            Headers", each of these headers modifies a different element of the
            Same-Origin policy to loosen the limitations it imposes.
          </p>
        </div>
        <div className="text-4xl shadow-sm rounded mx-3 mb-4 pb-4 mt-2 bg-slate-300">
          <h2>
            Why are you using firebase? What other options do you have to
            implement authentication?
          </h2>
          <p className="text-xl justify-start">
            Firebase is basically a Google-backed app development platform which
            was initially developed by James Tamplin and Andrew Lee in 2011. It
            was officially launched in 2012, and right after the two years of
            launch, Google acquired this platform. In the beginning, Firebase
            was only designed as a Realtime database but after its acquisition
            by Google, it started giving more services. <br />
            Firebase works under the flag of Google, and that’s why it provides
            powerful databases for web and mobile application development.
            <br />
            The top advantages of firebase are- <br />
          </p>
          <ul className=" list-decimal">
            <li>Fast and safe hosting</li>
            <li>Reliable and extensive databes</li>
            <li>Google analytics</li>
            <li>Free multi-platform Firebase athentication</li>
            <li>Free use of Firebase dynamic links</li>
          </ul>
        </div>
        <div className="text-4xl shadow-sm rounded mx-3 mb-4 pb-4 mt-2 bg-slate-300">
          <h2>How does the private route works?</h2>
          <p className="text-xl">
            The private route component is similar to the public route, the only
            change is that redirect URL and authenticate condition. If the user
            is not authenticated he will be redirected to the login page and the
            user can only access the authenticated routes If he is authenticated
            (Logged in).
          </p>
        </div>
        <div className=" shadow-sm rounded mx-3 mt-2 bg-slate-300 py-5">
          <h2 className="text-4xl">What is Node JS</h2>
          <p className="text-xl">
            Node.js is a JavaScript runtime environment. The Node.js run-time
            environment includes everything you need to execute a program
            written in JavaScript. Node.js came into existence when the original
            developers of JavaScript extended it from something you could only
            run in the browser to something you could run on your machine as a
            standalone application. <br />
          </p>
          <h4 className="text-2xl my-2">How does Node js work?</h4>
          <p className="text-xl">
            Node.js accepts the request from the clients and sends the response,
            while working with the request node.js handles them with a single
            thread. To operate I/O operations or requests node.js use the
            concept of threads. Thread is a sequence of instructions that the
            server needs to perform. It runs parallel on the server to provide
            the information to multiple clients. Node.js is an event loop
            single-threaded language. It can handle concurrent requests with a
            single thread without blocking it for one request.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Blog;
