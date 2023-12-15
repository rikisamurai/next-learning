'use client';
import { Suspense, use } from 'react';

async function fetchNote(id) {
  const data = await new Promise((resolve) => {
    setTimeout(() => {
      resolve(id);
    }, 1000);
  });
  return data;
}

function Note({ id }) {
  const note = use(fetchNote(id));
  return (
    <div>
      <h2>{note}</h2>
    </div>
  );
}

export default function App() {
  return (
    <Suspense fallback={<h2>Loading…</h2>}>
      <Note id="1" />
      <Note id="2" />
      <Note id="3" />
    </Suspense>
  );
}
