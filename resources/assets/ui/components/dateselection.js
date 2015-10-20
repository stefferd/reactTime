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

    return (
      <div className="nl-field nl-dd">
        <select onChange={this.handleChange}>
          {options}
        </select>
      </div>
    );
  }
});
