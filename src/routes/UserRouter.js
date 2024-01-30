const express = require("express");
const router = express.Router();
const UserController = require("../controllers/UserControler");

router.post("/signup", UserController.createUser);
router.post("/login", UserController.loginUser);
router.put("/update-user", UserController.updateUser);

module.exports = router;
