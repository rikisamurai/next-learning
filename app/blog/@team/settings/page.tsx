import Link from 'next/link';

export default function Settings() {
  return (
    <div className={'border-2'}>
      <h1>Hello, Blog @team Settings Page!</h1>
      <Link href={'blog/'}>Return to Home/blog</Link>
      <br />
      <Link href={'/'}>Return to Home</Link>
    </div>
  );
}
