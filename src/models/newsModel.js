const mongoose = require('mongoose');

const newsSchema = new mongoose.Schema( {
    newsTitle: {
        type: String,
        trim: true
    },
    newsDetails: {
        type: String,
        trim: true
      },
    publishDate: {
        type: String,
      },
    },{timestamps:true})
    
const newsModel = mongoose.model('news', newsSchema)

module.exports = {newsModel}

