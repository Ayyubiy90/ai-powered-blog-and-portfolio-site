"use client";

import { Twitter, Facebook, Linkedin, Instagram } from "lucide-react";

export default function AIPortfolioPost() {
  const sharePost = (platform: string) => {
    const url = window.location.href;
    const text = "Check out this blog post!";

    let shareUrl = "";
    switch (platform) {
      case "twitter":
        shareUrl = `https://twitter.com/intent/tweet?url=${encodeURIComponent(
          url
        )}&text=${encodeURIComponent(text)}`;
        break;
      case "facebook":
        shareUrl = `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(
          url
        )}`;
        break;
      case "linkedin":
        shareUrl = `https://www.linkedin.com/shareArticle?mini=true&url=${encodeURIComponent(
          url
        )}&title=${encodeURIComponent(text)}`;
        break;
      default:
        return;
    }

    window.open(shareUrl, "_blank");
  };

  return (
    <div className="container mx-auto px-4 md:px-6 py-12">
      <article className="prose prose-lg dark:prose-invert max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold mb-6">
          Building an AI-Powered Portfolio Platform with Next.js and OpenAI 🚀
        </h1>

        <div className="text-muted-foreground mb-8">
          <time>March 26, 2024</time> • 10 min read
        </div>

        {/* Share Buttons */}
        <div className="flex space-x-4 mb-8">
          <button
            onClick={() => sharePost("twitter")}
            className="p-2 rounded hover:bg-gray-200 dark:hover:bg-gray-700"
            aria-label="Share on Twitter">
            <Twitter className="h-6 w-6 text-black dark:text-white" />
          </button>
          <button
            onClick={() => sharePost("facebook")}
            className="p-2 rounded hover:bg-gray-200 dark:hover:bg-gray-700"
            aria-label="Share on Facebook">
            <Facebook className="h-6 w-6 text-black dark:text-white" />
          </button>
          <button
            onClick={() => sharePost("linkedin")}
            className="p-2 rounded hover:bg-gray-200 dark:hover:bg-gray-700"
            aria-label="Share on LinkedIn">
            <Linkedin className="h-6 w-6 text-black dark:text-white" />
          </button>
        </div>

        <h2 className="text-2xl font-semibold mb-4">Project Overview 🎯</h2>

        <p>
          In the ever-evolving tech landscape, creating an impressive and
          engaging portfolio can make all the difference. Recently, I embarked
          on a project to build an AI-powered portfolio and blog platform using
          Next.js, TypeScript, Tailwind CSS, and the OpenAI API. Here’s a
          breakdown of how I approached the project and the lessons learned
          along the way.
        </p>

        <br />

        <p>
          The aim was to develop a portfolio site that not only showcased my
          projects and blog posts but also featured an interactive AI assistant
          capable of answering user queries about my work and suggesting
          relevant blog content. This added layer of functionality transformed
          the portfolio into a dynamic and engaging user experience.
        </p>

        <br />

        <h2 className="text-2xl font-semibold mb-4">
          Tech Stack Highlights 🛠️
        </h2>

        <ul className="list-disc pl-5 mb-6">
          <li>
            <strong>Next.js:</strong> Chosen for its seamless server-side
            rendering and static site generation, crucial for fast performance
            and SEO optimization.
          </li>
          <li>
            <strong>TypeScript:</strong> Ensured type safety throughout the
            development process, minimizing errors and enhancing code
            maintainability.
          </li>
          <li>
            <strong>Tailwind CSS:</strong> Utilized for styling to create a
            modular and easily manageable design system.
          </li>
          <li>
            <strong>OpenAI API:</strong> Integrated to power the AI assistant,
            enabling natural language interactions and personalized content
            recommendations.
          </li>
        </ul>

        <br />

        <h2 className="text-2xl font-semibold mb-4">
          Key Features Implemented ✨
        </h2>

        <ul className="list-disc pl-5 mb-6">
          <li>
            AI-Powered Chat Interface: Integrated a chat feature where visitors
            can ask questions about my projects, technologies used, or even get
            blog suggestions.
          </li>
          <li>
            Dynamic Blog Recommendations: Leveraged the AI to analyze user input
            and suggest blog posts relevant to their interests.
          </li>
          <li>
            Responsive and Interactive Design: Ensured the platform is fully
            responsive with interactive UI elements to enhance user engagement.
          </li>
        </ul>

        <br />

        <h2 className="text-2xl font-semibold mb-4">Challenges Faced ⚠️</h2>

        <p className="mb-6">
          One significant challenge was ensuring the AI’s responses were both
          relevant and accurate without overwhelming the API usage limits. To
          tackle this, I implemented optimized query handling and a fallback
          response system to maintain a smooth user experience even during
          high-traffic periods.
        </p>

        <br />

        <h2 className="text-2xl font-semibold mb-4">What I Learned 📚</h2>

        <p className="mb-6">
          Building this platform deepened my understanding of integrating
          third-party APIs into web applications and highlighted the importance
          of user-centric design. Additionally, balancing complex AI
          capabilities with user expectations taught me the value of incremental
          testing and iterative improvements.
        </p>

        <br />

        <h2 className="text-2xl font-semibold mb-4">Final Thoughts 💭</h2>

        <p className="mb-6">
          This project not only enriched my portfolio but also demonstrated how
          AI can elevate user interactions. If you’re interested in creating
          something similar, I recommend focusing on a clear user flow, thorough
          API documentation review, and testing extensively to iron out
          potential issues early.
        </p>
        <p className="mb-6">
          Feel free to explore the{" "}
          <a
            href="https://abdullah-ai-portfolio-blog.vercel.app/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-500 hover:text-blue-700">
            live demo
          </a>{" "}
          or check out the{" "}
          <a
            href="https://github.com/Ayyubiy90/ai-powered-blog-and-portfolio-site"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-500 hover:text-blue-700">
            code on GitHub
          </a>
          .
        </p>

        <div className="border-t pt-8 mt-12">
          <p className="text-muted-foreground">
            If you&apos;re interested in learning more about this project or
            have any questions, feel free to reach out or check out the{" "}
            <a
              href="https://github.com/Ayyubiy90/ai-powered-blog-and-portfolio-site"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-500 hover:text-blue-700">
              source code on GitHub!
            </a>
          </p>
        </div>

        {/* Follow Buttons */}
        <div className="flex justify-center space-x-4 mt-12">
          <a
            href="https://www.linkedin.com/in/abdullah-a-2940b7260"
            target="_blank"
            rel="noopener noreferrer"
            className="p-2 rounded hover:bg-gray-200 dark:hover:bg-gray-700"
            aria-label="Follow on LinkedIn">
            <Linkedin className="h-10 w-10 text-black dark:text-white transition-transform transform hover:scale-110" />
          </a>
          <a
            href="https://www.instagram.com/ayyubiy_10"
            target="_blank"
            rel="noopener noreferrer"
            className="p-2 rounded hover:bg-gray-200 dark:hover:bg-gray-700"
            aria-label="Follow on Instagram">
            <Instagram className="h-10 w-10 text-black dark:text-white transition-transform transform hover:scale-110" />
          </a>
          <a
            href="https://www.facebook.com/Ayyubiy90"
            target="_blank"
            rel="noopener noreferrer"
            className="p-2 rounded hover:bg-gray-200 dark:hover:bg-gray-700"
            aria-label="Follow on Facebook">
            <Facebook className="h-10 w -10 text-black dark:text-white transition-transform transform hover:scale-110" />
          </a>
          <a
            href="https://twitter.com/ayyubiy10"
            target="_blank"
            rel="noopener noreferrer"
            className="p-2 rounded hover:bg-gray-200 dark:hover:bg-gray-700"
            aria-label="Follow on Twitter">
            <Twitter className="h-10 w-10 text-black dark:text-white transition-transform transform hover:scale-110" />
          </a>
        </div>
      </article>
    </div>
  );
}
