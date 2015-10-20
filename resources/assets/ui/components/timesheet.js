'use strict';

var TimeSheet = React.createClass({
  getInitialState: function(props) {
    props = props || this.props;
    return {
      customer: props.customer ? props.customer : 1,
      project: 1,
      date: moment().format('YYYY-MM-DD'),
      amount: 0,
      description: ''
    };
  },
  componentWillReceiveProps: function(newProps, oldProps){
    this.setState(this.getInitialState(newProps));
  },
  handleChange: function(type, value, event) {
    if (type === 'project' || type === 'customer') {
      value = parseInt(value);
    }
    this.state[type] = value;
    this.setState(this.state);
  },
  handleClick: function(event) {
    $.post('http://localhost:8000/api/entry', {
      customer: this.state.customer,
      project: this.state.project,
      amount: this.state.amount,
      booked_for: this.state.date,
      description: this.state.description,
      _token: document.getElementById('_token').value
    }, (response) => {
      if (response.status === 'OK') {
        toastr.success('Gedaan', 'De uren zijn toegevoegd!');
      } else {
        toastr.error('Mislukt', 'Helaas de uren zijn niet opgeslagen');
      }
    });
    this.setState({
      amount: 0,
      description: ''
    });
  },
  render: function() {
    return (
      <form id="nl-form" className="nl-form">
        Ik heb uren gemaakt voor
        <CompanySelector onChange={this.handleChange} /><br />
        voor het project
        <ProjectSelector customer={this.state.customer} onChange={this.handleChange} />
        <br />
        heb ik <AmountSelector value={this.state.amount} onChange={this.handleChange} /> uur gemaakt
        <DateSelection onChange={this.handleChange} />
        <br />
        <Description value={this.state.description} onChange={this.handleChange} /><br />
        <button type="button" onClick={this.handleClick}>Opslaan</button>
      </form>
    );
  }
});

React.render(
  <TimeSheet />,
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

