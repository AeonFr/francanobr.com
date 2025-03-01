import Link from "next/link";

export const metadata = {
  title: "Blog",
}

export default function Blog() {
  return (
    <div className="max-w-xl lg:max-w-2xl mx-auto my-24">
      <div className="mx-8">
        <h1 className="font-title text-8xl text-orange-600 tracking-tighter">
          Blog
        </h1>

        <p className="my-8">
          This page is currently being migrated to this domain, please follow{" "}
          <a href="https://www.franciscobrusa.dev/" className="font-bold text-blue-600 underline hover:no-underline">this link</a>
          {" "}to go to the blog.
        </p>
        <p className="my-8">
          Sorry for the inconvenience!
        </p>

        <Link
          href="/"
          className="font-bold text-blue-600 underline hover:bg-blue-600 hover:text-blue-100 hover:font-title hover:font-normal hover:no-underline hover:tracking-tighter"
        >
          Go back to the homepage
        </Link>
      </div>
    </div>
  );
}
