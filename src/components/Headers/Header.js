import React from "react";
import logo from "../../assets/images/black-logo.png";
import "./Header.css";

export default function Header({ user, showLogout, onLogout, fullWidth }) {
  return (
    <div className={fullWidth ? "header header-full" : "header header-center"}>

      <div className="brand">
        <img src={logo} alt="logo" className="logo-image" />
        <span>SchoolCoreOS</span>
      </div>

      <div className="header-right">
        <div className="avatar">
          {user?.name
            ?.split(" ")
            .map(word => word.charAt(0))
            .join("")
            .toUpperCase() || "AR"}
        </div>

        {/* LOG OUT BUTTON */}
        {showLogout && (
          <button className="logout-btn" onClick={onLogout}>
            Logout
          </button>
        )}
      </div>

    </div>
  );
}