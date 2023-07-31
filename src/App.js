import React from "react";
import { Route, Routes, useLocation } from "react-router-dom";
import { Home, Favorites, About, Footer } from "./views";
import NabBar from "./components/NavBar/NavBar.jsx"
import SearchBar from "./components/SearchBar/SearchBar.jsx"
import { useSelector } from "react-redux";
import "./App.css"
import SearchedDescription from "./views/Favorites/SearchedDescription";

function App() {
  let photos = useSelector(state=>state.photos)
  console.log("photos:", photos)
  let location = useLocation();
  console.log(location.pathname)

  return (
    
    <>
      {/* {location.pathname !== "/" && ( */}
      
        <NabBar /> 
        <SearchBar />
        
      {/* )} */}
      <Routes>
      <Route exact path="/" element={<Home />} />
      <Route exact path="/home" element={<Home />} />
      <Route exact path="/favorites" element={<Favorites />} />
      <Route exact path="/favoritessearch" element={<SearchedDescription />} />
      <Route exact path="/about" element={<About />} />
      
      </Routes>      
      <Footer />
    </>
  );
}

export default App;
