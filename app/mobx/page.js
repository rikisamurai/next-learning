'use client';
import Link from 'next/link';
// `app/page.tsx` is the UI for the `/` URL
export default function Page() {
  return (
    <>
      <h1>Hello, Mobx 🧐🧐🧐 page!</h1>
      <Link href={'/mobx/demo1'}>mobx demo 1</Link>
      <br />
      <br />
      <Link href={'/mobx/demo-state'}>demo-state</Link>
      <br />
      <br />
    </>
  );
}
