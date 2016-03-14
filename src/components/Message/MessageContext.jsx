const React = require("react");
const _ = require("lodash");
const query = require("querystring");

const defaultLocale = "en";

module.exports = React.createClass({
  getInitialState: function() {
    return {
      bundle: this.props.bundle,
      languagePreference: this.props.languagePreference || defaultLocale,
      debugMode: false
    };
  },

  childContextTypes: {
    tryLocalize: React.PropTypes.func,
    requestUpdate: React.PropTypes.func
  },

  getChildContext: function() {
    return {
      tryLocalize: this.tryLocalize,
      requestUpdate: this.state.debugMode ? this.requestUpdate : null
    };
  },

  requestUpdate: function(path, value) {
    _.set(this.state.bundle, this.state.languagePreference + "." + path, value);
    this.forceUpdate();
  },

  tryLocalize: function(path) {
    let missing = false;
    let localized = _.get(this.state.bundle, this.state.languagePreference + "." + path);

    if (!localized) {
      missing = true;
      localized = _.get(this.state.bundle, defaultLocale + "." + path);
    }

    if (!localized) {
      localized = path;
    }

    return {missing, localized};
  },

  componentDidMount: function() {
    const params = window.location.search ? query.parse(window.location.search.substring(1)) : {};
    this.setState({
      languagePreference: params.language || defaultLocale,
      debugMode: params.debug || false
    });
  },

  render: function() {
    return (
      <div className="message-context">
        {this.props.children}

        {!this.state.debugMode ? null :
          <div className="debug-area">
            <label>Messages bundle for: <code>{this.state.languagePreference}</code></label>
            <pre className="messages-raw">
              {JSON.stringify(this.state.bundle[this.state.languagePreference], 2, " ")}
            </pre>
            <p><em>Send this to a developer!</em></p>
          </div>
        }
      </div>
    );
  }
});