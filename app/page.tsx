import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Brain, MessageSquare, Sparkles } from "lucide-react";
import Link from "next/link";

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

      <section className="w-full py-12 md:py-24 lg:py-32 bg-muted">
        <div className="container px-4 md:px-6">
          <div className="grid gap-6 lg:grid-cols-3 lg:gap-12">
            <Link href="/chat">
              <Card className="flex flex-col items-center space-y-4 p-6 hover:shadow-lg transition-shadow">
                <Brain className="h-12 w-12 text-primary" />
                <h3 className="text-xl font-bold">AI Assistant</h3>
                <p className="text-center text-gray-500 dark:text-gray-400">
                  Get personalized recommendations and answers about my work
                  from an AI assistant.
                </p>
              </Card>
            </Link>
            <Link href="/blog">
              <Card className="flex flex-col items-center space-y-4 p-6 hover:shadow-lg transition-shadow">
                <MessageSquare className="h-12 w-12 text-primary" />
                <h3 className="text-xl font-bold">Technical Blog</h3>
                <p className="text-center text-gray-500 dark:text-gray-400">
                  Deep dives into software development, AI, and technology
                  trends.
                </p>
              </Card>
            </Link>
            <Link href="/projects">
              <Card className="flex flex-col items-center space-y-4 p-6 hover:shadow-lg transition-shadow">
                <Sparkles className="h-12 w-12 text-primary" />
                <h3 className="text-xl font-bold">Featured Projects</h3>
                <p className="text-center text-gray-500 dark:text-gray-400">
                  Showcase of my best work and technical achievements.
                </p>
              </Card>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
