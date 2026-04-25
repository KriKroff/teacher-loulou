import Link from "next/link";

export default function NotFound() {
  return (
    <div className="flex min-h-[60vh] flex-col items-center justify-center gap-6 text-center">
      <div className="rounded-2xl bg-accent-50 p-6">
        <span className="text-6xl" role="img" aria-label="loupe">
          🔍
        </span>
      </div>
      <div className="space-y-3">
        <h1 className="text-2xl font-bold text-warm-800 sm:text-3xl">
          Oups, cette page n&apos;existe pas
        </h1>
        <p className="max-w-sm text-warm-600">
          La page que tu cherches a peut-être déménagé ou n&apos;existe plus.
          Pas de panique, retourne à l&apos;accueil et reprends depuis là !
        </p>
      </div>
      <Link
        href="/"
        className="rounded-xl bg-accent-500 px-6 py-3 text-base font-semibold text-white shadow-md transition-all hover:bg-accent-600 hover:shadow-lg"
      >
        Retour à l&apos;accueil
      </Link>
    </div>
  );
}
