import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom"
import Home from "./Home";
import NavBar from "./Navbar";
import About from "./About";
import Login from "./Login";
import Messages from "./Messages";

function App() {
  return (
    <BrowserRouter>
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/login" element={<Login />} />
        <Route path="/messages" element={<Messages />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App;