/**
 * Prepends the Next.js basePath (from NEXT_PUBLIC_BASE_PATH) to a public asset path.
 * Use this for raw <img> tags or any URL that isn't going through next/image or next/link,
 * as those components handle basePath automatically.
 *
 * @example assetPath('/images/svt/foo.jpg') => '/teacher-loulou/images/svt/foo.jpg' (prod)
 * @example assetPath('/images/svt/foo.jpg') => '/images/svt/foo.jpg' (dev)
 */
export function assetPath(path: string): string {
  return `${process.env.NEXT_PUBLIC_BASE_PATH ?? ""}${path}`;
}
