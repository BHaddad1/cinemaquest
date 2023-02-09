import React from "react";
import "./Error.css"
import { Link } from "react-router-dom";

const Error = () => {

  return (
    <section className="error-container">
      <h2 className="error">Sorry, page not found.</h2>
      <Link to="/">
        <button className="error-button">Go Back Home</button>
      </Link>
    </section>
  )
}

export default Error;