import React from "react";
import { useLocation } from "react-router-dom";
import Admin from "./Admin";
import Student from "./Student";
import Teacher from "./Teacher";

export default function Left() {
  let location = useLocation();

  if (location.pathname.includes("/admin")) {
    return <Admin />;
  }
  if (location.pathname.includes("/student")) {
    return <Student />;
  }
  if (location.pathname.includes("/teacher")) {
    return <Teacher />;
  }
  return <div>Left</div>;
}
