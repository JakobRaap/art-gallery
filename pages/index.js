import useSWR from "swr";
import React from "react";
import Image from "next/image";
import ArtPieces from "@/components/ArtPieces";
const URL = "https://example-apis.vercel.app/api/art";

function fetcher(url) {
  return fetch(url).then((res) => res.json());
}

export default function HomePage() {
  const { data, isLoading } = useSWR(URL, fetcher);
  if (isLoading) return <div>loading...</div>;
  console.log(data);

  return (
    <div>
      <ArtPieces pieces={data}></ArtPieces>
    </div>
  );
}
