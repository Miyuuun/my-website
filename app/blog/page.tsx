'use client';

import { useState, useEffect } from 'react';
import { useSearchParams } from 'next/navigation';
import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import WelcomeScreen from '@/components/blog/WelcomeScreen';
import Header from '@/components/blog/Header';
import SearchBar from '@/components/blog/SearchBar';
import type { BlogPost } from './types';
// import '@/styles/hamburgers.scss';

// This would typically come from a database or API
const blogPosts: BlogPost[] = [
  {
    id: '1',
    title: 'My First Blog Post',
    date: '2023-05-01',
    excerpt:
      "This is my very first blog post. I'm excited to share my thoughts with you!",
    imageUrl: '/room1.jpg?height=200&width=300',
  },
  {
    id: '2',
    title: 'Learning Next.js',
    date: '2023-05-15',
    excerpt:
      "I've been learning Next.js and I'm amazed by its capabilities. Here's what I've learned so far.",
    imageUrl: '/hotel_wine.jpg?height=200&width=300',
  },
  // Add more blog posts here
];

export default function Home() {
  const [filteredPosts, setFilteredPosts] = useState(blogPosts);

  // 遷移元がない、もしくは遷移元がblogより上であればWelcomeScreenを表示
  const searchParams = useSearchParams();
  let showWelcome = true;
  if (searchParams.get('showWelcome'))
    showWelcome = searchParams.get('showWelcome') === 'true';

  const [showWelcomeScreen, setShowWelcomeScreen] = useState(showWelcome);

  useEffect(() => {
    if (showWelcome) {
      // ユーザーが直接アクセスした場合（クエリなし）、WelcomeScreenは表示されない
      setShowWelcomeScreen(true);
    }
  }, [showWelcome]);

  useEffect(() => {
    // WelcomeScreenが表示中はスクロールを無効化
    document.body.style.overflow = 'hidden';

    // WelcomeScreenが消えた後にスクロールを有効化
    return () => {
      document.body.style.overflow = 'auto';
    };
  }, []);

  const handleGetStartedClick = () => {
    setShowWelcomeScreen(false);
    localStorage.setItem('hasVisited', 'true'); // 訪問フラグをローカルストレージに保存
  };

  const handleSearch = (date: string) => {
    const filtered = blogPosts.filter((post) => post.date >= date);
    setFilteredPosts(filtered);
  };

  React.useEffect(() => {
    // WelcomeScreenが表示中はスクロールを無効化
    document.body.style.overflow = 'hidden';

    // WelcomeScreenが消えた後にスクロールを有効化
    return () => {
      document.body.style.overflow = 'auto';
    };
  }, []);

  return (
    <main className="min-h-screen flex flex-col">
      {/* WelcomeScreenが表示されている場合のみ表示 */}
      {showWelcomeScreen && (
        <WelcomeScreen onGetStarted={handleGetStartedClick} />
      )}

      {/* アニメーション後にHeaderを表示 */}
      {!showWelcomeScreen && (
        <div className="min-h-screen bg-secondary-light">
          <Header />
          <main className="container mx-auto px-4 py-8">
            <h1 className="text-4xl font-bold mb-8 text-primary-dark">
              Welcome to My Blog
            </h1>
            <SearchBar onSearch={handleSearch} />
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-8">
              {filteredPosts.map((post) => (
                <Link
                  href={`/blog/post/${post.id}`}
                  key={post.id}
                  className="bg-white rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300"
                >
                  <Image
                    src={post.imageUrl || '/placeholder.svg'}
                    alt={post.title}
                    width={300}
                    height={200}
                    className="w-full h-48 object-cover"
                    priority={post.id === '1'} // idが'1'の場合のみ優先的にロード
                  />
                  <div className="p-4">
                    <h2 className="text-xl font-semibold mb-2 text-primary-dark">
                      {post.title}
                    </h2>
                    <p className="text-primary mb-2">{post.date}</p>
                    <p className="text-primary-light">{post.excerpt}</p>
                  </div>
                </Link>
              ))}
            </div>
          </main>
          <footer className="bg-primary text-secondary-light text-center py-4 mt-8">
            © 2025 My Personal Blog. All rights reserved.
          </footer>
        </div>
      )}
    </main>
  );
}
