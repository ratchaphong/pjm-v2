import React from "react";

type Props = {
  params: {
    id: string;
  };
};

export default function Report({ params }: Props) {
  console.log(params);
  return <div>Report {params.id}</div>;
}
