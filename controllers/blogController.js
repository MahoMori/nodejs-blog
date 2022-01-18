const Article = require('../models/article.modelss')

exports.getAllArticle = (req, res, next) => {
  res.render("index", {
    pageTitle: "Blog",
  });
};

exports.getAddArticle = (req, res, next) => {
  res.render("add-edit-delete-article", {
    pageTitle: "Add Article",
    editing: false,
  });
};

// exports.postAddArticle = (req,res,next) => {

// }

// exports.getEachArticle = (req,res,next) => {

// }

// exports.getEditArticle = async(req,res,next) => {

// }

// exports.postEditArticle = (req,res,next) => {

// }

// exports.postDeleteArticle = (req, res, next) => {

// }

// exports.postLikeArticle = (req, res, next) => {

// }

// exports.postDislikeArticle = (req, res, next) => {

// }

// exports.getWriteComment = (req, res, next) => {

// }

// exports.postWriteComment = (req, res, next) => {

// }
