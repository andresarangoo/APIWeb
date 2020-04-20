const { Router } = require('express');
const {getStudents, getStudent, deleteStudent, createStudent, updateStudent, updateStudents, promCurse, getManyStudents}= require('./student.controller');



const router = new Router();

router.get('/',getStudents); //OK
router.get('/:studentId', getStudent); //OK
router.post('/create',createStudent); //OK
router.delete('/:id', deleteStudent); //OK
router.put('/:id', updateStudent); //OK
router.put('/update/:name',updateStudents); //OK
router.get('/avarage/:curse',promCurse); //OK
router.get('/find/:name', getManyStudents); //OK

module.exports = router;
