// Importing necessary components from the UI library and icons from lucide-react
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"; // Card components for displaying project information
import { Github, Globe } from "lucide-react"; // Icons for GitHub and live demo links
import Link from "next/link"; // Link component for client-side navigation in Next.js
import { Button } from "@/components/ui/button"; // Button component for styled buttons

// Array of project objects containing details about each project
const projects = [
  {
    title: "AI Chat Assistant", // Title of the project
    description: "A sophisticated chatbot powered by machine learning that provides personalized responses.", // Brief description of the project
    tech: ["React", "TypeScript", "TensorFlow.js"], // Technologies used in the project
    github: "https://github.com/yourusername/ai-chat", // GitHub repository link
    live: "https://ai-chat-demo.com", // Live demo link
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

// Defining the ProjectsPage component as the default export
export default function ProjectsPage() {
  return (
    // Main container for the projects page with responsive padding
    <div className="container mx-auto px-4 md:px-6 lg:px-8 py-12">
      <div className="max-w-6xl mx-auto"> {/* Centering the content with a maximum width */}
        {/* Header section for the projects page */}
        <div className="space-y-4 mb-8">
          <h1 className="text-4xl font-bold">Projects</h1> {/* Main title of the projects page */}
          <p className="text-muted-foreground text-lg">
            A collection of my recent work and technical projects. {/* Subtitle or description */}
          </p>
        </div>
        {/* Grid layout for displaying project cards */}
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {/* Mapping over the projects array to create a card for each project */}
          {projects.map((project, index) => (
            <Card key={index} className="flex flex-col"> {/* Card component for each project */}
              <CardHeader>
                <CardTitle>{project.title}</CardTitle> {/* Displaying the project title */}
                <CardDescription>{project.description}</CardDescription> {/* Displaying the project description */}
              </CardHeader>
              <CardContent className="flex-1"> {/* Content area of the card */}
                <div className="flex flex-wrap gap-2 mb-4"> {/* Container for technology tags */}
                  {project.tech.map((tech) => (
                    <span
                      key={tech} // Unique key for each technology tag
                      className="px-2 py-1 bg-secondary text-secondary-foreground rounded-md text-sm" // Styling for technology tags
                    >
                      {tech} {/* Displaying the technology name */}
                    </span>
                  ))}
                </div>
                <div className="flex gap-4"> {/* Container for action buttons */}
                  <Button variant="outline" size="sm" asChild> {/* Button for GitHub link */}
                    <Link href={project.github}> {/* Link to the GitHub repository */}
                      <Github className="mr-2 h-4 w-4" /> {/* GitHub icon */}
                      Code {/* Button label */}
                    </Link>
                  </Button>
                  <Button variant="outline" size="sm" asChild> {/* Button for live demo link */}
                    <Link href={project.live}> {/* Link to the live demo */}
                      <Globe className="mr-2 h-4 w-4" /> {/* Globe icon */}
                      Demo {/* Button label */}
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