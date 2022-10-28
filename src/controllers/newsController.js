const {newsModel} = require("../models/newsModel");


const createNews = async (req, res) => {
    try{

    let data= req.body

    if(!data) return res.status(400).send({status: false, message: "Enter News Details"})

   // here we can start news creation
    let newsData = await newsModel.create(data)
    res.status(201).send({status: true, message: "Create News Update Successfully", data: newsData})

    }catch(err){
        res.status(500).send({status: false, Error: err.message})
    }
}


const getAllNews = async (req,res) => {
    try {
        let data = req.query

        let newsDetails = await newsModel.find(data)
        if(newsDetails.length == 0) return res.status(401).send({status: false, message: "No News found"})
        return res.status(200).send({status: true,  message: "Latest News Updates", data: newsDetails})
    }
    catch (error) {
        res.status(501).send({ status: false, message: error.message, });
    }
}


module.exports = { createNews, getAllNews }
