// src/App.jsx
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Landing from "./Pages/Landing";
import Jobs from "./Pages/Jobs";
import Companies from "./Pages/Companies"; 
import SalarySearch from "./Pages/SalarySearch";
import LoginPage from "./Pages/LoginPage";
// import Header from "./assets/components/header";
// import Footer from "./assets/components/footer";   // make sure path is correct

function App() {
  return (
    <Router>
      <div className="flex flex-col min-h-screen">
        {/* Header */}
        {/* <Header /> */}

        {/* Page Routes */}
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Landing />} />
            <Route path="/jobs" element={<Jobs />} />
            <Route path="/companies" element={<Companies />} />
            <Route path="/salaries" element={<SalarySearch />} />
            <Route path="/login" element={<LoginPage />} />
          </Routes>
        </main>

        {/* Footer */}
        {/* <Footer /> */}
      </div>
    </Router>
  );
}

export default App;
