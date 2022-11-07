const express = require('express');
const router = express.Router();
const Validator = require("fastest-validator");
const v = new Validator();

const {Notes} = require('./../models')

// Dapatkan seluruh data
const getAllPosts = async (req,res) => {
    const notes = await Notes.findAll();
    return res.json({
        status: 200,
        message: "Success get all data",
        data: notes,
    });
}

// Dapatkan seluruh data
const getPostById = async (req,res) => {
    const id = req.params.id;
    // check id in table note
    let note = await Notes.findByPk(id);
    if (!note) {
      return res.status(404).json({ status: 404, message: "Data not found" });
    } else {
      return res.json({ status: 200, message: "Success get data", data: note });
    }
}

// tambah data
const postData = async (req,res) => {
    const skema = {
        title:"string",
        desc:"string|optional"
    }

    const validate = v.validate(req.body, skema)
    if(validate.length){
        res.status(400).send(validate)
    }

    try {
        const note = await Notes.create(req.body)
        res.json({
            status:200,
            message:"Sukses post data",
            data:note
        })
    } catch (error) {
        res.json({
            message:error.message
        })
    }
}

// update data
const updateData = async (req,res) => {
    const id = req.params.id;
    let note = await Notes.findByPk(id);

    if (!note) {
        return res.status(404).json({ status: 404, message: "Data not found" });
    }

    const skema = {
        title:"string",
        desc:"string|optional"
    }
    const validate = v.validate(req.body, skema);
    if (validate.length) {
        return res.status(400).json(validate);
    }
    note = await note.update(req.body);

    res.json({
    status: 200,
    message: "Success update data",
    data: note,
  });
}

// hapus data
const hapusData = async (req,res) => {
    const id = req.params.id;
    // check id in table note
    let note = await Notes.findByPk(id);
    if (!note) {
      return res.status(404).json({ status: 404, message: "Data not found" });
    }

    // proses delete data
    await note.destroy();
    res.json({
      status: 200,
      message: "Success delete data",
    });
}
module.exports = {getAllPosts, getPostById, postData, updateData, hapusData}