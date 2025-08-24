'use client';

import { compareDesc, format, parseISO } from 'date-fns';
import Chip from '../components/Chip';
import Footer from '../components/Footer';
import Navbar from '../components/Navbar';
import { allPosts, Post } from 'contentlayer/generated';
import { useState } from 'react';

export default function BlogPage() {
    const posts = allPosts.sort((a, b) =>
        compareDesc(new Date(a.pubDate), new Date(b.pubDate))
    );
    const categories = Array.from(new Set(posts.map((post) => post.category)));
    const [activeCategory, setActiveCategory] = useState('all');

    return (
        <>
            <Navbar />
            <main className="flex flex-1 flex-col gap-6">
                {/* Header */}
                <section className="flex flex-col gap-2">
                    <div>
                        <h1 className="text-2xl font-semibold text-white">
                            Brokenstack
                        </h1>
                        <p className="text-gray">blog & notes by alok</p>
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
                        <div className="relative w-full sm:w-72">
                            <input
                                placeholder="Search"
                                aria-label="Search posts"
                                className="w-full rounded-md border border-gray bg-transparent px-3 py-2 text-sm text-white placeholder-white/40 focus:outline-none focus:ring-2 focus:ring-black"
                                type="text"
                                inputMode="search"
                            />
                            <span className="pointer-events-none absolute right-2 top-1/2 -translate-y-1/2 rounded border px-1 text-[10px] opacity-50">
                                /
                            </span>
                        </div>
                    </div>
                </div>

                {/* Blog List */}
                <section className="flex flex-col gap-8">
                    {posts
                        .filter(
                            (post: Post) =>
                                activeCategory === 'all' ||
                                post.category === activeCategory
                        )
                        .map((post: Post, idx: number) => (
                            <a
                                key={idx}
                                className="flex flex-col hover:cursor-pointer"
                                href={post.url}
                            >
                                <h2 className="text-xl font-semibold text-white">
                                    {post.title}
                                </h2>
                                <p className="text-md truncate text-gray">
                                    {post.description}
                                </p>
                                <p className="min-w-fit text-xs text-gray">
                                    {format(
                                        parseISO(post.pubDate),
                                        'd LLL, yyyy'
                                    )}
                                </p>
                            </a>
                        ))}
                </section>
            </main>
        </>
    );
}
