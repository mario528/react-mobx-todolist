/*
 * @Author: your name
 * @Date: 2020-07-23 19:23:01
 * @LastEditTime: 2020-07-24 13:23:44
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /todo-list/src/interface/index.ts
 */ 
export interface todoListItemTypes {
    id: number;
    title: string;
    isComplete: boolean;
}
export interface addTodoListItemTypes {
    title: string;
    isComplete: boolean;
}
export interface todoListTypes {
    todoListArray: todoListItemTypes[]
}
export interface todoListEditerProps {
    showEditer: boolean
    onChange: (state: boolean) => void
}
export interface todoListBarTypes {
    onFilterTypeChange: (type: number) => void
}