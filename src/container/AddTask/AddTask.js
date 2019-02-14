import React, {Component} from 'react';
import './AddTask.css';
import ListItem from '../../component/ListItem/LisItem';   

class AddTask extends Component {
    constructor(props){
        super(props);

        this.state = {
            task: '',
            list: []
        }
    }
    inputChange = (e) => {
        this.setState({
            task: e.target.value
        })
    }

    addTask = () => {
        const {list, task} = this.state;
        /**
         * Need to ask why using push is not working, type of list is changing from object to number
         * This is not working as where we are taking state and pushing it to same state 
         * In the second case, we are iterating it and then merging it, thats why it is working.
         */
        
        // this.setState({
        //     task: '',
        //     list: list.push(task)
        // })

        this.setState({
            task: '',
            list: [...list, task]
        })
        console.log("list", JSON.stringify(list));
    }

    render(){
        const {list, task} = this.state;
        console.log("typeof(list)", typeof list);
        return(
            <div className="add-task">
                <input type="text" value={task} onChange={this.inputChange}/>
                <button onClick={this.addTask}>Add Task</button>
                <div className="list-div">
                    <ListItem list={list} />
                </div>
            </div>
        );
    }
}

export default AddTask;