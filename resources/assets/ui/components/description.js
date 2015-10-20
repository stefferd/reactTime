'use strict';

var Description = React.createClass({
  displayName: 'Description',
  propTypes: {
    onChange: React.PropTypes.func.isRequired
  },
  getInitialState: function(props) {
    props = props || this.props;
    return {
      value: props.value
    };
  },
  componentWillReceiveProps: function(newProps, oldProps){
    this.setState(this.getInitialState(newProps));
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
      <div className="nl-field nl-dd full-width">
        <input type="text" placeholder="Eventuele toelichting..." value={this.state.value} onChange={this.handleChange} />
      </div>
    );
  }
});
