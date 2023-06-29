import Link from 'next/link';
// `app/page.tsx` is the UI for the `/` URL
export default function Page() {
  return (
    <>
      <h1>Hello, Home page!</h1>
      <Link href={"/dashboard"}>Dashboard</Link>
      <br />
      <Link href={"/blog"}>Blog</Link>
      <br />
      <Link href={"/intercepting"}>intercepting</Link>
      <br />
      <br />
      <br />
      <Link href={"/jotai"}>jotai</Link>
    </>
  );
}
