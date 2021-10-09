const express = require("express");

const router = express.Router();

const { auth } = require("../middlewares/auth");

const { uploadFile } = require("../middlewares/uploadFile");

//Controller user
const {
  addUser,
  getUsers,
  getUser,
  updateUser,
  deleteUser,
} = require("../controllers/user");

//init route controller user
router.post("/user", addUser);
router.get("/users", getUsers);
router.get("/user/:id", auth, getUser);
router.patch("/user/:id", auth, updateUser);
router.delete("/user/:id", deleteUser);

//Controller books
const {
  addBook,
  getBooks,
  getBook,
  updateBook,
  deleteBook,
} = require("../controllers/books");

//init route controller books
router.post("/book", auth, uploadFile("cover", "bookFile"), addBook);
router.get("/books", getBooks);
router.get("/book/:id", getBook);
router.patch("/book/:id", auth, uploadFile("cover", "bookFile"), updateBook);
router.delete("/book/:id", auth, deleteBook);

//controllers auth
const { register, login, checkAuth } = require("../controllers/auth");

//init route controller auth
router.post("/register", register);
router.post("/login", login);
router.get("/check-auth", auth, checkAuth);

//controllers transactions
const {
  addTransaction,
  getTransactions,
  getTransaction,
  updateTransaction,
} = require("../controllers/transaction");

//init route controller transactions
router.post("/transaction", auth, uploadFile("transferProof"), addTransaction);
router.get("/transactions", getTransactions);
router.get("/transaction/:id", getTransaction);
router.patch("/transaction/:id", auth, updateTransaction);

const { addList, getLists } = require("../controllers/booklist");

router.post("/book-list", auth, addList);
router.get("/book-lists", auth, getLists);

module.exports = router;
