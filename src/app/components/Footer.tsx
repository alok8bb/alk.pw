import LocalTime from './LocalTime';
import ThemeToggle from './ThemeToggle';

const footerLinkClasses =
    'inline-flex min-h-10 items-center text-sm text-muted transition-colors duration-100 hover:text-foreground focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-accent motion-reduce:transition-none';

export default function Footer() {
    return (
        <footer className="border-outline border-t py-5">
            <div className="flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between">
                <LocalTime />
                <div className="flex items-center gap-2">
                    <nav aria-label="Social links">
                        <ul className="flex flex-wrap gap-x-5">
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
                    <ThemeToggle />
                </div>
            </div>
        </footer>
    );
}
