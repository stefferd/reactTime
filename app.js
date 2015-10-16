/**
 * Created by Stef.van.de.Berg on 10/16/2015.
 */
var React = require('react');

// Render the components, picking up where react left off on the server
React.renderComponent(
  <TimeSheet />,
  document.getElementById('content')
);