const router = require("express").Router();

// GET
router.get("/", async (req, res) => {
  try {
    res.render("home/index");
  } catch (error) {
    console.error(error);
    res.status(500).send("Internal Server Error");
  }
});

module.exports = router;
