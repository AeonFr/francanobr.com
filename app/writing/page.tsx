import Squircle from "@/components/squircle/Squircle";
import SquircleProvider from "@/components/squircle/SquircleProvider";
import Link from "next/link";
import styles from "./writinglist.module.css";
import FooterNav from "@/components/FooterNav";
import { posts, formatPostDate } from "./posts";

export const metadata = {
  title: "Writing",
  alternates: {
    types: {
      "application/rss+xml": "/feed.xml",
    },
  },
};

export default function Writing() {
  return (
    <SquircleProvider>
      <div className="max-w-xl lg:max-w-2xl mx-auto my-24">
        <div className="mx-8">
          <h1 className="font-title text-8xl text-orange-600 tracking-tighter">
            Writing
          </h1>

          <p className="font-title-alt text-lg mt-2 mb-8 flex flex-wrap items-baseline gap-x-3">
            <span>Occasional, long-form posts on frontend and architecture.</span>
            <Link href="/feed.xml" className="text-blue-600 underline hover:text-blue-800 shrink-0">
              RSS
            </Link>
          </p>

          <nav>
            <ul>
              {posts.map((post) => (
                <li key={post.slug}>
                  <WritingLink href={post.href} date={formatPostDate(post.date)} dek={post.dek}>
                    {post.title}
                  </WritingLink>
                </li>
              ))}
            </ul>
          </nav>

          <FooterNav current="writing" />
        </div>
      </div>
    </SquircleProvider>
  );
}

function WritingLink({ href, children, date, dek }: { href: string, children: string, date: string, dek: string }) {
  return (
    <Squircle className={styles.squircleBlogItem}>
      <Link href={href} className="block my-9 p-8 hover:text-white">
        <span className="block text-xl font-title">
          {children}
        </span>
        <span className="block text-md font-title-alt mt-2">
          {date}
        </span>
        <span className="block text-md mt-3 opacity-80">
          {dek}
        </span>
      </Link>
    </Squircle>
  )
}
