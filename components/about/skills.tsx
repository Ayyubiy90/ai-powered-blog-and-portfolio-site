// Indicates that this file is a client-side component in a Next.js application
"use client";

// Importing Card and CardContent components from the ui/card module
import { Card, CardContent } from "@/components/ui/card";

// Importing various React Icons for skills and technologies
import {
  SiReact,
  SiVuedotjs,
  SiTypescript,
  SiAngular,
  SiSass,
  SiNodedotjs,
  SiExpress,
  SiJava,
  SiPhp,
  SiGit,
  SiTailwindcss,
} from "react-icons/si";

// Defining an object to store skills and technologies, categorized by frontend, backend, and tools
const skills = {
  Frontend: [
    // Frontend skills and technologies with their corresponding icons
    { name: "React/Next.js", Icon: SiReact },
    { name: "Vue.js", Icon: SiVuedotjs },
    { name: "TypeScript", Icon: SiTypescript },
    { name: "Angular", Icon: SiAngular },
    { name: "SCSS", Icon: SiSass },
  ],
  Backend: [
    // Backend skills and technologies with their corresponding icons
    { name: "Node.js", Icon: SiNodedotjs },
    { name: "Express", Icon: SiExpress },
    { name: "Java", Icon: SiJava },
    { name: "PHP", Icon: SiPhp },
  ],
  "Tools & Others": [
    // Tools and other skills and technologies with their corresponding icons
    { name: "Git", Icon: SiGit },
    { name: "Tailwind CSS", Icon: SiTailwindcss },
  ],
};

// Exporting the Skills component
export function Skills() {
  return (
    // Fragment to wrap the component's content
    <>
      // Heading for the skills section
      <h2 className="text-2xl font-bold mb-6">Skills & Technologies</h2>
      // Grid container to display the skills and technologies
      <div className="grid gap-6 md:grid-cols-3 mb-8">
        {
          // Mapping over the skills object to render each category
          Object.entries(skills).map(([category, items]) => (
            // Card component for each category
            <Card key={category} className="relative overflow-hidden">
              // Gradient top bar for the card
              <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-primary to-primary/50" />
              // Card content
              <CardContent className="pt-6">
                // Category heading
                <h3 className="text-lg font-semibold mb-4">{category}</h3>
                // List of skills and technologies in the category
                <ul className="space-y-4">
                  {
                    // Mapping over the items in the category to render each skill
                    items.map(({ name, Icon }) => (
                      // List item for each skill
                      <li key={name} className="flex items-center gap-3">
                        // Icon for the skill
                        <Icon className="h-5 w-5 text-primary" />
                        // Name of the skill
                        <span className="text-muted-foreground">{name}</span>
                      </li>
                    ))
                  }
                </ul>
              </CardContent>
            </Card>
          ))
        }
      </div>
    </>
  );
}
