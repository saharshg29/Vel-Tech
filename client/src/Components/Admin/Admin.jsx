import React from "react";
import Left from "./Left";

import { Route, Routes, useLocation } from "react-router-dom";

export default function Admin() {
  let location = useLocation();
  return (
    <>
      <div className="container-fluid">
        <div className="row">
          <div className="col-md bg-primary mr-1">
            <Left />
          </div>
          <div className="col-md-8 h-50 ">
            <h1>Admin</h1>
            <br />
            <h3>This is the Admin section.</h3>
            <br />
            <h4>
              Here you can perform all sort of <b>CRUD</b> actions
            </h4>
          </div>
          <div className="col-md bg-primary ml-1">
          </div>
        </div>
      </div>{" "}
      {console.log("render hua")}
    </>
  );
}
