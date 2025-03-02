import Link from "next/link"

export default function ErrorPage({ status }: { status: number }) {
  return (
    <div className="max-w-xl lg:max-w-2xl mx-auto my-24">
      <div className="mx-8 text-center">
        <div aria-hidden className="my-8 text-8xl">
          👻
        </div>
        <h1 className="my-8 text-2xl md:text-6xl font-title">
          {status === 404 ? "Page not found" : "Something went wrong"}
        </h1>

        <p className="md:text-xl">
          {status === 404 ? (
            <>
              Why don&rsquo;t you <ReturnToHomePageLink>return to the homepage</ReturnToHomePageLink>?
            </>
          ) : (
            <>
              Try refreshing the page, and if the problem persists, consider <ReturnToHomePageLink>going back to the homepage</ReturnToHomePageLink>.
            </>
          )}
        </p>
      </div>
    </div>
  )
}

function ReturnToHomePageLink({ children }: { children: string }) {
  return <Link href="/" className="text-blue-600 font-bold hover:bg-blue-600 hover:text-white">{children}</Link>
}
