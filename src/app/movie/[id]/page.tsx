import React from "react";
import { MovieDetailProps } from "./types";
import MovieDetailContainer from "@/components/pages/movie";

const MovieDetail: React.FC<MovieDetailProps> = async ({ params }) => {
  const { id } = params;
  const imagePath = "https://image.tmdb.org/t/p/original";
  const data = await fetch(
    `https://api.themoviedb.org/3/movie/${id}?api_key=${process.env.NEXT_PUBLIC_API_KEY}`,
    { next: { revalidate: 10 } }
  );
  const res = await data.json();

  return <MovieDetailContainer movie={res} imagePath={imagePath} />;
};

export default MovieDetail;
