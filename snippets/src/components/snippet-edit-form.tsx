"use client";
import type { Snippet } from "@prisma/client";
import Editor from "@monaco-editor/react";
import { startTransition, useState } from "react";
import * as actions from "@/actions";
import { redirect } from "next/navigation";

interface SnippetEditFormProps {
  snippet: Snippet;
}
export default function SnippetEditForm(props: SnippetEditFormProps) {
  const { snippet } = props;
  const [code, setCode] = useState(snippet.code);

  const handleEditorChange = (value: string = "") => {
    setCode(value);
  };

  // OPTION 1: Bind data with server action
  const editSnippetAction = actions.editSnippet.bind(null, snippet.id, code);

  // OPTION 2: Calling server action from client component
  const handleClick = () => {
    startTransition(async () => {
      await actions.editSnippet(snippet.id, code);
    });
  };

  return (
    <div className="flex flex-col gap-4">
      <Editor
        height="40vh"
        theme="vs-dark"
        language="javascript"
        defaultValue={snippet.code}
        options={{ minimap: { enabled: false } }}
        onChange={handleEditorChange}
      />
      <div className="flex gap-4">
        {/* OPTION 1 */}
        <form action={editSnippetAction}>
          <button type="submit" className="p-2 border rounded">
            Save
          </button>
        </form>
        {/* OPTION 2 */}
        <button onClick={handleClick} className="p-2 border rounded">
          Save using Transition
        </button>
      </div>
    </div>
  );
}
