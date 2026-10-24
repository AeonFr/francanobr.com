import Image from "next/image";
import { ExternalLink } from "lucide-react";

interface ProjectHeroProps {
  image: string;
  alt: string;
  /** The live project */
  href: string;
  label: string;
}

// Screenshot + visit button for a project page. Every height and margin here
// is a multiple of 1rem so the block keeps the article's baseline grid:
// 20rem image, 1rem gap, 3rem button, 1rem gap.
export default function ProjectHero({ image, alt, href, label }: ProjectHeroProps) {
  return (
    <div className="mb-4">
      <div className="relative h-80 overflow-hidden rounded-xl border border-gray-300">
        <Image
          src={image}
          alt={alt}
          fill
          sizes="(min-width: 48rem) 640px, 100vw"
          className="m-0! object-cover object-top"
        />
      </div>
      <a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        className="mt-4 flex h-12 items-center justify-center gap-2 rounded-xl bg-blue-600 font-title text-lg text-white! no-underline! hover:bg-blue-800"
      >
        {label}
        <ExternalLink className="h-4 w-4" aria-hidden="true" />
      </a>
    </div>
  );
}
