import React, { useEffect } from "react";
import "../../styles/DashboardPage.css";
import Header from "../../components/Headers/Header";
import { useNavigate } from "react-router-dom";

export default function Dashboard() {

  const navigate = useNavigate();

  const user = JSON.parse(localStorage.getItem("user"));

  // Handle Logout
  function handleLogout() {
    const theme = localStorage.getItem("theme"); // save theme
    localStorage.clear(); // clear everything
    localStorage.setItem("theme", theme); // restore theme
    navigate("/");
  }

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
    <div className="dashboard-container">

      {/* HEADER */}
      <Header
        user={user}
        showLogout={true}
        onLogout={handleLogout}
        fullWidth={true}
      />



      {/* TITLE */}
      <div className="dashboard-title">
        <h2>Hi {user?.name} 👋</h2>
        <h4>Access your personalized dashboard</h4>
      </div>

      {/* Dashboard Cards */}
      <div className="dashboard-grid">
        {/* ard one */}
        <div className="dash-card blue">
          <h2>08</h2>
          <h4>Active Institutes</h4>
          <p>
            Institutes actively operating and using the platform for daily management
          </p>
        </div>
        {/* Card 2 */}
        <div className="dash-card green">
          <h2>05</h2>
          <h4>Inactive Institutes</h4>
          <p>
            Institutes currently inactive and not participating in system operations
          </p>
        </div>
        {/* Card 3 */}
        <div className="dash-card yellow">
          <h2>15+</h2>
          <h4>Total Modules</h4>
          <p>
            Complete set of features enabling academic and administrative workflows
          </p>
        </div>
        {/* Card 4 */}
        <div className="dash-card purple">
          <h2>50+</h2>
          <h4>Total Users</h4>
          <p>
            All registered users across institutes using the platform services
          </p>
        </div>

      </div>

    </div>
  );
}