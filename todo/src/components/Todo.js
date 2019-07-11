import React, {Component} from 'react';
import TodoForm from './TodoFom';
import { connect } from 'react-redux';
import { posts } from '../actions';


function Todo(props) {
   
  
    console.log(props)
    return (
       
        <div>
            {props.todos.map((todo, index) => {
               
                  
                      return <li key={index}>{todo.todo}</li>;
                   
            })
            }
            <TodoForm  />
        </div>
    )
        }
    
    
const mapStateToProps = state => {
    return {
        todos: state.todos
    }
}

export default connect(
    mapStateToProps
)(Todo);
