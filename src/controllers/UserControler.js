const UserService = require("../services/UserService");
const bcrypt = require("bcrypt");
const JwtService = require("../services/jwtService");
const jwt = require("jsonwebtoken");
require("dotenv").config();

const createUser = async (req, res) => {
  try {
    console.log(req.body);
    const { phone, password } = req.body;

    // check trùng số điện thoại
    const existingUser = await UserService.checkPhoneUser(phone);
    if (existingUser) {
      return res.status(409).json({ status: "user exist" });
    }

    const hashedPassword = await bcrypt.hash(password, 10);

    console.log(phone, hashedPassword);
    //Tạo tài khoản
    const response = await UserService.createUser(phone, hashedPassword);
    console.log(2);
    return res.status(200).json(response);

    //tạo tài khoản
    //hash mật khẩu
  } catch (e) {
    console.log(e);
    return res.status(404).json({});
  }
};

const loginUser = async (req, res) => {
  try {
    const { phone, password } = req.body;
    console.log(phone);
    const existingUser = await UserService.loginUser(phone);
    if (existingUser) {
      console.log("password", existingUser.password);

      const match = await bcrypt.compare(password, existingUser.password);

      if (match) {
        const access_token = await JwtService.generateAccessToken({
          id: existingUser.id,
        });
        const refresh_token = await JwtService.generateRefreshToken({
          id: existingUser.id,
        });
        console.log(access_token);
        return res.status(200).json({
          status: "sucess",
          access_token,
          refresh_token,
          user: existingUser,
        });
      } else {
        return res.status(200).json({ status: "wrong password" });
      }

      //...
    } else return res.status(404).json({ status: "phone not exist" });
  } catch (e) {
    console.log(e);
    return res.status(404).json({});
  }
};

const updateUser = async (req, res) => {
  try {
    const token = req.headers.authorization.split(" ")[1];

    jwt.verify(token, process.env.JWT_SECRET_KEY, async (err, decoded) => {
      if (err) {
        return res
          .status(401)
          .json({ success: false, message: "Token is not valid" });
      }
      if (decoded.payload.id === req.body.id) {
        try {
          console.log(req.body.userInfo);
          const result = await UserService.updateUser(
            req.body.userInfo,
            req.body.id
          );
          res.json({ success: true, decoded });
        } catch (err) {
          console.log(err);
        }
      } else {
        res.json({ sucess: false, message: "Token is false" });
      }
      // 'decoded' chứa thông tin được giải mã từ JWT
    });
  } catch (e) {
    console.log(e);
    return res.status(404).json({});
  }
};

module.exports = { createUser, loginUser, updateUser };
