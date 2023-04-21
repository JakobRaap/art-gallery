import useSWR from "swr";
import React from "react";
import Image from "next/image";
import ArtPieces from "@/components/ArtPiece";
import Link from "next/link";
import Spotlight from "@/components/Spotlight";

const URL = "https://example-apis.vercel.app/api/art";

export default function HomePage() {
  const { data, isLoading } = useSWR(URL);
  if (isLoading) return <div>loading...</div>;
  console.log(data);

  const randomIndex = Math.floor(Math.random() * 10);
  console.log(randomIndex);

  console.log(data[randomIndex].imageSource);
  console.log(data[randomIndex].artist);

  return (
    <div>
      <p>Hello</p>
      <p>{data[0].name}</p>
      <Link href="/artpieces">Link</Link>
      <Spotlight
        image={data[randomIndex].imageSource}
        artist={data[randomIndex].artist}
      ></Spotlight>
    </div>
  );
}
