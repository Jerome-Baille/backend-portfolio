const express = require('express');
const router = express.Router();

const projectCtrl = require('../controllers/project');
const aboutCtrl = require('../controllers/about');
const stackCtrl = require('../controllers/stack');
const certificationCtrl = require('../controllers/certification');

router.get('/projects', projectCtrl.getAllDatas);
router.get('/projects/:id', projectCtrl.getOneData);

router.get('/about', aboutCtrl.getAllAbouts);
router.get('/about/:id', aboutCtrl.getOneAbout);

router.get('/stacks', stackCtrl.getAllStacks);
router.get('/stacks/:id', stackCtrl.getOneStack);

router.get('/certifications', certificationCtrl.getAllCertifications);
router.get('/certifications/:id', certificationCtrl.getOneCertification);


module.exports = router;