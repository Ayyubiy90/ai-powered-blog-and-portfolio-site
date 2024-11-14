"use client";

import { Card, CardContent } from "@/components/ui/card";
import { Github, Linkedin, Mail, Twitter, FileText, Download } from "lucide-react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Skills } from "./skills";

export default function AboutContent() {
  return (
    <div className="container mx-auto px-4 md:px-6 lg:px-8 py-12">
      <div className="max-w-3xl mx-auto">
        <div className="space-y-4 mb-8">
          <h1 className="text-4xl font-bold">About Me</h1>
          <p className="text-muted-foreground text-lg">
            Full-stack developer passionate about AI and modern web technologies.
          </p>
        </div>

        <Card className="mb-8">
          <CardContent className="pt-6">
            <div className="flex flex-col sm:flex-row justify-between items-start gap-4 mb-6">
              <div className="space-y-4">
                <p>
                  Hello! I'm a software developer with over 5 years of experience building web applications
                  and AI-powered solutions. I specialize in React, Next.js, and TypeScript, with a strong
                  focus on creating performant and user-friendly applications.
                </p>
                <p>
                  My journey in tech started with a Computer Science degree, followed by work at various
                  startups where I developed a passion for AI and machine learning. I love combining
                  traditional web development with cutting-edge AI technologies to create unique user
                  experiences.
                </p>
                <p>
                  When I'm not coding, you can find me writing technical blog posts, contributing to
                  open-source projects, or exploring new technologies.
                </p>
              </div>
              <Button variant="outline" className="flex items-center gap-2 whitespace-nowrap" asChild>
                <Link href="/cv.pdf" target="_blank">
                  <FileText className="h-4 w-4" />
                  <span className="hidden sm:inline">Download</span> CV
                  <Download className="h-4 w-4 ml-1" />
                </Link>
              </Button>
            </div>
          </CardContent>
        </Card>

        <Skills />

        <h2 className="text-2xl font-bold mb-4">Connect with Me</h2>
        <div className="flex flex-wrap gap-4">
          <Button variant="outline" asChild>
            <Link href="https://github.com/yourusername">
              <Github className="mr-2 h-4 w-4" />
              GitHub
            </Link>
          </Button>
          <Button variant="outline" asChild>
            <Link href="https://linkedin.com/in/yourusername">
              <Linkedin className="mr-2 h-4 w-4" />
              LinkedIn
            </Link>
          </Button>
          <Button variant="outline" asChild>
            <Link href="https://twitter.com/yourusername">
              <Twitter className="mr-2 h-4 w-4" />
              Twitter
            </Link>
          </Button>
          <Button variant="outline" asChild>
            <Link href="mailto:your.email@example.com">
              <Mail className="mr-2 h-4 w-4" />
              Email
            </Link>
          </Button>
        </div>
      </div>
    </div>
  );
}