"use client";

import { useBookmarkStore } from "@/lib/store/bookmarks";
import Link from "next/link";

const posts = [
  {
    id: "ai-portfolio-project",
    title: "Building an AI-Powered Portfolio Platform with Next.js and OpenAI 🚀",
    date: "March 26, 2024",
    readTime: "10 min read",
  },
  {
    id: "my-development-journey",
    title: "Reflecting on My Journey: Lessons Learned in Web Development 🌟",
    date: "January 15, 2024",
    readTime: "8 min read",
  },
];

export default function BookmarksPage() {
  const { bookmarks } = useBookmarkStore();
  const bookmarkedPosts = posts.filter((post) => bookmarks.includes(post.id));

  return (
    <div className="container mx-auto px-4 md:px-6 py-12">
      <h1 className="text-4xl font-bold mb-8">Your Bookmarks</h1>
      {bookmarkedPosts.length === 0 ? (
        <p className="text-muted-foreground">
          You haven't bookmarked any posts yet.
        </p>
      ) : (
        <div className="grid gap-6">
          {bookmarkedPosts.map((post) => (
            <Link
              key={post.id}
              href={`/blog/posts/${post.id}`}
              className="block p-6 rounded-lg border hover:border-foreground transition-colors"
            >
              <h2 className="text-2xl font-semibold mb-2">{post.title}</h2>
              <div className="text-muted-foreground">
                <time>{post.date}</time> • {post.readTime}
              </div>
            </Link>
          ))}
        </div>
      )}
    </div>
  );
}
