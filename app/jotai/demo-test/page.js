'use client';
import React, { useEffect, useState } from 'react';
import {
  atom,
  useAtom,
  createStore,
  useAtomValue,
  getDefaultStore,
  useSetAtom
} from 'jotai';
import { focusAtom } from 'jotai-optics';

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

const nameAtom = atom('1');
const store = createStore();

store.set(nameAtom, '2');
console.info(store.get(nameAtom));

const talentAtom = atom({ name: 'DOU+小助手', likes: 130 });
const likesAtom = focusAtom(talentAtom, (optic) => optic.prop('likes'));

const Likes = () => {
  const [talent, setTalent] = useAtom(talentAtom);
  const setLikes = useSetAtom(likesAtom);
  const handleClick = () => {
    // setTalent({ ...talent, likes: talent.likes + 1 });
    setLikes((like) => like + 1);
  };

  console.info('re-render Likes');

  return (
    <h1>
      likes: {talent.likes}
      <button onClick={handleClick}>click❤️</button>
    </h1>
  );
};

const Name = () => {
  const talent = useAtomValue(talentAtom);
  console.info('re-render Name');

  return <h1>name: {talent.name}</h1>;
};

const Store = () => {
  // const likes = getDefaultStore().get(likesAtom);
  const likes = getDefaultStore().get(talentAtom).likes;
  console.info('store likes', likes);
  const [count, setCount] = useState(0);

  return (
    <div onClick={() => setCount(count + 1)}>
      Store {likes} {count}
    </div>
  );
};

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
  <>
    <Card />
    <Name />
    <Likes />
    <Store />
  </>
);

export default App;
