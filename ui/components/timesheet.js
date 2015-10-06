'use strict';

var TimeSheet = React.createClass({
  render: function() {
    return (
      <div className="timeSheet">
          Vul hier uw uren in
      </div>
    );
  }
});

React.render(
  <TimeSheet />,
  document.getElementById('content')
);
