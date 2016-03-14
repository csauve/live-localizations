const React = require("react");
const {Message, MessageContext} = require("../../components");

const pageBundle = require("./Homepage_messages");

module.exports = () => (
  <div className="homepage-content">
    <MessageContext bundle={pageBundle}>

      <h1><Message message="contactUsHeader"/></h1>
      <p><Message message="contactIntro"/></p>

      <form>
        <div className="form-element">
          <label><Message message="fullNameLabel"/></label>
          <input type="text"/>
        </div>

        <div className="form-element">
          <label><Message message="emailAddressLabel"/></label>
          <input type="email"/>
          <p className="help"><Message message="requiredField"/></p>
        </div>

        <div className="form-element">
          <label><Message message="messageLabel"/></label>
          <textarea/>
          <p className="help"><Message message="requiredField"/></p>
        </div>
      </form>

    </MessageContext>
  </div>
);