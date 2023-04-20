import React from "react";
import Image from "next/image";
export default function ArtPiecePreview({ image, title, artist }) {
  return (
    <>
      {" "}
      <Image src={image} alt="fehler" width={400} height={400}></Image>
      <p>
        {title} <br />
        {artist}
      </p>
    </>
  );
}
