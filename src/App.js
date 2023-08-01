import React, { useEffect } from "react";
import { Route, Routes } from "react-router-dom";
import { Home, Favorites, About, Footer } from "./views";
import NabBar from "./components/NavBar/NavBar.jsx"
import SearchBar from "./components/SearchBar/SearchBar.jsx"
import { useDispatch } from "react-redux";
import "./App.css"
import { fetchPhotos } from "./features/photos/photosSlice";


function App() {
  const dispatch = useDispatch()
  useEffect(()=>{
      dispatch(fetchPhotos())
  },[]) 
  

  return (
    
    <>
      {/* {location.pathname !== "/" && ( */}
      
        <NabBar /> 
        <SearchBar />
        
      {/* )} */}
      <Routes>
      <Route exact path="/" element={<Home />} />
      <Route exact path="/oxygenphotos" element={<Home />} />
      <Route exact path="/home" element={<Home />} />
      <Route exact path="/favorites" element={<Favorites />} />
      <Route exact path="/about" element={<About />} />
      
      </Routes>      
      <Footer />
    </>
  );
}

export default App;
