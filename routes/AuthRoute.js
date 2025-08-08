const { Signup,Login } = require("../controllers/AuthController");
const {userVerification} = require("../middlewares/AuthMiddleware");
const router = require("express").Router();

// router.post('/',userVerification);
router.post("/signup", Signup);
router.post("/login",Login);

router.get("/verify", userVerification, (req, res) => {
  res.json({ message: "User verified successfully!", user: req.user });
});

module.exports = router;