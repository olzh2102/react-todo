var React = require('react');
var ReactDOM = require('react-dom');

// Create component 
var TodoComponent = React.createClass({
  getInitialState: function() {
    return {
      todos: ['wash up', 'help friend', 'take a nap'],
      age: 30
    }
  },

  render: function() {
    var ager = setTimeout(() => {
      this.setState({
        age: 35
      });
    }, 5000);
    return(
      <div id="todo-list">
        <p>The busiest people have the most leisure...</p>
        <p>{this.state.age}</p>
        <ul>
          <li>{this.state.todos[0]}</li>
          <li>{this.state.todos[1]}</li>
          <li>{this.state.todos[2]}</li>
        </ul>
      </div>
    );
  } // render 
});

// Put component into HTML page 
ReactDOM.render(<TodoComponent/>, document.getElementById('todo-wrapper'));