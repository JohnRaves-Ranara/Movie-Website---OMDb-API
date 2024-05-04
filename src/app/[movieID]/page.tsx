import MovieDetails from "./components/MovieDetails";
import Providers from "../utils/providers";

export const runtime = 'edge';
export default async function Home({
  params,
}: {
  params: { movieID: number };
}) {

  return (
    <Providers>
        <MovieDetails movieID={params.movieID}></MovieDetails>
    </Providers>
  );
}
