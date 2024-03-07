'use client';
import * as React from 'react';
import { flushSync } from 'react-dom';

export default function App() {
  const [count, setCount] = React.useState(0);
  console.log(`Count: ${count}`);

  const handleClick = () => {
    // update DOM immediately
    flushSync(() => {
      setCount((prev) => prev + 1);
    });
    flushSync(() => {
      setCount((prev) => prev + 1);
    });
    setCount((prev) => prev + 1);
    setCount((prev) => prev + 1);
  };

  return (
    <div>
      <button onClick={handleClick}>+</button>
      <p>Count: {count}</p>
    </div>
  );
}
