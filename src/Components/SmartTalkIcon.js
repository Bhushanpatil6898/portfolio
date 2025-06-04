import React from "react";
import { BsChatDots } from "react-icons/bs";
import { useNavigate, useLocation } from "react-router-dom";

const SmartTalkIcon = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const handleClick = () => {
    if (location.pathname !== "/chatbox") {
      navigate("/chatbox");
    }
  };

  const handleDoubleClick = () => {
    if (location.pathname === "/chatbox") {
      navigate("/");
    }
  };

  return (
    <div
      onClick={handleClick}
      onDoubleClick={handleDoubleClick}
      style={{
        position: "fixed",
        top: "70px",
        right: "20px",
        cursor: "pointer",
        zIndex: 1000,
        display: "flex",
        flexDirection: "column",
        alignItems: "center"
      }}
    >
      <BsChatDots size={40} color="blue" />
      <span style={{ fontSize: "12px", marginTop: "4px", fontWeight: "bold" }}>
        SmartTalk
      </span>
    </div>
  );
};

export default SmartTalkIcon;
