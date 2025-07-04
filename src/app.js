/**
 * Express app for greeting users.
 * Provides endpoints to greet users by name and handle empty name cases.
 *
 * @module app
 */
const express = require("express");
const Greeter = require("./greeter");

/**
 * The Express application instance.
 * @type {import('express').Express}
 */
const app = express();

/**
 * The port number the server listens on.
 * @type {number}
 */
const port = 3000;

/**
 * Greeter instance for generating greetings.
 * @type {Greeter}
 */
const greeter = new Greeter();

/**
 * GET /greet/:name
 * Greets the user with the provided name.
 * @name GET /greet/:name
 * @function
 * @param {string} req.params.name - The name to greet.
 * @returns {string} Greeting message.
 */
app.get("/greet/:name", (req, res) => {
  const name = req.params.name;
  const greetings = greeter.greet(name);
  res.send(greetings);
});

/**
 * GET /greet/
 * Handles the case when no name is provided. Returns 400 error.
 * @name GET /greet/
 * @function
 * @returns {string} Error message if name is empty.
 */
app.get("/greet/", (req, res) => {
  try {
    const greetings = greeter.greet("");
    res.send(greetings);
  } catch (error) {
    res.status(400).send(error.message);
  }
});

/**
 * Start the server and listen on the specified port.
 * Logs URLs for testing.
 */
app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
  console.log(
    `To check the console log name is trimmed and capitalized, visit http://localhost:${port}/greet/saheba   `
  );
  console.log(
    "To check when sending empty name, visit http://localhost:3000/greet/"
  );
});

/**
 * Export the Express app for testing purposes.
 */
module.exports = app;
