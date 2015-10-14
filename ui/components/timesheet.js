'use strict';

var TimeSheet = React.createClass({
  render: function() {
    return (
      <form id="nl-form" className="nl-form">
        Ik heb uren gemaakt voor
        <Selector />
      </form>
    );
  }
});

React.render(
  <TimeSheet />,
  document.getElementById('content')
);
