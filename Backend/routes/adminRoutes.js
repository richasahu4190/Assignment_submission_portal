const express = require('express');
const adminController = require('../controllers/adminController');
const authMiddleware = require('../auth/auth');

const router = express.Router();

const ADMIN_BASE_URL="/api/admins";

const LOGIN='/login';
const REGISTER='/register';
const GET_ASSIGNMENTS='/assignments';
const ACCEPT_ASSIGNMENTS='/assignments/:id/accept';
const REJECT_ASSIGNMENTS='/assignments/:id/reject';

    

router.post( ADMIN_BASE_URL + LOGIN, adminController.register);
router.post( ADMIN_BASE_URL + REGISTER, adminController.login);
router.get( ADMIN_BASE_URL + GET_ASSIGNMENTS, authMiddleware, adminController.getAssignments);
router.post( ADMIN_BASE_URL + ACCEPT_ASSIGNMENTS, authMiddleware, adminController.acceptAssignment);
router.post( ADMIN_BASE_URL + REJECT_ASSIGNMENTS, authMiddleware, adminController.rejectAssignment);

module.exports = router;