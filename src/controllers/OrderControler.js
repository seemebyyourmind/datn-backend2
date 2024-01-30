const OrderService = require("../services/OrderService");

const getAllOrder = async (req, res) => {
  try {
    // check trùng số điện thoại
    const Orders = await OrderService.getAllOrder(req.body.user_id);

    //Tạo tài khoản
    return res.status(200).json(Orders);
  } catch (e) {
    console.log(e);
    return res.status(404).json({});
  }
};

const getOrder = async (req, res) => {
  try {
    // check trùng số điện thoại
    const pets = await OrderService.getPetOrder(req.body.order_id);
    const petProduct = await OrderService.getStuffOrder(req.body.order_id);

    //Tạo tài khoản
    return res.status(200).json({ pets, petProduct });
  } catch (e) {
    console.log(e);
    return res.status(404).json({});
  }
};
const updateStatus = async (req, res) => {
  try {
    // check trùng số điện thoại
    const pets = await OrderService.updateStatus(
      req.params.orderId,
      req.body.status
    );

    //Tạo tài khoản
    return res.status(200).json({ sucess: "ok" });
  } catch (e) {
    console.log(e);
    return res.status(404).json({});
  }
};

module.exports = { getOrder, getAllOrder, updateStatus };
