'use client';
import { atom, useAtom, useSetAtom } from 'jotai';
import { atomWithDefault } from 'jotai/utils';
import React from 'react';

const countAtom = atom(0);
const asyncAtom = atomWithDefault(async () => {
  await new Promise((resolve) => setTimeout(resolve, 1000));
  return 'async';
});
const setAsyncAtom = atom(null, (get, set) => {
  set(asyncAtom, Promise.resolve('async update'));
});
const setSyncAtom = atom(null, (get, set) => {
  set(asyncAtom, 'sync update');
});

const Async = () => {
  const [async] = useAtom(asyncAtom);
  React.useEffect(() => {
    console.info('Async mount', performance.now());

    return () => {
      console.info('Async unmount', performance.now());
    };
  }, []);

  return (
    <h1>
      async: {async} <TestClass /> <TestFunction />
    </h1>
  );
};

const AsyncWrap = () => {
  const setAsync = useSetAtom(setAsyncAtom);
  const setSync = useSetAtom(setSyncAtom);

  return (
    <React.Suspense fallback={'loading ...'}>
      <div>
        <button onClick={setAsync}>set async</button>
        <button onClick={setSync}>set sync</button>
      </div>
      <Async />
    </React.Suspense>
  );
};

export default function Page() {
  const [count, setCount] = useAtom(countAtom);

  return (
    <section>
      <button onClick={() => setCount((c) => c + 1)}>click</button>
      <h1>test1 {count}</h1>
      <AsyncWrap />
    </section>
  );
}

const TestFunction = () => {
  React.useEffect(() => {
    console.info('TestFunction update');

    return () => {
      console.info('TestFunction update clear');
    };
  });

  React.useEffect(() => {
    console.info('TestFunction mount');

    return () => {
      console.info('TestFunction unmount');
    };
  }, []);

  return <div>TestFunction</div>;
};

class TestClass extends React.PureComponent {
  componentDidMount() {
    console.info('TestClass mount');
  }

  componentWillUnmount() {
    console.info('TestClass unmount');
  }

  render() {
    return <div>TestClass</div>;
  }
}
