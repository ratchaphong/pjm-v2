import React from "react";
import { PageProps } from "./types";
import PageContainer from "@/components/pages/page";

const Page: React.FC<PageProps> = async () => {
  const key = process.env.NEXT_PUBLIC_API_KEY;
  const url = `https://api.themoviedb.org/3/movie/popular?api_key=${key}`;
  const data = await fetch(url);
  const res = await data.json();

  return <PageContainer movies={res.results} />;
};

export default Page;
