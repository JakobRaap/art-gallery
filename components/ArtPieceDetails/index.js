import Image from "next/image";

export default function ArtPieceDetails({ image, artist, year, genre }) {
  console.log(image);
  return (
    <div>
      <Image width={300} height={300} src={image} alt={"couldnt load image"} />

      <p>
        <strong>Artist:</strong> {artist}
        <br />
        <strong>Year:</strong> {year}
        <br />
        <strong>Genre:</strong> {genre}
      </p>
    </div>
  );
}
