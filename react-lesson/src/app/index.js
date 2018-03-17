var React = require('react');
var ReactDOM = require('react-dom');
require('./css/index.css');


// Module requires 
var TodoItem = require('./todoItem');
var AddItem = require('./addItem');

//Create a component
var TodoComponent = React.createClass({
    getInitialState: function(){
        return {
            todos: ['wash up', 'eat some cheese', 'take a nap']
        }
    }, //getInitialState
    render: function(){
        var todos = this.state.todos;
        todos = todos.map(function(item, index){
            return(<TodoItem key={index} item={item} onDelete={this.onDelete} />);
        }.bind(this));
        return(
            <div id="todo-list">
                <p>The busiest people have the most leisure...</p>
                <ul>{todos}</ul>
                <AddItem onAdd={this.onAdd}/>
            </div>
        );
    }, //render

    //Custom functions
    onDelete: function(item){
        var updatedTodos = this.state.todos.filter(function(val, index){
            return item !== val;
        });
        this.setState({
          todos: updatedTodos
        });
    },

    onAdd: function(item) {
      var updatedTodos = this.state.todos;
      updatedTodos.push(item);
      this.setState({
        todos: updatedTodos
      })
    },

    //  Lifecycle functions 
    componentWillMount: function() {
      console.log('componentWilMound');
    },

    componentDidMount: function() {
      console.log('componentDidMound');
      // any grabbing of external data
    },

    componentWillUpdate: function() {
      console.log('componentWillUpdate');
    }
});

ReactDOM.render(<TodoComponent />, document.getElementById('todo-wrapper'));