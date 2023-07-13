import React from "react";
import { Link } from "react-router-dom";
import "./Nav.css";

function Nav(): JSX.Element {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-evenly",
        alignContent: "center",
        marginTop: "1em",
        marginBottom: "1em",
      }}
    >
      <Link to="/home" className="nav-button">
        HOME
      </Link>
      <Link to="/gpt" className="nav-button">
        GPT
      </Link>
      <Link to="/characters" className="nav-button">
        CHARACTERS
      </Link>
      <Link to="/encounters" className="nav-button">
        ENCOUNTERS
      </Link>
      <Link to="/campaigns" className="nav-button">
        CAMPAIGNS
      </Link>
      <Link to="/resources" className="nav-button">
        RESOURCES
      </Link>
      <Link to="/404" className="nav-button">
        404
      </Link>
    </div>
  );
}

export default Nav;
