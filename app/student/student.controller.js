const Student = require('./student.model');

const getStudents = async (req, res) => {
  await Student.find((err, students) => {
    if (err || !students) {
      return res.status(400).json({
        error: 'No hay estudiantes activos'
      });
    }

    return res.status(200).json(students)
  })
};

const createStudent = async (req, res) => {
  try {
    const docs = await Student.create({
      ...req.body
    });
    return res.status(201).json({
      message: 'Student created succesfuly'
    });
  } catch (e) {
    return res.status(400).end();
  }
};

const getStudent = async (req, res) => {
  try {
    const doc = await Student
      .findOne({
        id: req.params.studentId
      })
      .select(
        'id firstName lastName curse note'
      )
      .lean()
      .exec();

    if (!doc) {
      return res
        .status(400)
        .json({
          error: `There's no student associated with that id`
        });
    }

    return res.status(200).json({
      studen: doc
    });

  } catch (e) {
    return res.status(500).end();
  }
};

const updateStudent = async (req, res) => {
  try {
    const updatedDoc = await Student
      .findOneAndUpdate({
          id: req.params.id
        },
        req.body, {
          new: true
        }
      )
      .lean()
      .exec()

    if (!updatedDoc) {
      return res.status(400).end()
    }

    res.status(200).json({
      data: updatedDoc
    })
  } catch (e) {
    console.error(e)
    res.status(400).end()
  }
};

const deleteStudent = async (req, res) => {
  try {
    const removed = await Student.findOneAndRemove({
      id: req.params.id
    })

    if (!removed) {
      return res.status(400).end()
    }

    return res.status(200).json({
      data: removed
    })
  } catch (e) {
    console.error(e)
    res.status(400).end()
  }
};

const updateStudents = async (req, res) => {
  try {
    const updatedDoc = await Student
      .find({
          firstName: req.params.name
        }
      )
      .update({},
        req.body, {
          new: true
        },
        {multy: true})
      .lean()
      .exec()

    if (!updatedDoc) {
      return res.status(400).end()
    }

    res.status(200).json({
      data: updatedDoc
    })
  } catch (e) {
    console.error(e)
    res.status(400).end()
  }
};

const promCurse = async (req, res) => {
  try {
    const updatedDoc = await Student
      .find({
          _curse: req.params.curse
        },
        req.body, {
          new: true
        }
      )
      .lean()
      .exec() 
    const number = updatedDoc.length();
    const total = 0;
    for (var i = 0; i <= updatedDoc.length(); i++) {
      total = total + updatedDoc[i];
    }

    const promedio = total / number;

    if (!updatedDoc) {
      return res.status(400).end()
    }

    res.status(200).json({
        average : promedio
    })
  } catch (e) {
    console.error(e)
    res.status(400).end()
  }
};



const prom = async (req, res) => {

};

module.exports = {
  getStudents,
  getStudent,
  deleteStudent,
  updateStudent,
  createStudent,
  updateStudents,
  promCurse
};