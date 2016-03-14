const React = require("react");
const _ = require("lodash");

module.exports = React.createClass({
  contextTypes: {
    tryLocalize: React.PropTypes.func,
    requestUpdate: React.PropTypes.func
  },

  componentDidMount: function() {
    this.refs.text.addEventListener("input", (event) => {
      if (!this.context.requestUpdate) return;
      this.context.requestUpdate(this.props.message, event.target.innerText);
    }, false);
  },

  render: function() {
    if (!this.props.message) return null;

    const debugMode = this.context.requestUpdate ? true : false;
    const {missing, localized} = this.context.tryLocalize(this.props.message);
    const classes = debugMode ? `${missing ? "localized-missing" : ""}` : null;

    return (
      <span ref="text" contentEditable={debugMode} className={classes}>{localized}</span>
    );
  }
});