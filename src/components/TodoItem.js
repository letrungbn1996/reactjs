import React, {Component} from 'react';

class TodoItem extends Component{
    render(){
        return (
            <div className="TodoItem">
                <p>{this.props.tittle}</p>
            </div>

        );
    }
}

export default TodoItem;