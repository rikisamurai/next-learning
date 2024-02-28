'use client';
import * as React from 'react';

function User({ id }) {
  console.info('User', id);
  return (
    <div>
      <h2>user: {id}</h2>
    </div>
  );
}

function Like({ num }) {
  console.info('Like', num);
  return (
    <div>
      <h2>likes: {num}</h2>
    </div>
  );
}

const MemoLike = React.memo(Like);

function Demo({ id, num }) {
  console.info('Demo', id, num);
  return (
    <div>
      <User id={id} />
      <Like num={num} />
      <MemoLike num={num} />
    </div>
  );
}

export default function App() {
  const [id, setId] = React.useState(1);
  const [num, setNum] = React.useState(0);

  return (
    <div>
      <button onClick={() => setId(id + 1)}>change user</button>
      <button onClick={() => setNum(num + 1)}>change likes</button>
      <Demo id={id} num={num} />
    </div>
  );
}
