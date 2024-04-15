import React from "react";
import Link from "next/link";
import Image from "next/image";

type PageProps = {};

export default async function Page({}: PageProps) {
  const key = process.env.NEXT_PUBLIC_API_KEY;
  const url = `https://api.themoviedb.org/3/movie/popular?api_key=${key}`;
  const data = await fetch(url);
  const res = await data.json();
  await delay(1000);

  return (
    <div>
      <div className="grid gap-2 grid-cols-fluid">
        {res.results.map((movie: any) => (
          <Movie
            key={movie.id}
            id={movie.id}
            title={movie.title}
            poster_path={movie.poster_path}
            release_date={movie.release_date}
          />
        ))}
      </div>
    </div>
  );
}

function delay(timeout: number) {
  return new Promise((resolve) => {
    setTimeout(resolve, timeout);
  });
}

type MovieProps = {
  key: string;
  id: string;
  title: string;
  poster_path: string;
  release_date: string;
};

function Movie({ title, id, poster_path, release_date }: MovieProps) {
  const imagePath = "https://image.tmdb.org/t/p/original";

  return (
    <div>
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
}
