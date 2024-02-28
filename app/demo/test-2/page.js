'use client';

import { useCallback, useState } from 'react';
import useTilg from 'tilg';

function Test() {
  useTilg();
  return <div>test</div>;
}

function TodoList() {
  const [list, setList] = useState([]);
  useTilg();

  // 嵌套定义子组件（好孩子不要学哦）
  // const TodoItem = (props) => {
  //   useTilg();
  //   return <li>{props.text}</li>;
  // };

  // 或者用 useCallback 也可以，都一样
  const TodoItem = useCallback((props) => {
    return <li>{props.text}</li>;
  }, []);

  const Demo = (
    <div>
      <Test />
    </div>
  );

  const Draft = () => {
    useTilg();
    return <div>test</div>;
  };

  const handleAdd = () => setList([...list, `Item ${list.length + 1}`]);

  return (
    <div>
      <button onClick={handleAdd}>Add</button>
      {/* 渲染刚才定义的子组件 */}
      <ul>
        {list.map((item, index) => (
          <TodoItem key={index} text={item} />
        ))}
      </ul>
      {Demo}
      {Draft()}
      <Draft />
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

export default function App() {
  return <TodoList />;
}
