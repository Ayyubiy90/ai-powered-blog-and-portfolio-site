import { Button } from "../components/ui/button"; // Adjusted import path
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "../components/ui/card"; // Adjusted import path
import { Brain, MessageSquare, Sparkles, Github, Globe } from "lucide-react"; // Added icons
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

      <section className="w-full py-12 md:py-24 lg:py-32 mb-8"> {/* Added mb-8 for margin bottom */}
        <div className="container px-4 md:px-6">
          <h2 className="text-2xl font-bold mb-4">Recent Projects</h2> {/* Added mb-4 for margin bottom */}
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {projectsData.slice(0, 3).map((project, index) => (
              <Card key={index} className="flex flex-col p-6 hover:shadow-lg transition-shadow">
                <CardHeader>
                  <CardTitle>{project.title}</CardTitle>
                  <CardDescription>{project.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <Link href={project.github}>
                    <Button variant="outline" className="mt-2 mr-2"> {/* Added margin right */}
                      <Github className="mr-2 h-4 w-4" /> View Code
                    </Button>
                  </Link>
                  <Link href={project.live}>
                    <Button variant="outline" className="mt-2"> {/* No margin needed here */}
                      <Globe className="mr-2 h-4 w-4" /> Live Demo
                    </Button>
                  </Link>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="w-full py-12 md:py-24 lg:py-32 bg-muted mb-8"> {/* Added mb-8 for margin bottom */}
        <div className="container px-4 md:px-6">
          <h2 className="text-2xl font-bold mb-4">Recent Blog Posts</h2> {/* Added mb-4 for margin bottom */}
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {blogData.slice(0, 2).map((post, index) => (
              <Card key={index} className="flex flex-col p-6 hover:shadow-lg transition-shadow">
                <CardHeader>
                  <CardTitle>{post.title}</CardTitle>
                  <CardDescription>{post.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <Link href={`/blog/posts/${post.slug}`}>
                    <Button variant="outline" className="mt-2">Read More</Button> {/* Styled button */}
                  </Link>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
