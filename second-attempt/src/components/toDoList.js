

import React, { Component } from 'react'
import './ToDoList.css'
class ToDoList extends Component {
    constructor(props){
        super(props)
        this.state = { tasks: '',
        list: []}
    }
    add = (input) => {
        if( input != ''){

        
        let tempList = this.state.list
        tempList.push(input)
        this.setState({list :tempList,
        tasks : ''})}
    }
    changetask = (input) =>{
        this.setState({ tasks : input})

    }
   
    render(){
        return(
            <div>
            <input 
            type ="text"
            value = { this.state.tasks}
            onChange = { (e) => this.changetask(e.target.value)}
            />
            <button onClick = { () => this.add(this.state.tasks)} style={{color: 'green'}}>Add</button>

            <h1 style={{ color: "white" }} >{this.state.list.map( (val) => <li>{val}</li>)}</h1>
            
           
            </div>
        )}
}
export default ToDoList

//We need to connect the input with the this.state.tasks
//We need to add to list instead of replacing
