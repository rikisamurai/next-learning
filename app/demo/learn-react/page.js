'use client';
import React, { useState, useReducer } from 'react';
import { v4 as uuidv4 } from 'uuid';

export default function App() {
  const [state, dispatch] = useReducer(() => {}, false);
  console.info('state', state);

  return (
    <div>
      <h1>test</h1>
      <TodoList />
      <button onClick={dispatch}>click me</button>
      {/*<AvatarTwo name={null} size={'medium'} />*/}
    </div>
  );
}

function TodoList() {
  const [list, setList] = useState([]);
  const [task, setTask] = useState('');

  const handleAdd = () => {
    if (!task.trim()) return; // 防止添加空的待办事项
    const newTask = { id: uuidv4(), text: task };
    console.info('newTask', newTask);
    setList([...list, newTask]);
    setTask(''); // 清空输入框
  };

  return (
    <div>
      <input
        type="text"
        value={task}
        onChange={(e) => setTask(e.target.value)}
        onKeyPress={(e) => e.key === 'Enter' && handleAdd()}
      />
      <button onClick={handleAdd}>Add</button>
      <ul>
        {list.map((item) => (
          <li key={item.id}>{item.text}</li>
        ))}
      </ul>
    </div>
  );
}
