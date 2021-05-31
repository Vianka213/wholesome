const express = require('express');
const asyncify = require('express-asyncify')
const router = asyncify(express.Router());
const user = require('../controllers/user.controller');
const role = require('../controllers/role.controller');
const userHelper = require('../helpers/user.helper');
const jwtHelper = require('../config/jwtHelper');

//user
router.post("/user/register", user.register);
router.post("/user/login", user.login);
router.get("/user/getRoles",jwtHelper.verifyJWTtoken, user.getRoles);
router.get("/user/getName",jwtHelper.verifyJWTtoken, user.getName);
router.get("/user/isVerified",jwtHelper.verifyJWTtoken, user.isVerified);
router.post("/user/verifyUser",jwtHelper.verifyJWTtoken, userHelper.isAdmin, user.verify);

//role
router.get("/role/getRole", jwtHelper.verifyJWTtoken, role.getRole);

module.exports = router;