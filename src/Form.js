import React, {Component} from 'react';
import Comment from './Comment';
class Form extends Component {
    constructor(){
        super();
        this.state = {
            body: "",
        }
    }

    handleChange = (ev) => {
        this.setState({body: ev.target.value})
    }

    handleSubmit = (ev) =>{
        ev.preventDefault()
        this.props.comment(this.state.body)
    }

    render(){
        return(
            <span>
            <form onSubmit = {this.handleSubmit}>
                <input type = "text" 
                       id = "commentText" 
                       placeholder = "comment..." 
                       value = {this.state.body}
                       onChange = {this.handleChange}
                       >
                </input>
            </form>
            </span>
        );
    }

   
}

export default Form;