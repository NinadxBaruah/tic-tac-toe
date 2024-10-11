const express = require("express")
const router = express.Router();

const handleHomePage = require("../../controllers/handleHomePage")
const handleOfflineGameBoard = require("../../controllers/handleOfflineGameBoard")

router.get('/',handleHomePage)
router.get('/offlineGameBoard',handleOfflineGameBoard);

module.exports = router