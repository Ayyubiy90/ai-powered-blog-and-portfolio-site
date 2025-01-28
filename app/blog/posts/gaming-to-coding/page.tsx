"use client";

import { Twitter, Facebook, Linkedin, Instagram } from "lucide-react";
import { RelatedPosts } from "@/components/blog/related-posts";
import { Comments } from "@/components/blog/comments";
import { BookmarkButton } from "@/components/blog/bookmark-button";
import { PostRating } from "@/components/blog/post-rating";
import Image from "next/image";
import gaming from "@/app/blog/posts/gaming-to-coding/images/gaming-coding-hero.jpeg";
import strategy from "@/app/blog/posts/gaming-to-coding/images/strategy-game.jpeg";
import darksoul from "@/app/blog/posts/gaming-to-coding/images/dark-soul-debugging.jpg";
import gamer from "@/app/blog/posts/gaming-to-coding/images/gamer.jpg";
import developer from "@/app/blog/posts/gaming-to-coding/images/developer.jpeg";

export default function GamingToCodingPost() {
  const sharePost = (platform: string) => {
    const url = window.location.href;
    const text =
      "Check out this blog post: From Gaming Marathons to Coding Sprints 🎮💻";

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
          From Gaming Marathons to Coding Sprints 🎮💻: How Video Games Secretly
          Trained Me to Become a Better Developer
        </h1>

        {/* Hero Image */}
        <div className="relative w-full h-96 mb-8 rounded-lg overflow-hidden">
          <Image
            src={gaming}
            alt="Gaming setup transitioning to code editor"
            fill
            className="object-cover"
            priority
          />
        </div>

        <div className="text-muted-foreground mb-8">
          <time>January 29, 2025</time> • 10 min read
        </div>

        {/* Social Sharing */}
        <div className="flex space-x-4 mb-8 items-center">
          <BookmarkButton postId="gaming-to-coding" />
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

        <h2 className="text-2xl font-semibold mb-4">
          Introduction: My Unconventional Coding Bootcamp 🕹️
        </h2>
        <p>
          For years, I hid my gaming habits like a guilty secret - until I
          realized my 1000+ hours in RPGs and strategy games were actually the
          ultimate programming bootcamp. Let me show you how...
        </p>

        <br />

        {/* Section 1 */}
        <h2 className="text-2xl font-semibold mb-4">
          1. Strategic Thinking: From Resource Management to System Design
        </h2>
        <div className="relative w-full h-64 mb-4 rounded-lg overflow-hidden">
          <Image
            src={strategy}
            alt="Civilization game interface"
            fill
            className="object-cover"
          />
        </div>

        <p>
          <strong>Gaming Parallel:</strong> Managing complex systems in games
          like
          <em>Civilization VI</em> taught me more about software architecture
          than any textbook. Remember balancing gold production, science output,
          and military strength? That&apos;s essentially microservices
          architecture with fun graphics.
        </p>
        <br />
        <p>
          <strong>Coding Application:</strong> When designing a new feature, I
          approach it like planning a city in <em>SimCity</em> - identifying
          dependencies, resource flows, and failure points. My secret weapon?
          Treating each module like a game quest with clear objectives and
          rewards.
        </p>

        <br />

        {/* Section 2 */}
        <h2 className="text-2xl font-semibold mb-4">
          2. Debugging: The Dark Souls of Programming 💀
        </h2>
        <div className="relative w-full h-64 mb-4 rounded-lg overflow-hidden">
          <Image
            src={darksoul}
            alt="Dark Souls gameplay with error messages overlay"
            fill
            className="object-cover"
          />
        </div>
        <p>
          <strong>Gaming Parallel:</strong> Beating Ornstein and Smough after 47
          attempts taught me the true meaning of persistence. Each &quot;YOU
          DIED&quot; screen was just feedback - not failure.
        </p>
        <br />
        <p>
          <strong>Coding Application:</strong> That same mentality transformed
          how I approach bugs. Now when I see a stack trace, I hear the{" "}
          <em>Dark Souls</em>
          bonfire theme - time to regroup and try a new strategy. Pro tip: Treat
          error messages like boss attack patterns - they always reveal weak
          points.
        </p>

        <br />

        {/* Section 3 */}
        <h2 className="text-2xl font-semibold mb-4">
          3. Rapid Learning: Speedrunning New Technologies 🏃♂️
        </h2>
        <div className="relative w-full h-64 mb-4 rounded-lg overflow-hidden">
          <Image
            src={gamer}
            alt="Speedrunner with code overlay"
            fill
            className="object-cover"
          />
        </div>
        <p>
          <strong>Gaming Parallel:</strong> Mastering new game mechanics in
          <em>Elden Ring</em> within hours taught me how to quickly adapt to new
          frameworks. The secret? Treat documentation like game tutorials and
          Stack Overflow like a strategy guide.
        </p>
        <br />
        <p>
          <strong>Coding Application:</strong> When learning TypeScript, I
          approached it like optimizing a <em>Factorio</em> production line -
          identifying type dependencies and automating repetitive tasks. The
          result? 40% fewer runtime errors in our core application.
        </p>

        <br />

        {/* Section 4 */}
        <h2 className="text-2xl font-semibold mb-4">
          4. Teamwork: From Raid Groups to Agile Sprints 🤝
        </h2>
        <div className="relative w-full h-64 mb-4 rounded-lg overflow-hidden">
          <Image
            src={developer}
            alt="World of Warcraft raid team coordination"
            fill
            className="object-cover"
          />
        </div>
        <p>
          <strong>Gaming Parallel:</strong> Leading 25-player raids in
          <em>World of Warcraft</em> was surprisingly good prep for Agile
          ceremonies. Coordinating DPS rotations taught me more about CI/CD
          pipelines than any certification.
        </p>
        <br />
        <p>
          <strong>Coding Application:</strong> Our standups now feel like raid
          prep: &quot;Tanks handle infrastructure, healers on bug fixes, DPS
          crushing feature development!&quot; Pro tip: Use Discord for developer
          communication - it&apos;s basically modern Ventrilo with better
          emojis.
        </p>

        <br />

        {/* Case Study Section */}
        <h2 className="text-2xl font-semibold mb-4">
          Real-World Validation: When Gaming Saves the Day 🦸
        </h2>
        <div className="bg-gray-100 dark:bg-gray-800 p-6 rounded-lg mb-6">
          <h3 className="text-lg font-semibold mb-2">
            The Redstone Revelation
          </h3>
          <p>
            My <em>Minecraft</em> redstone phase directly led to solving a
            complex logic gate problem in our IoT project. Those piston
            circuits? Basically visual programming for hardware.
          </p>
        </div>

        <div className="bg-blue-50 dark:bg-blue-900 p-6 rounded-lg mb-6">
          <h3 className="text-lg font-semibold mb-2">The Speedrun Sprint</h3>
          <p>
            Faced with an impossible deadline, our team adopted speedrun
            tactics: - Glitch exploitation = creative solutions - Route
            optimization = CI/CD automation - Boss skips = MVP prioritization
            Shipped 2 weeks early with 90% test coverage.
          </p>
        </div>

        <br />

        {/* Counterargument Section */}
        <h2 className="text-2xl font-semibold mb-4">
          &quot;But Isn&apos;t Gaming a Waste of Time?&quot; ⏳
        </h2>
        <p>
          Let&apos;s address the elephant in the room. Yes, binge-gaming can be
          unhealthy. But like any tool, it&apos;s about intentional use. My
          rules:
        </p>
        <ul className="list-disc pl-6 mt-2">
          <li>1 hour gaming = 1 hour coding practice (maintain balance)</li>
          <li>
            Choose games that challenge specific skills (puzzle {">"} mindless
            shooters)
          </li>
          <li>
            Debrief sessions: &quot;What gaming lessons apply to my current
            project?&quot;
          </li>
        </ul>

        <br />

        {/* Conclusion */}
        <h2 className="text-2xl font-semibold mb-4">
          Final Boss: Your Coding Career 🏰
        </h2>
        <p>
          Next time someone scoffs at your gaming habits, show them your commit
          history. Those controller calluses? They&apos;re developer battle
          scars. Your IDE is just a fancy game engine waiting for your next
          masterpiece.
        </p>

        <div className="border-t pt-8 mt-12">
          <p className="text-muted-foreground">
            Ready to respawn as a developer? Your gaming experience might be the
            ultimate cheat code.
          </p>
        </div>

        {/* Follow Buttons */}
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

        {/* Interactive Elements */}
        <PostRating postId="gaming-to-coding" />
        <RelatedPosts />
        <Comments postId="gaming-to-coding" />
      </article>
    </div>
  );
}
