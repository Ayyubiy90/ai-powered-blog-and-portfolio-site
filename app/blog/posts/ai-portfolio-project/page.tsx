import { Card } from "@/components/ui/card";

export default function AIPortfolioPost() {
  return (
    <div className="container mx-auto px-4 md:px-6 py-12">
      <article className="prose prose-lg dark:prose-invert max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold mb-6">
          Building an AI-Powered Portfolio & Blog Platform 🚀
        </h1>

        <div className="text-muted-foreground mb-8">
          <time>March 26, 2024</time> • 10 min read
        </div>

        <Card className="p-6 mb-8">
          <h2 className="text-2xl font-semibold mb-4">Project Overview 🎯</h2>
          <p>
            I recently developed a modern portfolio and blog platform that
            combines traditional web development with AI capabilities. This
            project showcases not just my work, but also demonstrates the
            practical application of AI in web applications.
          </p>
        </Card>

        {/* Add the rest of your content here... */}

        <div className="border-t pt-8 mt-12">
          <p className="text-muted-foreground">
            If you&apos;re interested in learning more about this project or
            have any questions, feel free to reach out or check out the source
            code on GitHub!
          </p>
        </div>
      </article>
    </div>
  );
}
