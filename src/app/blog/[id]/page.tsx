import Navbar from '@/app/components/Navbar';
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
            <div className="flex items-center gap-2 text-gray transition-colors duration-300 hover:text-white mb-4 hover:cursor-pointer">
                <ArrowLeftIcon className="h-4 w-4" />
                <Link href="/blog">back</Link>
            </div>
            <article className="flex flex-col gap-2">
                <div className="mb-4">
                    <h1 className="text-3xl font-bold text-white">
                        {post.title}
                    </h1>

                    <time dateTime={post.pubDate} className="text-xs text-gray">
                        {format(parseISO(post.pubDate), 'LLLL d, yyyy')}
                    </time>
                </div>
                <div
                    className="prose text-white [&>*:last-child]:mb-0 [&>*]:mb-3 rehype-content"
                    dangerouslySetInnerHTML={{ __html: post.html }}
                />
                <ZoomImages />
            </article>
        </>
    );
}
