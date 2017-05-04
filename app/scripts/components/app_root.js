import React from "react";
import { connect } from "react-redux";
import container from "../containers/all.js";
import BlogComponent from "../components/blog_component.js";

const AppRoot = React.createClass({
  render: function() {
    return (
      <section>
        <BlogComponent />
      </section>
    );
  }
});

export default connect(container.allState)(AppRoot);
