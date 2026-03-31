import React, { useEffect } from "react";
import "../../styles/Role.css";
import Header from "../../components/Headers/Header";
import { useNavigate } from "react-router-dom";
import checkLogo from "../../assets/role_logos/check.png";
import { FooterRole } from "../../components/Footer/Footer";

export default function RolePage() {
  // navigate hook
  const navigate = useNavigate();
  // Get user and institute data from localStorage
  const user = JSON.parse(localStorage.getItem("user"));
  const institute = JSON.parse(localStorage.getItem("institute"));
  const roles = institute?.roles || [];

  // Get all institutes for change institute option
  const institutes = user?.institutes || [];

  // DARK THEME
  useEffect(() => {
    const theme = localStorage.getItem("theme");

    if (theme === "dark") {
      document.body.classList.add("dark");
    } else {
      document.body.classList.remove("dark");
    }
  }, []);

  return (
    <div className="role-container">

      {/* HEADER */}
      <Header user={user} />

      {/* CHANGE INSTITUTE */}
      {institutes.length > 1 && (
        <div
          className="change-inst"
          onClick={() => navigate("/institutes")}
        >
          ← Change Institute
        </div>
      )}

      {/* SELECTED INSTITUTE */}
      <div className="selected-inst">
        <div className="left para">
          <img src={institute?.logo} alt="" />
          <div>
            <h4>{institute?.name}</h4>
            <div className="location" style={{ marginLeft: "-2px" }}>
              <svg xmlns="http://www.w3.org/2000/svg" height="16px" viewBox="0 -960 960 960" width="16px" fill="#929292"><path d="M536.5-503.5Q560-527 560-560t-23.5-56.5Q513-640 480-640t-56.5 23.5Q400-593 400-560t23.5 56.5Q447-480 480-480t56.5-23.5ZM480-186q122-112 181-203.5T720-552q0-109-69.5-178.5T480-800q-101 0-170.5 69.5T240-552q0 71 59 162.5T480-186Zm0 106Q319-217 239.5-334.5T160-552q0-150 96.5-239T480-880q127 0 223.5 89T800-552q0 100-79.5 217.5T480-80Zm0-480Z" /></svg>

              <p>{institute?.location}</p>
            </div>
          </div>
        </div>

        <div className="verified">
          <img className="check-icon" src={checkLogo} alt="verified" />
        </div>
      </div>

      {/* TITLE */}
      <div className="title-section">
        <h2>Choose Your Role</h2>
        <p>Select how you'd like to access {institute?.name}</p>
      </div>

      {/* ROLE LIST */}
      <div className="role-list">
        {roles.map((role, index) => (
          <div
            className="role-card"
            key={index}
            onClick={() => {
              localStorage.setItem("role", JSON.stringify(role));
              navigate("/dashboard");
            }}
          >

            <div className="left">
              <img src={role.icon} alt="" className="role-icon" />

              <div>
                <h4>{role.name}</h4>
                <p>{role.desc}</p>
              </div>
            </div>

            {/* button */}
            <button className="arrow-btn">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M9.71087 16.707L15.4179 11L9.71087 5.29297L8.29688 6.70697L12.5899 11L8.29688 15.293L9.71087 16.707Z" fill="#07305D" />
              </svg>
            </button>

          </div>
        ))}
      </div>

      {/* FOOTER */}
      <FooterRole />

    </div>
  );
}