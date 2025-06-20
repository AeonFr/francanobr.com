import Squircle from "@/components/squircle/Squircle";
import SquircleProvider from "@/components/squircle/SquircleProvider";
import Link from "next/link";
import styles from "./bloglist.module.css";

export const metadata = {
  title: "Blog",
}

export default function Blog() {
  return (
    <SquircleProvider>
      <div className="max-w-xl lg:max-w-2xl mx-auto my-24">
        <div className="mx-8">
          <h1 className="font-title text-8xl text-orange-600 tracking-tighter">
            Blog
          </h1>

          <nav>
            <ul>
              <li>
                <BlogLink href="/blog/articles/2025-06-20-the-size-of-your-node-modules-is-a-feature-not-a-bug" date="June 20, 2025">
                  The size of your node_modules is a feature, not a bug
                </BlogLink>
              </li>
              <li>
                <BlogLink href="/blog/articles/2025-06-08-making-it-worse-to-make-it-better" date="June 8, 2025">
                  Making it worse to make it better
                </BlogLink>
              </li>
              <li>
                <BlogLink href="/blog/articles/2023-01-24-you-cant-replace-redux-with-hooks-and-context" date="January 2023">
                  You can&rsquo;t replace Redux with Hooks and Context (thoughts on React state management)
                </BlogLink>
              </li>
              <li>
                <BlogLink href="/blog/articles/2021-07-02-generated-color-palettes" date="July 2021">
                  Generating color palettes programatically
                </BlogLink>
              </li>
              <li>
                <BlogLink href="/blog/articles/2020-02-05-history-of-react" date="February 2020">
                  History of React and Modern JS Frameworks
                </BlogLink>
              </li>
            </ul>
          </nav>

          <Link
            href="/"
            className="font-bold text-blue-600 underline hover:bg-blue-600 hover:text-blue-100 hover:font-title hover:font-normal hover:no-underline hover:tracking-tighter"
          >
            Go back to the homepage
          </Link>
        </div>
      </div>
    </SquircleProvider>
  );
}

function BlogLink({ href, children, date }: { href: string, children: string, date: string }) {
  return (
    <Squircle className={styles.squircleBlogItem}>
      <Link href={href} className="block my-8 p-8 hover:text-white">
        <span className="block text-xl font-title">
          {children}
        </span>
        <span className="block text-md font-title-alt">
          {date}
        </span>
      </Link>
    </Squircle>
  )
}
