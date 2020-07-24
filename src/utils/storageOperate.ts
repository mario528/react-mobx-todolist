/*
 * @Author: your name
 * @Date: 2020-07-24 11:41:50
 * @LastEditTime: 2020-07-24 12:47:38
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /todo-list/src/utils/stroageOpreation.ts
 */ 
class StorageOperate {
    constructor () {}
    
    saveData (key: string, value: any): boolean {
        localStorage.setItem(key, JSON.stringify(value))
        return true
    }

    getData (key: string) {
        if (localStorage.getItem(key)) {
            return JSON.parse(localStorage.getItem(key) as string)
        }
        else {
            return undefined
        }
    }
}
export default new StorageOperate()