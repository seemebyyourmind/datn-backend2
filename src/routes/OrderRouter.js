const express = require("express");
const router = express.Router();
const OrderController = require("../controllers/OrderControler");

router.get("/getall", OrderController.getAllOrder);
router.get("/getorder", OrderController.getOrder);
router.put("/:orderId/updatestatus", OrderController.updateStatus);

module.exports = router;
