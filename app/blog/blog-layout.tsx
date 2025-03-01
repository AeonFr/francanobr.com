import React from "react";
import "./article.css";
import Link from "next/link";

export default function BlogPostLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="max-w-4xl mx-auto my-8">
      <div className="mx-8">

        <nav>
          <div className="font-title text-gray-500">Hi, I&rsquo;m Fran</div>
          <CustomLink href="/">Home</CustomLink>{" | "}
          <CustomLink href="/">Blog</CustomLink>
          <hr className="mt-2 border-gray-500" />
        </nav>

        <main className="article">
          {children}
        </main>
      </div>
    </div>
  );
}

function CustomLink({href, children}: {href: string; children: string}) {
  return <Link href={href} className="text-blue-600 hover:bg-blue-600 hover:text-white">{children}</Link>
}
