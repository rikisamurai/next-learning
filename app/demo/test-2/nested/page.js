'use client';

import { useState } from 'react';
import useTilg from 'tilg';

function TodoList() {
  useTilg();
  const [list, setList] = useState(['Item 1']);

  const TodoItem = (props) => {
    useTilg();
    return <li>{props.text}</li>;
  };

  const handleAdd = () => setList([...list, `Item ${list.length + 1}`]);

  return (
    <div>
      <button onClick={handleAdd}>Add</button>
      <ul>
        {list.map((item, index) => (
          <TodoItem key={index} text={item} />
        ))}
      </ul>
      <SomeComponent footer={() => <div />} />
    </div>
  );
}

function SomeComponent({ footer: Footer }) {
  useTilg();
  return (
    <div>
      <Footer />
    </div>
  );
}

export default TodoList;
