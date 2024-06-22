import { useState } from "react";
import TodoList from "./TodoList/TodoList";
import AddToDo from "./AddToDo/AddToDo";
export function App() {
  const {list,setList}=useState([
    {id:1, todoData:'todo1',finished:false},
    {id:2, todoData:'todo2',finished:false},
  ]); 
  return (
    <> 
    <AddToDo updateList={(todo)=>setList([...list,{id:list.length+1,todoData:todo,finished:false}])}/>
    <TodoList list={list}/>
    </>
  )
}
