import { ChatWindow } from "@/components/chat/chat-window";

export default function ChatPage() {
  return (
    <div className="container mx-auto px-4 md:px-6 lg:px-8 py-12">
      <div className="max-w-6xl mx-auto">
        <div className="space-y-4 mb-8">
          <h1 className="text-4xl font-bold">AI Chat Assistant</h1>
          <p className="text-muted-foreground text-lg">
            Ask questions about my projects, blog posts, or technical expertise.
          </p>
        </div>
        <ChatWindow />
      </div>
    </div>
  );
}
