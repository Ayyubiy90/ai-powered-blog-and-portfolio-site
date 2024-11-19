"use client";

import { Twitter, Facebook, Linkedin, Instagram } from "lucide-react";
import { RelatedPosts } from "@/components/blog/related-posts";

export default function MyDevelopmentJourneyPost() {
  const sharePost = (platform: string) => {
    const url = window.location.href;
    const text = "Check out my development journey!";

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
          Reflecting on My Journey: Lessons Learned in Web Development 🌟
        </h1>

        <div className="text-muted-foreground mb-8">
          <time>January 15, 2024</time> • 8 min read
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

        <h2 className="text-2xl font-semibold mb-4">Introduction 🚀</h2>

        <p>
          When I started my journey as a developer, I knew it wouldn&apos;t be easy,
          but I didn&apos;t quite grasp the range of challenges and rewarding moments
          that would come my way. Today, I want to share some key experiences
          and lessons learned that have shaped my path and made me a stronger
          developer.
        </p>

        <br />

        <h2 className="text-2xl font-semibold mb-4">
          Lesson 1: The Importance of Resilience 💪
        </h2>

        <p>
          Early in my career, I encountered a project where I underestimated the
          complexity of integrating third-party APIs. I spent hours debugging,
          testing, and retracing my steps only to find the issue was due to an
          obscure rate-limiting policy. This taught me resilience and the
          importance of meticulous reading of documentation—a lesson that has
          saved me countless hours ever since.
        </p>

        <br />

        <h2 className="text-2xl font-semibold mb-4">
          Lesson 2: Communication is Just as Important as Code 🗣️
        </h2>

        <p>
          One pivotal project involved collaborating with a cross-functional
          team on a feature rollout. I learned that it wasn&apos;t just the technical
          solution that mattered but also how well I communicated progress and
          challenges to non-technical stakeholders. This improved my ability to
          align expectations and foster trust within the team.
        </p>

        <br />

        <h2 className="text-2xl font-semibold mb-4">
          Lesson 3: Never Stop Learning 📚
        </h2>

        <p>
          Technology evolves at breakneck speed, and staying stagnant isn&apos;t an
          option. I made it a habit to dedicate time to learning new frameworks
          and best practices. Embracing a continuous learning mindset led me to
          explore technologies like Next.js and TypeScript, enriching my skills
          and giving me the confidence to take on more complex projects.
        </p>

        <br />

        <h2 className="text-2xl font-semibold mb-4">Final Thoughts 💭</h2>

        <p>
          Reflecting on these experiences reminds me why I love what I do—not
          just the coding but the growth, problem-solving, and opportunities to
          collaborate and share knowledge. Whether you&apos;re just starting or are
          deep into your development career, embracing challenges as learning
          moments can transform your journey.
        </p>

        <div className="border-t pt-8 mt-12">
          <p className="text-muted-foreground">
            If you have any questions or want to discuss more about my journey,
            feel free to reach out!
          </p>
        </div>

        {/* Follow Buttons */}
        <div className="flex space-x-4 mt-8">
          <a
            href="https://twitter.com/ayyubiy10"
            target="_blank"
            rel="noopener noreferrer"
            className="p-2 rounded hover:bg-gray-200 dark:hover:bg-gray-700"
            aria-label="Follow on Twitter">
            <Twitter className="h-6 w-6 text-black dark:text-white" />
          </a>
          <a
            href="https://www.facebook.com/Ayyubiy90"
            target="_blank"
            rel="noopener noreferrer"
            className="p-2 rounded hover:bg-gray-200 dark:hover:bg-gray-700"
            aria-label="Follow on Facebook">
            <Facebook className="h-6 w-6 text-black dark:text-white" />
          </a>
          <a
            href="https://www.linkedin.com/in/abdullah-a-2940b7260"
            target="_blank"
            rel="noopener noreferrer"
            className="p-2 rounded hover:bg-gray-200 dark:hover:bg-gray-700"
            aria-label="Follow on LinkedIn">
            <Linkedin className="h-6 w-6 text-black dark:text-white" />
          </a>
          <a
            href="https://www.instagram.com/ayyubiy_10"
            target="_blank"
            rel="noopener noreferrer"
            className="p-2 rounded hover:bg-gray-200 dark:hover:bg-gray-700"
            aria-label="Follow on Instagram">
            <Instagram className="h-6 w-6 text-black dark:text-white" />
          </a>
        </div>

        {/* Related Posts */}
        <RelatedPosts />
      </article>
    </div>
  );
}
