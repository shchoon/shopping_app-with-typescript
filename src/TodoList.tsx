import React, { ChangeEvent, useState } from 'react';
import './App.css';
import Todo from './component/Todo';

function TodoList() {

  let [todoList, setTodoList] = useState<string[]>([]);
  let [myTodo, setMyTodo] = useState<string>('');
  let [todoNumber, setTodoNumber] = useState<number>(0);


  function onChangeValue(e :ChangeEvent<HTMLInputElement>) {
    if(e.target.name === 'todo'){
      setMyTodo(e.target.value);
    }else {
      setTodoNumber(Number(e.target.value));
    }
  }
  
  function del(index :number) :void{
    let preList = todoList;
    setTodoList(preList.filter((item) => item !== preList[index]))
  }

  return (
    <div className="Todo_App">
      <h2>TodoList</h2>
      <div className='header'>
      <div className='input'>
        <input type='text' placeholder='할 일을 입력해주세요.' name='todo' value={myTodo} 
        onChange={(e) => {
          onChangeValue(e);
        }} />
        <br/>
        <input type='number' name='order' value={todoNumber} onChange={e => {
          onChangeValue(e)
        }} />
      </div>
      <button className='addBtn' onClick={() => {
        setTodoList([...todoList, myTodo]);
        setMyTodo('');
        setTodoNumber(0);
      }}>추가</button>
      </div>
      <div className='body'>
        {todoList.map((todo, i) => {
          return(
            <Todo myTodo={todo} index={i} del={del}  />
          )
        })}
      </div>
    </div>
  );
}

export default TodoList;
