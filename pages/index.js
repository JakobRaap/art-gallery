import useSWR from "swr";
import React from "react";
import Image from "next/image";
import ArtPieces from "@/components/ArtPiece";
import Link from "next/link";
import Spotlight from "@/components/Spotlight";
import Navigation from "@/components/Navigation";

const URL = "https://example-apis.vercel.app/api/art";

export default function SpotlightPage({ data }) {
  const randomIndex = Math.floor(Math.random() * 10);
  console.log(data);
  return (
    <div>
      <Spotlight
        image={data[randomIndex].imageSource}
        artist={data[randomIndex].artist}
      ></Spotlight>
    </div>
  );
}
