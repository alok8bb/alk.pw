'use client';

import { format, parseISO } from 'date-fns';
import Chip from '../components/Chip';
import Footer from '../components/Footer';
import Navbar from '../components/Navbar';
import { Search } from 'lucide-react';
import { useState, useRef, useEffect } from 'react';

interface Post {
    id: string;
    title: string;
    description: string;
    pubDate: string;
    category: string;
}

interface BlogClientProps {
    posts: Post[];
    categories: string[];
}

export default function BlogClient({ posts, categories }: BlogClientProps) {
    const [activeCategory, setActiveCategory] = useState('all');
    const [searchQuery, setSearchQuery] = useState('');
    const [isSearchOpen, setIsSearchOpen] = useState(false);
    const [hasMorePostsBelow, setHasMorePostsBelow] = useState(false);
    const searchInputRef = useRef<HTMLInputElement>(null);
    const postListRef = useRef<HTMLElement>(null);

    // Handle keyboard shortcuts
    useEffect(() => {
        const handleKeyDown = (e: KeyboardEvent) => {
            // Focus search on '/' key press
            if (e.key === '/' && !e.ctrlKey && !e.metaKey && !e.altKey) {
                if (
                    document.activeElement?.tagName === 'INPUT' ||
                    document.activeElement?.tagName === 'TEXTAREA'
                ) {
                    return;
                }
                e.preventDefault();
                setIsSearchOpen(true);
            }
        };

        document.addEventListener('keydown', handleKeyDown);
        return () => document.removeEventListener('keydown', handleKeyDown);
    }, []);

    useEffect(() => {
        if (isSearchOpen) {
            searchInputRef.current?.focus();
        }
    }, [isSearchOpen]);

    useEffect(() => {
        const postList = postListRef.current;
        if (!postList) return;

        const updateScrollFade = () => {
            const hasOverflow =
                postList.scrollHeight > postList.clientHeight + 1;
            const isAtBottom =
                postList.scrollTop + postList.clientHeight >=
                postList.scrollHeight - 1;

            setHasMorePostsBelow(hasOverflow && !isAtBottom);
        };

        postList.scrollTop = 0;
        const frame = requestAnimationFrame(updateScrollFade);
        const resizeObserver = new ResizeObserver(updateScrollFade);
        resizeObserver.observe(postList);

        return () => {
            cancelAnimationFrame(frame);
            resizeObserver.disconnect();
        };
    }, [activeCategory, searchQuery]);

    function updatePostListFade() {
        const postList = postListRef.current;
        if (!postList) return;

        const hasOverflow = postList.scrollHeight > postList.clientHeight + 1;
        const isAtBottom =
            postList.scrollTop + postList.clientHeight >=
            postList.scrollHeight - 1;

        setHasMorePostsBelow(hasOverflow && !isAtBottom);
    }

    // Filter posts based on search query and category
    const filteredPosts = posts.filter((post) => {
        const matchesCategory =
            activeCategory === 'all' || post.category === activeCategory;
        const matchesSearch =
            searchQuery === '' ||
            post.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
            post.description.toLowerCase().includes(searchQuery.toLowerCase());
        return matchesCategory && matchesSearch;
    });

    return (
        <>
            <Navbar />
            <main className="flex h-[calc(100dvh-18rem)] min-h-0 flex-none flex-col gap-6 overflow-hidden">
                {/* Header */}
                <section className="flex flex-col gap-2">
                    <div>
                        <h1 className="hero-name text-foreground text-[3rem] leading-none">
                            Brokenstack
                        </h1>
                        <p className="text-muted mt-2 text-sm leading-6">
                            Blog and notes by Alok.
                        </p>
                    </div>
                </section>

                <div className="flex flex-wrap items-center gap-2">
                    <div
                        className="flex flex-wrap gap-2"
                        role="group"
                        aria-label="Filter posts by category"
                    >
                        <Chip
                            isActive={activeCategory === 'all'}
                            onClick={() => setActiveCategory('all')}
                        >
                            all
                        </Chip>
                        {categories.map((category) => (
                            <Chip
                                key={category}
                                isActive={activeCategory === category}
                                onClick={() => setActiveCategory(category)}
                            >
                                {category}
                            </Chip>
                        ))}
                    </div>
                    <div
                        className={`relative ml-auto h-9 transition-[width] duration-200 ease-out motion-reduce:transition-none ${
                            isSearchOpen ? 'w-full sm:w-64' : 'w-9'
                        }`}
                        onBlur={(event) => {
                            if (
                                !event.currentTarget.contains(
                                    event.relatedTarget
                                ) &&
                                searchQuery === ''
                            ) {
                                setIsSearchOpen(false);
                            }
                        }}
                    >
                        {isSearchOpen ? (
                            <>
                                <Search
                                    aria-hidden="true"
                                    className="text-subtle pointer-events-none absolute top-1/2 left-3 h-3.5 w-3.5 -translate-y-1/2"
                                    strokeWidth={1.75}
                                />
                                <input
                                    ref={searchInputRef}
                                    value={searchQuery}
                                    onChange={(e) =>
                                        setSearchQuery(e.target.value)
                                    }
                                    onKeyDown={(event) => {
                                        if (event.key === 'Escape') {
                                            setSearchQuery('');
                                            setIsSearchOpen(false);
                                        }
                                    }}
                                    placeholder="Search posts"
                                    aria-label="Search posts"
                                    className="border-outline bg-surface-low text-foreground placeholder:text-subtle focus-visible:border-foreground h-9 w-full rounded-full border py-2 pr-9 pl-9 text-sm transition-colors duration-100 focus-visible:outline-none motion-reduce:transition-none"
                                    type="search"
                                />
                                <span
                                    className="text-subtle pointer-events-none absolute top-1/2 right-3 -translate-y-1/2 text-[10px] leading-none"
                                    aria-hidden="true"
                                >
                                    /
                                </span>
                            </>
                        ) : (
                            <button
                                type="button"
                                aria-label="Search posts"
                                title="Search posts (/)"
                                className="border-outline bg-surface-low text-muted hover:border-foreground hover:text-foreground focus-visible:outline-accent flex h-9 w-9 items-center justify-center rounded-full border transition-colors duration-100 focus-visible:outline-2 focus-visible:outline-offset-2 motion-reduce:transition-none"
                                onClick={() => setIsSearchOpen(true)}
                            >
                                <Search
                                    aria-hidden="true"
                                    className="h-4 w-4"
                                    strokeWidth={1.75}
                                />
                            </button>
                        )}
                    </div>
                </div>

                {/* Blog List */}
                <div className="relative mt-1 min-h-0 flex-1">
                    <section
                        ref={postListRef}
                        className="blog-post-list h-full space-y-4 overflow-y-auto pr-2"
                        onScroll={updatePostListFade}
                    >
                        {filteredPosts.map((post) => (
                            <a
                                key={post.id}
                                href={`/blog/${post.id}`}
                                className="focus-visible:outline-accent flex flex-col py-2 focus-visible:outline-2 focus-visible:outline-offset-4"
                            >
                                <h2 className="text-foreground w-fit text-[0.95rem] leading-6 font-semibold">
                                    {post.title}
                                </h2>
                                {post.description ? (
                                    <p className="text-muted mt-1 max-w-[31rem] truncate text-sm leading-6">
                                        {post.description}
                                    </p>
                                ) : null}
                                <span className="text-subtle/80 mt-1 text-xs tabular-nums">
                                    {format(
                                        parseISO(post.pubDate),
                                        'd LLL, yyyy'
                                    )}
                                </span>
                            </a>
                        ))}
                    </section>
                    <div
                        aria-hidden="true"
                        className={`blog-scroll-fade pointer-events-none absolute inset-x-0 bottom-0 h-14 transition-opacity duration-150 motion-reduce:transition-none ${
                            hasMorePostsBelow ? 'opacity-100' : 'opacity-0'
                        }`}
                    />
                </div>

                <section className="mt-2">
                    <p className="text-muted text-sm leading-6">
                        More on{' '}
                        <a
                            href="https://blog.realogs.in/"
                            target="_blank"
                            rel="noreferrer"
                            className="text-foreground decoration-outline hover:text-accent hover:decoration-accent focus-visible:outline-accent underline underline-offset-4 focus-visible:outline-2 focus-visible:outline-offset-4"
                        >
                            Realogs
                            </a>
                    </p>
                </section>
            </main>
            <Footer />
        </>
    );
}
