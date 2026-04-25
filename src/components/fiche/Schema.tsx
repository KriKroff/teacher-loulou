import { assetPath } from "@/lib/asset-path";

type Props =
  | {
      src: string;
      alt: string;
      caption?: string;
      width?: number;
      height?: number;
      children?: never;
    }
  | {
      src?: never;
      alt: string;
      caption?: string;
      children: React.ReactNode;
    };

export function Schema(props: Props) {
  return (
    <figure className="my-5 rounded-xl border border-warm-200 bg-white/80 p-3 sm:p-4">
      <div className="flex items-center justify-center overflow-hidden rounded-lg">
        {"src" in props && props.src ? (
          // Static export forces unoptimized images; using <img> keeps things simple
          // and predictable across basePath/non-basePath builds.
          // eslint-disable-next-line @next/next/no-img-element
          <img
            src={assetPath(props.src)}
            alt={props.alt}
            width={props.width}
            height={props.height}
            className="max-w-full h-auto"
          />
        ) : (
          props.children
        )}
      </div>
      {props.caption && (
        <figcaption className="mt-2 text-center text-xs text-warm-500 italic">
          {props.caption}
        </figcaption>
      )}
    </figure>
  );
}
