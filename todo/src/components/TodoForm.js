import React from 'react';
import { addTodo } from '../actions';
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

 



const mapStateToProps = state => {
    return {
       
        
    }
}

export default connect(
    mapStateToProps, { addTodo: addTodo }
)(TodoForm);



