import { useState } from "react";

function Form(props) {
  const [name, setName] = useState("");//不给name赋初始值，只用setName函数

  function handleChange(event) {
    setName(event.target.value);//将拿到的值传给name属性，并刷新界面，括号里面是用于拿到输入的值
  }

  function handleSubmit(event) {
    event.preventDefault();
    props.addTask(name); //将之前拿到的name属性放addTask里
    setName("");//清空name属性
  }

  return (
    <form onSubmit={handleSubmit}>
      <h2 className="label-wrapper">
        <label htmlFor="new-todo-input" className="label__lg">
          What needs to be done?
        </label>
      </h2>
      <input
        type="text"
        id="new-todo-input"
        className="input input__lg"
        name="text"
        autoComplete="off"
        value={name}//展示的内容
        onChange={handleChange}//改变名字的事件，监听到输入的东西
      />
      <button type="submit" className="btn btn__primary btn__lg">
        Add
      </button>
    </form>
  );
}

export default Form;
