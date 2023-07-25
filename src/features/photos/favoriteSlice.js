import { createSlice } from "@reduxjs/toolkit";





const initialState = {
    favorites : []
}


export const addToFavorites = (photoId, allPhotos) => {
    return {
      type: "favorites/addToFavorites",
      payload: {photoId, allPhotos},
    };
  };

  export const deleteFavorites = (photoId) => {
    return{
      type:"favorites/deleteFavorites",
      payload: photoId,
    }
  }

export const updateFavorite = (photoId, updatedPhoto, favorites)=>{
  return{
    type:"favorites/updateFavorite",
    payload:{photoId, updatedPhoto, favorites}
  }
}

  export const favoriteSlice = createSlice({
    name:"favorites",
    initialState,
    reducers:{
        addToFavorites: (state, action) => {
            
            console.log("en add to favorites")
            const {photoId, allPhotos} = action.payload;
            const photo = allPhotos.find((photo) => photo.id === photoId);
            const favorite = state.favorites.find((photo) => photo.id === photoId);
            if (photo && !favorite) state.favorites.push(photo);
          },
          deleteFavorites:(state, action)=>{
            console.log("en delete favorites")
            const photoId = action.payload;
            state.favorites = state.favorites.filter((photo)=>photo.id !==photoId)
          },
          updateFavorite: (state, action)=>{
            console.log("en UPDATE FVORITES")
            const {photoId, updatedPhoto, favorites} = action.payload
            const photoIndex = favorites.findIndex((photo)=>photo.id === photoId)
            if (photoIndex!==-1) {
              state.favorites[photoIndex] = { ...state.favorites[photoIndex], ...updatedPhoto };
                }
            }
          }
    })


  export default favoriteSlice.reducer;