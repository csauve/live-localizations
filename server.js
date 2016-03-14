require("babel-register");

const app = require("express")();
const serveStatic = require("serve-static");
const ReactDOMServer = require("react-dom/server");
const React = require("react");

const Document = React.createFactory(require("./src/Document.jsx"));


app.use("/static", serveStatic("./dist"));

app.get("/", (req, res) => {
  const html = ReactDOMServer.renderToStaticMarkup(Document())
  res.send("<!DOCTYPE html>" + html);
});

console.log("Listening on 9001");
app.listen(9001);
