'use client';

import { useState } from 'react';

const firstList = ['apple', 'banana', 'cherry'];

function App() {
  const [list, setList] = useState(firstList);
  const handleAdd = () =>
    setList(list.toSpliced(1, 0, `Item ${list.length + 1}`));

  return (
    <div>
      <button onClick={handleAdd}>Add</button>
      <br />
      Use the index as the key:
      <ul>
        {list.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
      Use the item as the key:
      <ul>
        {list.map((item) => (
          <li key={item}>{item}</li>
        ))}
      </ul>
      <ul>
        {list.map((item) => (
          <ListItem item={item} key={item} />
        ))}
      </ul>
    </div>
  );
}

function ListItem({ item, key }) {
  console.info('key', key);
  return <li>{item}</li>;
}

export default App;
