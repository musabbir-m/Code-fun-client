import React from "react";
import { useContext } from "react";
import { AuthContext } from "../../Context/UserContext";
import { Link } from "react-router-dom";

const Header = () => {
  const { user } = useContext(AuthContext);

  return (
    <div>
      <div className="navbar bg-fuchsia-500	">
        <div className="flex-1">
          <Link className="btn btn-ghost normal-case text-xl">
            {" "}
            <img src="/public/v920-kul-52.jpg"></img> CodeFun
          </Link>
        </div>
        <div className="flex-none">
          <ul className="menu menu-horizontal p-0">
            <li>
              <Link to="/courses"> Courses</Link>
            </li>
            <li>
              <Link to="/blog"> Blog</Link>
            </li>
            <li>
              <Link to="/register"> Register</Link>
            </li>

            {/* login and register will be toogled based on user and show the user img*/}
            <li>
              <Link to="/Login"> Login</Link>
            </li>

            <li>
              <Link to="/faq"> Faq</Link>
            </li>

            <li>
              <Link>{user?.name}</Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Header;
