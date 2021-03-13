const express = require("express");
const bodyParser = require("body-parser");
const _ = require("lodash");
const mongoose = require("mongoose");
const cors = require("cors");
const bcrypt = require("bcrypt");
const saltRounds = 10;


const app = express();
app.use(express.urlencoded({extended: true}));
app.use(express.json())
app.use(cors());

mongoose.connect("mongodb://localhost:27017/medbedDB", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: false
})


const hospitalSchema = {
    name: String,
    mobile: String,
    email: String,
    beds: String,
    password: String,
    city: String,
    street: String,
    state: String
}

const Hospital = mongoose.model("Hospital", hospitalSchema);

const contactSchema = {
    name: String,
    email: String,
    message: String
}

const Contact = mongoose.model("Contact", contactSchema);

app.get("/", (req, res) => {
    Hospital.find({}, (err, foundList) => {
        res.send(foundList);
    })
})

app.post("/contact", (req, res) => {
    const data = req.body;
    const newcontact = new Contact({
        name: data.name,
        email: data.email,
        message: data.message
    });
    Contact.insertMany([newcontact], err => {
        if(err) {
            console.log(err);
        }
    })
})

app.post("/update/:id", (req, res) => {
    const id = req.params.id;
    Hospital.findOneAndUpdate({_id: id}, {$set: {beds: req.body.bedCount}}, {new: true}, (err, doc) => {
        if(err) {
            console.log(err);
        }
        else {
            console.log(doc);
        }
    });
})

app.post("/login", (req, res) => {
    const data = req.body;
    Hospital.findOne({email: _.toLower(data.username)}, (err, foundHospital) => {
        if(!err) {
            if(!foundHospital) {
                res.send("This Hospital is not registered. Please register to proceed.")
            }
            else {
                bcrypt.compare(req.body.password, foundHospital.password, function(err, result) {
                    if(result === true) {
                        res.send(foundHospital);
                    }
                    else {
                        res.send("Incorrect Username or Password. Please try again.");
                    }
                });
            }
        }
    })
})

app.post("/register", (req, res) => {
    bcrypt.hash(req.body.password, saltRounds, function(err, hash) {
        if(!err) {
            const data = req.body;
            Hospital.findOne({email: _.toLower(data.email)}, (err, foundHospital) => {
                if(err) {
                    console.log(err);
                }
                else {
                    if(!foundHospital) {
                        const newHospital = new Hospital({
                            name: data.name,
                            mobile: data.mobile,
                            email: _.toLower(data.email),
                            beds: data.beds,
                            password: hash,
                            city: data.city,
                            street: data.street,
                            state: data.state
                        })
                        Hospital.insertMany([newHospital], err => {
                            if(err) {
                                console.log(err);
                            }
                        })
                        res.send(newHospital);
                    }
                    else {
                        res.send("This Hospital is already registered.");
                    }
                }
            })
        }
    });
})


app.listen(5400, () => {
    console.log("server started at port 5400");
})