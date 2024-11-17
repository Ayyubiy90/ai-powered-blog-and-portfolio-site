import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Calendar } from "lucide-react";
import Link from "next/link";

const posts = [
  {
    title: "Building an AI-Powered Portfolio & Blog Platform",
    description:
      "A deep dive into creating a modern portfolio with AI capabilities.",
    date: "2024-03-26",
    readTime: "10 min read",
    slug: "ai-portfolio-project",
  },
  {
    title: "Building an AI-Powered Chat Assistant",
    description:
      "Learn how to create a sophisticated chatbot using modern AI technologies.",
    date: "2024-01-15",
    readTime: "8 min read",
    slug: "building-ai-chat-assistant",
  },
  {
    title: "The Future of Web Development",
    description:
      "Exploring upcoming trends and technologies in web development.",
    date: "2024-01-10",
    readTime: "6 min read",
    slug: "future-web-development",
  },
  {
    title: "Optimizing React Applications",
    description:
      "Best practices and techniques for improving React app performance.",
    date: "2024-01-05",
    readTime: "10 min read",
    slug: "optimizing-react-applications",
  },
];

export default function BlogPage() {
  return (
    <div className="container mx-auto px-4 md:px-6 lg:px-8 py-12">
      <div className="max-w-6xl mx-auto">
        <div className="space-y-4 mb-8">
          <h1 className="text-4xl font-bold">Blog</h1>
          <p className="text-muted-foreground text-lg">
            Thoughts, tutorials, and insights about software development and AI.
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
      </div>
    </div>
  );
}
