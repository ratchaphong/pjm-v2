"use client";
import React from "react";

type Props = {
  error: { message: string };
};

const ErrorPage = ({ error }: Props) => {
  return <p>Error due to: {error.message}</p>;
};

export default ErrorPage;
