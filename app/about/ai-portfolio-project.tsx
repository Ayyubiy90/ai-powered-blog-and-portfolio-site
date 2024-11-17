import { Card } from "@/components/ui/card";
import Head from "next/head";
import Image from "next/image";
import { FacebookShareButton, TwitterShareButton } from "react-share"; // Importing social share buttons

export default function AIPortfolioPost() {
  return (
    <>
      <Head>
        <title>Building an AI-Powered Portfolio & Blog Platform</title>
        <meta
          name="description"
          content="A deep dive into creating a modern portfolio with AI capabilities."
        />
        <meta name="keywords" content="AI, Portfolio, Blog, Web Development" />
      </Head>
      <div className="container mx-auto px-4 md:px-6 py-12">
        <article className="prose prose-lg dark:prose-invert max-w-4xl mx-auto">
          <h1 className="text-4xl font-bold mb-6">
            Building an AI-Powered Portfolio & Blog Platform 🚀
          </h1>

          <div className="text-muted-foreground mb-8">
            <time>March 26, 2024</time> • 10 min read
          </div>

          {/* Example of an image related to the project */}
          <Image
            src="/path/to/your/image.jpg" // Replace with your image path
            alt="AI-Powered Portfolio Screenshot"
            width={800}
            height={450}
            className="mb-8 rounded-lg"
          />

          <Card className="p-6 mb-8">
            <h2 className="text-2xl font-semibold mb-4">Project Overview 🎯</h2>
            <p>
              I recently developed a modern portfolio and blog platform that
              combines traditional web development with AI capabilities. This
              project showcases not just my work, but also demonstrates the
              practical application of AI in web applications.
            </p>
          </Card>

          <h2 className="text-2xl font-semibold mt-8 mb-4">Key Features ✨</h2>
          <ul className="space-y-4 mb-8">
            <li>
              <strong>🤖 AI Chat Assistant</strong>
              <p>
                An intelligent chatbot that provides contextual responses about
                my skills, projects, and blog posts. Built with a custom
                response generation system that understands various types of
                queries and provides relevant information from the portfolio
                data.
              </p>
            </li>
            <li>
              <strong>💼 Dynamic Project Showcase</strong>
              <p>
                A beautifully designed gallery of projects with detailed
                information about technologies used and live demos. Each project
                card provides quick access to both the source code and live
                versions.
              </p>
            </li>
            <li>
              <strong>📝 Technical Blog</strong>
              <p>
                A platform for sharing in-depth technical articles about
                software development, AI, and technology trends. The blog
                section features a clean, readable layout optimized for
                technical content.
              </p>
            </li>
            <li>
              <strong>🎨 Modern Design System</strong>
              <p>Implemented using Tailwind CSS and shadcn/ui, featuring:</p>
              <ul className="list-disc ml-6 mt-2">
                <li>Dark/light mode with system preference detection</li>
                <li>Responsive design for all screen sizes</li>
                <li>Consistent typography and spacing</li>
                <li>Smooth animations and transitions</li>
              </ul>
            </li>
          </ul>

          <h2 className="text-2xl font-semibold mt-8 mb-4">
            Technical Implementation 🛠️
          </h2>
          <div className="space-y-4 mb-8">
            <h3 className="text-xl font-semibold">Frontend Stack</h3>
            <ul className="list-disc ml-6">
              <li>Next.js 13 with App Router</li>
              <li>React with TypeScript</li>
              <li>Tailwind CSS for styling</li>
              <li>shadcn/ui for UI components</li>
            </ul>

            <h3 className="text-xl font-semibold mt-6">AI Integration</h3>
            <p>The AI chat system is built with a modular architecture:</p>
            <ul className="list-disc ml-6">
              <li>Custom context management for portfolio data</li>{" "}
              <li>Intelligent query parsing and response generation</li>
              <li>Real-time response streaming</li>
              <li>Extensible data structure for easy updates</li>
            </ul>
          </div>

          <h2 className="text-2xl font-semibold mt-8 mb-4">
            Performance Optimizations ⚡
          </h2>
          <ul className="space-y-2 mb-8">
            <li>• Static page generation for optimal loading speed</li>
            <li>• Lazy loading of images and components</li>
            <li>• Efficient state management</li>
            <li>• Optimized asset delivery</li>
          </ul>

          <h2 className="text-2xl font-semibold mt-8 mb-4">
            Lessons Learned 📚
          </h2>
          <div className="space-y-4 mb-8">
            <p>Building this project provided valuable insights into:</p>
            <ul className="list-disc ml-6">
              <li>Integrating AI capabilities in web applications</li>
              <li>Building responsive and accessible user interfaces</li>
              <li>Managing complex state in React applications</li>
              <li>Implementing dark mode with system preferences</li>
            </ul>
          </div>

          <h2 className="text-2xl font-semibold mt-8 mb-4">
            Future Enhancements 🔮
          </h2>
          <ul className="list-disc ml-6 mb-8">
            <li>
              Integration with OpenAI&apos;s GPT for more advanced chat
              capabilities
            </li>
            <li>Real-time project updates and notifications</li>
            <li>Interactive code snippets in blog posts</li>
            <li>Advanced search functionality across all content</li>
          </ul>

          <div className="border-t pt-8 mt-12">
            <p className="text-muted-foreground">
              If you&apos;re interested in learning more about this project or
              have any questions, feel free to reach out or check out the source
              code on GitHub!
            </p>
          </div>

          {/* Social Sharing Buttons */}
          <div className="mt-8">
            <h3 className="text-xl font-semibold mb-4">Share this post:</h3>
            <div className="flex space-x-4">
              <FacebookShareButton url={window.location.href}>
                <button className="bg-blue-600 text-white px-4 py-2 rounded">
                  Share on Facebook
                </button>
              </FacebookShareButton>
              <TwitterShareButton url={window.location.href}>
                <button className="bg-blue-400 text-white px-4 py-2 rounded">
                  Share on Twitter
                </button>
              </TwitterShareButton>
            </div>
          </div>

          {/* Comments Section */}
          <div className="mt-12">
            <h3 className="text-xl font-semibold mb-4">Comments</h3>
            {/* You can integrate a comments service here, e.g., Disqus */}
            <p>Comments section will be implemented here.</p>
          </div>
        </article>
      </div>
    </>
  );
}
