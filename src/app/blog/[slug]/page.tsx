import { format, parseISO } from 'date-fns';
import { allPosts } from 'contentlayer/generated';
import Navbar from '@/app/components/Navbar';
import Link from 'next/link';
import { ArrowLeftIcon } from 'lucide-react';

export const generateStaticParams = async () =>
    allPosts.map((post) => ({ slug: post._raw.flattenedPath }));

export const generateMetadata = ({ params }: { params: { slug: string } }) => {
    const post = allPosts.find(
        (post) => post._raw.flattenedPath === params.slug
    );
    if (!post) throw new Error(`Post not found for slug: ${params.slug}`);
    return { title: post.title };
};

const PostLayout = ({ params }: { params: { slug: string } }) => {
    const post = allPosts.find(
        (post) => post._raw.flattenedPath === params.slug
    );
    if (!post) throw new Error(`Post not found for slug: ${params.slug}`);

    return (
        <>
            <Navbar />
            <article className="flex flex-col gap-2">
                <div className="flex items-center gap-2 text-gray hover:text-white transition-colors duration-300">
                    <ArrowLeftIcon className="h-4 w-4" />
                    <Link href="/blog">back</Link>
                </div>

                <div className="mb-4">
                    <h1 className="text-3xl font-bold text-white">
                        {post.title}
                    </h1>

                    <time
                        dateTime={post.pubDate}
                        className="text-xs text-gray"
                    >
                        {format(parseISO(post.pubDate), 'LLLL d, yyyy')}
                    </time>
                </div>
                <div
                    className="text-white [&>*:last-child]:mb-0 [&>*]:mb-3"
                    dangerouslySetInnerHTML={{ __html: post.body.html }}
                />
            </article>
        </>
    );
};

export default PostLayout;
