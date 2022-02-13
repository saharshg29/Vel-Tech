import React from "react";
import { useNavigate } from "react-router-dom";


export default function Admin() {
  const navigate = useNavigate()
  return (
    <div>
      Admin
      <div className="container-fluid m">
        <div className="row">
          <div className="col-md bg-primary mr-1">
            <span>What do you want to do?</span>
            <span onClick={() => navigate('/add-student')} className="btn btn-dark text-light">Add Student</span>
            <span onClick={() => navigate('/add-teacher')} className="btn btn-dark text-light">Add Teacher</span>
            <span onClick={() => navigate('/add-subject')} className="btn btn-dark text-light">Add Subject</span>
          </div>
          <div className="col-md-8 ">
            
          </div>
          <div className="col-md bg-primary ml-1">This is right Pannel</div>
        </div>
      </div>
    </div>
  );
}
