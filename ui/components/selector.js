'use strict';

var Selector = React.createClass({
  getInitialState: function() {
    return {
      customers: []
    };
  },
  componentDidMount: function() {
    $.get('resources/customer.json', function(response) {
      if (this.isMounted()) {
        this.setState({
          customers: response
        });
        console.log(response);
      }
    }.bind(this));
  },
  render: function() {
    console.log(this.state.customers);
    if (!this.state.customers || this.state.customers.length === 0) {
      return null;
    }
    return (
      <div className="nl-field nl-dd">
        <a className="nl-field-toggle">{this.state.customers[0].name}</a>
        <ul>
          {
            this.state.customers.map(function(customer) {
              return <li>{customer.name}</li>
            })
          }
        </ul>
      </div>
    );
  }
});
