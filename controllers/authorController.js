const Author = require("../models/author");

exports.author_list = (req, res) => {
  res.send("not implemented: author list");
};

exports.author_detail = (req, res) => {
  res.send(`not implemented: author detail: ${req.params.id}`);
};

exports.author_create_get = (req, res) => {
  res.send("not implemented: author create get");
};

exports.author_create_post = (req, res) => {
  res.send("not implemented: author create post");
};

exports.author_delete_get = (req, res) => {
  res.send("not implemented: author delete get");
};

exports.author_delete_post = (req, res) => {
  res.send("not implemented: author delete post");
};

exports.author_update_get = (req, res) => {
  res.send("not implemented: author update get");
};

exports.author_update_post = (req, res) => {
  res.send("not implemented: author update post");
};
