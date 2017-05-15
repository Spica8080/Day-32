import React from "react";

export default React.createClass({
  getInitialState: function() {
    return {
      alert: false,
      checked: false
    };
  },

  boxChecked: function() {
    this.setState({
      alert: true
    });
  },

  confirmed: function() {
    this.setState({
      checked: true,
      alert: false
    });
  },

  unconfirmed: function() {
    this.setState({
      alert: false,
      checked: false
    });
  },

  renderActions: function() {
    if (this.state.checked === true) {
      return (
        <span>
          <h4>Read</h4>
          <input type="checkbox" disabled checked="true" />
        </span>
      );
    } else {
      return (
        <span>
          <h4>Mark as Read</h4>
          <input type="checkbox" />
        </span>
      );
    }
  },

  render: function() {
    var sectionClass = "";
    if (this.state.alert) {
      sectionClass = "alert";
    } else {
      sectionClass = "hidden";
    }

    return (
      <article>
        <p>{this.props.body}</p>
        {this.renderActions()}
        {this.boxChecked}
        <section className={sectionClass}>
          {" "}"Are you sure you want to mark this read?"
        </section>
      </article>
    );
  }
});
