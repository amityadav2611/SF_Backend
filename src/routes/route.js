const express = require('express');
const router = express.Router();

const {createNews, getAllNews} = require("../controllers/newsController")

//news API
router.post("/createNews", createNews )
router.get("/getAllNews", getAllNews)



module.exports = router;