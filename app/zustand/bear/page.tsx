'use client';
import { create } from 'zustand';

// 创建第一个 store
interface CounterStore {
  count: number;
  increment: () => void;
}

const useCounterStore = create<CounterStore>((set) => ({
  count: 0,
  increment: () => set((state) => ({ count: state.count + 1 }))
}));

// 创建第二个 store
interface TextStore {
  text: string;
  setText: (newText: string) => void;
}

const useTextStore = create<TextStore>((set, get) => ({
  text: '',
  setText: (newText: string) => {
    set({ text: newText });
  }
}));

// 示例组件
const App = () => {
  const counterStore = useCounterStore();
  const textStore = useTextStore();

  const handleButtonClick = () => {
    // 更新状态
    counterStore.increment();
    textStore.setText('Button clicked!');
  };

  return (
    <div>
      <p>Count: {counterStore.count}</p>
      <p>Text: {textStore.text}</p>
      <button onClick={handleButtonClick}>Click me</button>
    </div>
  );
};

export default App;
