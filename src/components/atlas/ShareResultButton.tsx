"use client";

import { useEffect, useRef, useState } from "react";
import { Download, Share2 } from "lucide-react";
import { cn } from "@/lib/utils";
import { renderShareCard, type ShareCardInput } from "@/lib/atlas/share-card";

interface ShareResultButtonProps {
  card: ShareCardInput;
  fileName: string;
  /** Text sent along with the image (with the link to the site) */
  shareText: string;
  /** Stronger style when the game is passed */
  highlight?: boolean;
}

function canShareFiles(): boolean {
  if (typeof navigator === "undefined" || !navigator.canShare) return false;
  try {
    return navigator.canShare({ files: [new File([""], "test.png", { type: "image/png" })] });
  } catch {
    return false;
  }
}

function download(blob: Blob, fileName: string) {
  const url = URL.createObjectURL(blob);
  const a = document.createElement("a");
  a.href = url;
  a.download = fileName;
  a.click();
  setTimeout(() => URL.revokeObjectURL(url), 1000);
}

/**
 * Shares the result as an image through the phone's share sheet (WhatsApp…).
 * The image is drawn as soon as the page shows: Safari only opens the share
 * sheet right after a tap, so there is no time to draw it on click.
 */
export function ShareResultButton({ card, fileName, shareText, highlight }: ShareResultButtonProps) {
  const [blob, setBlob] = useState<Blob | null>(null);
  const [failed, setFailed] = useState(false);
  const [canShare, setCanShare] = useState(false);
  const pending = useRef<Promise<Blob> | null>(null);

  useEffect(() => {
    setCanShare(canShareFiles());
    let alive = true;
    const p = renderShareCard(card);
    pending.current = p;
    p.then((b) => alive && setBlob(b)).catch(() => alive && setFailed(true));
    return () => {
      alive = false;
    };
    // The card only depends on the finished session, drawn once
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  if (failed) return null;

  const onClick = async () => {
    const b = blob ?? (await pending.current?.catch(() => null));
    if (!b) return;
    if (canShare) {
      const file = new File([b], fileName, { type: "image/png" });
      try {
        await navigator.share({ files: [file], text: shareText });
        return;
      } catch (e) {
        if ((e as Error).name === "AbortError") return;
        // Share sheet refused (lost tap, unsupported app…) → save the image instead
      }
    }
    download(b, fileName);
  };

  const Icon = canShare ? Share2 : Download;
  return (
    <button
      type="button"
      onClick={onClick}
      disabled={!blob}
      aria-busy={!blob}
      className={cn(
        "flex h-14 w-full items-center justify-center gap-2 rounded-2xl text-lg font-bold transition-all active:scale-[0.98] disabled:opacity-60",
        highlight
          ? "bg-gradient-to-r from-emerald-500 to-green-600 text-white shadow-lg"
          : "border-2 border-emerald-500 bg-white text-emerald-700"
      )}
    >
      <Icon className="h-5 w-5" />
      {!blob ? "Préparation de l'image…" : canShare ? "Partager mon résultat" : "Télécharger l'image"}
    </button>
  );
}
