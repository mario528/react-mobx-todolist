import React, {useState} from 'react'
import './todoListEditer.css'
import {todoListEditerProps, todoListItemTypes, addTodoListItemTypes} from '../../../types/index'
import todoListStore from '../../../store/store'
const TodoListEditer: React.FC<todoListEditerProps> = (props) => {
    const {showEditer, onChange} = props
    const [title, setTitle] = useState<string>('')
    function handleAddTodo () {
        let data:addTodoListItemTypes = {
            title: title,
            isComplete: false
        }
        todoListStore.addTodoList(data)
        onChange(false)
    }
    function test (event: React.MouseEvent<HTMLInputElement, MouseEvent>) {
        event.stopPropagation()
    }
    function handleEditeTitle (event: React.ChangeEvent<HTMLInputElement>) {
        event.stopPropagation()
        setTitle(event.target.value)
    }
    if (showEditer) {
        return (
            <div className="editer_container" onClick={() => onChange(false)}>
                <div className="editer_content" onClick={(event:React.MouseEvent<HTMLDivElement, MouseEvent>) => {event.stopPropagation()}}>
                    <div className="editer_title">
                        <input className="editer_input" placeholder="输入待办事件"
                               onClick={test} 
                               onChange={handleEditeTitle} />
                    </div>
                    <button className="editer_save_btn" onClick={handleAddTodo}>添加</button>
                </div>
            </div>
        )
    }
    else {
        return null
    }
}
export default TodoListEditer
