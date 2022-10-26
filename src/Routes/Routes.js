import { createBrowserRouter } from "react-router-dom";
import Main from "../layout/Main";
import Blog from "../Pages/Blog/Blog";

import CourseDetail from "../Pages/CourseDetails/CourseDetail";
import Courses from "../Pages/Courses/Courses";
import Faq from "../Pages/Faq/Faq";
import Home from "../Pages/Home/Home";
import Login from "../Pages/Login/Login";
import Register from "../Register/Register";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    children: [
      { path: "/", element: <Home></Home> },
      {
        path: "/login",
        element: <Login></Login>
      },
     
      {
        path: "/register", element: <Register></Register>
      },
      {
        path: '/courses', element: <Courses></Courses>
      }
      ,
      {
        path: "/courses/:id", element:<CourseDetail></CourseDetail>
        , loader: ({params})=> fetch(`http://localhost:5000/courses/${params.id}`)
      },

      {
        path:'/blog', element: <Blog></Blog>
      },
      {
        path: '/faq', element: <Faq></Faq>
      }
      
    ],
  },
]);
