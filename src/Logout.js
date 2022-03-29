import React from "react";
import { Link } from "react-router-dom";

export default class Signup extends React.Component {
  render() {
    return (
      <div>
        <center>
          <button>
            {" "}
            <Link className="nav-link" to="/">
              Logout
            </Link>
          </button>
        </center>
      </div>
    );
  }
}
