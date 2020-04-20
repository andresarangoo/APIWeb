const { Router } = require('express');

const router = new Router();

/*
 * References to each resource routers
 */
const helloWorld = require('./student/students.route');

router.use('/hello-world', helloWorld);

module.exports = router;
