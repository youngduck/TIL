const express = require("express");

const { body } = require("express-validator");
const feedController = require("../controllers/feed");

const router = express.Router();

//GET /feed/posts 엔드포인트에 해당!
router.get(
  "/posts",
  [
    body("title").trim().isLength({ min: 5 }),
    body("content").trim().isLength({ min: 5 }),
  ],
  feedController.getPosts
);

router.post("/post", feedController.createPost);

router.get("/post/:postId", feedController.getPost);
module.exports = router;
