const express = require('express')
const userController = require('../controllers/user.controller')
const router = express.Router()

router.post('/', userController.logout);
router.get('/getUser', userController.getUser);
router.post('/authUser',userController.authUser)
router.post('/checkAuth', userController.checkAuth)


module.exports = router
