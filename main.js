const express = require("express");
const app = express();
const mustacheExpress = require("mustache-express");
const homeRouter = require("./routes/home");

app.use(express.static("public"));
app.use(express.static("dummy"));
app.use(express.static("images"));
app.use(express.static("fonts"));

app.use(express.urlencoded());
app.use(express.json());

app.engine("mustache", mustacheExpress());
app.set("views");
app.set("view engine", "mustache");
app.use("/", homeRouter);

app.listen(3000, () => {
  console.log("Server is running...");
});
