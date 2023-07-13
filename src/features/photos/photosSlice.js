import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
  allPhotos: [],
  favorites: [],
  searchedphotos: []
};

export const fetchPhotos = createAsyncThunk("photos/fetchPhotos", async () => {
  try {
    const response = await axios("http://localhost:3001/photos");
    return response.data;
  } catch (error) {
    throw new Error("Error loading photos: " + error.message);
  }
});

export const searchPhotos = createAsyncThunk(
  "photos/searchPhotos",
  async (search) => {
    try {
      const response = await axios("http://localhost:3001/photos/search/?query=" + search)
      console.log("RESPONSE QUERY", response.data)
      return response.data;
    } catch (error) {
      throw new Error("Error searching photos:" + error.message);
    }
  }
);

export const addToFavorites = (photoId) => {
  return {
    type: "photos/addToFavorites",
    payload: photoId,
  };
};

export const photosSlice = createSlice({
  name: "photos",
  initialState,
  reducers: {
    addToFavorites: (state, action) => {
      const photoId = action.payload;
      const photo = state.allPhotos.find((photo) => photo.id === photoId);
      const favorite = state.favorites.find((photo) => photo.id === photoId);
      if (photo && !favorite) state.favorites.push(photo);
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchPhotos.fulfilled, (state, action) => {
        state.allPhotos = action.payload;
      })
      .addCase(searchPhotos.fulfilled, (state, action) => {
        state.searchedphotos = action.payload;
        state.allPhotos = action.payload;
      });
  },
});
export default photosSlice.reducer;
