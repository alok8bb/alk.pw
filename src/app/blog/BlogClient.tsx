'use client';

import { format, parseISO } from 'date-fns';
import Chip from '../components/Chip';
import Footer from '../components/Footer';
import Navbar from '../components/Navbar';
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
    const [hoveredPost, setHoveredPost] = useState<string | null>(null);
    const searchInputRef = useRef<HTMLInputElement>(null);

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
                searchInputRef.current?.focus();
            }
        };

        document.addEventListener('keydown', handleKeyDown);
        return () => document.removeEventListener('keydown', handleKeyDown);
    }, []);

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
            <main className="flex flex-1 flex-col gap-6">
                {/* Header */}
                <section className="flex flex-col gap-2">
                    <div>
                        <h1 className="text-foreground text-2xl font-semibold">
                            Brokenstack
                        </h1>
                        <p className="text-muted">Blog and notes by Alok.</p>
                    </div>
                </section>

                <div className="flex justify-between">
                    <div className="flex gap-3">
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
                    <div>
                        <div className="relative hidden w-full sm:block sm:w-72">
                            <input
                                ref={searchInputRef}
                                value={searchQuery}
                                onChange={(e) => setSearchQuery(e.target.value)}
                                placeholder="Search"
                                aria-label="Search posts"
                                className="border-outline text-foreground placeholder:text-subtle focus-visible:outline-accent min-h-10 w-full rounded-md border bg-transparent px-3 py-2 text-sm focus-visible:outline-2 focus-visible:outline-offset-2"
                                type="text"
                                inputMode="search"
                            />
                            <span className="pointer-events-none absolute top-1/2 right-2 -translate-y-1/2 rounded border px-1 text-[10px] opacity-50">
                                /
                            </span>
                        </div>
                    </div>
                </div>

                {/* Blog List */}
                <section
                    className="flex flex-col gap-8"
                    onMouseLeave={() => setHoveredPost(null)}
                >
                    {filteredPosts.map((post, idx: number) => (
                        <a
                            key={idx}
                            href={`/blog/${post.id}`}
                            className={`group focus-visible:outline-accent flex flex-col transition-opacity duration-150 ease-out focus-visible:outline-2 focus-visible:outline-offset-4 motion-reduce:transition-none ${
                                hoveredPost && hoveredPost !== post.title
                                    ? 'opacity-30'
                                    : 'opacity-100'
                            }`}
                            onMouseEnter={() => setHoveredPost(post.title)}
                        >
                            <h2 className="text-foreground group-hover:text-accent text-xl font-semibold transition-colors duration-100 motion-reduce:transition-none">
                                {post.title}
                            </h2>
                            <p className="text-md text-muted truncate">
                                {post.description}
                            </p>
                            <p className="text-subtle min-w-fit text-xs">
                                {format(parseISO(post.pubDate), 'd LLL, yyyy')}
                            </p>
                        </a>
                    ))}
                </section>
            </main>
            <Footer />
        </>
    );
}
