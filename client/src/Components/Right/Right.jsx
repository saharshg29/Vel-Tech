import React from "react";
import { useLocation, useNavigate } from "react-router-dom";
import Admin from "./Admin";
import Teacher from "./Teacher";

export default function Right() {
  let location = useLocation();
  let navigate = useNavigate();
  if (location.pathname.includes("/admin")) {
    return <Admin />;
  }
  if (location.pathname.includes("/teacher")) {
    return <Teacher />;
  }

  return <div>Right</div>;
}
