const mysql = require("mysql2");

// kết nối tới database
const connection = mysql.createConnection({
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_DATABASE,
});

// Thử kết nối
connection.connect((err) => {
  if (err) {
    console.error("Lỗi kết nối:", err);
    return;
  }
  console.log("Kết nối thành công!");

  // Đóng kết nối sau khi kiểm tra thành công
});
module.exports = connection;
