'use client';
import React, { useEffect, useState } from 'react';
import { Provider, atom, useAtom } from 'jotai';

const countAtom = atom(0);
const derivedAtom = atom(
  (get) => get(countAtom),
  (get, set, action) => {
    if (action.type === 'init') {
      set(countAtom, 10);
    } else if (action.type === 'inc') {
      set(countAtom, (c) => c + 1);
    }
  }
);
// derivedAtom.onMount = (setAtom) => {
//   console.info(11);
//   setAtom({ type: 'init' });
// };

const Card = () => {
  const [count, setCount] = useAtom(derivedAtom);
  const [mounted, setMounted] = useState(false);
  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    mounted && (
      <div className="mt-8 w-[300px] border border-gray-700 p-4">
        count: {count}
        <br />
        <button
          className={
            'rounded bg-blue-500 px-4 py-2 font-bold text-white hover:bg-blue-700'
          }
          onClick={() => setCount({ type: 'init' })}
        >
          set count
        </button>
      </div>
    )
  );
};

const App = () => (
  <Provider>
    <Card />
  </Provider>
);

export default App;
