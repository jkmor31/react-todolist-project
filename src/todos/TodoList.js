import React from 'react';
import { connect } from 'react-redux';
import NewTodoForm from './NewTodoForm';
import TodoListItem from './TodoListItem';
import { removeTodo, markTodoAsCompleted } from './actions';
import './TodoList.css'

const TodoList = ({ todos = [], onRemovePressed, onMarkCompletedPressed }) => (
    <div className="list-wrapper">
        <NewTodoForm />
        {todos.map(todo => <TodoListItem 
            todo={todo} 
            onRemovePressed={onRemovePressed}
            onMarkCompletedPressed={onMarkCompletedPressed} />)}
    </div>
);

const mapStateToProps = state => ({
    todos: state.todos,
});

const mapDispatchToProps = dispatch => ({
    onRemovePressed: text => dispatch(removeTodo(text)),
    onMarkCompletedPressed: text => dispatch(markTodoAsCompleted(text)),
})

export default connect(mapStateToProps, mapDispatchToProps)(TodoList);