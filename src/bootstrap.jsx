const ReactDOM = require("react-dom");
const React = require("react");

const Message = require("./components/Message/Message.jsx");
const Homepage = require("./pages/Homepage/Homepage.jsx");

ReactDOM.render(<Homepage/>, document.getElementById("mountpoint"));
