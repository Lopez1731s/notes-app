import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import AppBar from "./components/AppBar";
import New from "./pages/New";
import Search from "./pages/Search";

const App = () => {
  return (
    <Router>
      <AppBar />
      <Routes>
        <Route path="/" element={<New />} />
        <Route path="/search" element={<Search />} />
      </Routes>
    </Router>
  );
};

export default App;
