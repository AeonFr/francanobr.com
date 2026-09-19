export interface Post {
  slug: string;
  href: string;
  title: string;
  /** ISO date string */
  date: string;
  /** One-line summary of the post's actual take, shown in the list view */
  dek: string;
}

// Ordered newest first. This is the single source of truth for the post
// list and the RSS feed — article pages keep their own `metadata` export
// for per-page SEO, but titles/dates/deks shown elsewhere should read from here.
export const posts: Post[] = [
  {
    slug: "2023-01-24-you-cant-replace-redux-with-hooks-and-context",
    href: "/writing/articles/2023-01-24-you-cant-replace-redux-with-hooks-and-context",
    title: "You can’t replace Redux with Hooks and Context",
    date: "2023-01-24",
    dek: "A case against treating Context as a drop-in state manager, and where it actually falls apart.",
  },
  {
    slug: "2021-07-02-generated-color-palettes",
    href: "/writing/articles/2021-07-02-generated-color-palettes",
    title: "Generating color palettes programmatically",
    date: "2021-07-02",
    dek: "Notes on building color systems with code instead of hand-picking hex values.",
  },
  {
    slug: "2020-02-05-history-of-react",
    href: "/writing/articles/2020-02-05-history-of-react",
    title: "History of React and Modern JS Frameworks",
    date: "2020-02-05",
    dek: "How React’s rise reshaped what “modern” frontend even means.",
  },
];

export function formatPostDate(date: string): string {
  return new Intl.DateTimeFormat("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
    timeZone: "UTC",
  }).format(new Date(date));
}
