"use client";

import { useState } from "react";
import { Send } from "lucide-react";

interface Comment {
  id: string;
  name: string;
  content: string;
  date: string;
}

export function Comments() {
  const [comments, setComments] = useState<Comment[]>([]);
  const [newComment, setNewComment] = useState({ name: "", content: "" });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newComment.name.trim() || !newComment.content.trim()) return;

    const comment: Comment = {
      id: Date.now().toString(),
      name: newComment.name,
      content: newComment.content,
      date: new Date().toLocaleDateString(),
    };

    setComments([...comments, comment]);
    setNewComment({ name: "", content: "" });
  };

  return (
    <div className="mt-12">
      <h3 className="text-2xl font-semibold mb-6">Comments</h3>
      
      {/* Comment Form */}
      <form onSubmit={handleSubmit} className="mb-8">
        <div className="mb-4">
          <input
            type="text"
            placeholder="Your Name"
            value={newComment.name}
            onChange={(e) => setNewComment({ ...newComment, name: e.target.value })}
            className="w-full p-2 border rounded dark:bg-gray-800 dark:border-gray-700"
            required
          />
        </div>
        <div className="mb-4">
          <textarea
            placeholder="Your Comment"
            value={newComment.content}
            onChange={(e) => setNewComment({ ...newComment, content: e.target.value })}
            className="w-full p-2 border rounded min-h-[100px] dark:bg-gray-800 dark:border-gray-700"
            required
          />
        </div>
        <button
          type="submit"
          className="px-4 py-2 bg-black text-white rounded hover:bg-black/80 transition-colors flex items-center gap-2"
        >
          Post Comment <Send className="w-4 h-4" />
        </button>
      </form>

      {/* Comments List */}
      <div className="space-y-6">
        {comments.length === 0 ? (
          <p className="text-gray-500 dark:text-gray-400">No comments yet. Be the first to comment!</p>
        ) : (
          comments.map((comment) => (
            <div
              key={comment.id}
              className="p-4 border rounded dark:border-gray-700"
            >
              <div className="flex justify-between items-center mb-2">
                <h4 className="font-semibold">{comment.name}</h4>
                <span className="text-sm text-gray-500">{comment.date}</span>
              </div>
              <p className="text-gray-700 dark:text-gray-300">{comment.content}</p>
            </div>
          ))
        )}
      </div>
    </div>
  );
}