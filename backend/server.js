import express from 'express';
import data from './data'
import config from './config'
import dotenv from 'dotenv'
import mongoose from 'mongoose';
import userRoute from './routes/userRoute'

dotenv.config();


const app = express();
const mongodburl = config.MONGODB_URL;

mongoose.connect(mongodburl,{
    useNewUrlParser: true,
    useUnifiedTopology:true,
    useCreateIndex:true
}).catch(error=>console.log(error.reason))
app.use("/api/users",userRoute)
app.get("/api/products/:id", (req, res) => {
    const productId = req.params.id;
    const product = data.products.find(x => x._id === productId)
    if (product)
        res.send(product)
    else
        res.status(404).send({ msg: "product not found" })

});
app.get("/api/products", (req, res) => {
    res.send(data.products)

});

app.listen(5000, () => { console.log("server woking") })