import Squircle from "@/components/squircle/Squircle";
import SquircleProvider from "@/components/squircle/SquircleProvider";
import Image from "next/image";
import Link from "next/link";
import styles from "../writing/writinglist.module.css";
import FooterNav from "@/components/FooterNav";
import { projects } from "./projects";

export const metadata = {
  title: "Projects",
};

export default function Projects() {
  return (
    <SquircleProvider>
      <div className="max-w-xl lg:max-w-2xl mx-auto my-24">
        <div className="mx-8">
          <h1 className="font-title text-8xl text-orange-600 tracking-tighter">
            Projects
          </h1>

          <p className="font-title-alt text-lg mt-3 mb-6">
            Things I made on my own, and how I made them.
          </p>

          <nav>
            <ul>
              {projects.map((project) => (
                <li key={project.slug}>
                  <Squircle className={styles.squircleBlogItem}>
                    {/* Heights are multiples of 1rem so the card stays on the baseline grid */}
                    <Link href={project.href} className="block my-4 p-4 pb-8 hover:text-white">
                      <span className="block relative h-40 mb-2 overflow-hidden rounded-xl">
                        <Image
                          src={project.image}
                          alt=""
                          fill
                          sizes="(min-width: 1024px) 608px, 512px"
                          className="object-cover object-top"
                        />
                      </span>
                      <span className="block text-xl font-title leading-8">
                        {project.title}
                      </span>
                      <span className="block text-sm mt-2 opacity-80 leading-4">
                        {project.dek}
                      </span>
                    </Link>
                  </Squircle>
                </li>
              ))}
            </ul>
          </nav>

          <FooterNav current="projects" />
        </div>
      </div>
    </SquircleProvider>
  );
}
