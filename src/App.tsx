/*
 * @Author: your name
 * @Date: 1985-10-26 16:15:00
 * @LastEditTime: 2020-07-24 10:47:11
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /todo-list/src/App.js
 */ 
import React from 'react';
import {Provider} from 'mobx-react'
import './App.css';
import {TodoList, Header} from './components/index'
import stores from './store/index'
function App() {
  return (
    <Provider {...stores}>
        <div className="App">
          <Header />
          <TodoList />
        </div>
    </Provider>
  );
}

export default App;
