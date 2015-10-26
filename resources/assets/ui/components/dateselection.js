'use strict';

var DateSelection = React.createClass({
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
  handleDateChange: function(event) {
    var value = event.target.value;
    this.setState({
      value: value
    });
  },
  render: function() {
    this.ranges = {
      'Vandaag': moment().format('YYYY-MM-DD'),
      'Gisteren': moment().subtract(1,'days').format('YYYY-MM-DD'),
      'Eergisteren': moment().subtract(2,'days').format('YYYY-MM-DD'),
      'Anders': 0
    };

    var options = (
      Object.keys(this.ranges).map((index, value) => {
        return <option value={this.ranges[index]}>{index}</option>
      })
    );


    var timeField = null;
    if (parseInt(this.state.value) === 0) {
      var today = moment().format('YYYY-MM-DD');
      timeField = (<input className="dateField" type="text" onChange={this.handleDateChange} value={today} />);
    }

    console.log(this.state.value, timeField);

    return (
      <div className="nl-field nl-dd">
        <select onChange={this.handleChange}>
          {options}
        </select>
        {timeField}
      </div>
    );
  }
});
