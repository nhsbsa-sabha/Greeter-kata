const express = require("express");
const Greeter = require("./greeter");

const app = express();
const port = 3000;
const greeter = new Greeter();

app.get("/greet/:name", (req, res) => {
  const name = req.params.name;
  const greetings = greeter.greet(name);
  res.send(greetings);
});

app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
  console.log(`To check the console log name is trimmed, visit http://localhost:${port}/greet/saheba   `);
});
