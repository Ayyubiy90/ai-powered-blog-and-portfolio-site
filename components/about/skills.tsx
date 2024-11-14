"use client";

import { Card, CardContent } from "@/components/ui/card";
import {
  SiReact, SiVuedotjs, SiTypescript, SiAngular, SiSass,
  SiNodedotjs, SiExpress, SiPhp,
  SiGit, SiTailwindcss, SiOpenai,
} from 'react-icons/si';

const skills = {
  Frontend: [
    { name: "React/Next.js", Icon: SiReact },
    { name: "Vue.js", Icon: SiVuedotjs },
    { name: "TypeScript", Icon: SiTypescript },
    { name: "Angular", Icon: SiAngular },
    { name: "SCSS", Icon: SiSass }
  ],
  Backend: [
    { name: "Node.js", Icon: SiNodedotjs },
    { name: "Express", Icon: SiExpress },
    { name: "PHP", Icon: SiPhp }
  ],
  "Tools & Others": [
    { name: "Git", Icon: SiGit },
    { name: "Tailwind CSS", Icon: SiTailwindcss },
    { name: "AI", Icon: SiOpenai }
  ]
};

export function Skills() {
  return (
    <>
      <h2 className="text-2xl font-bold mb-6">Skills & Technologies</h2>
      <div className="grid gap-6 md:grid-cols-3 mb-8">
        {Object.entries(skills).map(([category, items]) => (
          <Card key={category} className="relative overflow-hidden">
            <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-primary to-primary/50" />
            <CardContent className="pt-6">
              <h3 className="text-lg font-semibold mb-4">{category}</h3>
              <ul className="space-y-4">
                {items.map(({ name, Icon }) => (
                  <li key={name} className="flex items-center gap-3">
                    <Icon className="h-5 w-5 text-primary" />
                    <span className="text-muted-foreground">{name}</span>
                  </li>
                ))}
              </ul>
            </CardContent>
          </Card>
        ))}
      </div>
    </>
  );
}