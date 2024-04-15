"use client";
import React from "react";

type Props = {
  error: { message: string };
};

const ErrorPage = ({ error }: Props) => {
  return (
    <div>
      <div>Error due to: {error.message}</div>
      <p>Handled by error.tsx in AppRouter</p>
    </div>
  );
};

export default ErrorPage;
