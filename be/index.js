import express from "express";

const app = express();

app.use(express.static("public"));

app.get("/api/hello", (req, res) => {
  res.send({
    hello: "hello world",
  });
});
app.listen(3000, () => {
  console.log("Server is running on port 3000");
});
