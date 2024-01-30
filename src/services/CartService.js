const db = require("../config/connectDb");
const mysql = require("mysql2/promise");
require("dotenv").config();

const getPetCart = (id) => {
  return new Promise((resolve, reject) => {
    db.query(
      "SELECT pet_cart.*, pet.* FROM pet JOIN pet_cart ON pet_cart.pet_id = pet.id WHERE pet_cart.user_id = ?;",
      [id],
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

const getStuffCart = (id) => {
  return new Promise((resolve, reject) => {
    db.query(
      "SELECT stuff_cart.*, pet_care_product.* FROM pet_care_product JOIN stuff_cart ON stuff_cart.stuff_id = pet_care_product.id WHERE stuff_cart.user_id = ?;",
      [id],
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

const updateCart = (user_id, stuff_id, number) => {
  return new Promise((resolve, reject) => {
    db.query(
      "UPDATE stuff_cart SET number = ? WHERE user_id = ? AND stuff_id = ?",
      [number, user_id, stuff_id],
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

const removeCart = (id) => {
  return new Promise((resolve, reject) => {
    db.query(
      "SELECT pet_cart.*, pet.* FROM pet JOIN pet_cart ON pet_cart.pet_id = pet.id WHERE pet_cart.user_id = ?;",
      [id],
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

const clearPetCart = (user_id) => {
  return new Promise((resolve, reject) => {
    db.query(
      "DELETE FROM pet_cart WHERE user_id = ?",
      [user_id],
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

const clearStuffCart = (user_id) => {
  return new Promise((resolve, reject) => {
    db.query(
      "DELETE FROM stuff_cart WHERE user_id = ?",
      [user_id],
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
const addPetCart = (user_id, pet_id) => {
  return new Promise((resolve, reject) => {
    db.query(
      "INSERT INTO pet_cart (user_id, pet_id) VALUES (?,?);",
      [user_id, pet_id],
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

const addStuffCart = (user_id, stuff_id, number) => {
  return new Promise((resolve, reject) => {
    db.query(
      "INSERT INTO stuff_cart (user_id, stuff_id,number) VALUES (?,?,?);",
      [user_id, stuff_id, number],
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

const removePetCart = (user_id, pet_id) => {
  return new Promise((resolve, reject) => {
    db.query(
      "DELETE FROM `pet_cart` WHERE (`user_id` = ?) and (`pet_id` = ?);",
      [user_id, pet_id],
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

const removeStuffCart = (user_id, pet_id) => {
  return new Promise((resolve, reject) => {
    db.query(
      "DELETE FROM `stuff_cart` WHERE (`user_id` = ?) and (`stuff_id` = ?);",
      [user_id, pet_id],
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

const connection = mysql.createConnection({
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_DATABASE,
});
const placeOrder = async (user_id) => {
  {
    try {
      await connection.beginTransaction();

      // Thực hiện các thao tác trong giao dịch
      await queryAsync(
        "INSERT INTO order (user_id, state,price) VALUES (?, ?, ?)",
        [user_id, "Đang giao", 0]
      );
      const [result] = await queryAsync("SELECT LAST_INSERT_ID() as order_id");
      const order_id = result[0].order_id;

      await queryAsync(
        "INSERT INTO stuff_order (order_id, stuff_id,number)SELECT ? AS order_id, stuff_id,number FROM stuff_cart;",
        [order_id]
      );
      await queryAsync(
        "INSERT INTO pet_order (order_id, pet_id)SELECT ? AS order_id, pet_id FROM pet_cart;",
        [order_id]
      );

      await queryAsync("DELETE FROM cart WHERE user_id = ?", [user_id]);

      await connection.commit();

      console.log("Order placed successfully");
    } catch (error) {
      await connection.rollback();

      console.error("Error placing order:", error);
    }
  }

  // Thay đổi hàm queryAsync để sử dụng connection.query
  function queryAsync(sql, values) {
    return new Promise((resolve, reject) => {
      connection.query(sql, values);
    });
  }
};

module.exports = {
  getPetCart,
  getStuffCart,
  updateCart,
  addPetCart,
  addStuffCart,
  removePetCart,
  removeStuffCart,
  clearPetCart,
  clearStuffCart,
  // placeOrder,
};
