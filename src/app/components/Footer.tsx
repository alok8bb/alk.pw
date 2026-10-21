import LocalTime from './LocalTime';

const footerLinkClasses =
    'inline-flex min-h-8 items-center rounded-full px-3 text-xs font-medium text-muted transition-colors duration-100 hover:bg-surface-high hover:text-foreground focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent motion-reduce:transition-none';

export default function Footer() {
    return (
        <footer className="py-5">
            <div className="flex flex-col-reverse items-center gap-3 sm:flex-row sm:justify-between">
                <LocalTime />
                <nav
                    aria-label="Social links"
                    className="border-outline bg-surface-low w-fit rounded-full border p-1"
                >
                    <ul className="flex flex-wrap gap-0.5">
                        <li>
                            <a
                                href="https://x.com/alok8bb"
                                target="_blank"
                                rel="noreferrer"
                                className={footerLinkClasses}
                            >
                                Twitter
                            </a>
                        </li>
                        <li>
                            <a
                                href="https://github.com/alok8bb"
                                target="_blank"
                                rel="noreferrer"
                                className={footerLinkClasses}
                            >
                                GitHub
                            </a>
                        </li>
                        <li>
                            <a
                                href="https://github.com/alok8bb/alk.pw"
                                target="_blank"
                                rel="noreferrer"
                                className={footerLinkClasses}
                            >
                                Source
                            </a>
                        </li>
                    </ul>
                </nav>
            </div>
        </footer>
    );
}
