import React, { useState } from 'react'
import cs from 'classnames'
import {observer} from 'mobx-react'
import {todoListTypes,todoListItemTypes} from '../../../types/index'
import todoListStore from '../../../store/store'
import './todoListMainContent.css'
const TodoListMainContent: React.FC<todoListTypes> = observer((props) => {
    const {todoListArray} = props
    const [hoverCurrentIndex, setHoverCurrentIndex] = useState(-1)
    const [editCurrentIndex, setEditCurrentIndex] = useState(-1)
    const [editTitle, setEditTitle] = useState('')
    function handleChangeState (id: number) {
        todoListStore.changeTodoListState(id)
    }
    function handleChangeItemTitle (event: React.ChangeEvent<HTMLInputElement>) {
        const value = event.target.value
        setEditTitle(value)
    }
    function handleEditTitle (event: React.MouseEvent<HTMLDivElement, MouseEvent>,index: number) {
        setEditCurrentIndex(index)
        event.stopPropagation()
    }
    function handleUpdateTitle (id: number) {
        if (editTitle) {
            todoListStore.changeTodoListItemTitle(id, editTitle)
        }
        setEditTitle('')
        setEditCurrentIndex(-1)
        setHoverCurrentIndex(-1)
    }
    return (
        <div className="todo_list_content">
            {todoListArray.length !== 0 && todoListArray.map((item: todoListItemTypes, index: number) => (
                <div className="todo_list_item" key={index} onClick={() => handleChangeState(item.id)} 
                     onMouseOver={() => setHoverCurrentIndex(index)} 
                     onMouseLeave={() => setHoverCurrentIndex(-1)}>
                    <div className={cs('todo_list_common_state',{'todo_list_complete_state': item.isComplete})}>  
                        {
                            item.isComplete ? '✅' : '❌'
                        }      
                    </div>
                    {editCurrentIndex !== index && 
                        <div className={cs('todo_list_text', {'todo_list_text_complete': item.isComplete})}>{item.title}</div>}
                    {editCurrentIndex === index && 
                        <input type="text" className="edit_input"
                                           placeholder={item.title} 
                                           onClick={(event) => event.stopPropagation()}
                                           onChange={handleChangeItemTitle}
                                           onBlur={() => handleUpdateTitle(item.id)}/>}
                    { (hoverCurrentIndex === index && !item.isComplete) && <div className="edit-text" onClick={(event) => handleEditTitle(event,index)}>编辑</div> }
                </div>
            ))}
            {
                todoListArray.length === 0 && <div className="empty-tips">暂无待办事件</div>
            }
        </div>
    )
})
export default TodoListMainContent