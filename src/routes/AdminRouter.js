const express = require("express");
const router = express.Router();
const AdminController = require("../controllers/AdminControler");

router.get("/getAdmin/:id", AdminController.getAdmin);
router.post("/addAdmin", AdminController.addAdmin);
router.put("/update", AdminController.updateAdmin);
router.delete("/remove", AdminController.removeAdmin);
router.delete("/clear", AdminController.clearAdmin);

// router.post("/placeorder", CartController.placeOrder);
module.exports = router;
