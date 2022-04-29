const express = require("express");
const router = express.Router();
const {
  getGoals,
  setGoal,
  updateGoals,
  deleteGoals,
} = require("../controllers/goalController");

// router.get("/", getGoals);

// router.post("/", setGoal);

router.route('/').get(getGoals).post(setGoal)

// router.put("/:id", updateGoals);

// router.delete("/:id", deleteGoals);

router.route('/:id').put(updateGoals).delete(deleteGoals)

module.exports = router;
