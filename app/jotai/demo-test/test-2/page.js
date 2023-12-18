'use client';

import { atom, useAtom } from 'jotai';

const countAtom = atom(0);
const setAsyncCountAtom = atom(null, async (get, set, n) => {
  await new Promise((resolve) => setTimeout(resolve, 1000));
  set(countAtom, n);
});
const setCountAtom = atom(null, async (get, set, n) => {
  console.info('countAtom', get(countAtom));
  await set(setAsyncCountAtom, n);
  console.info('countAtom', get(countAtom));
});

export default function Page() {
  const [count] = useAtom(countAtom);
  const [, setCount] = useAtom(setCountAtom);

  return (
    <section>
      <h1>test2: {count}</h1>
      <button onClick={() => setCount(count + 1)}>click</button>
    </section>
  );
}
