import { useState } from "react";
import { ChatWindow } from "../../components/chat/chat-window"; // Ensure correct import

// Define a type for messages
type Message = {
  text: string;
  sender: "user" | "ai";
};

export default function ChatPage() {
  const [messages, setMessages] = useState<Message[]>([]); // State to hold message history
  const [isTyping, setIsTyping] = useState(false); // State for typing indicator

  const handleSendMessage = (message: string) => {
    setMessages([...messages, { text: message, sender: "user" }]);
    setIsTyping(true);
    
    // Simulate AI response
    setTimeout(() => {
      setMessages((prev) => [...prev, { text: "AI response here", sender: "ai" }]);
      setIsTyping(false);
    }, 1000); // Simulate typing delay
  };

  return (
    <div className="container mx-auto px-4 md:px-6 lg:px-8 py-12">
      <div className="max-w-6xl mx-auto">
        <div className="space-y-4 mb-8">
          <h1 className="text-4xl font-bold">AI Chat Assistant</h1>
          <p className="text-muted-foreground text-lg">
            Ask questions about my projects, blog posts, or technical expertise.
          </p>
        </div>
        <div className="bg-white shadow-md rounded-lg p-4"> {/* Added styling for chat window */}
          <ChatWindow messages={messages} isTyping={isTyping} onSendMessage={handleSendMessage} />
        </div>
      </div>
    </div>
  );
}
