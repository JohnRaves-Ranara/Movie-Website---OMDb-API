type MoviePosterProps = {
  poster: string | null;
};

export default function MoviePoster({ poster }: MoviePosterProps) {
  return (
    <>
      {poster ? (
        <img
          src={`https://image.tmdb.org/t/p/original${poster}`}
          className="max-h-[400px] max-w-[300px] object-cover"
        />
      ) : (
        <div className="h-[400px] w-[300px] bg-gray-600 flex items-center justify-center">
          No Image Available
        </div>
      )}
    </>
  );
}
