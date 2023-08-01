import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  favorites: [],
  searchDescription: [],
};

export const addToFavorites = (photoId, allPhotos) => {
  return {
    type: "favorites/addToFavorites",
    payload: { photoId, allPhotos },
  };
};

export const deleteFavorites = (photoId) => {
  return {
    type: "favorites/deleteFavorites",
    payload: photoId,
  };
};

export const updateFavorite = (photoId, updatedPhoto, favorites) => {
  return {
    type: "favorites/updateFavorite",
    payload: { photoId, updatedPhoto, favorites },
  };
};

export const orderFavorites = (order) => {
  return {
    type: "favorites/orderFavorites",
    payload: order,
  };
};

export const searchDescription = (search) => {
  return {
    type: "favorites/searchDescription",
    payload: search,
  };
};

export const favoriteSlice = createSlice({
  name: "favorites",
  initialState,
  reducers: {
    addToFavorites: (state, action) => {
      const { photoId, allPhotos } = action.payload;
      const photo = allPhotos.find((photo) => photo.id === photoId);
      const favorite = state.favorites.find((photo) => photo.id === photoId);
      if (photo && !favorite) state.favorites.push(photo);
    },
    deleteFavorites: (state, action) => {
      const photoId = action.payload;
      state.favorites = state.favorites.filter((photo) => photo.id !== photoId);
    },
    updateFavorite: (state, action) => {
      const { photoId, updatedPhoto, favorites } = action.payload;
      const photoIndex = favorites.findIndex((photo) => photo.id === photoId);
      if (photoIndex !== -1) {
        state.favorites[photoIndex] = {
          ...state.favorites[photoIndex],
          ...updatedPhoto,
        };
      }
    },
    orderFavorites: (state, action) => {
      const order = action.payload;
      switch (order) {
        // case "Options":-
        //    state.favorites = state;
        //   break;
        case "Width":
          state.favorites.sort((a, b) =>
            (a.width?.toString() || "").localeCompare(b.width?.toString() || "")
          );
          break;
        case "Height":
          state.favorites.sort((a, b) =>
            (a.height?.toString() || "").localeCompare(
              b.height?.toString() || ""
            )
          );
          break;
        case "Likes":
          state.favorites.sort((a, b) =>
            (a.likes?.toString() || "").localeCompare(b.likes?.toString() || "")
          );
          break;
        case "Added":
          state.favorites.sort((a, b) =>
            (a.added?.toString() || "").localeCompare(b.added?.toString() || "")
          );
          break;
        default:
          return state;
      }
    },
    // Filter favorites based on the description containing the search query
    searchDescription: (state, action) => {
      let search = action.payload;
      state.searchDescription = search;
    },
  },
});

export default favoriteSlice.reducer;
