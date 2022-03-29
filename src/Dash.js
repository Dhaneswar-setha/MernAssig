import React from "react";
import { BrowserRouter, Route, Switch, Link, Redirect } from "react-router-dom";
import "./App.css";

import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import Home from "./Home";
import About from "./About";
import Logout from "./Logout";
import Alluser from "./Alluser";
import Profile from "./Profile";
import Register from "./Register";

function Dash() {
  return (
    <div>
      <BrowserRouter>
        <div>
          <nav
            className="navbar navbar-expand-lg navbar-dark "
            style={{ backgroundColor: "#332525" }}
          >
            <div class="container-fluid">
              <a class="navbar-brand" href=""></a>
              <button
                class="navbar-toggler"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#navbarSupportedContent"
                aria-controls="navbarSupportedContent"
                aria-expanded="false"
                aria-label="Toggle navigation"
              >
                <span class="navbar-toggler-icon"></span>
              </button>
              <div class="collapse navbar-collapse" id="navbarSupportedContent">
                <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                  <li className="nav-item">
                    <Link className="nav-link" to="/about">
                      About{" "}
                    </Link>
                  </li>
                  <li className="nav-item">
                    <Link className="nav-link" to="/profile">
                      Profile
                    </Link>
                  </li>
                  <li className="nav-item">
                    <Link className="nav-link" to="/alluser">
                      Alluser
                    </Link>
                  </li>
                  <li className="nav-item">
                    <Link className="nav-link" to="/logout">
                      Logout
                    </Link>
                  </li>
                </ul>
                <form class="d-flex">
                  <input
                    style={{
                      padding: "0 16px",
                      borderRadius: "2px 0 0 2px",
                      border: 0,
                      outline: "0 none",
                      fontSize: "14px",
                      height: "36px",
                      width: "100%"
                    }}
                    type="text"
                    class="_3704LK"
                    title="Search for products, brands and more"
                    name="q"
                    autocomplete="off"
                    placeholder="Search"
                  />

                  <button
                    style={{
                      msFlexPack: "end",
                      justifyContent: "flex-end",
                      border: "1px solid #fff",
                      backgroundColor: " #fff",
                      height: "36px",
                      width: "44px",
                      color: "red",
                      cursor: "pointer",
                      padding: "4px 12px 0 8px"
                    }}
                    class="L0Z3Pu"
                    type="submit"
                  >
                    <svg
                      width="40"
                      height="20"
                      viewBox="0 0 17 18"
                      class=""
                      xmlns="SearchSharp"
                    >
                      <g fill="#2874F1" fill-rule="evenodd">
                        <path
                          class="_34RNph"
                          d="m11.618 9.897l4.225 4.212c.092.092.101.232.02.313l-1.465 1.46c-.081.081-.221.072-.314-.02l-4.216-4.203"
                        ></path>
                        <path
                          class="_34RNph"
                          d="m6.486 10.901c-2.42 0-4.381-1.956-4.381-4.368 0-2.413 1.961-4.369 4.381-4.369 2.42 0 4.381 1.956 4.381 4.369 0 2.413-1.961 4.368-4.381 4.368m0-10.835c-3.582 0-6.486 2.895-6.486 6.467 0 3.572 2.904 6.467 6.486 6.467 3.582 0 6.486-2.895 6.486-6.467 0-3.572-2.904-6.467-6.486-6.467"
                        ></path>
                      </g>
                    </svg>
                  </button>
                </form>

                <ul class="navbar-nav mb-2 mb-lg-0">
                  <li class="nav-item">
                    <a
                      class="nav-link"
                      href="signup"
                      style={{
                        borderColor: "yellow",
                        borderWidth: "1",
                        borderStyle: "solid",
                        padding: "0.35657rem 0.5rem",
                        borderRadius: 3,
                        marginLeft: 6
                      }}
                    >
                      SIGNUP
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </nav>
        </div>

        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/about" component={About} />
          <Route exact path="/profile" component={Profile} />
          <Route exact path="/alluser" component={Alluser} />
          <Route exact path="/logout" component={Logout} />
          <Route exact path="/register" component={Register} />

          <Redirect to="/about"></Redirect>
        </Switch>
      </BrowserRouter>
      <div></div>
    </div>
  );
}

export default Dash;
