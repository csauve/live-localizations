const React = require("react");
const {Message, MessageContext} = require("../../components");

const pageBundle = require("./Homepage_messages");

module.exports = () => (
  <div className="homepage-content">
    <MessageContext bundle={pageBundle}>

      <h1><Message message="contactUsHeader"/></h1>
      <p><Message message="contactIntro"/></p>

      <form>
        <label>
          <Message message="fullNameLabel"/>
          <input type="text"/>
        </label>

        <label>
          <Message message="emailAddressLabel"/>
          <input type="email"/>
          <p className="help"><Message message="requiredField"/></p>
        </label>

        <label>
          <Message message="messageLabel"/>
          <textarea/>
          <p className="help"><Message message="requiredField"/></p>
        </label>
      </form>



    </MessageContext>
  </div>
);