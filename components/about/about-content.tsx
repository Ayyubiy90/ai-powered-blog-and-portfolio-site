"use client";

import { Card, CardContent } from "@/components/ui/card";
import {
  Github,
  Linkedin,
  Mail,
  Twitter,
  FileText,
  Download,
} from "lucide-react";
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
          Frontend Developer with 3 years of experience building scalable web applications, specializing in the React ecosystem and modern web technologies. Proficient in frontend development with supporting experience in backend technologies for full-stack projects.
          </p>
        </div>

        <Card className="mb-8">
          <CardContent className="pt-6">
            <div className="flex flex-col sm:flex-row justify-between items-start gap-4 mb-6">
              <div className="space-y-4">
                <p>
                  I`m a Frontend Developer from Lagos, Nigeria, with a growing
                  interest in backend development. Self-taught for 2 years, with
                  an additional year of project experience, I`m passionate about
                  creating responsive and intuitive web applications.
                </p>
                <p>
                  Currently pursuing a bachelor`s degree in Computer Science,
                  I`m open to remote full-time, part-time, or contract roles.
                  Outside of coding, I`m an avid tech enthusiast, love exploring
                  new gadgets, and enjoy gaming.
                </p>
              </div>
              <Button
                variant="outline"
                className="flex items-center gap-2 whitespace-nowrap"
                asChild>
                <Link href="/Abdullah Abdurazaq.pdf" target="_blank">
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
            <Link href="https://github.com/Ayyubiy90">
              <Github className="mr-2 h-4 w-4" />
              GitHub
            </Link>
          </Button>
          <Button variant="outline" asChild>
            <Link href="https://www.linkedin.com/in/abdullah-a-2940b7260">
              <Linkedin className="mr-2 h-4 w-4" />
              LinkedIn
            </Link>
          </Button>
          <Button variant="outline" asChild>
            <Link href="https://twitter.com/ayyubiy10">
              <Twitter className="mr-2 h-4 w-4" />
              Twitter
            </Link>
          </Button>
          <Button variant="outline" asChild>
            <Link href="mailto:ayyubiy67@gmail.com">
              <Mail className="mr-2 h-4 w-4" />
              Email
            </Link>
          </Button>
        </div>
      </div>
    </div>
  );
}
