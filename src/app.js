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
app.get("/greet/", (req, res) => {
    try{
        const greetings = greeter.greet("");
        res.send(greetings);
    } catch (error) {
        res.status(400).send(error.message);
    }
});

app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
  console.log(`To check the console log name is trimmed and capitalized, visit http://localhost:${port}/greet/saheba   `);
  console.log('To check when sending empty name, visit http://localhost:3000/greet/');

});
