/*
 * @Author: majiaao
 * @Date: 2020-07-23 19:19:05
 * @LastEditTime: 2020-07-24 14:26:05
 * @Description: 创建state
 */ 
import {todoListItemTypes, addTodoListItemTypes} from '../types/index'
import {observable, action, computed} from 'mobx' 
import {StorageOperate} from '../utils/index'
class TodoListStore {
    @observable todoList:todoListItemTypes[] = StorageOperate.getData('todoList') || []
    @observable todoListStatus: number = 0     // 0 全部 1 未完成 2 已完成
    @computed
    get unfinishedList() {
        return this.todoList.filter((item: todoListItemTypes) => !item.isComplete)
    }
    get finishedList () {
        return this.todoList.filter((item: todoListItemTypes) => item.isComplete)
    }
    @action addTodoList = (todoListItem: addTodoListItemTypes) => {
        let obj = Object.assign({
            id: this.todoList.length
        }, todoListItem)
        this.todoList.unshift(obj)
        StorageOperate.saveData('todoList', this.todoList)
    }
    @action delTodoList = (id: number) => {
        this.todoList.map((item: todoListItemTypes) => {
            if (item.id !== id) {
                return item
            }
        })
    }
    @action changeTodoListState = (id: number) => {
        this.todoList.forEach((item: todoListItemTypes) => {
            if (item.id === id) {
                item.isComplete = !item.isComplete
            }
        })
        StorageOperate.saveData('todoList', this.todoList)
    }
    @action changeFilterStatus = (status: number) => {
        if (![0,1,2].includes(status)) {
            return
        }
        this.todoListStatus = status
    }
    @action changeTodoListItemTitle = (id: number, value: string) => {
        this.todoList.forEach((item: todoListItemTypes) => {
            if (item.id === id) {
                item.title = value
            }
        })
        StorageOperate.saveData('todoList', this.todoList)
    }
}
export default new TodoListStore()