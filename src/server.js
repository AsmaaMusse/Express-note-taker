const fs = require("fs"),
const path = require("path"),

const util = require("util"),
const express = require("express"),
const routes = require("./routes");


const PORT = process.env.PORT || 3000;
const app = express();

const input = [];


// Middleware
app.use(express.static(path.join(__dirname, "../public")));
app.use(express.urlencoded({ extended:true }));
app.use(express.json());


// // Api call responses

// app.get("/api/notes", (res, err) => {
//   try {
//     input = fs.readFileSync ("/db/db.json", "utf8");
//     console.log("file available to read")
//     input = JSON.parse(input);

//   }catch (err) {
//     console.log(err);
//   }
//   res.json(input)
// });


// app.post("/api/notes", (res, err) => {
//   try {
//    input = fs.readFileSync("/db/db.json", "utf8");
//    console.log("input available")
//    input = JSON.parse(input);

//    req.body.id = input.length;
//    input.push(req.body);
//    input = JSON.stringify(input)
//   } catch (err) {

//   }

// })


// app.delete





app.listen(PORT, () => 
  console.log(`Running on https://localhost:${PORT}`));











