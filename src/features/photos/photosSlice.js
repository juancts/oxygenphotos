import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import { baseURL, photos_access_key } from "../../utils/url&ports";

const initialState = {
  allPhotos: [],
  searchedphotos: [],
};

export const fetchPhotos = createAsyncThunk("photos/fetchPhotos", async () => {
  try {
    let allPhotos = [];
    const url = `https://api.unsplash.com/photos/?client_id=${photos_access_key}`;
    allPhotos = await axios(url).then((res) => {
      return res.data;
    });
    const allPhotosResult = allPhotos.map((e, i)=>{
      return {
          index: i,
          id: e.id,
          width: e.width,
          height: e.height,
          description: e.description,
          photo: e.urls.regular,
          likes: e.likes,
          added: e.created_at
      }
    })
    return allPhotosResult;
    //const response = await axios(`${baseURL}/photos`)
    //return response.data;
  } catch (error) {
    throw new Error("Error lpm: " + error.message);
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
