import React from "react";
import "./syntax-highlight.css"
import Link from "next/link";

export default function BlogPostLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <Container className="mt-8">
        <nav>
          <CustomLink href="/">Hi, I&rsquo;m Fran</CustomLink>
          <span className="mx-2">▸</span>
          <CustomLink href="/blog">Blog</CustomLink>
          <hr className="mt-2 border-gray-500" />
        </nav>
      </Container>

      <Container>
        <main className="article">
          {children}
        </main>
      </Container>

      {/* a portal target for articles that want to bleed through the container (they define their own container) */}
      <div id="bleedthrough-article" />

      <Container>
        <div className="my-9">
          <hr className="mt-4 border-gray-400" />
          <a href="#" className="text-gray-400 font-title">Back to top</a>
        </div>
      </Container>
    </>
  );
}

function Container({ children, className }: { children: React.ReactNode, className?: string }){
  return (
    <div className={`max-w-3xl mx-auto ${className}`}>
      <div className="mx-8">
        {children}
      </div>
    </div>
  );
}

function CustomLink({ href, children }: { href: string; children: string }) {
  return <Link href={href} className="font-title mb-2 text-blue-600 hover:bg-blue-600 hover:text-white">{children}</Link>
}
