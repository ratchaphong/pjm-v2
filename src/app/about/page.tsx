import { resolve } from "path";
import React from "react";
import { delay } from "../utils";

type Props = {};

export default async function About({}: Props) {
  const res = await fetch(
    "https://codemobiles.com/adhoc/youtubes/index_new.php?username=admin&"
  );
  const data = await res.json();
  await delay(1000);

  return (
    <div>
      <h1>About</h1>
      <p>Debug: {JSON.stringify(data)}</p>
      <ul>
        {data.youtubes.map((e: { id: string; title: string }) => (
          <li key={e.id}>{e.title}</li>
        ))}
      </ul>
    </div>
  );
}
