import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Github, Globe } from "lucide-react";
import Link from "next/link";
import { Button } from "@/components/ui/button";

const projects = [
  {
    title: "AI Chat Assistant",
    description: "A sophisticated chatbot powered by machine learning that provides personalized responses.",
    tech: ["React", "TypeScript", "TensorFlow.js"],
    github: "https://github.com/yourusername/ai-chat",
    live: "https://ai-chat-demo.com",
  },
  {
    title: "Smart Task Manager",
    description: "An intelligent task management system that uses AI to prioritize and organize tasks.",
    tech: ["Next.js", "Python", "PostgreSQL"],
    github: "https://github.com/yourusername/smart-tasks",
    live: "https://smart-tasks-demo.com",
  },
  {
    title: "Data Visualization Dashboard",
    description: "Interactive dashboard for visualizing complex datasets with real-time updates.",
    tech: ["D3.js", "React", "Node.js"],
    github: "https://github.com/yourusername/data-viz",
    live: "https://data-viz-demo.com",
  },
];

export default function ProjectsPage() {
  return (
    <div className="container mx-auto px-4 md:px-6 lg:px-8 py-12">
      <div className="max-w-6xl mx-auto">
        <div className="space-y-4 mb-8">
          <h1 className="text-4xl font-bold">Projects</h1>
          <p className="text-muted-foreground text-lg">
            A collection of my recent work and technical projects.
          </p>
        </div>
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {projects.map((project, index) => (
            <Card key={index} className="flex flex-col">
              <CardHeader>
                <CardTitle>{project.title}</CardTitle>
                <CardDescription>{project.description}</CardDescription>
              </CardHeader>
              <CardContent className="flex-1">
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tech.map((tech) => (
                    <span
                      key={tech}
                      className="px-2 py-1 bg-secondary text-secondary-foreground rounded-md text-sm"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                <div className="flex gap-4">
                  <Button variant="outline" size="sm" asChild>
                    <Link href={project.github}>
                      <Github className="mr-2 h-4 w-4" />
                      Code
                    </Link>
                  </Button>
                  <Button variant="outline" size="sm" asChild>
                    <Link href={project.live}>
                      <Globe className="mr-2 h-4 w-4" />
                      Demo
                    </Link>
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
}