const express = require('express');
const asyncify = require('express-asyncify')
const router = asyncify(express.Router());
const user = require('../controllers/user.controller');
const role = require('../controllers/role.controller');
const userLog = require('../controllers/userLog.controller');
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

// user log
router.post("/userLog/addFoodEntry", jwtHelper.verifyJWTtoken, userLog.addFoodEntry);
router.get("/userLog/getUserLog", jwtHelper.verifyJWTtoken, userLog.getUserLog);
router.get("/userLog/getFoodEntry", jwtHelper.verifyJWTtoken, userLog.getFoodEntry);
router.post("/userLog/updateFoodEntry", jwtHelper.verifyJWTtoken, userLog.updateFoodEntry);
router.post("/userLog/deleteFoodEntry", jwtHelper.verifyJWTtoken, userLog.deleteFoodEntry);
router.post("/userLog/logWater", jwtHelper.verifyJWTtoken, userLog.logWater);

module.exports = router;