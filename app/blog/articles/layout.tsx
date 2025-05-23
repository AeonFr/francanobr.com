import React from "react";
import "./article.css";
import Link from "next/link";

export default function BlogPostLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <Container>
        <nav>
          <div className="font-title text-gray-500">Hi, I&rsquo;m Fran</div>
          <CustomLink href="/">Home</CustomLink>{" | "}
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
        <div className="my-8">
          <hr className="mt-4 border-gray-400" />
          <a href="#" className="text-gray-400 font-title">Back to top</a>
        </div>
      </Container>
    </>
  );
}

function Container({ children }: { children: React.ReactNode }){
  return (
    <div className="max-w-4xl mx-auto my-8">
      <div className="mx-8">
        {children}
      </div>
    </div>
  );
}

function CustomLink({ href, children }: { href: string; children: string }) {
  return <Link href={href} className="text-blue-600 hover:bg-blue-600 hover:text-white">{children}</Link>
}
