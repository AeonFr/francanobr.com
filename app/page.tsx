import FooterNav from "@/components/FooterNav";
import Image from "next/image";

export default function Home() {
  return (
    <div className="max-w-xl lg:max-w-2xl mx-auto my-24">
      <Image src="/favicon.svg" width={150} height={150} alt="" className="mb-24 ml-12 sm:ml-0" priority />

      <div style={{
        transform: 'rotate(-28deg) skew(25deg)',
        transformOrigin: 'left'
      }}>
        <h1 className="text-5xl lg:text-6xl mb-4 text-nowrap ml-4 sm:ml-0 text-orange-600 font-extrabold font-stretch-expanded">
          Hi, I&rsquo;m Fran
        </h1>
      </div>
      <div className="ml-8 lg:text-xl mr-8">
        <main className="article">
            <p className="mb-4">
            I’m a self-taught software engineer specializing in front-end architecture.
            With a background in design, I bring a user-centered approach to my craft.
            </p>
            <h2 className="font-title text-orange-600">Work</h2>
            <p className="mb-4">
            I’ve been doing websites and apps as a freelancer for over 10 years, working across the entire stack—design, frontend, backend, infrastructure, tooling, and documentation.
            </p>
            <p className="mb-4">
            I love working on cross-functional teams, and I enjoy challenges such as refactoring
            old codebases and bringing them up to modern standards.
            </p>
            <h2 className="font-title text-orange-600">Background</h2>
            <p className="mb-4">
            I studied Graphic Design in college,
            where I learned valuable lessons about the importance of advocating for the user and the value of a great user experience.
            I’m interested in the interection of design and technology, and that’s why frontend engineering is what I love the most,
            and why I like to bring the perspective of accessibility and performance to my work.
            </p>
        </main>

        <FooterNav current="home" />
      </div>
    </div>
  );
}
