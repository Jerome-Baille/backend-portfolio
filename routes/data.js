const express = require('express');
const router = express.Router();

const projectCtrl = require('../controllers/project');
const aboutCtrl = require('../controllers/about');
const stackCtrl = require('../controllers/stack');

router.get('/projects', projectCtrl.getAllDatas);
router.get('/projects/:id', projectCtrl.getOneData);

router.get('/about', aboutCtrl.getAllAbouts);
router.get('/about/:id', aboutCtrl.getOneAbout);

router.get('/stacks', stackCtrl.getAllStacks);
router.get('/stacks/:id', stackCtrl.getOneStack);


module.exports = router;