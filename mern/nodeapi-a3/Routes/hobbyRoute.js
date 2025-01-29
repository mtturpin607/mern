const express = require('express') //import package
const hobbyRouter = express.Router({strict:true, caseSensitive: true}) // a separate route table to create and handle our api's
const hobbyDataModel = require('../DataModel/HobbyDataModel');

hobbyRouter.post("/api/saveHobby",(req, res)=>{

    let hobbyObj = req.body; //user object passed in the body of sigininup api
    console.log("hobbyObj", hobbyObj)

    let hobSchemaObj = new hobbyDataModel(req.body);

    hobSchemaObj.save().then((newProd)=>{//will get _id once document is created
        res.send(newProd)
    }).catch((err1)=>{
        console.log("error saving", err1);
        res.send("error while saving hobby")
    })
})

hobbyRouter.get("/api/gethobbies",(req, res)=>{

    hobbyDataModel.find()//find all the hobbies from hobbies collection and send back
    .then((hobbies)=>{
        res.send(hobbies)
    })
    .catch((errr)=>{
        console.log(errr)
        res.send("Error while fetching hobbies")
    })
});

module.exports = hobbyRouter;