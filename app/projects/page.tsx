import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Github, Globe } from "lucide-react";
import Link from "next/link";
import { Button } from "@/components/ui/button";

// Array of project objects containing details about each project
const projects = [
  {
    title: "Data Visualization Dashboard",
    description:
      "A modern, interactive dashboard built with React, TypeScript, and Recharts for analyzing and visualizing data in real-time. Features a responsive design, dark mode support, and interactive charts.",
    tech: ["React", "TypeScript", "Tailwind CSS", "Recharts", "Lucide React", "Regression.js",],
    github: "https://github.com/Ayyubiy90/data-visualization-dashboard",
    live: "https://data-visualization-dashboard-drab.vercel.app/",
  },
  {
    title: "Modern Portfolio Website",
    description:
      "A beautiful, responsive portfolio website built with React, TypeScript, and Tailwind CSS. Features dark mode, smooth animations, and a modern design.",
    tech: ["React", "TypeScript", "Tailwind CSS", "Framer Motion", "Lucide icons", "Vite",],
    github: "https://github.com/Ayyubiy90/siphome",
    live: "https://siphome-chinxas-projects.vercel.app/",
  },
  {
    title: "Personal Budget Tracker", // Title of the project
    description:
      "The Personal Budget Tracker is a user-friendly web app that helps you manage your finances by tracking income and expenses with secure authentication and interactive visual insights.", // Brief description of the project
    tech: [
      "React",
      "Typescript",
      "Tailwind CSS",
      "Firebase",
      "Recharts",
      "React Hook Form",
      "Currency.js",
    ], // Technologies used in the project
    github: "https://github.com/Ayyubiy90/budget-tracker", // GitHub repository link
    live: "https://budget-tracker-ashen.vercel.app/", // Live demo link
  },
  {
    title: "Modern Dashboard",
    description:
      "A highly personalized, interactive dashboard that demonstrates your ability to integrate multiple APIs, manage complex data flows, and create a clean, user-friendly interface.",
    tech: [
      "TypeScript",
      "JavaScript",
      "Tailwind CSS",
      "CSS",
      "Zustand",
      "Hello Pangea DND",
      "React Hot Toast",
      "React Error Boundary",
    ],
    github:
      "https://github.com/Ayyubiy90/personalized-dashboard-with-API-integrations",
    live: "https://personalized-dashboard-with-api-integrations.vercel.app/",
  },
  {
    title: "ModernStore - React E-commerce Platform",
    description:
      "A fully functional e-commerce store with a modern, polished design and engaging animations.",
    tech: [
      "React",
      "TypeScript",
      "Tailwind CSS",
      "CSS",
      "Zustand",
      "Lucide React",
      "Stripe",
      "Framer motion",
    ],
    github: "https://github.com/Ayyubiy90/modern-e-commerce-store",
    live: "https://modern-e-commerce-store.vercel.app/",
  },
  {
    title: "Siphome Smart Home System",
    description:
      "This project aims to revolutionize how we interact with our homes by providing advanced smart home solutions.",
    tech: ["React", "JavaScript", "HTML", "CSS"],
    github: "https://github.com/Ayyubiy90/siphome",
    live: "https://siphome-chinxas-projects.vercel.app/",
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
                      className="px-2 py-1 bg-secondary text-secondary-foreground rounded-md text-sm">
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
