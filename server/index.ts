import { firestore,rtdb } from "./db";

import { nanoid } from "nanoid";

import * as express from "express"


const cors = require("cors")

const app = express()

const port = process.env.PORT || 3003

const userCollection = firestore.collection("users")
const roomsCollection = firestore.collection("rooms")
app.use(express.json())
app.use(express.static("dist"))
app.use(cors())


app.post("/signup",(req,res)=>{
  const {email} =req.body
  const {nombre} =req.body

  userCollection.where("email","==",email).get().then((response)=>{
    if(response.empty){
      userCollection.add({
        email,
        nombre
      }).then((newUserRef)=>{
        res.json({
          message:"User created",
          id:newUserRef.id,
          new:true
        })
      })
    }else{
      res.status(400).json("user already exists")
    }
  })
})

app.get("/env",(req,res)=>{
  res.json({
    environment:process.env.NODE_ENV
  })
})


app.listen(port,()=>{
  console.log(`service active http://localhost:${port}` )
  
})