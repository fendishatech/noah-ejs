const router = require("express").Router();

// GET
router.get("/login", async (req, res) => {
  try {
    res.render("auth/login");
  } catch (error) {
    console.error(error);
    res.status(500).send("Internal Server Error");
  }
});

router.get("/register", async (req, res) => {
  try {
    res.render("auth/register");
  } catch (error) {
    console.error(error);
    res.status(500).send("Internal Server Error");
  }
});

module.exports = router;
