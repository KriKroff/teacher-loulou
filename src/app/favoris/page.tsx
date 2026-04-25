"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";

export default function FavorisRedirectPage() {
  const router = useRouter();

  useEffect(() => {
    router.replace("/historique");
  }, [router]);

  return (
    <div className="flex min-h-[50vh] items-center justify-center">
      <p className="text-warm-500">Redirection vers l&apos;historique...</p>
    </div>
  );
}
