'use client';
import { atom, useAtom } from 'jotai';

// Create your atoms and derivatives
const textAtom = atom('hello');
const uppercaseAtom = atom((get) => get(textAtom).toUpperCase());

// Use them anywhere in your app
const Input = () => {
  const [text, setText] = useAtom(textAtom);
  return <input value={text} onChange={(e) => setText(e.target.value)} />;
};

const Uppercase = () => {
  const [uppercase] = useAtom(uppercaseAtom);
  return <div>Uppercase: {uppercase}</div>;
};

// Now you have the components
const MyApp = () => (
  <div>
    <Input />
    <Uppercase />
  </div>
);

export default MyApp;
