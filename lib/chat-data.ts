export const skillsData = {
    frontend: ["React/Next.js", "Vue.js", "TypeScript", "Angular", "SCSS"],
    backend: ["Node.js", "Express", "PHP"],
    tools: ["Git", "Tailwind CSS"],
  }
  
  export const projectsData = [
    {
      title: "AI Chat Assistant",
      description: "A sophisticated chatbot powered by machine learning that provides personalized responses.",
      tech: ["React", "TypeScript", "TensorFlow.js"],
    },
    {
      title: "Smart Task Manager",
      description: "An intelligent task management system that uses AI to prioritize and organize tasks.",
      tech: ["Next.js", "Python", "PostgreSQL"],
    },
    {
      title: "Data Visualization Dashboard",
      description: "Interactive dashboard for visualizing complex datasets with real-time updates.",
      tech: ["D3.js", "React", "Node.js"],
    },
  ]
  
  export const blogData = [
    {
      title: "Building an AI-Powered Chat Assistant",
      description: "Learn how to create a sophisticated chatbot using modern AI technologies.",
      topics: ["AI", "ChatGPT", "React"],
    },
    {
      title: "The Future of Web Development",
      description: "Exploring upcoming trends and technologies in web development.",
      topics: ["Web Development", "Trends", "Technology"],
    },
    {
      title: "Optimizing React Applications",
      description: "Best practices and techniques for improving React app performance.",
      topics: ["React", "Performance", "Optimization"],
    },
  ]
  
  export function generateResponse(question: string): string {
    const normalizedQuestion = question.toLowerCase()
  
    // Skills related questions
    if (normalizedQuestion.includes("skill") || normalizedQuestion.includes("technology") || normalizedQuestion.includes("tech stack")) {
      return `I specialize in various technologies across the stack. For frontend development, I work with ${skillsData.frontend.join(", ")}. On the backend, I'm proficient in ${skillsData.backend.join(", ")}. I also use tools like ${skillsData.tools.join(", ")} in my development workflow.`
    }
  
    // Project related questions
    if (normalizedQuestion.includes("project") || normalizedQuestion.includes("work") || normalizedQuestion.includes("portfolio")) {
      const projectsList = projectsData.map(p => `${p.title} (${p.tech.join(", ")})`).join(", ")
      return `I've worked on several significant projects including: ${projectsList}. Would you like to know more about any specific project?`
    }
  
    // Blog related questions
    if (normalizedQuestion.includes("blog") || normalizedQuestion.includes("article") || normalizedQuestion.includes("write")) {
      const blogTopics = Array.from(new Set(blogData.flatMap(post => post.topics)))
      return `I write about various technical topics including ${blogTopics.join(", ")}. My recent articles cover ${blogData.map(p => p.title).join(", ")}. Which topic interests you the most?`
    }
  
    // Experience related questions
    if (normalizedQuestion.includes("experience") || normalizedQuestion.includes("background")) {
      return `I'm a full-stack developer with over 5 years of experience, specializing in modern web technologies. My primary focus is on React/Next.js and Node.js development, but I also work with various other technologies across the stack. Would you like to know more about my experience with any specific technology?`
    }
  
    // Specific technology questions
    if (normalizedQuestion.includes("react")) {
      return `I have extensive experience with React and Next.js, using them in projects like ${projectsData.filter(p => p.tech.includes("React")).map(p => p.title).join(", ")}. I also write about React development in my blog, covering topics like optimization and best practices.`
    }
  
    // Default response for other questions
    return `I can tell you about my skills, projects, blog posts, and technical experience. What specific aspect would you like to know more about?`
  }