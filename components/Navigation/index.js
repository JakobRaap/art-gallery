import Link from "next/link";

export default function Navigation() {
  return (
    <footer>
      <Link href="./">Spotlight</Link>{" "}
      <Link href="./art-pieces">Art pieces</Link>
    </footer>
  );
}
