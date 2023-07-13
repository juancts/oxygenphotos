const axios = require("axios");
require("dotenv").config();

const { PHOTOS_ACCESS_KEY } = process.env;

//CONTROLADORES PARA OBTENER DATOS DE LAS API

const getphotos = async () => {
  let allPhotos = [];
  const url = `https://api.unsplash.com/photos/?client_id=${PHOTOS_ACCESS_KEY}`;
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
        photo: e.urls.regular
    }
  })
  return allPhotosResult;
};

const searchphotos = async (search) => {
    console.log("SEARCH CONTROLLER:", search)
  let resultPhotos = [];
  const url = `https://api.unsplash.com/search/photos?page=1&query=${search}&client_id=${PHOTOS_ACCESS_KEY}`;
  console.log("search url:", url)
  resultPhotos = await axios(url).then((res) => {
    return res.data.results;
  });
  console.log("SEARCH RESULTS:", resultPhotos)
  const searchphotosResult = resultPhotos.map((e, i)=>{
    return{
        index: i,
        id: e.id,
        width: e.width,
        height: e.height,
        description: e.description,
        photo: e.urls.regular
    }
  })

  return searchphotosResult;
};


 
  
                                                   
module.exports = {
  getphotos,
  searchphotos,
};
