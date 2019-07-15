import React, {Component} from 'react';
import classNames from 'classnames';


class TodoItem extends Component{
    render(){

        return (
            <div className={classNames('TodoItem',  {
                'TodoItem-complete': this.props.item.isComplete
            },{
                'is-selected' : this.props.item.isSelected
            })}>
                <p>{this.props.item.tittle}</p>
            </div>

        );
    }
}

export default TodoItem;