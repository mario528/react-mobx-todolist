import React, {useState, useRef} from 'react'
import TodoListEditer from '../todoListEditer/todoListEditer'
import {todoListBarTypes} from '../../../types/index'

import './todoListBar.css'
function TodoListBar (props: todoListBarTypes) {
    const {onFilterTypeChange} = props
    const barList:string[] = ['全部', '已完成', '未完成']
    const [isShowEditer, setIsShowEditer] = useState(false)
    function handleEditerState (state: boolean = true): void {
        setIsShowEditer(state)
    }
     return (
        <div className="todo_list_bar">
            <TodoListEditer  showEditer={isShowEditer}
                             onChange={handleEditerState} />
            <div className="todo_list_bar_top">
                {barList.map((item: string, index: number) => {
                    return (
                        <div className="todo_list_bar_item" key={index}
                             onClick={() => onFilterTypeChange(index)}>{item}</div>   
                    )
                })}
            </div>
            <div className="todo_list_add_btn"
                 onClick={() => handleEditerState()}
                 title="新建todoList清单">+ 新建清单</div>
        </div>
    )
}
export default TodoListBar