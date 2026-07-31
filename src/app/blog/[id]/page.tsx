import Navbar from '@/app/components/Navbar';
import Footer from '@/app/components/Footer';
import { getPostById, getAllPosts } from '@/lib/api';
import { ArrowLeftIcon } from 'lucide-react';
import Link from 'next/link';
import { format, parseISO } from 'date-fns';
import { notFound } from 'next/navigation';
import ZoomImages from '@/app/components/ZoomImages';

export async function generateStaticParams() {
    const posts = await getAllPosts();

    return posts.map((post) => ({
        id: post.id,
    }));
}

export async function generateMetadata({
    params,
}: {
    params: Promise<{ id: string }>;
}) {
    const { id } = await params;
    const post = await getPostById(id);
    if (!post) {
        return {
            title: 'Post Not Found',
        };
    }

    const ogImageUrl = `/api/og?slug=${id}`;

    return {
        title: post.title,
        description: post.description,
        openGraph: {
            title: post.title,
            description: post.description,
            images: [
                {
                    url: ogImageUrl,
                    width: 1200,
                    height: 630,
                    alt: post.title,
                },
            ],
            type: 'article',
            publishedTime: post.pubDate,
            siteName: 'alk.pw',
        },
        twitter: {
            card: 'summary_large_image',
            title: post.title,
            description: post.description,
            images: [ogImageUrl],
            creator: '@alok8bb',
        },
    };
}

export default async function PostLayout({
    params,
}: {
    params: Promise<{ id: string }>;
}) {
    const { id } = await params;
    const post = await getPostById(id);
    if (!post) {
        notFound();
    }

    return (
        <>
            <Navbar />
            <Link
                href="/blog"
                className="text-muted hover:text-accent focus-visible:outline-accent mb-4 inline-flex min-h-10 items-center gap-2 text-sm transition-colors duration-100 focus-visible:outline-2 focus-visible:outline-offset-4 motion-reduce:transition-none"
            >
                <ArrowLeftIcon aria-hidden="true" className="h-4 w-4" />
                Back
            </Link>
            <article className="flex flex-col gap-2">
                <div className="mb-4">
                    <h1 className="text-foreground text-3xl font-bold">
                        {post.title}
                    </h1>

                    <time
                        dateTime={post.pubDate}
                        className="text-subtle text-xs"
                    >
                        {format(parseISO(post.pubDate), 'LLLL d, yyyy')}
                    </time>
                </div>
                <div
                    className="rehype-content text-foreground prose [&>*]:mb-3 [&>*:last-child]:mb-0"
                    dangerouslySetInnerHTML={{ __html: post.html }}
                />
                <ZoomImages />
            </article>
            <Footer />
        </>
    );
}
