'use client';
import React, { useState } from 'react';
import useSWR from 'swr';
import { fetcher } from '../page';
import Link from 'next/link';

// const fetcher = (url) => fetch(url).then((r) => r.json());

function MyComponent() {
  const { data, error } = useSWR('/api/user', fetcher);

  console.info('refresh');

  if (error) {
    return <div>Error loading data</div>;
  }

  if (!data) {
    return <div>Loading... nest</div>;
  }

  console.info(data);

  return (
    <div>
      🫡Data Nest: {data}
      <Link href={'/jotai/demo-swr'}>back</Link>
    </div>
  );
}

export default MyComponent;
