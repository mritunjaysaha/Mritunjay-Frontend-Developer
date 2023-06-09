const express = require("express");
const router = express.Router();
const { check } = require("express-validator");

const { signUp, signIn, signOut, isSignedIn } = require("../controllers/auth");

router.post(
    "/signup",
    [
        check("email", "email is required").isEmail(),
        check("password", "password should be at least 3 char").isLength({
            min: 3,
        }),
    ],
    signUp
);

router.post(
    "/signin",
    [
        check("email", "email is required").notEmpty(),
        check("password", "password field is required").isLength({
            min: 1,
        }),
    ],
    signIn
);

router.get("/logout", signOut);

router.get("/isSignedIn", isSignedIn, (req, res) => {
    res.json(req.auth);
});

module.exports = router;
