const express = require('express');
const router = express.Router();

const {getAllPosts, getPostById, postData, updateData, hapusData} = require('./../controller/c_notes')

// GET ALL DATA
router.get('/', getAllPosts)

// GET DATA BY ID
router.get("/:id", getPostById);

// POST DATA
router.post('/', postData)

// UPDATE DATA
router.put("/:id", updateData);

// DELETE
router.delete("/:id", hapusData);

module.exports = router