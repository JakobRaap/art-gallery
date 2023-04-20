import { useSWRConfig } from "swr";
import ArtPiecePreview from "../components/ArtPiecePreview";
import useSWR from "swr";

const URL = "https://example-apis.vercel.app/api/art";

export default function ArtPieces() {
  const { data, isLoading } = useSWR(URL);
  if (isLoading) return <div>loading...</div>;
  console.log(data);
  return (
    <p>Hio</p>
    // <ul>
    //   {pieces.map((piece) => (
    //     <li key={piece.slug}>
    //       {" "}
    //       <ArtPiecePreview
    //         image={piece.imageSource}
    //         title={piece.name}
    //         artist={piece.artist}
    //       ></ArtPiecePreview>
    //     </li>
    //   ))}
    // </ul>
  );
}
