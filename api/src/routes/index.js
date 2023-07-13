const { Router } = require('express');

const photoRoutes = require("./photos-routes")

const router = Router();


router.use("/photos", photoRoutes);

module.exports = router;