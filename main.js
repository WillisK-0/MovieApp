const express = require("express");
const app = express();
const mustacheExpress = require("mustache-express");
const homeRouter = require("./routes/home");
const PORT = process.env.PORT || 8080;

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

app.listen(PORT, () => {
  console.log("Server is running...");
});
