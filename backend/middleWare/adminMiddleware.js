import jwt from "jsonwebtoken"

export const verifyToken = (req, res, next) => {
  const token = req.cookies.token;
  console.log("token");

  if (!token) {
    return res.status(404).json({ message: "No token found" });
  }
  console.log("token get", token);

  jwt.verify(token, process.env.JWT_SECRET_KEY, (err, user) => {
    if (err) {
      console.log(err.name);
      if (err.name === "TokenExpiredError") {
        return res
          .status(401)
          .json({ message: "Token expired. Please log in again" });
      }
      return res.status(400).json({ message: "Invalid Token" });
    }
    console.log("id", user.id);
    req.id = user.id;
    req.email = user.email
    if ( user.role=="admin") {
      next();
    }else{
      res.status(400).json({message:"authentication failed"})
    }
   
  });
};


