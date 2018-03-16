var React = require('react');
var ReactDOM = require('react-dom');

// Create component 
var TodoComponent = React.createClass({
  render: function() {
    return(
      <div>
        <p><strong>Halva name:</strong>{this.props.halva.name}</p>
        <p><strong>Halva smell factor:</strong>{this.props.halva.smellFactor}</p>
        <p><strong>Halva price:</strong>{this.props.halva.price}</p>
      </div>
    );
  }
});

var myHalva = {name: 'Rodina', smellFactor: 'Delicio', price: '3.50'};

// Put component into HTML page 
ReactDOM.render(<TodoComponent mssg="I like halva" halva={myHalva}/>, document.getElementById('todo-wrapper'));