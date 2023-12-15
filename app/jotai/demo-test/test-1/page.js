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
  set(asyncAtom, Promise.resolve('update'));
});

const Async = () => {
  const [async] = useAtom(asyncAtom);
  const setAsync = useSetAtom(setAsyncAtom);
  console.info('re-render Async');
  React.useEffect(() => {
    console.info('Async mount');

    return () => {
      console.info('Async unmount');
    };
  }, []);

  return (
    <h1 onClick={setAsync}>
      async: {async} <TestClass /> <TestFunction />
    </h1>
  );
};

const AsyncWrap = () => {
  return (
    <React.Suspense fallback={'loading ...'}>
      <Async />
    </React.Suspense>
  );
};

export default function Page() {
  const [count, setCount] = useAtom(countAtom);

  return (
    <section>
      <h1>test1 {count}</h1>
      <button onClick={() => setCount((c) => c + 1)}>click</button>
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
