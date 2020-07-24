import React, {useState} from 'react'
import {observer, inject} from 'mobx-react'
import TodoListBar from './todoListBar/todoListBar'
import TodoListMainContent from './todoListMainContent/todoListMainContent'
import './todoList.css'
const TodoList: React.FC = inject('todoListStore')(observer((props: any) => {
    const [todoList, setTodoList] = useState(props.todoListStore.todoList)
    function handleChangeTodoListFilter (type: number) {
        switch (type) {
            case 0:
                setTodoList(props.todoListStore.todoList)
                break;
            case 1:
                setTodoList(props.todoListStore.finishedList)
                break;
            case 2:
                setTodoList(props.todoListStore.unfinishedList)
                break
            default:
                break;
        }
    }
    return (
        <div className="todo_list_container">
            <TodoListBar onFilterTypeChange={handleChangeTodoListFilter}/>
            <TodoListMainContent todoListArray={todoList} />
        </div>
    )
}))
export default TodoList