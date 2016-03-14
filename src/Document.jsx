const React = require("react");

var Page = require("./pages/Homepage/Homepage.jsx");

module.exports = ({title}) => (
  <html lang="en">
    <head>
      <meta charSet="UTF-8"/>
      <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/font-awesome/4.5.0/css/font-awesome.min.css"/>
      <link rel="stylesheet" href="/static/styles.css"/>
      <title>Example</title>
    </head>
    <body>
      <div id="mountpoint">
        <Page></Page>
      </div>
      <script src="/static/bootstrap.js"></script>
    </body>
  </html>
);