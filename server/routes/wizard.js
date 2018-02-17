const express = require('express')
const router = express.Router()

const wizardController = require('../controllers/wizard.controller')



router.post('/setup',wizardController.setUp)

module.exports = router
