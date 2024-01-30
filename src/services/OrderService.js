const db = require("../config/connectDb");

const getAllOrder = (id) => {
  return new Promise((resolve, reject) => {
    db.query("SELECT * FROM `order` WHERE userid=?", [id], (err, results) => {
      if (err) {
        reject("Fail to get resource");
        console.log(err);
      } else {
        // Kiểm tra xem có kết quả trả về không
        if (results.length === 0) {
          reject("Pet not found");
        } else {
          resolve(results); // Trả về thông tin của pet đầu tiên (nếu có)
        }
      }
    });
  });
};

const getPetOrder = (order_id) => {
  return new Promise((resolve, reject) => {
    db.query(
      "SELECT pet_order.*, pet.* FROM pet JOIN pet_order ON pet_order.pet_id = pet.id WHERE pet_order.order_id = ?;",
      [order_id],
      (err, results) => {
        if (err) {
          reject("Fail to get resource");
          console.log(err);
        } else {
          // Kiểm tra xem có kết quả trả về không
          if (results.length === 0) {
            reject("Pet not found");
          } else {
            resolve(results); // Trả về thông tin của pet đầu tiên (nếu có)
          }
        }
      }
    );
  });
};

const getStuffOrder = (order_id) => {
  return new Promise((resolve, reject) => {
    db.query(
      "SELECT stuff_order.*, pet_care_product.* FROM pet_care_product JOIN stuff_order ON stuff_order.stuff_id = pet_care_product.id WHERE stuff_order.order_id = ?;",
      [order_id],
      (err, results) => {
        if (err) {
          reject("Fail to get resource");
          console.log(err);
        } else {
          // Kiểm tra xem có kết quả trả về không
          if (results.length === 0) {
            reject("Pet not found");
          } else {
            resolve(results); // Trả về thông tin của pet đầu tiên (nếu có)
          }
        }
      }
    );
  });
};

const updateStatus = (order_id, status) => {
  return new Promise((resolve, reject) => {
    db.query(
      "UPDATE `order` SET `state` = ? WHERE (`id` = ?);",
      [status, order_id],
      (err, results) => {
        if (err) {
          reject("Fail to get resource");
          console.log(err);
        } else {
          // Kiểm tra xem có kết quả trả về không
          if (results.length === 0) {
            reject("Pet not found");
          } else {
            resolve(results); // Trả về thông tin của pet đầu tiên (nếu có)
          }
        }
      }
    );
  });
};

module.exports = {
  getAllOrder,
  getPetOrder,
  getStuffOrder,
  updateStatus,
};
