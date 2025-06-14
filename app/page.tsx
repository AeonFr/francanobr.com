import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div className="max-w-xl lg:max-w-2xl mx-auto my-24">
      adssads
    </div>
  );
}

function ExternalLink({ href, children, className }: { href: string; children: string; className?: string; }) {
  return (
    <a href={href} className={"text-blue-600 underline underline-offset-4 hover:bg-blue-600 hover:text-white hover:no-underline" + (className || "")}>
      {children}
    </a>
  )
}
