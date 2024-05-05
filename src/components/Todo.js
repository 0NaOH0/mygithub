import Form from "../../../../../Users/NaOH/todo-demo/src/components/Form";
import React, { useState } from "react";

export default function Todo(props) {
  const [name,setName] = useState(props.name);//需要改变的值需要用useState函数,控制的是name值
  
  function handleName(even){//用于获取文本输入的值
	  setName(even.target.value);
  }
  
  const [isEditing, setEditing] = useState(false);//清单的编辑状态，先将false赋值给isEditing
  
  function handleEdit(){
	  setEditing(true);//进入编辑状态
  }
  
  function cancelEdit(){
	  setEditing(false);//退出编辑状态
  }
  
  const editingTemplate = (
	  <form className="stack-small">
	  <div className="form-group">
	   <label className="todo-label" htmlFor={props.id}>
	   New name for {props.name}
	   </label>
	   <input id={props.id} 
			  className="todo-text" 
			  value={name}//展示的内容
			  onChange={handleName}
			  type="text"/>
	   </div>
	   <div className="btn-group">
			<button type="button" className="btn todo-cancel" onClick={cancelEdit}>
			Cancel
			<span className="visually-hidden">renaming {props.name}</span>
			</button>
			<button type="submit" 
					className="btn btn_primary todo-edit" 
					onClick={() => {
						props.editTask(props.id, name)
						cancelEdit();
						}}>
			Save
			<span className="visually-hidden">new name for {props.name}</span>
			</button>
		</div>
		</form>
  );
  const viewTemplate=(
  <div className="stack-small">
    <div className="c-cb">
	<input 
		id={props.id}
		type="checkbox"
		defaultChecked={props.completed}
		onChange={() => props.toggleTaskCompleted(props.id)}
	/>
	<label className="todo-label" htmlFor={props.id}>
		{props.name}
	</label>
	</div>
	<div className="btn-group">
		<button type="button" className="btn" onClick={handleEdit}>
			Edit <span className="visually-hidden">{props.name}</span>
		</button>
		<button
			type="button"
			className="btn btn_danger"
			onClick={() => props.deleteTask(props.id)}
			style={{ backgroundColor: '#d8492d' ,color: 'white'}}
			>
		Delete <span className="visually-hidden">{props.name}</span>
		</button> 
	</div>
  </div>
  );
  return <li className="todo">{isEditing ? editingTemplate : viewTemplate} </li>;
}
