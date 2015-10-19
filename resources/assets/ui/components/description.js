'use strict';

var Description = React.createClass({
  displayName: 'Description',
  propTypes: {
    onChange: React.PropTypes.func.isRequired
  },
  getInitialState: function() {
    return {
      value: ''
    };
  },
  componentDidMount: function() {
  },
  handleChange: function(event) {
    var value = event.target.value;
    this.setState({
      value: value
    });
    this.props.onChange.call(this, 'description', value);
  },
  render: function() {
    return (
      <div className="nl-field nl-dd">
        <input type="text" onChange={this.handleChange} />
      </div>
    );
  }
});
