const express = require('express');
const userController = require('../controllers/userController');
const authMiddleware = require('../auth/auth');

const router = express.Router();
const USER_BASE_URL="/api/users";

const LOGIN='/login';
const REGISTER='/register';
const UPLOAD_ASSIGNMENT='/upload';
const GET_ADMINS='/admins';


router.post( USER_BASE_URL + REGISTER, userController.register);
router.post( USER_BASE_URL + LOGIN, userController.login);
router.post( USER_BASE_URL + UPLOAD_ASSIGNMENT, authMiddleware, userController.uploadAssignment);
router.get( USER_BASE_URL +  GET_ADMINS, authMiddleware, userController.getAdmins);

module.exports = router;