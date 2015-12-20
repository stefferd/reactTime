'use strict';

var ProjectSelector = React.createClass({
  displayName: 'ProjectSelector',
  propTypes: {
    onChange: React.PropTypes.func.isRequired,
    customer: React.PropTypes.string.isRequired
  },
  getInitialState: function() {
    return {
      customer: this.props.customer ? this.props.customer : 1,
      projects: [],
      value: 0
    };
  },
  componentDidMount: function() {
    $.get('/api/projects', function(projects) {
      if (this.isMounted()) {
        this.setState({
          projects: projects,
          customer: this.props.customer
        });
      }
    }.bind(this));
  },
  handleChange: function(event) {
    var value = event.target.value;
    this.setState({
      value: value
    });
    this.props.onChange.call(this, 'project', value);
  },
  render: function() {
    this.state.customer = this.props.customer;
    if (!this.state.projects || this.state.projects.length === 0) {
      return null;
    }
    var projectsForCustomer = this.state.projects.filter(function (project)  {
      return project['customer_id'] === this.state.customer;
    }.bind(this));
    var options = (
      projectsForCustomer.map(function(project) {
        return <option value={project.id}>{project.name}</option>
      })
    );

    return (
      <div className="nl-field nl-dd">
        <select onChange={this.handleChange}>)
          if (this.props.

          {options}
        </select>
      </div>
    );
  }
});
