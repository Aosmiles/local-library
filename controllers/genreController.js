// eslint-disable-next-line no-unused-vars
import Genre from "../models/genre.js";

export default {
  genre_list: (req, res) => {
    res.send("not implemented: genre list");
  },

  genre_detail: (req, res) => {
    res.send(`not implemented: genre detail ${req.params.id}`);
  },

  genre_create_get: (req, res) => {
    res.send("not implemented: genre create get");
  },

  genre_create_post: (req, res) => {
    res.send("not implemented: genre create post");
  },

  genre_delete_get: (req, res) => {
    res.send("not implemented: genre delete get");
  },

  genre_delete_post: (req, res) => {
    res.send("not implemented: genre delete post");
  },

  genre_update_get: (req, res) => {
    res.send("not implemented: genre update get");
  },

  genre_update_post: (req, res) => {
    res.send("not implemented: genre update post");
  },
};
