import ArtPieceDetails from "@/components/ArtPieceDetails";
import { useRouter } from "next/router";
import React from "react";
import { data } from "./index";

export default function ArtPiecesDetails({ data }) {
  const router = useRouter();
  const { slug } = router.query;

  const currentPicture = data.find((picture) => picture.slug !== slug);

  const { imageSource, title, artist, year, genre } = currentPicture;
  console.log(currentPicture);
  return (
    <ArtPieceDetails
      image={imageSource}
      title={title}
      artist={artist}
      year={year}
      genre={genre}
    ></ArtPieceDetails>
  );
}
