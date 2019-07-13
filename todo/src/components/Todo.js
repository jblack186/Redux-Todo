import React, {Component} from 'react';
import { connect } from 'react-redux';
import './todo.css';


class Todo extends React.Component{
    constructor(){
    super()
        }

   
  

    click(todo){
        todo.complete = true
        
    }
    
    render(){
        const liStyle = {
            textDecoration: 'line-through'
        };

        const liStylz = {
            color: 'green'
        };


        // this.props.todos.map(todo => {
        //     if(todo.complete === true) {style={liStyle} }
        // })
       


        
       console.log(this.props.todos)
    return (
       
        <div>
            {this.props.todos.map((todo, index) => {
               if(todo.complete === false ){
                       return <li   key={todo.id}  onClick={()=> {this.click(todo)} }>{todo.todo} {todo.id}</li>;
                   } 
                else if (todo.complete === true){
                       return <li   key={todo.id} style={liStyle} >{todo.todo} {todo.id} </li>
                   }
            })
            }
           
        </div>
    )
        }
        
    
}
const mapStateToProps = state => {
    return {
        todos: state.todos
    }
}

export default connect(
    mapStateToProps
)(Todo);
