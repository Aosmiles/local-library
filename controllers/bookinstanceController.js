// eslint-disable-next-line no-unused-vars
import BookInstance from "../models/bookinstance.js";

export default {
  bookinstance_list: (req, res, next) => {
    BookInstance.find()
      .populate("book")
      .exec(function (err, bookinstanceList) {
        if (err) {
          return next(err);
        }

        bookinstanceList.sort((a, b) => {
          return a.book.title.localeCompare(b.book.title);
        });
        res.render("bookinstance_list", {
          title: "Book Instance List",
          bookinstanceList: bookinstanceList,
        });
      });
  },

  bookinstance_detail: (req, res) => {
    res.send(`not implemented: bookinstance detail: ${req.params.id}`);
  },

  bookinstance_create_get: (req, res) => {
    res.send("not implemented: bookinstance create get");
  },

  bookinstance_create_post: (req, res) => {
    res.send("not implemented: bookinstance create post");
  },

  bookinstance_delete_get: (req, res) => {
    res.send("not implemented: bookinstance delete get");
  },

  bookinstance_delete_post: (req, res) => {
    res.send("not implemented: bookinstance delete post");
  },

  bookinstance_update_get: (req, res) => {
    res.send("not implemented: bookinstance update get");
  },

  bookinstance_update_post: (req, res) => {
    res.send("not implemented: bookinstance update post");
  },
};
