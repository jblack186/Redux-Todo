import React, {Component} from 'react';
import { changeHandler, submitHandler, addTodo } from '../actions';
import { connect } from 'react-redux';


class TodoForm extends React.Component {
    constructor(props){
        super(props)
        
        this.state = {
            
                items: []
            
        }
    }

handleClick = (e) => {
    e.preventDefault()
    this.props.addTodo()
}

submitHandler = (e) => {
    e.preventDefault();
    this.setState({ items: ''});
    this.props.addTodo(this.state.items) 
   
}

addTodo = (event) => {
   this.setState({ items : event.target.value})
}



    render(){
        console.log(this.props)
        console.log(this.state.items)
        return (
            
                <form onSubmit={this.submitHandler}>
                    <input
                   
                    onChange={this.addTodo}
                    
                    value={this.state.items}
                  
                    />
                    <button >ADD TASK</button>
                </form>
            
        )
    }
}

 const mapDispatchToProps = {
    addTodo: addTodo,
}


// const mapDispatchToProps = (dispatch) => {

//     return {submitHandler: (id) => dispatch({type: 'SUBMIT_HANDLER', id: id}),
//     addTodo: (id) => dispatch({type: 'ADD_TODO', text:text})

// }

   
// }

const mapStateToProps = state => {
    return {
       
        
    }
}

export default connect(
    mapStateToProps, { addTodo: addTodo }
)(TodoForm);



