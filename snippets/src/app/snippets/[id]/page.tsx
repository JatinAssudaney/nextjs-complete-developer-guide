import { db } from "@/db";
import { notFound } from "next/navigation";
import React from "react";

interface SnippetPageProps {
  params: {
    id: string;
  };
}

export default async function SnippetPage(props: SnippetPageProps) {
  const snippet = await db.snippet.findFirst({
    where: { id: Number(props.params.id) },
  });

  if (!snippet) return notFound();
  return <div>{snippet?.title}</div>;
}
