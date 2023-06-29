'use client';
import Link from 'next/link';
import { a, setA } from './data.js';
import { useState } from 'react';
// `app/page.tsx` is the UI for the `/` URL
export default function Page() {
  const [count, setCount] = useState(0);
  const [demo, setDemo] = useState(true);
  console.info(111);
  return (
    <>
      <h1>Hello, Jotai 🧐🧐🧐 page!</h1>
      <Link href={'/jotai/demo-official'}>jotai official demo</Link>
      <br />
      <br />
      <Link href={'/jotai/demo-state'}>demo-state</Link>
      <br />
      <br />
      <button
        onClick={() => {
          setA(2);
          console.info(a);
        }}
      >
        Update Value {a}
      </button>
      <button
        onClick={() => {
          setCount(count);
          setDemo(!demo);
        }}
      >
        count ++
      </button>
    </>
  );
}
