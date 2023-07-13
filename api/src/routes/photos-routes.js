const { Router } = require("express")
const {GET_AllPhotos, GET_SearchPhotos} = require("../handlers/photo-handlers")


const router = Router()


router.get("/", GET_AllPhotos);
router.get("/search/", GET_SearchPhotos);

module.exports = router;
