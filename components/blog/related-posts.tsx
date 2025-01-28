"use client";

import Link from "next/link";
import { Card } from "@/components/ui/card";

interface RelatedPost {
  title: string;
  description: string;
  path: string;
  date: string;
}

export function RelatedPosts() {
  // This could be fetched from an API or passed as props
  const relatedPosts: RelatedPost[] = [
    {
      title: "Gaming to Coding",
      description: "From Gaming Marathons to Coding Sprints",
      path: "/blog/posts/gaming-to-coding",
      date: "January 29, 2025"
    },
    {
      title: "Building an AI-Powered Portfolio Platform",
      description: "Exploring the integration of AI features in a Next.js portfolio site",
      path: "/blog/posts/ai-portfolio-project",
      date: "March 26, 2024"
    },
    {
      title: "My Development Journey",
      description: "Reflecting on lessons learned in web development",
      path: "/blog/posts/my-development-journey",
      date: "January 15, 2024"
    }
  ];

  return (
    <div className="mt-16">
      <h2 className="text-2xl font-semibold mb-6">Related Posts</h2>
      <div className="grid gap-6 md:grid-cols-2">
        {relatedPosts.map((post) => (
          <Link key={post.path} href={post.path}>
            <Card className="p-6 hover:shadow-lg transition-shadow">
              <h3 className="font-semibold mb-2">{post.title}</h3>
              <p className="text-muted-foreground text-sm mb-2">{post.description}</p>
              <time className="text-sm text-muted-foreground">{post.date}</time>
            </Card>
          </Link>
        ))}
      </div>
    </div>
  );
}
