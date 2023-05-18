// `app/dashboard/page.tsx` is the UI for the `/dashboard` URL

import Link from 'next/link';

export default function Page() {
  return (
    <>
      <h1>Hello, Dashboard Page!</h1>
      <Link href={'/'}>Return to Home</Link>
    </>
  );
}
