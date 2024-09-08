const express = require("express");
const {createPost, likePost, disLikePost , comment , getAllPost, getPostById} = require("../controller/post");
// const {isAuthenticated} = require("../middlewares/auth");

const router = express.Router();


router.route("/post").get(getAllPost);
router.route("/post/:id").get(getPostById);
// router.route("/post/upload").post(isAuthenticated,createPost);
router.route("/post/upload").post(createPost);
// router.route("/post/:id/like").get(isAuthenticated,likePost);
// router.route("/post/:id/dislike").get(isAuthenticated,disLikePost);
router.route("/post/:id/like").get(likePost);
router.route("/post/:id/dislike").get(disLikePost);
// router.route("/post/:id").delete(isAuthenticated,deletePost)
// router.route("/post/:id/comment").post(isAuthenticated,comment)
router.route("/post/:id/comment").post(comment)


module.exports = router;