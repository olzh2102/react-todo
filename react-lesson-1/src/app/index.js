var React = require('react');
var ReactDOM = require('react-dom');

// Create component 
var TodoComponent = React.createClass({
  render: function() {
    return(
      <div>
        <h1>Bonjour</h1>
        <p>Halo</p>
      </div>
    );
  }
});

// Put component into HTML page 
ReactDOM.render(<TodoComponent/>, document.getElementById('todo-wrapper'));