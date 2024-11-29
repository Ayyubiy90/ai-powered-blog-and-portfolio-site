import { Button } from "../components/ui/button"; // Adjusted import path
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
} from "../components/ui/card"; // Adjusted import path
import { Brain, MessageSquare, Sparkles } from "lucide-react";
import Link from "next/link";
import { projectsData, blogData } from "../lib/chat-data"; // Adjusted import path

export default function Home() {
  return (
    <div className="flex min-h-[calc(100vh-3.5rem)] flex-col">
      <section className="w-full py-12 md:py-24 lg:py-32 xl:py-48">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center space-y-4 text-center">
            <div className="space-y-2">
              <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl/none">
                Welcome to Abdullah&apos;s AI-Powered Portfolio
              </h1>
              <p className="mx-auto max-w-[700px] text-gray-500 md:text-xl dark:text-gray-400">
                Explore my projects, read my blog posts, and engage with an AI
                assistant for deeper insights into my work and expertise.
              </p>
            </div>
            <div className="space-x-4">
              <Link href="/chat">
                <Button className="px-8">Chat with AI</Button>
              </Link>
              <Link href="/projects">
                <Button variant="outline" className="px-8">
                  View Projects
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="w-full py-12 md:py-24 lg:py-32">
        <div className="container px-4 md:px-6">
          <h2 className="text-2xl font-bold">Recent Projects</h2>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {projectsData.slice(0, 3).map(
              (
                project: {
                  title: string;
                  description: string;
                  tech: string[];
                  github: string;
                  live: string;
                },
                index: number
              ) => (
                <Card
                  key={index}
                  className="flex flex-col p-6 hover:shadow-lg transition-shadow">
                  <CardHeader>
                    <CardTitle>{project.title}</CardTitle>
                    <CardDescription>{project.description}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <Link href={project.github}>View Code</Link>
                    <Link href={project.live}>Live Demo</Link>
                  </CardContent>
                </Card>
              )
            )}
          </div>
        </div>
      </section>

      <section className="w-full py-12 md:py-24 lg:py-32 bg-muted">
        <div className="container px-4 md:px-6">
          <h2 className="text-2xl font-bold">Recent Blog Posts</h2>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {blogData
              .slice(0, 2)
              .map(
                (
                  post: { title: string; description: string; slug: string },
                  index: number
                ) => (
                  <Card
                    key={index}
                    className="flex flex-col p-6 hover:shadow-lg transition-shadow">
                    <CardHeader>
                      <CardTitle>{post.title}</CardTitle>
                      <CardDescription>{post.description}</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <Link href={`/blog/posts/${post.slug}`}>Read More</Link>
                    </CardContent>
                  </Card>
                )
              )}
          </div>
        </div>
      </section>
    </div>
  );
}
