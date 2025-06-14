import { ExternalLink } from 'lucide-react';
import { default as NextLink } from 'next/link';
import { FunctionComponent, ReactNode } from 'react';

interface LinkProps {
    href: string;
    rel?: string;
    children: ReactNode;
}

type FooterNavLinkProps = LinkProps & { as?: FunctionComponent<LinkProps & { className?: string; }> };

function FooterNavLink({href, as, rel, children}: FooterNavLinkProps) {
    let El: string | typeof as = 'a';
    if (as) {
        El = as;
    }

    return (
        <div className="relative">
            <El
                href={href}
                rel={rel}
                className="
                    absolute
                    text-blue-600
                    underline
                    hover:bg-blue-600 hover:text-blue-100
                    font-title font-normal tracking-tighter
                    hover:no-underline hover:tracking-wide
                    p-3 -inset-3
                    "
            >
                {children}
            </El>
            {/* An empty element to take proper width */}
            <div aria-hidden="true" className="invisible font-title tracking-wide">{children}</div>
        </div>
    )
}

export default function FooterNav() {
    return (
        <footer className="w-full py-6 mt-8 border-t">
            <nav className="container mx-auto px-4">
                <ul className="flex flex-wrap justify-center gap-6 text-sm">
                    <li>
                        <FooterNavLink href="/" as={NextLink}>
                            Home
                        </FooterNavLink>
                    </li>
                    <li>
                        <FooterNavLink href="/about-me" as={NextLink}>
                            About Me
                        </FooterNavLink>
                    </li>
                    <li>
                        <FooterNavLink href="/blog" as={NextLink}>
                            Blog
                        </FooterNavLink>
                    </li>
                    <li>
                        <FooterNavLink 
                            href="https://www.linkedin.com/in/franciscocanobrusa/"
                            rel="noopener noreferrer"
                        >
                            LinkedIn&nbsp;<ExternalLink className="inline w-3 h-3" />
                        </FooterNavLink>
                    </li>
                    <li>
                        <FooterNavLink 
                            href="https://bsky.app/profile/francanobr.com"
                            rel="noopener noreferrer"
                        >
                            Bluesky&nbsp;<ExternalLink className="inline w-3 h-3" />
                        </FooterNavLink>
                    </li>
                </ul>
            </nav>
        </footer>
    );
}