const express = require("express");
const router = express.Router();

const { getGradeScale } = require("./repository");
router.get("/", async (req, res, next) => {
  const gradeScale = await getGradeScale();
  return res.json(gradeScale);
});

module.exports = router;
