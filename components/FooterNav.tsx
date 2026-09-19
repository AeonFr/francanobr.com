import { ExternalLink } from 'lucide-react';
import { default as NextLink } from 'next/link';
import { FunctionComponent, ReactNode } from 'react';

interface LinkProps {
    href: string;
    rel?: string;
    target?: string;
    children: ReactNode;
}

type FooterNavLinkProps = LinkProps & { as?: FunctionComponent<LinkProps & { className?: string; }> };

function FooterNavLink({href, as, rel, target, children}: FooterNavLinkProps) {
    let El: string | typeof as = 'a';
    if (as) {
        El = as;
    }

    return (
        <div className="relative">
            <div className="absolute -inset-3">
                <El
                    href={href}
                    rel={rel}
                    target={target}
                    className="
                        p-3
                        text-blue-600
                        underline
                        hover:bg-blue-600 hover:text-blue-100
                        font-extrabold
                        hover:no-underline hover:font-stretch-semi-expanded
                        transition-[font-stretch]
                        basis-full
                        "
                >
                    {children}
                </El>
            </div>
            {/* An empty element to take proper width */}
            <div aria-hidden="true" className="invisible font-extrabold font-stretch-semi-expanded">{children}</div>
        </div>
    )
}

// The current page, rendered in the same slot as a FooterNavLink but as
// plain text: it's not useful to link to the page you're already on.
function FooterNavCurrent({ children }: { children: ReactNode }) {
    return (
        <div className="relative">
            <div className="absolute -inset-3">
                <span
                    aria-current="page"
                    className="block p-3 text-gray-400 font-extrabold basis-full"
                >
                    {children}
                </span>
            </div>
            {/* An empty element to take proper width */}
            <div aria-hidden="true" className="invisible font-extrabold font-stretch-semi-expanded">{children}</div>
        </div>
    )
}

interface FooterNavProps {
    /** The page this FooterNav is rendered on, so it isn't linked to itself. */
    current?: 'home' | 'writing';
}

export default function FooterNav({ current }: FooterNavProps) {
    return (
        <footer className="w-full py-6 mt-8 border-t">
            <nav className="container mx-auto px-4">
                <ul className="flex justify-center gap-6 text-sm">
                    <li>
                        {current === 'home' ? (
                            <FooterNavCurrent>Home</FooterNavCurrent>
                        ) : (
                            <FooterNavLink href="/" as={NextLink}>
                                Home
                            </FooterNavLink>
                        )}
                    </li>
                    <li>
                        {current === 'writing' ? (
                            <FooterNavCurrent>Writing</FooterNavCurrent>
                        ) : (
                            <FooterNavLink href="/writing" as={NextLink}>
                                Writing
                            </FooterNavLink>
                        )}
                    </li>
                    <li>
                        <FooterNavLink
                            href="https://www.linkedin.com/in/franciscocanobrusa/"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            LinkedIn&nbsp;<ExternalLink className="inline w-3 h-3" />
                        </FooterNavLink>
                    </li>
                    <li>
                        <FooterNavLink
                            href="https://bsky.app/profile/francanobr.com"
                            target="_blank"
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
