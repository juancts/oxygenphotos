import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import { baseURL } from "../../utils/url&ports";
require("dotenv").config()
const { PHOTOS_ACCESS_KEY } = process.env;

const initialState = {
  allPhotos: [],
  searchedphotos: [],
};

export const fetchPhotos = createAsyncThunk("photos/fetchPhotos", async () => {
  try {
    const url = `https://api.unsplash.com/photos/?client_id=${PHOTOS_ACCESS_KEY}`;
    const response = await axios(url)
    //const response = await axios(`${baseURL}/photos`)
    console.log("en fetch")
    return response.data;
  } catch (error) {
    throw new Error("Error loading photos: " + error.message);
  }
});

export const searchPhotos = createAsyncThunk(
  "photos/searchPhotos",
  async (search) => {
    try {
      const response = await axios(`${baseURL}/photos/search/?query=` + search)
      return response.data;
    } catch (error) {
      throw new Error("Error searching photos:" + error.message);
    }
  }
);



export const photosSlice = createSlice({
  name: "photos",
  initialState,
  reducers: {},
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
