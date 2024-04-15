import React from "react";
import Image from "next/image";
import { MovieDetailContainerProps } from "./types";

const MovieDetailContainer: React.FC<MovieDetailContainerProps> = async ({
  movie,
  imagePath,
}) => {
  return (
    <div>
      <h1 className="text-4xl font-bold">{movie.title}</h1>
      <h2 className="text-2xl">Runtime: {movie.runtime}</h2>
      <Image
        width={800}
        height={800}
        className="my-4 w-full"
        src={imagePath + movie.backdrop_path}
        alt={movie.title}
        priority
      />
      <p>{movie.overview}</p>
    </div>
  );
};

export default MovieDetailContainer;
