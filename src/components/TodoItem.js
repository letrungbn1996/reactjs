import React, {Component} from 'react';
import classNames from 'classnames';


class TodoItem extends Component{

    render(){
        const {onClick} = this.props;

        return (
            <div onClick={onClick} className={classNames('TodoItem',  {
                'TodoItem-complete': this.props.item.isCompleted
            },{
                'is-selected' : this.props.item.isSelected
            })}>
                <p>{this.props.item.tittle}</p>
            </div>

        );
    }
}

export default TodoItem;