import React from "react";
import { PageContainerProps } from "./types";
import Movie from "@/components/movie";

const PageContainer: React.FC<PageContainerProps> = ({ movies }) => {
  return (
    <div className="w-full flex flex-wrap gap-8 justify-center">
      {movies.map((movie) => (
        <Movie
          key={movie.id}
          id={movie.id}
          title={movie.title}
          poster_path={movie.poster_path}
          release_date={movie.release_date}
        />
      ))}
    </div>
  );
};

export default PageContainer;
