const express = require("express");
const router = express.Router();

const blogController = require("../controllers/blogController");

router.get("/", blogController.getAllArticle);
// router.post("/", blogController.postLikeArticle);
// router.post("/", blogController.postDislikeArticle);

// router.get("/write-comment/:articleId", blogController.getWriteComment);
// router.post("/write-comment", blogController.postWriteComment);

router.get("/add-article", blogController.getAddArticle);
// router.post("/add-article", adminController.postAddArticle);

// router.get("/edit-delete-article/:articleId", adminController.getEditArticle);
// router.post("/edit-delete-article", adminController.postEditArticle);
// router.post("/edit-delete-article", adminController.postDeleteArticle);

module.exports = router;