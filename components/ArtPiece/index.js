import { useSWRConfig } from "swr";
import ArtPiecePreview from "../ArtPiecePreview";
import useSWR from "swr";

const URL = "https://example-apis.vercel.app/api/art";

export default function ArtPiece() {
  const { data, error, isLoading } = useSWR(URL);
  if (isLoading) return <div>loading...</div>;
  if (error) return <div>error...</div>;
  console.log(data.name);
  return (
    <ul>
      {data.map((piece) => (
        <li key={piece.slug}>
          <ArtPiecePreview
            image={piece.imageSource}
            title={piece.name}
            artist={piece.artist}
          ></ArtPiecePreview>
        </li>
      ))}
    </ul>
  );
}
