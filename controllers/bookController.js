// eslint-disable-next-line no-unused-vars
import Book from "../models/book.js";

export default {
  index: (req, res) => {
    res.send("NOT IMPLEMENTED: Site Home Page");
  },

  book_list: (req, res) => {
    res.send("not implemented: book list");
  },

  book_detail: (req, res) => {
    res.send(`not implemented: book detail: ${req.params.id}`);
  },

  book_create_get: (req, res) => {
    res.send("not implemented: book create get");
  },

  book_create_post: (req, res) => {
    res.send("not implemented: book create post");
  },

  book_delete_get: (req, res) => {
    res.send("not implemented: book delete get");
  },

  book_delete_post: (req, res) => {
    res.send("not implemented: book delete post");
  },

  book_update_get: (req, res) => {
    res.send("not implemented: book update get");
  },

  book_update_post: (req, res) => {
    res.send("not implemented: book update post");
  },
};
