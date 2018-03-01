const Page = require('../models/Page')
const ObjectId = require('mongodb').ObjectID;
const mongoose = require('mongoose');


function getAll(req, res) {
  Page.find()
    .exec((err, Pages) => {
      if (err) {
        res.status(500)
        res.send(`Ocurrió un error 💩 ${err}`)
      }
      res.status(200)
      res.json(Pages)
    })
}

function managePage(req, res) {
  // console.log(req.body)
  let item = req.body
  let condition = {_id: {$ne: item._id}}

  if(item.home === true){
    console.log('home si es true')
    Page.update(condition,{home: false}, {multi: true}, (err, ans) => {
      // if(err){
      //   res.status(500)
      //   res.json(`Cannot update Page home ${err}`)
      // }
    })
  }
  
  
  Page.findById(item._id,(err, Page)=>{
    if (err) {
      res.status(500)
      res.json(`Cannot find Page id ${err}`)
    }

    Page.title = item.title;
    Page.url = item.url;
    Page.content = item.content;
    Page.home = item.home
    // Page.home = true
    
    Page.save(function(err, Pages){
      if(err){
        res.status(500)
        res.send(`Cannot update Page ${err}`)
      }
      res.status(200);
      console.log(Pages)
      res.json(Pages)
    })
  })
}

function deletePage(req, res){
  //console.log(req.body.id)
  let id = mongoose.Types.ObjectId(req.body.id)
  Page.deleteOne({ "_id" : id }, (err, Pages) =>{
    if(err){
      res.status(500)
      res.send(`Cannot delete Page ${err}`)
    }
    res.status(200);
    res.json(Pages)
  })
}

function addPage(req, res){
  let item = req.body
  //console.log(item)
  let newItem = new Page({
    title: item.title,
    url: item.url,
    content: "",
    home: false
  })
  newItem.save((err, Pages) => {
    if(err){
      //console.log(err)
      res.status(500)
      res.send(`Cannot add Page ${err}`)
    }
    res.status(200);
    res.json(Pages)
  })
}

module.exports = {
  getAll,
  managePage,
  deletePage,
  addPage
}

