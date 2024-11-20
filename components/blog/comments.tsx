"use client";

import { useState, useEffect } from "react";
import { Send, Trash } from "lucide-react";

interface Comment {
  id: string;
  name: string;
  content: string;
  date: string;
  postId: string;
}

interface CommentsProps {
  postId: string;
}

export function Comments({ postId }: CommentsProps) {
  const [comments, setComments] = useState<Comment[]>([]);
  const [newComment, setNewComment] = useState({ name: "", content: "" });

  // Load comments from localStorage when component mounts
  useEffect(() => {
    const storedComments = localStorage.getItem("blogComments");
    if (storedComments) {
      const allComments = JSON.parse(storedComments);
      // Filter comments for current post
      const postComments = allComments.filter(
        (comment: Comment) => comment.postId === postId
      );
      setComments(postComments);
    }
  }, [postId]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newComment.name.trim() || !newComment.content.trim()) return;

    const comment: Comment = {
      id: Date.now().toString(),
      name: newComment.name,
      content: newComment.content,
      date: new Date().toLocaleDateString(),
      postId: postId,
    };

    // Get all existing comments from localStorage
    const existingComments = localStorage.getItem("blogComments");
    const allComments = existingComments ? JSON.parse(existingComments) : [];

    // Add new comment and save all comments back to localStorage
    const updatedComments = [...allComments, comment];
    localStorage.setItem("blogComments", JSON.stringify(updatedComments));

    // Update state with only the comments for this post, sorted by date
    const updatedPostComments = [...comments, comment].sort((a, b) => {
      return new Date(b.date).getTime() - new Date(a.date).getTime();
    });
    setComments(updatedPostComments);
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
            onChange={(e) =>
              setNewComment({ ...newComment, name: e.target.value })
            }
            className="w-full p-2 border rounded dark:bg-gray-800 dark:border-gray-700"
            required
          />
        </div>
        <div className="mb-4">
          <textarea
            placeholder="Your Comment"
            value={newComment.content}
            onChange={(e) =>
              setNewComment({ ...newComment, content: e.target.value })
            }
            className="w-full p-2 border rounded min-h-[100px] dark:bg-gray-800 dark:border-gray-700"
            required
          />
        </div>
        <button
          type="submit"
          className="px-4 py-2 bg-black text-white rounded hover:bg-black/80 transition-colors flex items-center gap-2">
          Post Comment <Send className="w-4 h-4" />
        </button>
      </form>

      {/* Comments List */}
      <div className="space-y-6">
        {comments.length === 0 ? (
          <p className="text-gray-500 dark:text-gray-400">
            No comments yet. Be the first to comment!
          </p>
        ) : (
          comments.map((comment) => (
            <div
              key={comment.id}
              className="p-4 border rounded dark:border-gray-700">
              <div className="flex justify-between items-center mb-2">
                <h4 className="font-semibold">{comment.name}</h4>
                <div className="flex items-center gap-4">
                  <span className="text-sm text-gray-500">{comment.date}</span>
                  <button
                    onClick={() => {
                      // Get all comments from localStorage
                      const existingComments =
                        localStorage.getItem("blogComments");
                      const allComments = existingComments
                        ? JSON.parse(existingComments)
                        : [];

                      // Filter out the deleted comment
                      const updatedComments = allComments.filter(
                        (c: Comment) => c.id !== comment.id
                      );

                      // Update localStorage
                      localStorage.setItem(
                        "blogComments",
                        JSON.stringify(updatedComments)
                      );

                      // Update state with filtered comments for this post
                      setComments(comments.filter((c) => c.id !== comment.id));
                    }}
                    className="p-1 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-full transition-colors"
                    aria-label="Delete comment">
                    <Trash className="h-4 w-4 text-gray-500 hover:text-red-500" />
                  </button>
                </div>
              </div>
              <p className="text-gray-700 dark:text-gray-300">
                {comment.content}
              </p>
            </div>
          ))
        )}
      </div>
    </div>
  );
}