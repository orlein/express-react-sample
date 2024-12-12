import express from "express";

const app = express();

// app.get("/", (req, res) => {
//   res.send("Hello World");
// });

app.use(express.static("public"));

app.listen(3000, () => {
  console.log("Server is running on port 3000");
});
