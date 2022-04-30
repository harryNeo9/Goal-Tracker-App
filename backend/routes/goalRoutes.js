const express = require("express");
const router = express.Router();
const {
  getGoals,
  setGoal,
  updateGoals,
  deleteGoals,
} = require("../controllers/goalController");
const {protect} = require('../middleware/authMiddleware')

// router.get("/", getGoals);
// router.post("/", setGoal);
router.route('/').get(protect, getGoals).post(protect, setGoal)

// router.put("/:id", updateGoals);
// router.delete("/:id", deleteGoals);
router.route('/:id').put(protect, updateGoals).delete(protect, deleteGoals)

module.exports = router;
