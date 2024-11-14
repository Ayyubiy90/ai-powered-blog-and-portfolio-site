// Importing the Button component from the UI library
import { Button } from '@/components/ui/button';

// Importing the Card component from the UI library
import { Card } from '@/components/ui/card';

// Importing icons from the lucide-react library for use in the cards
import { Brain, MessageSquare, Sparkles } from 'lucide-react';

// Importing the Link component from Next.js for client-side navigation
import Link from 'next/link';

// Defining the Home component as the default export
export default function Home() {
  return (
    // Main container for the home page, using flexbox for layout
    <div className="flex min-h-[calc(100vh-3.5rem)] flex-col">
      {/* First section of the home page */}
      <section className="w-full py-12 md:py-24 lg:py-32 xl:py-48">
        <div className="container px-4 md:px-6">
          {/* Centering content with flexbox and adding spacing */}
          <div className="flex flex-col items-center space-y-4 text-center">
            <div className="space-y-2">
              {/* Main heading of the section */}
              <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl/none">
                Welcome to My AI-Powered Portfolio
              </h1>
              {/* Description paragraph below the heading */}
              <p className="mx-auto max-w-[700px] text-gray-500 md:text-xl dark:text-gray-400">
                Explore my projects, read my blog posts, and interact with an AI assistant to discover more about my work.
              </p>
            </div>
            {/* Container for action buttons */}
            <div className="space-x-4">
              {/* Link to the chat page with a button */}
              <Link href="/chat">
                <Button className="px-8">Chat with AI</Button>
              </Link>
              {/* Link to the projects page with an outlined button */}
              <Link href="/projects">
                <Button variant="outline" className="px-8">View Projects</Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Second section of the home page with a muted background */}
      <section className="w-full py-12 md:py-24 lg:py-32 bg-muted">
        <div className="container px-4 md:px-6">
          {/* Grid layout for the cards showcasing different features */}
          <div className="grid gap-6 lg:grid-cols-3 lg:gap-12">
            {/* Card for the AI Assistant feature */}
            <Link href="/chat">
              <Card className="flex flex-col items-center space-y-4 p-6 hover:shadow-lg transition-shadow">
                <Brain className="h-12 w-12 text-primary" /> {/* Icon for AI Assistant */}
                <h3 className="text-xl font-bold">AI Assistant</h3> {/* Title for the card */}
                <p className="text-center text-gray-500 dark:text-gray-400">
                  Get personalized recommendations and answers about my work from an AI assistant.
                </p> {/* Description for the AI Assistant card */}
              </Card>
            </Link>
            {/* Card for the Technical Blog feature */}
            <Link href="/blog">
              <Card className="flex flex-col items-center space-y-4 p-6 hover:shadow-lg transition-shadow">
                <MessageSquare className="h-12 w-12 text-primary" /> {/* Icon for Technical Blog */}
                <h3 className="text-xl font-bold">Technical Blog</h3> {/* Title for the card */}
                <p className="text-center text-gray-500 dark:text-gray-400">
                  Deep dives into software development, AI, and technology trends.
                </p> {/* Description for the Technical Blog card */}
              </Card>
            </Link>
            {/* Card for the Featured Projects feature */}
            <Link href="/projects">
              <Card className="flex flex-col items-center space-y-4 p-6 hover:shadow-lg transition-shadow">
                <Sparkles className="h-12 w-12 text-primary" /> {/* Icon for Featured Projects */}
                <h3 className="text-xl font-bold">Featured Projects</h3> {/* Title for the card */}
                <p className="text-center text-gray-500 dark:text-gray-400">
                  Showcase of my best work and technical achievements.
                </p> {/* Description for the Featured Projects card */}
              </Card>
            </Link>
          </div>
        </div>
      </section>
    </ div>
  );
}