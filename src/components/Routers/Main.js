import React from "react";
import { Link, Route, Routes } from "react-router-dom";
import About from "./Pages/About";
import Contact from "./Pages/Contact";
import Home from "./Pages/Home";
import NoPage from "./Pages/NoPage";

const Main = () => {

  return (
    <div>
        <div >
            <ul className="list-unstyled">
                <li> <Link to="/" >Home</Link> </li>
                <li> <Link to="about" >About</Link> </li>
                <li> <Link to="contact" >Contact</Link> </li>
                
            </ul>
        </div>



      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="about" element={<About />} />
        <Route path="contact" element={<Contact />} />
        <Route path="*" element={<NoPage/>} />
      </Routes>
    </div>
  );
};

export default Main;
