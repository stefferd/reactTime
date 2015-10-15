'use strict';

var TimeSheet = React.createClass({
  getInitialState: function() {
    return {
      customer: null,
      project: null,
      date: null,
      amount: null,
      description: ''
    };
  },
  handleChange: function(type, value, event) {
    console.log(this.state);
    this.state[type] = value;
    console.log(this.state);
    this.setState(this.state);
  },
  render: function() {
    return (
      <form id="nl-form" className="nl-form">
        Ik heb uren gemaakt voor
        <CompanySelector onChange={this.handleChange} />
        <ProjectSelector customer={this.state.customer} onChange={this.handleChange} />
      </form>
    );
  }
});

React.render(
  <TimeSheet />,
  document.getElementById('content')
);
