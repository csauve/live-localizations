const React = require("react");

module.exports = ({greeting}) => (
  <h1>{greeting || "Hello, world!!"}</h1>
);