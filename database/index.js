const mongoose = require("mongoose");

mongoose.connect('mongodb+srv://lackhorseak:lackhorseak@cluster0.qxrxovq.mongodb.net/aligarh').then(() => console.log("Connected To CloudDB!")).catch(err => console.log(err));