'use client';

// store.ts
import { create } from 'zustand';
import React from 'react';

type CountStore = {
  count: number;
  increment: () => void;
};

const useCountStore = create<CountStore>((set) => ({
  count: 0,
  increment: () => set((state) => ({ count: state.count + 1 }))
}));

type TextStore = {
  text: string;
  setText: (value: string) => void;
};

const useTextStore = create<TextStore>((set, get) => ({
  text: 'Hello',
  setText: (value) => {
    const { increment } = useCountStore.getState();
    increment();
    set({ text: `Count incremented. New value: ${value}` });
  }
}));

// App.tsx

const App: React.FC = () => {
  const { count } = useCountStore();
  const { setText } = useTextStore();

  return (
    <div>
      <div>{`Count: ${count}`}</div>
      <button onClick={() => setText(`Hello, clicked ${count + 1} times`)}>
        Click me
      </button>
    </div>
  );
};

export default App;
