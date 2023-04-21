import React from "react";
import Image from "next/image";

export default function Spotlight({ image, artist }) {
  return (
    <>
      <label>
        {artist}{" "}
        <Image src={image} alt="randomPicture" width={400} height={400}></Image>{" "}
      </label>
    </>
  );
}
