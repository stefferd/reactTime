'use strict';


var AmountSelector = React.createClass({
  displayName: 'AmountSelector',
  propTypes: {
    onChange: React.PropTypes.func.isRequired
  },
  getInitialState: function() {
    return {
      value: 0
    };
  },
  componentDidMount: function() {

  },
  handleChange: function(event) {
    var value = event.target.value;
    this.setState({
      value: value
    });
    this.props.onChange.call(this, 'amount', value);
  },
  render: function() {
    var options = (
      [0, 0.5, 1, 1.5, 2, 2.5, 3, 3.5, 4, 4.5, 5, 5.5, 6, 6.5, 7, 7.5, 8].map((amount) => {
        return <option value={amount}>{amount}</option>
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
