"use client";
import { useSession } from "next-auth/react";
export default function Profile() {
  const session = useSession();
  return (
    <>
      {session.data?.user ? (
        <div>Signed In: {JSON.stringify(session.data?.user)}</div>
      ) : (
        <div>Signed Out</div>
      )}
    </>
  );
}
