const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const shortid = require("shortid");

const app = express();
app.use(bodyParser.json());

app.use("/", express.static(__dirname + "/build"));
app.get("/", (req, res) => res.sendFile(__dirname + "/build/index.html"));

//initial the mongoose database
mongoose.connect(
  process.env.MONGODB_URL || "mongodb://localhost/react-shopping-cart-db",
  {
    useNewUrlParser: true,
    useCreateIndex: true,
    useUnifiedTopology: true,
  }
);

//define th model
const Product = mongoose.model(
  "products",
  new mongoose.Schema({
    _id: { type: String, default: shortid.generate },//auto generate id
    title: String,
    description: String,
    image: String,
    price: Number,
    availableSizes: [String],
  })
);


//the first end point
app.get("/api/products", async (req, res) => {
  const products = await Product.find({});//which is pull all the products
  res.send(products);
});

//for create products
app.post("/api/products", async (req, res) => {
  const newProduct = new Product(req.body);
  const savedProduct = await newProduct.save();//save it to the database
  res.send(savedProduct);
});

app.delete("/api/products/:id", async (req, res) => {
  const deletedProduct = await Product.findByIdAndDelete(req.params.id);
  res.send(deletedProduct);
});

//  const Order = mongoose.model(
//    "order",
//    new mongoose.Schema(
//      {
//        _id: { type: String,default: shortid.generate, },      
//        email: String,
//        name: String,
//        address: String,
//        total: Number,
//         cartItems: [{ _id: String,title: String,price: Number,count: Number,},], 
//     },
//     {timestamps: true,} //auto add create at and update at
//   )
// );

//this insert a new item to the database
// app.post("/api/orders", async (req, res) => {
//   if ( //check client data, all required exsit
//     !req.body.name ||
//     !req.body.email ||
//     !req.body.address ||
//     !req.body.total ||
//     !req.body.cartItems
//   ) {
//     return res.send({ message: "Data is required." });
//   }
//   const order = await Order(req.body).save(); //create an order and save to the database
//   res.send(order);
// });

// app.get("/api/orders", async (req, res) => {
//   const orders = await Order.find({});
//   res.send(orders);
// });

// app.delete("/api/orders/:id", async (req, res) => {
//   const order = await Order.findByIdAndDelete(req.params.id);
//   res.send(order);
// });

const port = process.env.PORT || 5000;
app.listen(port, () => console.log("serve at http://localhost:5000"));