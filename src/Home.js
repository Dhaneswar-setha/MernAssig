import React, { useState } from "react";
import "./App.css";
import axios from "axios";
import { BrowserRouter, Route, Switch, Link, Redirect } from "react-router-dom";
import { useHistory } from "react-router-dom";

const Home = ({ setLoginUser }) => {
  const history = useHistory();
  const [user, setUser] = useState({
    email: "",
    password: ""
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUser({
      ...user,
      [name]: value
    });
  };
  const login = () => {
    axios.post("http://localhost:9002/Home", user).then((res) => {
      alert(res.data.message);
      setLoginUser(res.data.user);
      history.push("");
    });
  };

  return (
    <div>
      <div
        style={{
          width: "800px",
          margin: "auto",
          backgroundColor: "rgb(132 0 255 / 59%)",
          padding: "30px"
        }}
      >
        <center>
          <section className="vh-100">
            <div className="container-fluid h-custom">
              <div className="row d-flex justify-content-center align-items-center h-100">
                <div className="col-md-9 col-lg-6 col-xl-5">
                  <img
                    style={{ width: "490px", height: "198px" }}
                    src="https://mdbootstrap.com/img/Photos/new-templates/bootstrap-login-form/draw2.png"
                    className="img-fluid"
                    alt="Sample image"
                  />
                </div>
                <div className="col-md-8 col-lg-6 col-xl-4 offset-xl-1">
                  <form>
                    <table>
                      <h1 style={{ MozTextBlink: "blink" }}>WELLCOME</h1>

                      <div className="form-outline mb-4">
                        <input
                          type="email"
                          id="form3Example3"
                          name="email"
                          value={user.email}
                          onChange={handleChange}
                          className="form-control form-control-lg"
                          placeholder="Enter a valid email address"
                        />
                        <label className="form-label" for="form3Example3">
                          Email address
                        </label>
                      </div>

                      <div className="form-outline mb-3">
                        <input
                          type="password"
                          id="form3Example4"
                          name="password"
                          value={user.password}
                          onChange={handleChange}
                          className="form-control form-control-lg"
                          placeholder="Enter password"
                        />
                        <label className="form-label" for="form3Example4">
                          Password
                        </label>
                      </div>

                      <div className="d-flex justify-content-between align-items-center">
                        <div className="form-check mb-0">
                          <input
                            className="form-check-input me-2"
                            type="checkbox"
                            value=""
                            id="form2Example3"
                          />
                          <label
                            className="form-check-label"
                            for="form2Example3"
                          >
                            Remember me
                          </label>
                        </div>
                      </div>

                      <div className="text-center text-lg-start mt-4 pt-2">
                        <button
                          type="button"
                          className="btn btn-primary btn-lg"
                          style={{
                            paddingleft: "2.5rem",
                            paddingright: "2.5rem",
                            backgroundColor: "red",
                            color: "white"
                          }}
                          onClick={login}
                        >
                          {" "}
                          Login
                        </button>
                        <div>or</div>
                        <div
                          className="button"
                          onClick={() => history.push("/Register")}
                        >
                          Don't have an account?
                        </div>
                      </div>
                    </table>
                  </form>
                </div>
              </div>
            </div>
          </section>
        </center>
      </div>
    </div>
  );
};

export default Home;
