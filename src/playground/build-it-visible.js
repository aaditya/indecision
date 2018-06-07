class VisibilityToggle extends React.Component {
  constructor(props) {
    super(props);
    this.handleToggleVisibility = this.handleToggleVisibility.bind(this);
    this.state = {
      'title':'Visibility Toggle',
      'subtitle':'Hey. These are some details you can now see!',
      'visible':false
    }
  }
  handleToggleVisibility() {
    this.setState((prevState) => {
      return {
        visible: !prevState.visible
      };
    });
  }
  render() {
    return(
      <div>
        <h1>{this.state.title}</h1>
          <button onClick={this.handleToggleVisibility}>{this.state.visible?'Hide Details':'Show Details'}</button>
          {this.state.visible && <p>{this.state.subtitle}</p>}
      </div>
    );
  }
}

ReactDOM.render(<VisibilityToggle />,document.getElementById('app'));
