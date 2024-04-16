const express = require("express");
const router = express.Router();
const CartController = require("../controllers/CartControler");

router.get("/getcart/:id", CartController.getCart);
router.post("/addcart", CartController.addCart);
router.put("/update", CartController.updateCart);
router.delete("/remove", CartController.removeCart);
router.delete("/clear", CartController.clearCart);

// router.post("/placeorder", CartController.placeOrder);
module.exports = router;
