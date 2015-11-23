'use strict';

var EntrySheet = React.createClass({
  getInitialState: function(props) {
    props = props || this.props;
    return {
      customer: props.customer ? props.customer : 1,
      month: 0
    };
  },
  componentWillReceiveProps: function(newProps, oldProps){
    this.setState(this.getInitialState(newProps));
  },
  handleChange: function(type, value, event) {
    if (type === 'customer') {
      value = parseInt(value);
    }
    this.state[type] = value;
    this.setState(this.state);
  },
  handleClick: function(event) {
    document.location.href = '/entries/' + this.state.customer + '/' + this.state.month;
  },
  render: function() {
    return (
      <form id="nl-form" className="nl-form">
        Bekijk overzicht voor
        <CompanySelector onChange={this.handleChange} /><br />
        van de <MonthSelection onChange={this.handleChange} /><br />
        <button type="button" onClick={this.handleClick}>Bekijken</button>
      </form>
    );
  }
});

React.render(
  <EntrySheet />,
  document.getElementById('content')
);

toastr.options = {
  "closeButton": false,
  "debug": false,
  "newestOnTop": false,
  "progressBar": false,
  "positionClass": "toast-top-full-width",
  "preventDuplicates": false,
  "onclick": null,
  "showDuration": "300",
  "hideDuration": "1000",
  "timeOut": "5000",
  "extendedTimeOut": "1000",
  "showEasing": "swing",
  "hideEasing": "linear",
  "showMethod": "fadeIn",
  "hideMethod": "fadeOut"
};

