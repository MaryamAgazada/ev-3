const express = require('express')
const app = express()
const mongoose = require('mongoose');
const cors= require('cors');
app.use(express.json())
app.use(cors())
const port=3000;

const kittySchema = new mongoose.Schema({
    name: String,
    title:String,
    price:Number,
    img:String

  });
  const Kitten = mongoose.model('Kitten', kittySchema);
app.get('/product/',async function (req, res) {
    let elem= await Kitten.find()
  res.send(elem)
})
app.get('/product/:id',async function (req, res) {
    let elem=await Kitten.findById(req.params.id)
  res.send(elem)
})
app.delete('/product/:id',async function (req, res) {
    let elem=await Kitten.findByIdAndDelete(req.params.id)
  res.send(elem)
})
app.post('/product/',async function (req, res) {
    let elem= new Kitten(req.body)
    elem.save()
  res.send(elem)
})
mongoose.connect('mongodb+srv://bd6w1nnn3:meryem@cluster0.aayhuqz.mongodb.net/')
  .then(() => console.log('Connected!'));
app.listen(port,()=>{
    console.log(`connect ${port}`);
})