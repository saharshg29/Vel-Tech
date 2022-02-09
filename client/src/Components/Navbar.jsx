import React from "react";
import { useNavigate } from "react-router-dom";
import "./nav.css";

export default function Navbar() {
  const navigate = useNavigate()
  return (
    <div>
      <nav>
        <p onClick={() => navigate('/signin')}>Sign-In</p>
        <p onClick={() => navigate('/signup')}>Sign-Up</p>
        <p>Contact</p>
      </nav>
    </div>
  );
}
