"use client";

interface ErrorPageProps {
  error: Error;
  reset: () => void;
}
export default function ErrorPage(props: ErrorPageProps) {
  const { error } = props;
  return <div>{error.message}</div>;
}
