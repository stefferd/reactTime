'use strict';

var React = require('react');
var CompanySelector = require('./companyselector');
var ProjectSelector = require('./projectselector');
var DateSelection = require('./dateselection');
var AmountSelector = require('./amountselector');
var Description = require('./description');
var TimeSheet;

module.exports = TimeSheet = React.createClass({
  getInitialState: function(props) {
    props = props || this.props
    return {
      customer: props.customer ? props.customer : 1,
      project: null,
      date: null,
      amount: null,
      description: ''
    };
  },
  componentWillReceiveProps: function(newProps, oldProps){
    this.setState(this.getInitialState(newProps));
  },
  handleChange: function(type, value, event) {
    if (type === 'project' || type === 'customer') {
      value = parseInt(value);
    }
    this.state[type] = value;
    this.setState(this.state);
  },
  render: function() {
    return (
      <form id="nl-form" className="nl-form">
        Ik heb uren gemaakt voor
        <CompanySelector onChange={this.handleChange} /><br />
        voor het project
        <ProjectSelector customer={this.state.customer} onChange={this.handleChange} />
        <br />
        heb ik <AmountSelector onChange={this.handleChange} /> uur gemaakt
        <DateSelection onChange={this.handleChange} />
        <br />
        <Description onChange={this.handleChange} />
      </form>
    );
  }
});

