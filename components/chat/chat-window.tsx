// Indicates that this file is a client-side component in a Next.js application
"use client"

import { useState } from 'react' // Importing useState hook from React
import { Button } from '@/components/ui/button' // Importing Button component
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card' // Importing Card components
import { Input } from '@/components/ui/input' // Importing Input component
import { ScrollArea } from '@/components/ui/scroll-area' // Importing ScrollArea component
import { Bot, Send, User } from 'lucide-react' // Importing icons for the chat interface

// Defining the Message interface to type the messages in the chat
interface Message {
  role: 'user' | 'assistant' // Role can be either 'user' or 'assistant'
  content: string // Content of the message
}

// ChatWindow component definition
export function ChatWindow() {
  // State to hold the messages in the chat
  const [messages, setMessages] = useState<Message[]>([
    {
      role: 'assistant', // Initial message from the assistant
      content: 'Hi! I can help you learn more about the projects and blog posts. What would you like to know?',
    },
  ])
  
  // State to hold the current input value
  const [input, setInput] = useState('')
  
  // State to manage loading state during message processing
  const [isLoading, setIsLoading] = useState(false)

  // Function to handle form submission
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault() // Prevent default form submission behavior
    if (!input.trim() || isLoading) return // Exit if input is empty or if a response is loading

    // Create a user message object
    const userMessage = { role: 'user' as const, content: input }
    setMessages(prev => [...prev, userMessage]) // Update messages state with the new user message
    setInput('') // Clear the input field
    setIsLoading(true) // Set loading state to true

    // Simulate AI response after a delay
    setTimeout(() => {
      const aiResponse = {
        role: 'assistant' as const,
        content: `I understand you're interested in "${input}". Let me help you find relevant information about that topic.`,
      }
      setMessages(prev => [...prev, aiResponse]) // Update messages state with the AI response
      setIsLoading(false) // Reset loading state
    }, 1000) // Simulate a 1-second delay for the AI response
  }

  return (
    // Card component to contain the chat window
    <Card className="w-full max-w-2xl mx-auto">
      <CardHeader>
        // Header for the chat window with the AI Assistant title
        <CardTitle className="flex items-center gap-2">
          <Bot className="w-6 h-6" /> // AI icon
          AI Assistant
        </CardTitle>
      </CardHeader>
      <CardContent>
        // Scrollable area for displaying messages
        <ScrollArea className="h-[400px] pr-4">
          <div className="space-y-4">
            {
              // Mapping over messages to display each one
              messages.map((message, i) => (
                <div
                  key={i} // Unique key for each message
                  className={`flex items-start gap-3 ${
                    message.role === 'assistant' ? 'flex-row' : 'flex-row-reverse'
                  }`}
                >
                  <div
                    className={`p-2 rounded-full ${
                      message.role === 'assistant'
                        ? 'bg-primary text-primary-foreground'
                        : 'bg-muted'
                    }`}
                  >
                    // Displaying the appropriate icon based on the message role
                    {message.role === 'assistant' ? (
                      <Bot className="w-4 h-4" />
                    ) : (
                      <User  className="w-4 h-4" />
                    )}
                  </div>
                  <div
                    className={`rounded-lg px-4 py-2 max-w-[80%] ${
                      message.role === 'assistant'
                        ? 'bg-muted'
                        : 'bg-primary text-primary-foreground'
                    }`}
                  >
                    {message.content} // Displaying the message content
                  </div>
                </div>
              ))
            }
          </div>
        </ScrollArea>
        // Form for user input
        <form onSubmit={handleSubmit} className="mt-4 flex gap-2">
          <Input
            value={input} // Controlled input value
            onChange={e => setInput(e.target.value)} // Update input state on change
 placeholder="Ask me anything..." // Placeholder text for the input field
            disabled={isLoading} // Disable input when loading
          />
          <Button type="submit" disabled={isLoading}> // Submit button for sending the message
            <Send className="w-4 h-4" /> // Send icon
          </Button>
        </form>
      </CardContent>
    </Card>
  )
}