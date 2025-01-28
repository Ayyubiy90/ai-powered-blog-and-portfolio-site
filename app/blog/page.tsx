"use client";

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Search } from "@/components/ui/search";
import { Calendar, Mail } from "lucide-react";
import Link from "next/link";
import { useState, useEffect } from "react";
import { LanguageSelector } from "@/components/ui/language-selector";
import { translateText } from "@/lib/translation";

const posts = [
  {
    title: "From Gaming Marathons to Coding Sprints",
    description:
      "How Your Controller Skills Can Level Up Your Programming Game.",
    date: "2025-01-28",
    readTime: "5 min read",
    slug: "gaming-to-coding",
  },
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
  const [searchQuery, setSearchQuery] = useState("");
  const [responseMessage, setResponseMessage] = useState("");
  const [currentLanguage, setCurrentLanguage] = useState("en");
  const [translatedPosts, setTranslatedPosts] = useState(posts);

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

  const filteredPosts = posts.filter(
    (post) =>
      post.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      post.description.toLowerCase().includes(searchQuery.toLowerCase())
  );

  useEffect(() => {
    async function translatePosts() {
      if (currentLanguage === "en") {
        setTranslatedPosts(posts);
        return;
      }

      const translated = await Promise.all(
        posts.map(async (post) => ({
          ...post,
          title: await translateText(post.title, currentLanguage),
          description: await translateText(post.description, currentLanguage),
        }))
      );
      setTranslatedPosts(translated);
    }

    translatePosts();
  }, [currentLanguage]);

  return (
    <div className="container mx-auto px-4 md:px-6 lg:px-8 py-12">
      <div className="max-w-6xl mx-auto">
        <div className="space-y-4 mb-8">
          <div className="flex justify-between items-center">
            <h1 className="text-4xl font-bold">Blog</h1>
            <LanguageSelector
              currentLanguage={currentLanguage}
              onLanguageChange={setCurrentLanguage}
            />
          </div>
          <p className="text-muted-foreground text-lg">
            Project stories, coding insights, and personal reflections on
            software development and AI.
          </p>
          <div className="max-w-md">
            <Search
              value={searchQuery}
              onChange={setSearchQuery}
              placeholder="Search posts..."
            />
          </div>
        </div>
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {filteredPosts.map((post, index) => (
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
            className="flex flex-col md:flex-row md:space-x-4">
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter your email"
              required
              className="border border-gray-300 rounded-md p-2 flex-1 w-full md:w-auto"
            />
            <button
              type="submit"
              className="mt-2 md:mt-0 bg-black text-white rounded-md p-2 hover:bg-white hover:text-black transition flex items-center max-w-xs w-full md:w-auto">
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
