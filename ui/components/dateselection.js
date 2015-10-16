'use strict';

var DateSelection;

module.exports = DateSelection = React.createClass({
  displayName: 'DateSelection',
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
    this.props.onChange.call(this, 'date', value);
  },
  render: function() {
    this.ranges = {
      'Vandaag': moment().calendar(),
      'Gisteren': moment().subtract(1,'days').calendar(),
      'Eergisteren': moment().subtract(2,'days').calendar(),
      'Anders': 0
    };
    var options = (
      Object.keys(this.ranges).map(function (index, value) {
        return <option value={value}>{index}</option>
      })
    );

    return (
      <div className="nl-field nl-dd">
        <select onChange={this.handleChange}>
          {options}
        </select>
      </div>
    );
  }
});
