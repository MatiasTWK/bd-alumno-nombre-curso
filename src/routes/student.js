const express = require("express");
const studentSchema = require("../models/student");

const router = express.Router();

//create a new student

router.post("/estudiantes", (req, res) => {
  const newStudent = new studentSchema(req.body);
  newStudent
    .save()
    .then((student) => {
      res.status(201).json(student);
    })
    .catch((err) => {
      res.status(500).json(err);
    });
});

//get all students

router.get("/estudiantes", (req, res) => {
  studentSchema
    .find()
    .then((students) => {
      res.status(200).json(students);
    })
    .catch((err) => {
      res.status(500).json(err);
    });
});

//get a single student

router.get("/estudiantes/:id", (req, res) => {
  studentSchema
    .findById(req.params.id)
    .then((student) => {
      res.status(200).json(student);
    })
    .catch((err) => {
      res.status(500).json(err);
    });
});

//update a student

router.put("/estudiantes/:id", (req, res) => {
  studentSchema
    .findByIdAndUpdate(req.params.id, req.body)
    .then((student) => {
      res.status(200).json(student);
    })
    .catch((err) => {
      res.status(500).json(err);
    });
});

//delete a student

router.delete("/estudiantes/:id", (req, res) => {
  studentSchema
    .findByIdAndRemove(req.params.id)
    .then((student) => {
      res.status(200).json(student);
    })
    .catch((err) => {
      res.status(500).json(err);
    });
});

module.exports = router;
