import Link from 'next/link';
import { use } from 'react';

export default function Page() {
  return (
    <>
      <h1 className={'text-red-500'}>This is blog Default</h1>
      <Link href={'/'}>Return to Home</Link>
    </>
  );
}
