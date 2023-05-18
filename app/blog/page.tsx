import Link from "next/link";

export default function Page() {
  return (
    <>
      <h1>Hello, Blog Page!</h1>
      <Link href={"/"}>Return to Home</Link>
      <br />
      <Link href={"/blog/settings"}>go to Settings</Link>
    </>
  );
}
