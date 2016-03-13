const ReactDOM = require("react-dom");
const React = require("react");

const Homepage = require("./components/Homepage/Homepage.jsx");

ReactDOM.render(<Homepage greeting={"hey"}/>, document.getElementById("mountpoint"));
