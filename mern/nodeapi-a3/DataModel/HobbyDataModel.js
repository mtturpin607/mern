let mongooseObj = require("mongoose");
schemaObj = mongooseObj.Schema; //using the schema class from mongoose

//creates db with name mernstack19 or opens a connection if already present
mongooseObj.connect("mongodb://127.0.0.1/mernstack19"); 

let hobbySchema = new schemaObj({
    name : {type: String, required : true}
},
{
    versionKey: false //false - set to false then it wont create in mongodb, don't set it to true, if you want _v just dont add this
}
)

let HobbyModel = mongooseObj.model("Hobby", hobbySchema);

module.exports = HobbyModel; //with capability to retrieve save udpate queries with mongo db