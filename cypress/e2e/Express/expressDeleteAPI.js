const express = require('express')
const dbConnect = require('./MongoDBConfig')
const mongodb = require('mongodb')

const app = express()

app.delete('/:id', async(req,res)=>{
    console.log(req.params.id)  
    const data = await dbConnect()  
    const result = await data.deleteOne({_id:new mongodb.ObjectId(req.params.id)})
    res.send(result)
})

app.listen(9999)