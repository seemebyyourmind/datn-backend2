const CartService = require("../services/CartService");

const getCart = async (req, res) => {
  try {
    // check trùng số điện thoại
    const pets = await CartService.getPetCart(req.params.id);
    const petProduct = await CartService.getStuffCart(req.params.id);

    //Tạo tài khoản
    return res.status(200).json({ pets, petProduct });
  } catch (e) {
    console.log(e);
    return res.status(404).json({});
  }
};

const addCart = async (req, res) => {
  try {
    if (req.body.type === "pet") {
      const pets = await CartService.addPetCart(
        req.body.user_id,
        req.body.stuff_id
      );
    } else if (req.body.type === "stuff") {
      const petProduct = await CartService.addStuffCart(
        req.body.user_id,
        req.body.stuff_id,
        req.body.number
      );
    }

    //Tạo tài khoản
    return res.status(200).json({ sucess: "ok" });
  } catch (e) {
    console.log(e);
    return res.status(404).json({});
  }
};

const updateCart = async (req, res) => {
  try {
    // check trùng số điện thoại
    const pets = await CartService.updateCart(
      req.body.user_id,
      req.body.stuff_id,
      req.body.number
    );

    //Tạo tài khoản
    return res.status(200).json({ success: "ok" });
  } catch (e) {
    console.log(e);
    return res.status(404).json({});
  }
};
const removeCart = async (req, res) => {
  try {
    if (req.body.type === "pet") {
      const pets = await CartService.removePetCart(
        req.body.user_id,
        req.body.product_id
      );
    } else if (req.body.type === "stuff") {
      const petProduct = await CartService.removeStuffCart(
        req.body.user_id,
        req.body.product_id
      );
    }

    //Tạo tài khoản
    return res.status(200).json({ sucess: "ok" });
  } catch (e) {
    console.log(e);
    return res.status(404).json({});
  }
};
const clearCart = async (req, res) => {
  try {
    // check trùng số điện thoại
    await CartService.clearPetCart(req.body.user_id);
    await CartService.clearStuffCart(req.body.user_id);
    //Tạo tài khoản
    return res.status(200).json({ sucess: "ok" });
  } catch (e) {
    console.log(e);
    return res.status(404).json({});
  }
};

// const placeOrder = async (req, res) => {
//   try {
//     // check trùng số điện thoại
//     CartService.placeOrder(req.body.user_id);
//     return res.status(200).json({ sucess: "ok" });
//   } catch (e) {
//     console.log(e);
//     return res.status(404).json({});
//   }
// };

module.exports = {
  getCart,
  updateCart,
  removeCart,
  clearCart,
  addCart,

  // placeOrder,
};
