import Link from "next/link";
export default function Navbar() {
  return (
    <div className="flex flex-row justify-evenly items-center bg-gray-900 text-white h-16 text-xl">
      <Link href="/"> Home </Link>
      <br />
      <Link href="/contact"> For contact </Link>
      <br />
      <Link href="/about"> About </Link>
      <br />
      <Link href="/services"> Services </Link>
      <br />
      <Link href="/information"> More Information </Link>
    </div>
  );
}
