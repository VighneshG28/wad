const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");

const app = express();

app.use(express.json());
app.use(cors());

mongoose.connect("mongodb://127.0.0.1:27017/crudDB")
.then(() => console.log("MongoDB Connected"))
.catch(err => console.log(err));

const userSchema = new mongoose.Schema({
    name: String,
    email: String,
    age: Number
});

const User = mongoose.model("User", userSchema);

app.post("/add", async (req, res) => {

    const user = new User(req.body);

    await user.save();

    res.json({
        message: "User Added"
    });
});

app.get("/all", async (req, res) => {

    const users = await User.find();

    res.json(users);
});

app.put("/update/:id", async (req, res) => {

    await User.findByIdAndUpdate(
        req.params.id,
        req.body
    );

    res.json({
        message: "User Updated"
    });
});

app.delete("/delete/:id", async (req, res) => {

    await User.findByIdAndDelete(req.params.id);

    res.json({
        message: "User Deleted"
    });
});

app.listen(3000, () => {
    console.log("Server Running on Port 3000");
});