const express = require("express");

const feedController = require("../controllers/feed");

const router = express.Router();

//GET /feed/posts 엔드포인트에 해당!
router.get("/posts", feedController.getPosts);

router.post("/create", feedController.createPost);

module.exports = router;
