import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div className="max-w-xl lg:max-w-2xl mx-auto my-24">
      <Image src="/favicon.svg" width={150} height={150} alt="" className="mb-24 ml-12 sm:ml-0" />

      <div style={{
        transform: 'rotate(-28deg) skew(25deg)',
        transformOrigin: 'left'
      }}>
        <h1 className="font-title text-5xl lg:text-6xl mb-4 text-nowrap ml-4 sm:ml-0 text-orange-600 tracking-tight">
          Hi, I&rsquo;m Fran
        </h1>
      </div>
      <div className="ml-8 lg:text-xl mr-8">
        <p className="mb-4">
          I’m a self-taught software engineer from Argentina, based in Barcelona, with a background in design and specialized in front-end architecture.
        </p>
        <h2 className="font-title text-orange-500">Work</h2>
        <p className="mb-4">
          I’ve been doing websites and apps as a freelancer for over 10 years.
          During that time, I’ve worked on all parts of the stack
          (design, front-end, documentation, infrastructure, developer tooling, backend, etc)
        </p>
        <p className="mb-4">
          Currently working at UserTesting, as the Architect of the Developer Experience and Design System teams.
          I love working on cross-functional teams, and exploring the boundaries of the craft,
          for example, with technologies such as micro-frontends or Shadow DOM.
        </p>
        <p className="mb-4">
          The most complex challenges, and the ones I enjoyed the most, were usually related to refactoring
          old codebases and bringing them up to modern standars.
        </p>
        <h2 className="font-title text-orange-500">Background</h2>
        <p className="mb-4">
          I studied Graphic Design in college,
          where I learned valuable lessons about the importance of advocating for the user and the value of a great user experience.
          I’m interested in the interection of design and technology, and that’s why frontend engineering is what I love the most,
          and why I like to bring the perspective of accessibility and performance to my work.
        </p>

        <div className="absolute font-title-alt mt-24">
          <Link
            href="/blog"
            className="text-4xl font-bold text-blue-600 underline hover:bg-blue-600 hover:text-blue-100 hover:font-title hover:font-normal hover:no-underline hover:tracking-tighter"
          >
            Check out my blog
          </Link>
          <div className="mt-4 font-title-alt text-xl" style={{ maxWidth: "calc(100vw - calc(var(--spacing) * 8) - calc(300px - calc(var(--spacing) * 24)))" }}>
            You can also find me on&nbsp;
            <ExternalLink href="https://www.linkedin.com/in/franciscocanobrusa/">Linkedin</ExternalLink>&nbsp;&&nbsp;
            <ExternalLink href="https://bsky.app/profile/francanobr.com">Bluesky</ExternalLink>.
          </div>
        </div>


        <div className="-mr-8 overflow-hidden sm:overflow-visible">
          <div className="block ml-auto mt-6 -mr-24 text-sm text-center" style={{ width: 300 }}>
            <Image src="/me.jpeg" alt="A picture of me" width={300} height={300} className="rounded-full" />
            <svg
              aria-hidden
              className="mx-auto mt-4"
              width="32"
              height="32"
              viewBox="0 0 64 64"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M32 56 Q48 48 32 40 Q16 32 32 24" stroke="currentColor" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round" />
              <path d="M32 24 L32 8" stroke="currentColor" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round" />
              <path d="M28 12 L32 8 L36 12" stroke="currentColor" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
            <p>
              A picture of me
            </p>
          </div>
        </div>
      </div>
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
