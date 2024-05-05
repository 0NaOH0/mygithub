import React, { useState } from "react";
import Form from "./components/Form";
import FilterButton from "./components/FilterButton";
import Todo from "./components/Todo";
import {nanoid} from "nanoid";
import './App.css';

function App(props) {
	const [tasks,setTask] = useState(props.tasks);   //需要不断改变的值用useState来更新组件
	
	function editTask(id, newName){//通过单独的id进行查找需要修改的任务
		const editedTaskList = tasks.map((task) => {
			if(id === task.id){
				return{...task, name: newName};
			}
			return task;
		});
		setTask(editedTaskList);
	}
	
	function deleteTask(id){
		const remainingTasks = tasks.filter((task) => id !== task.id);
		setTask(remainingTasks);
	}
	
	function toggleTaskCompleted(id){
		const changeTasks = tasks.map((task) => {
			if(id == task.id){
				return {...task, completed : !task.completed};
			}
		else return task;
		})
	}
	
	function addTask(name){
		const newTask = {id: "todo"+nanoid() , name , completed: false};
		setTask ([...tasks , newTask]);//setTask用于更改task里面的内容
	}
	
	const taskList = tasks
	  .filter(MapFilter[filter])
	  .map((task) => (
	    <Todo
	      id={task.id}
	      name={task.name}
	      completed={task.completed}
	      key={task.id}
	      toggleTaskCompleted={toggleTaskCompleted}
	      deleteTask={deleteTask}
	      editTask={editTask}
	    />
	  ));
  
  return (
    <div className="todoapp stack-large">
      <h1>TodoMatic</h1>
      <Form addTask={addTask}/>
      <div className="filters btn-group stack-exception">
	  {filterList}
      </div>
      <h2 id="list-heading" >{tasks.length + " tasks remaining"}</h2>
      <ul
        role="list"
        className="todo-list stack-large stack-exception"
        aria-labelledby="list-heading">
        {taskList}
      </ul>
    </div>
  );
}

export default App;


