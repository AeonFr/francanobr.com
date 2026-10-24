export interface Project {
  slug: string;
  /** Internal write-up page (MDX) */
  href: string;
  /** The live project */
  url: string;
  title: string;
  /** Screenshot of the project's homepage, under /public */
  image: string;
  /** One-line description shown in the list view */
  dek: string;
}

// Each project's write-up lives in `projects/(detail)/<slug>/page.mdx`.
// This is the single source of truth for the list view.
export const projects: Project[] = [
  {
    slug: "wikinews-rss",
    href: "/projects/wikinews-rss",
    url: "https://aeonfr.github.io/wikinews-rss/",
    title: "Wikipedia News RSS",
    image: "/projects/wikinews-rss.png",
    dek: "Wikipedia’s current events as an RSS feed, in English and Spanish.",
  },
  {
    slug: "minerogue",
    href: "/projects/minerogue",
    url: "https://minerogue.francanobr.com/",
    title: "Minerogue",
    image: "/projects/minerogue.png",
    dek: "A Minesweeper roguelike you can play in the browser.",
  },
];
