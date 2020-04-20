const { Router } = require('express');
const {getStudents, getStudent, deleteStudent, createStudent, updateStudent, updateStudents, promCurse}= require('./student.controller');



const router = new Router();

router.get('/',getStudents); //OK
router.get('/:studentId', getStudent); //OK
router.post('/create',createStudent); //OK
router.delete('/:id', deleteStudent); //OK
router.put('/:id', updateStudent); //OK
router.put('/:name',updateStudents);
router.get('/:cuerse',promCurse);

module.exports = router;
