import React from "react";
import { useContext } from "react";
import { AuthContext } from "../../Context/UserContext";
import { Link } from "react-router-dom";
import { FaUserAlt } from "react-icons/fa";

const Header = () => {
  const { user, logOut } = useContext(AuthContext);
  const handleLogOut = () => {
    logOut();
  };

  return (
    <div>
      <div className="navbar bg-blue-300	">
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
              <Link to="/faq"> Faq</Link>
            </li>
            <li>
              <Link>
                {user?.userName && <p>{user.userName}</p>}
                {user?.photoURL ? (
                  <div className="tooltip" data-tip="hello">
                    <img
                      className="w-10 rounded-full"
                      alt="user"
                      src={user?.photoURL}
                    ></img>
                  </div>
                ) : (
                  <p className="tooltip" data-tip={user?.displayName}>
                    <FaUserAlt></FaUserAlt>
                  </p>
                )}
              </Link>
            </li>

            {/**conditonal button*/}
            {user?.uid ? (
              <>
                <button onClick={handleLogOut}>Log out</button>
              </>
            ) : (
              <>
                <li>
                  <Link to="/Login"> Login</Link>
                </li>

                <li>
                  <Link to="/register"> Register</Link>
                </li>
              </>
            )}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Header;
