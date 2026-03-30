// import './App.css';
// import { Routes, Route, BrowserRouter } from "react-router-dom";
// import Login from "./pages/Login/Login";
// import Institute from "./pages/Institute/Institute"

// function App() {
//   return (
//     <BrowserRouter>
//     <Routes>
//       <Route path="/" element={<Login />} />
//       <Route path="/institutes" element={<Institute />} />
//     </Routes>
//     </BrowserRouter>
//   );
// }

// export default App;



import React, {useEffect} from "react";
import AppRoutes from "./routes/AppRoutes";
import "./styles/DarkTheme.css";

export default function App() {

  useEffect(() => {
    const theme = localStorage.getItem("theme");

    if (theme === "dark") {
      document.body.classList.add("dark");
    } else {
      document.body.classList.remove("dark");
    }
  }, []);


  return <AppRoutes/>;
}
