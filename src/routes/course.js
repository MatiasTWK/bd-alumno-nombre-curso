const express = require("express");
const cursoSchema = require("../models/course");

const router = express.Router();

//create a new course

router.post("/cursos", async (req, res) => {
  try {
    const newCourse = await cursoSchema.create(req.body);
    res.status(201).json(newCourse);
  } catch (error) {
    res.status(500).json(error);
  }
});

//get all courses

router.get("/cursos", async (req, res) => {
  try {
    const courses = await cursoSchema.find();
    res.status(200).json(courses);
  } catch (error) {
    res.status(500).json(error);
  }
});

//get a single course

router.get("/cursos/:id", async (req, res) => {
  try {
    const course = await cursoSchema.findById(req.params.id);
    res.status(200).json(course);
  } catch (error) {
    res.status(500).json(error);
  }
});

//update a course

router.put("/cursos/:id", async (req, res) => {
  try {
    const course = await cursoSchema.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true }
    );
    res.status(200).json(course);
  } catch (error) {
    res.status(500).json(error);
  }
});

//delete a course

router.delete("/cursos/:id", async (req, res) => {
  try {
    const course = await cursoSchema.findByIdAndDelete(req.params.id);
    res.status(200).json(course);
  } catch (error) {
    res.status(500).json(error);
  }
});

module.exports = router;
