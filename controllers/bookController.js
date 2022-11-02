const Book = require("../models/book");

exports.index = (req, res) => {
  res.send("NOT IMPLEMENTED: Site Home Page");
};

exports.book_list = (req, res) => {
  res.send("not implemented: book list");
};

exports.book_detail = (req, res) => {
  res.send(`not implemented: book detail: ${req.params.id}`);
};

exports.book_create_get = (req, res) => {
  res.send("not implemented: book create get");
};

exports.book_create_post = (req, res) => {
  res.send("not implemented: book create post");
};

exports.book_delete_get = (req, res) => {
  res.send("not implemented: book delete get");
};

exports.book_delete_post = (req, res) => {
  res.send("not implemented: book delete post");
};

exports.book_update_get = (req, res) => {
  res.send("not implemented: book update get");
};

exports.book_update_post = (req, res) => {
  res.send("not implemented: book update post");
};
