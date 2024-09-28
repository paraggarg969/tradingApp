const express = require("express");
const app = express();
app.use(express.json());
require("dotenv").config();

const userRoute = require('./routes/user.route');

// app.use('/api/',helloroute);
app.use('/api/user',userRoute);

// const MONGO_URL = process.env.MONGO_URL

// main()
//     .then(() => {
//         console.log("connected to DB");
//     })
//     .catch((err) => {
//         console.log(err);
//     });

// async function main() {
//     await mongoose.connect(MONGO_URL);
// }

// app.post('/adduser', async (req, res) => {
//     try {
//         const newUser = await user.create(req.body); 
//         res.status(201).send(newUser); 
//     } catch (err) {
//         res.status(500).send({ error: err.message });
//     }
// });

// const person = [
//     {
//         id: 1,
//         name: "abc",
//         email: "abc@gmail.com"
//     },
//     {
//         id: 2,
//         name: "xaz",
//         email: "abc@gmail.com"
//     },
//     {
//         id: 3,
//         name: "pdr",
//         email: "pqr@gmail.com"
//     }
// ]

// app.get('/Hello', (req, res) => {
//     try {
//         res.send('Parag Garg');
//     }
//     catch (err) {
//         res.send(err.message);
//     }
// });

// app.get('/alluser', (req, res) => {
//     try {
//         res.send(person);
//     }
//     catch (err) {
//         res.send(err.message);
//     }
// });

// app.get("/alluser/:name", (req, res) => {
//     try {
//         let userName = req.params.name;
//         const user = person.find(p => p.name === userName);
//         if (user) {
//             res.send(user);
//         }
//         else {
//             res.send("User not found");
//         }
//     }
//     catch (err) {
//         res.send(err.message);
//     }
// })

// db.user.insertOne(
//     {
//         bio: "SDE", 
//         name: "Parag Garg", 
//         age: "21", 
//         gender: "Male", 
//         Phoneno: "8569837333", 
//         Enrollment: "220448", 
//         department: "CSE", 
//         Batch: "2022-2026", 
//         Semester: "5", 
//         school: { schoolname: "VMVS", percentage: "92", city: "Hisar" }, 
//         city: "Gurugram", 
//         Country: "India", 
//         Hobby: "Travelling and exploreing new things", 
//         achievement: "100% scholarship", 
//         ProfilePic: "https://media.licdn.com/dms/image/D4D03AQGaSoUYKkTZ7Q/profile-displayphoto-shrink_200_200/0/1683865220653?e=2147483647&v=beta&t=K4tcbQwxLqiJWfM9C4zRT9zriWskJtWTKyfhTdEL2Z8"
//     })

app.listen(process.env.PORT, () => {
    console.log(`succefully run on ${process.env.PORT}`);
});