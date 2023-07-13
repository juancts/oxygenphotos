const {
  getphotos,
  searchphotos,
} = require("../controllers/photos-controllers");

const GET_AllPhotos = async (req, res) => {
  try {
    const allPhotos = await getphotos();
    console.log("ALL PHOTOS HANDLER", allPhotos);
    return res.status(200).send(allPhotos);
  } catch (error) {
    return res.status(401).send(error.message);
  }
};

const GET_SearchPhotos = async (req, res) => {
  const search = req.query;
  
  try {
    console.log("SEARCH QUERY", search.query)
    const resultPhotos = await searchphotos(search.query);
    return res.status(200).send(resultPhotos);
  } catch (error) {
    return res.status(401).send(error.message);
  }
  
};

module.exports = {
  GET_AllPhotos,
  GET_SearchPhotos,
};
