const express = require('express');
const app = express();
const mongoose = require('mongoose');
require("./models/users");
const User = mongoose.model("UserInfo");

app.use(express.json())
const mongoUrl = "mongodb+srv://AbhinavAnuragJha:abhinav2021@shipment.tcbexww.mongodb.net/?retryWrites=true&w=majority"
mongoose.connect(mongoUrl, {
    useNewUrlParser: true,
})
    .then(() => {
        console.log("DB connected");
    })
    .catch((error) => console.log(error));



app.listen(3000, () => {
    console.log('Server running on port 3000...')
});

// app.post('/signUp', async((req, res) => {
//     console.log(req.body);
//     const { data } = req.body;
//     try {
//         if (data == "x")
//             res.status("ok")
//     } catch ((err) => console.log(err))
// }
//     res.send("Not valid")
// ))

app.post("/signUp", async (req, res) => {
    const [name, email, password, confirmPassword] = req.body;
    try {
        await User.create({
            name,
            email,
            password,
            confirmPassword
        });
        res.send({ status: "ok" });
    } catch (error) {
        res.send({ status: "error" });
    }
});