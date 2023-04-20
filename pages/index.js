import useSWR from "swr";
import React from "react";
import Image from "next/image";
import ArtPieces from "@/pages/ArtPieces";
import Link from "next/link";

const URL = "https://example-apis.vercel.app/api/art";

export default function HomePage() {
  const { data, isLoading } = useSWR(URL);
  if (isLoading) return <div>loading...</div>;
  console.log(data);

  return (
    <div>
      <p>Hello</p>
      <p>{data[0].name}</p>
      <Link href="/ArtPieces">Link</Link>
    </div>
  );
}
