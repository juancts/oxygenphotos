import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import { photos_access_key } from "../../utils/url&ports";

const initialState = {
  allPhotos: [],
  searchedphotos: [],
};

export const fetchPhotos = createAsyncThunk("photos/fetchPhotos", async () => {
  try {
    let allPhotos = [];
    const url = `https://api.unsplash.com/photos?per_page=12&client_id=${photos_access_key}`;
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
          photo: e.urls.thumb,
          likes: e.likes,
          download: e.links.download,
          added: e.created_at
      }
    })
    return allPhotosResult;
    //const response = await axios(`${baseURL}/photos`)
    //return response.data;
  } catch (error) {
    throw new Error("Error carga photos: " + error.message);
  }
});

export const searchPhotos = createAsyncThunk(
  "photos/searchPhotos",
  async (search) => {
    try {
      const url= `https://api.unsplash.com/search/photos?per_page=12&query=${search}&client_id=${photos_access_key}`;
      let result = [];
      if (search === ""){ 
        result= fetchPhotos();
        }else{
        result = await axios(url).then((res)=>{
          return res.data.results;
         });
      }
          
      
      const allPhotosResult = result.map((e,i)=>{
        return{
          index: i,
          id: e.id,
          width: e.width,
          height: e.height,
          description: e.description,
          photo: e.urls.thumb,
          likes: e.likes,
          download: e.links.download,
          added: e.created_at
        }
      })
      
      return allPhotosResult;
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
