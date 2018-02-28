const express = require('express')
const userController = require('../controllers/user.controller')
const router = express.Router()

router.get('/', userController.logout);
router.post('/authUser',userController.authUser)
router.post('/checkAuth', userController.checkAuth)


module.exports = router
