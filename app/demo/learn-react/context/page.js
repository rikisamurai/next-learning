'use client';
import React, { createContext, useState } from 'react';

// 创建 Context
const ThemeContext = createContext();

// 提供者组件
const ThemeProvider = ({ children }) => {
  const [theme, setTheme] = useState('light');

  const toggleTheme = () => {
    setTheme(theme === 'light' ? 'dark' : 'light');
  };

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme, message: 'msg' }}>
      {children}
    </ThemeContext.Provider>
  );
};

// 消费者组件
const ThemedButton = () => {
  const { theme, toggleTheme } = React.useContext(ThemeContext);

  console.log('ThemedButton rendered'); // 记录渲染

  return (
    <button
      onClick={toggleTheme}
      style={{
        backgroundColor: theme === 'light' ? '#555' : '#ccc',
        color: theme === 'light' ? '#ccc' : '#555',
        padding: '1rem',
        fontWeight: 'bold'
      }}
    >
      Toggle Theme
    </button>
  );
};

// 另一个消费者组件
const Messages = () => {
  const { message } = React.useContext(ThemeContext);

  console.log('Messages rendered', message); // 记录渲染

  return (
    <div>
      <span>Hello from Messages{message}</span>
    </div>
  );
};

const DemoWithoutContext = () => {
  console.info('DemoWithoutContext rendered');
  return <div>111</div>;
};

// 应用程序根组件
const App = () => {
  return (
    <ThemeProvider>
      <div>
        <ThemedButton />
        <Messages />
        <DemoWithoutContext />
      </div>
    </ThemeProvider>
  );
};

export default App;
