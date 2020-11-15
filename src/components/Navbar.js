// components/Navbar.js

import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { useHistory, withRouter } from "react-router";

const Navbar = ({ match, location, history }) => {

//   console.log(match);
//   console.log(location);
  const [isOpen, setOpen] = useState(false);
  const isAuth = !!localStorage.getItem("token");

//   const { match, location, history } = this.props;
//   let history = useHistory();
//   这里使用useHistory的 isAuth不会更新？？ 神奇事件？？？！
  const loginUser = () => {
    localStorage.setItem("token", "some-login-token");
    history.push("/profile/Vijit?name=Vijit");
    // history.push("/profile/Vijit");
  };

  const logoutUser = () => {
    localStorage.removeItem("token");
    // history 和 redirect 都可以更改url，一个是js处代码，一个是UI处的代码
    history.push("/");
  };

  return (
    <nav
      className="navbar is-primary"
      role="navigation"
      aria-label="main navigation"
    >
      <div className="container">
        <div className="navbar-brand">
          <a
            role="button"
            className={`navbar-burger burger ${isOpen && "is-active"}`}
            aria-label="menu"
            aria-expanded="false"
            onClick={() => setOpen(!isOpen)}
          >
            <span aria-hidden="true"></span>
            <span aria-hidden="true"></span>
            <span aria-hidden="true"></span>
          </a>
        </div>

        <div className={`navbar-menu ${isOpen && "is-active"}`}>
          <div className="navbar-start">
            <NavLink 
              strict 
              exact
              className="navbar-item" 
              activeClassName="is-active" 
              to="/">
              Home
            </NavLink>

            <NavLink
              className="navbar-item"
              activeClassName="is-active"
              to="/about"
              strict
            >
              About
            </NavLink>

            <NavLink
              className="navbar-item"
              activeClassName="is-active"
              to="/profile"
              strict
            >
              Profile
            </NavLink>
            <Navbar
              className="navbar-item"
              activeClassName="is-active"
              to="/public-profile"
              strict
            >
                PublicProfile
            </Navbar>
          </div>

          <div className="navbar-end">
            <div className="navbar-item">
              <div className="buttons">
                {!isAuth ? (
                  <button className="button is-white" onClick={loginUser}>
                    Log in
                  </button>
                ) : (
                  <button className="button is-black" onClick={logoutUser}>
                    Log out
                  </button>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

// export default Navbar;
// withRouter 类似一个contetx作用。被它wrap的组件，可直接访问某个内容，不需要pass props
export default withRouter(Navbar);