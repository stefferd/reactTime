'use strict';

var CompanySelector = React.createClass({
  displayName: 'CompanySelector',
  propTypes: {
    onChange: React.PropTypes.func.isRequired
  },
  getInitialState: function() {
    return {
      customers: [],
      value: 1
    };
  },
  componentDidMount: function() {
    $.get('../resources/customer.json', function(response) {
      if (this.isMounted()) {
        this.setState({
          customers: response
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
    if (!this.state.customers || this.state.customers.length === 0) {
      return null;
    }
    return (
      <div className="nl-field nl-dd">
        <select onChange={this.handleChange}>
          {
            this.state.customers.map(function(customer) {
              return <option value={customer.id}>{customer.name}</option>
            })
          }
        </select>
      </div>
    );
  }
});
