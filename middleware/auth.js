const { User } = require("../models/User");

let auth= (req, res, next) => {
let token = req.cookies.w_auth;
console.log("user",req)

  User.findByToken(token, (err, user) => {
    console.log("token 1", token)

    if (err) throw err;
    if (!user)
      return res.json({
        isAuth: false,
        error: true
      });

    req.token = token;
    req.user = user;

    console.log("req.user",req.user)
    console.log("req.token",req.token)
    next();
  })
}

module.exports = { auth };
