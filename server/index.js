const express = require('express');
const app = express();
const mongoose = require('mongoose');

app.use(express.json())

mongoose.connect("mongodb+srv://AbhinavAnuragJha:abhinav2021@shipment.tcbexww.mongodb.net/Shipment-T1?retryWrites=true&w=majority", {
    useNewUrlParser: true,
});

app.listen(3000, () => {
    console.log('Server running on port 3000...')
});