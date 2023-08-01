//import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import Cards from "../../components/Cards/Cards";

import React, { useEffect, useState } from "react";
import { fetchPhotos } from "../../features/photos/photosSlice";

function Home() {
  const dispatch = useDispatch();
  const allPhotos = useSelector((state) => state.photos.allPhotos);
  const searchedphotos = useSelector((state) => state.photos.searchedphotos);
  const [toShow, setToshow] = useState(allPhotos);

  useEffect(() => {
    if (allPhotos.length === 0) dispatch(fetchPhotos());
    if (searchedphotos.length > 0) {
      setToshow(searchedphotos);
    } else {
      setToshow(allPhotos);
    }
  }, [allPhotos, searchedphotos, dispatch]);

  return (
    <div>
      <Cards photos={toShow} />
    </div>
  );
}

export default Home;
