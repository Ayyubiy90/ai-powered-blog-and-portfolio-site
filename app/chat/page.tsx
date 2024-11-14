// Importing the ChatWindow component from the chat directory
import { ChatWindow } from '@/components/chat/chat-window';

// Defining the ChatPage component as the default export
export default function ChatPage() {
  return (
    // Main container for the chat page with responsive padding
    <div className="container mx-auto px-4 md:px-6 lg:px-8 py-12">
      <div className="max-w-6xl mx-auto"> {/* Centering the content with a maximum width */}
        {/* Header section for the chat page */}
        <div className="space-y-4 mb-8">
          <h1 className="text-4xl font-bold">AI Chat Assistant</h1> {/* Main title of the chat page */}
          <p className="text-muted-foreground text-lg">
            Ask questions about my projects, blog posts, or technical expertise. {/* Subtitle or description */}
          </p>
        </div>
        <ChatWindow /> {/* Rendering the ChatWindow component for user interaction */}
      </div>
    </div>
  );
}