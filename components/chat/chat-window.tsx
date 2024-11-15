"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Bot, Send, User } from "lucide-react";
import { generateResponse } from "@/lib/chat-data";

interface Message {
  role: "user" | "assistant";
  content: string;
}

export function ChatWindow() {
  const [messages, setMessages] = useState<Message[]>([
    {
      role: "assistant",
      content:
        "Hi! I can help you learn more about my skills, projects, and blog posts. What would you like to know?",
    },
  ]);
  const [input, setInput] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  // Suggested prompts
  const suggestedPrompts = [
    "What are your skills?",
    "Tell me about your projects.",
    "What is your blog about?",
    "Can you share your experience?",
    "Who are you?",
  ];

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!input.trim() || isLoading) return;

    const userMessage = { role: "user" as const, content: input };
    setMessages((prev) => [...prev, userMessage]);
    setInput("");
    setIsLoading(true);

    // Generate contextual response
    setTimeout(() => {
      const response = generateResponse(input);
      const aiResponse = {
        role: "assistant" as const,
        content: response,
      };
      setMessages((prev) => [...prev, aiResponse]);
      setIsLoading(false);
    }, 500);
  };

  return (
    <Card className="w-full max-w-2xl mx-auto">
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          <Bot className="w-6 h-6" />
          AI Assistant
        </CardTitle>
      </CardHeader>
      <CardContent>
        <ScrollArea className="h-[400px] pr-4">
          <div className="space-y-4">
            {messages.map((message, i) => (
              <div
                key={i}
                className={`flex items-start gap-3 ${
                  message.role === "assistant" ? "flex-row" : "flex-row-reverse"
                }`}>
                <div
                  className={`p-2 rounded-full ${
                    message.role === "assistant"
                      ? "bg-primary text-primary-foreground"
                      : "bg-muted"
                  }`}>
                  {message.role === "assistant" ? (
                    <Bot className="w-4 h-4" />
                  ) : (
                    <User className="w-4 h-4" />
                  )}
                </div>
                <div
                  className={`rounded-lg px-4 py-2 max-w-[80%] ${
                    message.role === "assistant"
                      ? "bg-muted"
                      : "bg-primary text-primary-foreground"
                  }`}>
                  {message.content}
                </div>
              </div>
            ))}
            {/* Display suggested prompts */}
            {messages.length === 1 && (
              <div className="rounded-lg px-4 py-2 bg-muted">
                <p>Here are some suggested prompts you can ask:</p>
                <ul className="list-disc pl-5">
                  {suggestedPrompts.map((prompt, index) => (
                    <li key={index}>&quot;{prompt}&quot;</li>
                  ))}
                </ul>
              </div>
            )}
          </div>
        </ScrollArea>
        <form onSubmit={handleSubmit} className="mt-4 flex gap-2">
          <Input
            value={input}
            onChange={(e) => setInput(e.target.value)}
            placeholder="Ask me anything..."
            disabled={isLoading}
          />
          <Button type="submit" disabled={isLoading}>
            <Send className="w-4 h-4" />
          </Button>
        </form>
      </CardContent>
    </Card>
  );
}
