import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import InfoPage from "./pages/InfoPage.jsx";
// import AppReport from "./pages/AppReport.jsx";
import "./index.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route index element={<App />} />
        <Route path="/info" element={<InfoPage />} />
        {/* <Route path="/report" element={<AppReport />} /> */}
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);
