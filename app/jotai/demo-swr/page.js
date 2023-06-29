'use client';
import React from 'react';
import useSWR from 'swr';
import Link from 'next/link';

// 自定义数据请求逻辑
export async function fetcher(url) {
  return new Promise((resolve) => {
    console.info(2222);
    // 模拟异步请求
    setTimeout(() => {
      resolve('✅Success: ' + url);
    }, 1000);
  });
}

export const useUser = () => {
  const { data, error, isLoading, isValidating } = useSWR(
    '/api/user',
    fetcher,
    {
      // refreshInterval: 2000,
      // refreshWhenHidden: true,
      focusThrottleInterval: 100
    }
  );

  return {
    data,
    error,
    isLoading,
    isValidating
  };
};

function MyComponent() {
  console.info('refresh');
  return (
    <div>
      <User />
      <Name />
      <br />
      <Link href={'/jotai/demo-swr/nest'}>forward</Link>
    </div>
  );
}

function User() {
  const { data, isLoading, isValidating } = useUser();

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (isValidating) {
    return <div>Validating...</div>;
  }

  return <div>User Comp: {data}</div>;
}

function Name() {
  const { data, isLoading, isValidating } = useUser();

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (isValidating) {
    return <div>Validating...</div>;
  }

  return <div>Name Comp: {data}</div>;
}

export default MyComponent;
