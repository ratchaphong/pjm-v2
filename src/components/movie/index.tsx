import React from "react";
import Link from "next/link";
import Image from "next/image";
import { MovieProps } from "./types";

const Movie: React.FC<MovieProps> = ({
  title,
  id,
  poster_path,
  release_date,
}) => {
  const imagePath = "https://image.tmdb.org/t/p/original";

  return (
    <div className="w-1/4 flex flex-col">
      <b className="text-ellipsis overflow-hidden line-clamp-1">{title}</b>
      <h2>{release_date}</h2>
      <Link href={`/movie/${id}`}>
        <Image
          src={imagePath + poster_path}
          width={800}
          height={800}
          alt={title}
        />
      </Link>
    </div>
  );
};

export default Movie;
