'use client';
import { atom, createStore, Provider, useAtom } from 'jotai';

const countAtom = atom(0);

const Count = () => {
  const [count, setCount] = useAtom(countAtom);

  return <h1 onClick={() => setCount(count + 1)}>count: {count}</h1>;
};

const storeOne = createStore();
const storeTwo = createStore();

export default function App() {
  return (
    <>
      <Provider store={storeOne}>
        <Count />
      </Provider>
      <Provider store={storeTwo}>
        <Count />
      </Provider>
    </>
  );
}
