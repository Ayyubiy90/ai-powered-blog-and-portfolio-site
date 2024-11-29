import React from 'react';

type Message = {
  text: string;
  sender: "user" | "ai";
};

interface ChatWindowProps {
  messages: Message[];
  isTyping: boolean;
  onSendMessage: (message: string) => void;
}

const ChatWindow: React.FC<ChatWindowProps> = ({ messages, isTyping, onSendMessage }) => {
  return (
    <div>
      {/* Render messages */}
      {messages.map((msg, index) => (
        <div key={index} className={msg.sender === "user" ? "user-message" : "ai-message"}>
          {msg.text}
        </div>
      ))}
      {isTyping && <div>AI is typing...</div>}
      {/* Add input for sending messages */}
      <input type="text" onKeyDown={(e) => e.key === 'Enter' && onSendMessage(e.currentTarget.value)} />
    </div>
  );
};

export default ChatWindow;
