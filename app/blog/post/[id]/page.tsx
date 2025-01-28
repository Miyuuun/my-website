'use client';

import { useParams, useRouter } from 'next/navigation';
import Image from 'next/image';
import { notFound } from 'next/navigation';
import type { BlogPost } from '../../types';

// ここでブログポストデータを仮に定義しています。通常はDBかAPIから取得します。
const blogPosts: BlogPost[] = [
  {
    id: '1',
    title: 'My First Blog Post',
    date: '2023-05-01',
    content:
      "This is the full content of my first blog post. It's been an exciting journey starting this blog, and I can't wait to share more of my thoughts and experiences with you all.",
    imageUrl: '/room1.jpg?height=400&width=800',
  },
  {
    id: '2',
    title: 'Learning Next.js',
    date: '2023-05-15',
    content:
      "Next.js has been an amazing framework to learn. Its file-based routing system, server-side rendering capabilities, and built-in optimizations have made building this blog a breeze. In this post, I'll dive deeper into some of the key features that have impressed me the most.",
    imageUrl: '/hotel_wine.jpg?height=400&width=800',
  },
  // Add more blog posts here
];

// `params.id`は非同期に解決する必要はありません。同期的に扱います。
// export default function BlogPost({ params }: { params: { id: number } }) {
export default function BlogPost() {
  const postId = useParams<{ id: string }>().id;
  const post = blogPosts.find((post) => post.id === postId);
  const router = useRouter();

  if (!post) {
    notFound();
  }

  const handleClick = () => {
    router.push('/blog?showWelcome=false');
  };

  return (
    <article className="max-w-3xl mx-auto">
      <button onClick={handleClick}>to back</button>
      <h1 className="text-3xl font-bold mb-4">{post.title}</h1>
      <p className="text-secondary mb-4">{post.date}</p>
      <Image
        src={post.imageUrl || '/placeholder.svg'}
        alt={post.title}
        width={800}
        height={400}
        className="w-full h-64 object-cover rounded-lg mb-8"
      />
      <div className="prose prose-invert max-w-none">
        {post.content ? (
          post.content.split('\n').map((paragraph, index) => (
            <p key={index} className="mb-4">
              {paragraph}
            </p>
          ))
        ) : (
          <p>No content available.</p>
        )}
      </div>
    </article>
  );
}
