import React from "react";
import { Route, Routes, useLocation } from "react-router-dom";
import { Home, Favorites, About, LandingPage, Footer } from "./views";
import { NavBar, SearchBar } from "./components";
import { useSelector } from "react-redux";
import "./App.css"

function App() {
  let photos = useSelector(state=>state.photos)
  console.log("photos:", photos)
  let location = useLocation();
  console.log(location.pathname)

  return (
    
    <>
      {/* {location.pathname !== "/" && ( */}
      
        <NavBar /> 
        <SearchBar />
        
      {/* )} */}
      <Routes>
      <Route exact path="/" element={<Home />} />
      <Route exact path="/home" element={<Home />} />
      <Route exact path="/favorites" element={<Favorites />} />
      <Route exact path="/about" element={<About />} />
      
      </Routes>      
      <Footer />
    </>
  );
}

export default App;