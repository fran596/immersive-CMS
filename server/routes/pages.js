const express = require('express')

const pageController = require('../controllers/page.controller')

const router = express.Router()

router.get('/', pageController.getAll);
router.post('/addPage',pageController.addPage)
router.post('/managePage', pageController.managePage)

module.exports = router
