// src/components/Button.jsx
import React from "react";
import { useNavigate } from "react-router-dom";

const Button = ({ title, link, styles }) => {
  const navigate = useNavigate();

  return (
    <button
      type="button"
      className={`py-4 px-6 font-poppins font-medium text-[18px] text-primary bg-blue-gradient rounded-[10px] outline-none ${styles}`}
      onClick={() => navigate(link)}
    >
      {title}
    </button>
  );
};

export default Button;
