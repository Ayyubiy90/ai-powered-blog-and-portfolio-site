"use client";

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Calendar, Mail } from "lucide-react";
import Link from "next/link";
import { useState } from "react";

const posts = [
  {
    title: "Building an AI-Powered Portfolio & Blog Platform",
    description:
      "A deep dive into creating a modern portfolio with AI capabilities.",
    date: "2024-11-17",
    readTime: "10 min read",
    slug: "ai-portfolio-project",
  },
  {
    title: "Reflecting on My Journey: Lessons Learned in Web Development",
    description:
      "A reflection on my journey as a developer, sharing key experiences and lessons learned.",
    date: "2024-01-15",
    readTime: "8 min read",
    slug: "my-development-journey",
  },
];

export default function BlogPage() {
  const [email, setEmail] = useState("");
  const [responseMessage, setResponseMessage] = useState("");

  const handleSubscription = async (event: { preventDefault: () => void }) => {
    event.preventDefault();

    try {
      const response = await fetch("/api/subscribe", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email }),
      });

      const result = await response.json();

      if (response.ok) {
        setResponseMessage(result.message);
        setEmail("");
      } else {
        setResponseMessage(result.message);
      }
    } catch (error) {
      console.error("Error:", error);
      setResponseMessage("An error occurred. Please try again.");
    }
  };

  return (
    <div className="container mx-auto px-4 md:px-6 lg:px-8 py-12">
      <div className="max-w-6xl mx-auto">
        <div className="space-y-4 mb-8">
          <h1 className="text-4xl font-bold">Blog</h1>
          <p className="text-muted-foreground text-lg">
            Project stories, coding insights, and personal reflections on
            software development and AI.
          </p>
        </div>
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {posts.map((post, index) => (
            <Link key={index} href={`/blog/posts/${post.slug}`}>
              <Card className="h-full hover:shadow-lg transition-shadow">
                <CardHeader>
                  <CardTitle>{post.title}</CardTitle>
                  <CardDescription>{post.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex items-center text-sm text-muted-foreground">
                    <Calendar className="mr-2 h-4 w-4" />
                    <span>{new Date(post.date).toLocaleDateString()}</span>
                    <span className="mx-2">•</span>
                    <span>{post.readTime}</span>
                  </div>
                </CardContent>
              </Card>
            </Link>
          ))}
        </div>

        {/* Subscription Form */}
        <div className="mt-12">
          <h2 className="text-2xl font-bold mb-4">
            Subscribe to Our Newsletter
          </h2>
          <form
            id="subscription-form"
            onSubmit={handleSubscription}
            className="flex md:space-x-4">
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter your email"
              required
              className="border border-gray-300 rounded-md p-2 flex-1 md:w-auto"
            />
            <button
              type="submit"
              className="bg-black text-white rounded-md p-2 hover:bg-white hover:text-black transition flex items-center md:w-auto">
              <Mail className="mr-2 h-4 w-4" />
              Subscribe
            </button>
          </form>
          {responseMessage && (
            <p className="mt-4 text-green-600">{responseMessage}</p>
          )}
        </div>
      </div>
    </div>
  );
}
