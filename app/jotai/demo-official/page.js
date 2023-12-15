'use client';
import React from 'react';
import { Provider, atom, useAtom } from 'jotai';

const textAtom = atom('hello');
const textLenAtom = atom((get) => get(textAtom).length);
const uppercaseAtom = atom((get) => get(textAtom).toUpperCase());

const Input = () => {
  const [text, setText] = useAtom(textAtom);
  return <input value={text} onChange={(e) => setText(e.target.value)} />;
};

const CharCount = () => {
  const [len] = useAtom(textLenAtom);
  return <div>Length: {len}</div>;
};

const Uppercase = () => {
  const [uppercase] = useAtom(uppercaseAtom);
  return <div>Uppercase: {uppercase}</div>;
};

const countAtom = atom(0);
const Card = () => {
  const [count, setCount] = useAtom(countAtom);

  return (
    <div className="mt-8 w-[300px] border border-gray-700 p-4">
      count: {count}
      <br />
      <button
        className={
          'rounded bg-blue-500 px-4 py-2 font-bold text-white hover:bg-blue-700'
        }
        onClick={() => setCount(count + 1)}
      >
        set count
      </button>
    </div>
  );
};

const App = () => (
  <Provider>
    <Input />
    <CharCount />
    <Uppercase />
    <Card />
  </Provider>
);

export default App;
