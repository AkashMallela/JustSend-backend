import jwt from "jsonwebtoken";
import { JWT_SECRET } from "../config/constants.js";
const auth = (req, res, next) => {
  try {
    // extracting token from header
    const token = req.headers.authorization.split(" ")[1];

    // verifying header and storing the user data in decodedata

    let decodeData = jwt.verify(token, JWT_SECRET);
    req.user = decodeData;

    next();
  } catch (error) {
    console.log(error);
  }
};

export default auth;
