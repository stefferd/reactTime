'use strict';

var ProjectSelector = React.createClass({
  displayName: 'ProjectSelector',
  propTypes: {
    onChange: React.PropTypes.func.isRequired,
    customer: React.PropTypes.string.isRequired
  },
  getInitialState: function() {
    return {
      projects: [],
      customer: 0
    };
  },
  componentDidMount: function() {
    $.get('resources/projects.json', function(projects) {
      var foundProjects = [];
      if (this.isMounted()) {
        projects.forEach((project) => {
          if (project.customer == this.props.customer) {
            foundProjects.push(project);
          }
        });
        this.setState({
          projects: foundProjects
        });
      }
    }.bind(this));
  },
  handleChange: function(event) {
    var value = event.target.value;
    this.setState({
      value: value
    });
    this.props.onChange.call(this, 'customer', value);
  },
  render: function() {
    $.get('resources/projects.json', (projects) => {
      var foundProjects = [];
      projects.forEach((project) => {
        if (project.customer == this.props.customer) {
          foundProjects.push(project);
        }
      });
      this.setState({
        projects: foundProjects
      });
    });

    if (!this.state.projects || this.state.projects.length === 0) {
      return null;
    }
    return (
      <div className="nl-field nl-dd">
        <select onChange={this.handleChange}>
          {
            this.state.projects.map(function(project) {
              return <option value={project.id}>{project.name}</option>
            })
          }
        </select>
      </div>
    );
  }
});
