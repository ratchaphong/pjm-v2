import React from "react";

type Props = {
  params: {
    id: string;
    document_id: string;
  };
};

export default function Report({ params }: Props) {
  console.log(params);
  return (
    <div>
      Report {params.id} {params.document_id}
    </div>
  );
}
