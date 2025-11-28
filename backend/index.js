const express=require("express")
const cors=require("cors")

const port=6001
const app=express()

app.use(cors())
app.use(express.json())

const { MongoClient, ServerApiVersion,ObjectId } = require('mongodb');
const uri = "mongodb+srv://imnithyania_db_user:delight@cluster0.ed4hgki.mongodb.net/?appName=Cluster0";

// Create a MongoClient with a MongoClientOptions object to set the Stable API version
const client = new MongoClient(uri, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  }
});

async function run() {
  try {
    // Connect the client to the server	(optional starting in v4.7)
    await client.connect();

   const productcollection=client.db("delight").collection("products")
   const userscollection=client.db("delight").collection("users")

   app.post("/uploadproduct",async(req,res)=>{
    const data=req.body
    // console.log(data)
    const result=await productcollection.insertOne(data)
    res.send(result)
   }
   )
   app.post("/uploadusers",async(req,res)=>{
    const data=req.body
    const result=await userscollection.insertOne(data)
    res.send(result)
   }
   )
   app.get("/getproduct",async(req,res)=>{
    const data=await productcollection.find();
    const result=await data.toArray()
    res.send(result)
   })

    app.get("/getsingleproduct/:id",async(req,res)=>{
    const id=req.params.id
    const obj={_id:new ObjectId(id)}
    const data=await productcollection.findOne(obj);
    res.send(data)
   })
     app.get("/getuser",async(req,res)=>{
      const data=await userscollection.find();
      const result=await data.toArray()
      res.send(result)
   })

    app.delete("/deletesingleproduct/:id",async(req,res)=>{
    const id=req.params.id
    const obj={_id:new ObjectId(id)}
    const data=await productcollection.deleteOne(obj);
    res.send(data)
   })

   app.patch("/editsingleproduct/:id",async(req,res)=>{
    const id=req.params.id
    const obj={_id:new ObjectId(id)}
    const data=req.body
    const changedata={$set:{
      ...data
    }}
    const options={upsert:true}
    const result=await productcollection.updateOne(obj,changedata,options);
    res.send(result)
   })

   
   
  

    // Send a ping to confirm a successful connection
    await client.db("admin").command({ ping: 1 });
    console.log("Pinged your deployment. You successfully connected to MongoDB!");
  } finally {
    // Ensures that the client will close when you finish/error
    // await client.close();
  }
}
run().catch(console.dir);

 app.listen(port,()=>{ 
    console.log("running on port number",port)
})