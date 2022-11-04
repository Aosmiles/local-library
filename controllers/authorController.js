// eslint-disable-next-line no-unused-vars
import Author from "../models/author.js";

export default {
  author_list: (req, res) => {
    res.send("not implemented: author list");
  },

  author_detail: (req, res) => {
    res.send(`not implemented: author detail: ${req.params.id}`);
  },

  author_create_get: (req, res) => {
    res.send("not implemented: author create get");
  },

  author_create_post: (req, res) => {
    res.send("not implemented: author create post");
  },

  author_delete_get: (req, res) => {
    res.send("not implemented: author delete get");
  },

  author_delete_post: (req, res) => {
    res.send("not implemented: author delete post");
  },

  author_update_get: (req, res) => {
    res.send("not implemented: author update get");
  },

  author_update_post: (req, res) => {
    res.send("not implemented: author update post");
  },
};
