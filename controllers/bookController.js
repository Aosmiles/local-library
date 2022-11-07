import Book from "../models/book.js";
import Author from "../models/author.js";
import Genre from "../models/genre.js";
import Bookinstance from "../models/bookinstance.js";

export default {
  index: (req, res, next) => {
    Promise.all([
      Book.countDocuments({}),
      Bookinstance.countDocuments({}),
      Bookinstance.countDocuments({ status: "Available" }),
      Author.countDocuments({}),
      Genre.countDocuments({}),
    ])
      .then((values) => {
        const [books, bookinstances, bookinstancesAvailable, authors, genres] =
          values;
        res.render("home", {
          title: "Local Library Home",
          data: {
            books,
            bookinstances,
            bookinstancesAvailable,
            authors,
            genres,
          },
        });
      })
      .catch((err) => {
        return next(err);
      });
  },

  book_list: (req, res, next) => {
    Book.find({}, "title author")
      .sort({ title: 1 })
      .populate("author")
      .exec(function (err, bookList) {
        if (err) {
          return next(err);
        }
        res.render("book_list", {
          title: "Book List",
          bookList: bookList,
        });
      });
  },

  book_detail: (req, res, next) => {
    Promise.all([
      Book.findById(req.params.id).populate("author").populate("genre"),
      Bookinstance.find({ book: req.params.id }),
    ])
      .then(([book, bookinstances]) => {
        if (!book) {
          const err = new Error("Book not found");
          err.status = 404;
          return next(err);
        }
        res.render("book_detail", {
          title: book.title,
          book: book,
          bookinstances: bookinstances,
        });
      })
      .catch((err) => {
        return next(err);
      });
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
