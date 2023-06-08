const router = require("express").Router();
const Client = require("../models/client.model");

// GET
router.get("/register", async (req, res) => {
  try {
    res.render("auth/register", { layout: false });
  } catch (error) {
    console.error(error);
    res.status(500).send("Internal Server Error");
  }
});

// POST
router.post("/register", async (req, res) => {
  const client = {
    first_name: req.body.first_name,
    father_name: req.body.father_name,
    phone_no: req.body.phone_no,
    password: req.body.password,
  };
  try {
    const newClient = await Client.create(client);
    return res.redirect(`/auth/confirm_register`);
  } catch (error) {
    console.error(error);
    res.status(500).send("Internal Server Error");
  }
});

// GET
router.get("/confirm_register", async (req, res) => {
  try {
    res.render("auth/confirm_register", { layout: false });
  } catch (error) {
    console.error(error);
    res.status(500).send("Internal Server Error");
  }
});

// GET
router.get("/login", async (req, res) => {
  try {
    res.render("auth/login", { layout: false });
  } catch (error) {
    console.error(error);
    res.status(500).send("Internal Server Error");
  }
});

// POST
router.post("/login", async (req, res) => {
  try {
    // res.render("auth/login", { layout: false });
    console.log(req.body);
  } catch (error) {
    console.error(error);
    res.status(500).send("Internal Server Error");
  }
});

module.exports = router;
