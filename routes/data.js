const express = require('express');
const router = express.Router();

const projectCtrl           = require('../controllers/project');
const aboutCtrl             = require('../controllers/about');
const stackCtrl             = require('../controllers/stack');
const certificationCtrl     = require('../controllers/certification');
const challengeCtrl         = require('../controllers/challenge');
const hundredDaysOfCSSCtrl  = require('../controllers/hundredDaysOfCSS');

router.get('/projects',                 projectCtrl.getAllDatas);
router.get('/projects/:id',             projectCtrl.getOneData);

router.get('/about',                    aboutCtrl.getAllAbouts);
router.get('/about/:id',                aboutCtrl.getOneAbout);

router.get('/stacks',                   stackCtrl.getAllStacks);
router.get('/stacks/:id',               stackCtrl.getOneStack);

router.get('/certifications',           certificationCtrl.getAllCertifications);
router.get('/certifications/:id',       certificationCtrl.getOneCertification);

router.get('/challenges',               challengeCtrl.getAllChallenges);
// router.get('/challenges/:id',        challengeCtrl.getOneChallenge);

router.get('/challenges/DaysOfCSS',     hundredDaysOfCSSCtrl.getAllDays);

module.exports = router;