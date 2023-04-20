import React from "react";
import Image from "next/image";
export default function ArtPiecePreview({ image, title, artist }) {
  return <Image src={image} alt="fehler" width="200" height="200"></Image>;
}
