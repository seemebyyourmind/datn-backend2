const jwt = require("jsonwebtoken");
require("dotenv").config();

const generateAccessToken = async (payload) => {
  console.log("payload", payload);
  const access_token = jwt.sign(
    {
      payload,
    },
    process.env.JWT_SECRET_KEY,
    { expiresIn: "1h" }
  );
  return access_token;
};

const generateRefreshToken = async (payload) => {
  console.log("payload", payload);
  const refresh_token = jwt.sign(
    {
      payload,
    },
    process.env.JWT_SECRET_KEY,
    { expiresIn: "365d" }
  );
  return refresh_token;
};

module.exports = { generateAccessToken, generateRefreshToken };
