// eslint-disable-next-line no-unused-vars
import Genre from "../models/genre.js";
import Book from "../models/book.js";

export default {
  genre_list: (req, res, next) => {
    Genre.find({})
      .sort({ name: 1 })
      .exec(function (err, genreList) {
        if (err) {
          return next(err);
        }

        res.render("genre_list", {
          title: "Genre List",
          genreList: genreList,
        });
      });
  },

  genre_detail: (req, res, next) => {
    Promise.all([
      Genre.findById(req.params.id),
      Book.find({ genre: req.params.id }),
    ])
      .then(([genre, genreBooks]) => {
        if (!genre) {
          const err = new Error("Genre not found");
          err.status = 404;
          return next(err);
        }

        res.render("genre_detail", {
          title: `${genre.name} Genre`,
          genre: genre,
          genreBooks: genreBooks,
        });
      })
      .catch((err) => {
        return next(err);
      });
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
