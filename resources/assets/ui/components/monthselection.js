'use strict';

var MonthSelection = React.createClass({
  displayName: 'MonthSelection',
  propTypes: {
    onChange: React.PropTypes.func.isRequired
  },
  getInitialState: function() {
    return {
      value: '',
      month: ''
    };
  },
  componentDidMount: function() {
  },
  handleChange: function(event) {
    var value = event.target.value;
    this.setState({
      value: value
    });
    this.props.onChange.call(this, 'month', value);
  },
  render: function() {
    this.ranges = {
      '0': moment().format('YYYY-M'),
      '1': moment().subtract(1,'months').format('YYYY-M'),
      '2': moment().subtract(2,'months').format('YYYY-M'),
      '3': moment().subtract(3,'months').format('YYYY-M'),
      '4': moment().subtract(4,'months').format('YYYY-M'),
      '5': moment().subtract(5,'months').format('YYYY-M')
    };

    var options = (
      Object.keys(this.ranges).map((index, value) => {
        return <option value={index}>{this.ranges[index]}</option>
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
