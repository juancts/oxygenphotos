//import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import Cards from "../../components/Cards/Cards";

import React, { useEffect } from "react";
import { fetchPhotos } from "../../features/photos/photosSlice";


function Home() {

const dispatch = useDispatch()

useEffect(()=>{
  dispatch(fetchPhotos())
},[dispatch])

  return (
    <div>
      
      <Cards />
    </div>
  );
}

export default Home;
