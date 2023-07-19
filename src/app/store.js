import { configureStore } from "@reduxjs/toolkit";
import photosReducer from "../features/photos/photosSlice";
import favoritesReducer from "../features/photos/favoriteSlice";

const store = configureStore({
  reducer: {
    photos: photosReducer,
    favorites: favoritesReducer,
  },
});



export default store