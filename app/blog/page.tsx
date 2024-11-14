// Importing necessary components from the UI library and Next.js
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"; // UI components for displaying blog posts
import { Calendar } from "lucide-react"; // Calendar icon from the lucide-react library
import Link from "next/link"; // Link component from Next.js for client-side navigation

// Array of blog posts, each containing relevant information
const posts = [
  {
    title: "Building an AI-Powered Chat Assistant", // Title of the blog post
    description: "Learn how to create a sophisticated chatbot using modern AI technologies.", // Brief description of the post
    date: "2024-01-15", // Publication date of the post
    readTime: "8 min read", // Estimated reading time
    slug: "building-ai-chat-assistant", // Unique identifier for the post used in the URL
  },
  {
    title: "The Future of Web Development", // Title of the blog post
    description: "Exploring upcoming trends and technologies in web development.", // Brief description of the post
    date: "2024-01-10", // Publication date of the post
    readTime: "6 min read", // Estimated reading time
    slug: "future-web-development", // Unique identifier for the post used in the URL
  },
  {
    title: "Optimizing React Applications", // Title of the blog post
    description: "Best practices and techniques for improving React app performance.", // Brief description of the post
    date: "2024-01-05", // Publication date of the post
    readTime: "10 min read", // Estimated reading time
    slug: "optimizing-react-applications", // Unique identifier for the post used in the URL
  },
];

// Defining the BlogPage component as the default export
export default function BlogPage() {
  return (
    // Main container for the blog page with responsive padding
    <div className="container mx-auto px-4 md:px-6 lg:px-8 py-12">
      <div className="max-w-6xl mx-auto">
        {/* Header section for the blog page */}
        <div className="space-y-4 mb-8">
          <h1 className="text-4xl font-bold">Blog</h1> {/* Main title of the blog page */}
          <p className="text-muted-foreground text-lg">
            Thoughts, tutorials, and insights about software development and AI. {/* Subtitle or description */}
          </p>
        </div>
        {/* Grid layout for displaying blog posts */}
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {/* Mapping over the posts array to create a card for each post */}
          {posts.map((post, index) => (
            // Link to the individual blog post page using the slug
            <Link key={index} href={`/blog/${post.slug}`}>
              {/* Card component for displaying post details */}
              <Card className="h-full hover:shadow-lg transition-shadow">
                <CardHeader>
                  <CardTitle>{post.title}</CardTitle> {/* Title of the blog post */}
                  <CardDescription>{post.description}</CardDescription> {/* Description of the blog post */}
                </CardHeader>
                <CardContent>
                  {/* Footer section with date and read time */}
                  <div className="flex items-center text-sm text-muted-foreground">
                    <Calendar className="mr-2 h-4 w-4" /> {/* Calendar icon */}
                    <span>{new Date(post.date).toLocaleDateString()}</span> {/* Formatted publication date */}
                    <span className="mx-2">•</span> {/* Separator */}
                    <span>{post.readTime}</span> {/* Estimated reading time */}
                  </div>
                </CardContent>
              </Card>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}