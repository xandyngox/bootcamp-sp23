const express = require("express");
const router = express.Router();
const Doc = require("../models/doc");

// http://localhost:3000/docs/
// Get all
router.get("/", async (req, res) => {
  try {
    const docs = await Doc.find();
    res.json(docs);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// Get one
router.get("/:id", getDoc, (req, res) => {
  res.send(res.doc);
});

// Creating one
router.post("/", async (req, res) => {
  const doc = new Doc({
    doc_id: req.body.doc_id,
    description: req.body.description,
  });
  try {
    const newDoc = await doc.save();
    res.status(201).json(newDoc);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

// Updating one
router.patch("/:id", getDoc, async (req, res) => {
  if (req.body.doc_id != null) {
    res.doc.doc_id = req.body.doc_id;
  }
  if (req.body.description != null) {
    res.doc.description = req.body.description;
  }
  try {
    const updatedDoc = await res.doc.save();
    res.json(updatedDoc);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

//Deleting one
router.delete("/:id", getDoc, async (req, res) => {
  try {
    res.doc.deleteOne({ doc_id: req.params.id });
    res.json({ message: "Deleted doc with id of " + req.params.id });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

//middleware - used for getting doc with req parameter e.g. :id
async function getDoc(req, res, next) {
  try {
    const doc = await Doc.findOne({ doc_id: req.params.id });
    if (!doc) {
      return res.status(404).json({ message: "Cannot find doc" });
    }
    res.doc = doc;
    next();
  } catch (err) {
    return res.status(500).json({ message: err.message });
  }
}
module.exports = router;
