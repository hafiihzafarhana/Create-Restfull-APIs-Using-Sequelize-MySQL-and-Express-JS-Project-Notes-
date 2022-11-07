const express = require('express');
const router = express.Router();

const r_notes = require('./r_notes')

router.use('/notes', r_notes)

module.exports = router