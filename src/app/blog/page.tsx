import { getAllPosts } from '@/lib/api';
import BlogClient from './BlogClient';

export default async function BlogPage() {
    const posts = await getAllPosts();
    const categories = Array.from(new Set(posts.map((post) => post.category)));

    return <BlogClient posts={posts} categories={categories} />;
}
