const express = require("express");
const messageController = require("../controllers/messageController")
const auths = require("../middleware/auths")
const router = express.Router();


router.get('/hello', messageController.hello)
router.get('/privatehello', () => {}, messageController.privateHello)


module.exports = router