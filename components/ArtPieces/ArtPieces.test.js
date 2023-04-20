import ArtPieces from "../../pages/ArtPieces";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";

const exampleArray = [
  {
    artist: "Maksym",
    imageSource:
      "https://example-apis.vercel.app/assets/art/orange-red-and-green.jpg",
    name: "Maksyms beautiful picture",
  },
  {
    artist: "Jakob",
    imageSource:
      "https://example-apis.vercel.app/assets/art/orange-red-and-green.jpg",
    name: "Jakobs beautiful picture",
  },
];

test("All art pieces are displayed as a list ", () => {
  render(<ArtPieces pieces={exampleArray} />);

  const pictureName = screen.getByRole("paragraph", {
    name: "Maksyms beautiful picture",
  });
});
