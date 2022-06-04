const { Router } = require("express");
const { getALLWaitLister, createWaitLister } = require("../controllers/waitListController");

const router = Router();

router.get("/", getALLWaitLister);
router.post("/", createWaitLister);

module.exports = router;