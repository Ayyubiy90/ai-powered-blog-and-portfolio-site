export const skillsData = {
    frontend: ["React/Next.js", "TypeScript", "Tailwind CSS", "SCSS"],
    backend: ["Node.js", "Express", "PHP"],
    tools: ["Git", "Firebase", "Recharts", "Zustand", "Stripe", "Framer Motion", "AI"],
  };
  
  export const projectsData = [
    {
      title: "Personal Budget Tracker",
      description: "A user-friendly web app that helps you manage your finances by tracking income and expenses with secure authentication and interactive visual insights.",
      tech: ["React", "TypeScript", "Tailwind CSS", "Firebase", "Recharts", "React Hook Form", "Currency.js"],
      github: "https://github.com/Ayyubiy90/budget-tracker",
      live: "https://budget-tracker-ashen.vercel.app/",
    },
    {
      title: "Modern Dashboard",
      description: "An interactive dashboard that demonstrates your ability to integrate multiple APIs, manage complex data flows, and create a clean, user-friendly interface.",
      tech: ["TypeScript", "JavaScript", "Tailwind CSS", "Zustand", "Hello Pangea DND", "React Hot Toast", "React Error Boundary"],
      github: "https://github.com/Ayyubiy90/personalized-dashboard-with-API-integrations",
      live: "https://personalized-dashboard-with-api-integrations.vercel.app/",
    },
    {
      title: "ModernStore - React E-commerce Platform",
      description: "A fully functional e-commerce store with a modern, polished design and engaging animations.",
      tech: ["React", "TypeScript", "Tailwind CSS", "Zustand", "Stripe", "Framer Motion"],
      github: "https://github.com/Ayyubiy90/modern-e-commerce-store",
      live: "https://modern-e-commerce-store.vercel.app/",
    },
    {
      title: "Siphome Smart Home System",
      description: "This project aims to revolutionize how we interact with our homes by providing advanced smart home solutions.",
      tech: ["React", "JavaScript", "HTML", "CSS"],
      github: "https://github.com/Ayyubiy90/siphome",
      live: "https://siphome-chinxas-projects.vercel.app/",
    },
  ];
  
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
  ];
  
  export const aboutYou = {
    introduction: "Frontend Developer with 3 years of experience building scalable web applications, specializing in the React ecosystem and modern web technologies.",
    details: [
      "I'm a Frontend Developer from Lagos, Nigeria, with a growing interest in backend development. Self-taught for 2 years, with an additional year of project experience, I'm passionate about creating responsive and intuitive web applications.",
      "Currently pursuing a bachelor's degree in Computer Science, I'm open to remote full-time, part-time, or contract roles. Outside of coding, I'm an avid tech enthusiast, love exploring new gadgets, and enjoy gaming."
    ],
    cvLink: "/Abdullah Abdurazaq CV.pdf", // Link to your CV
  };
  
  export function generateResponse(question: string): string {
    const normalizedQuestion = question.toLowerCase();
  
    // Skills related questions
    if (normalizedQuestion.includes("skill") || normalizedQuestion.includes("technology") || normalizedQuestion.includes("tech stack")) {
      return `I specialize in various technologies across the stack. For frontend development, I work with ${skillsData.frontend.join(", ")}. On the backend, I'm proficient in ${skillsData.backend.join(", ")}. I also use tools like ${skillsData.tools.join(", ")} in my development workflow.`;
    }
  
    // Project related questions
    if (normalizedQuestion.includes("project") || normalizedQuestion.includes("work") || normalizedQuestion.includes("portfolio")) {
      const projectsList = projectsData.map(p => `${p.title} (${p.tech.join(", ")})`).join(", ");
      return `I've worked on several significant projects including: ${projectsList}. Would you like to know more about any specific project?`;
    }
  
    // Blog related questions
    if (normalizedQuestion.includes("blog") || normalizedQuestion.includes("article") || normalizedQuestion.includes("write")) {
      const blogTopics = Array.from(new Set(blogData.flatMap(post => post.topics)));
      return `I write about various technical topics including ${blogTopics.join(", ")}. My recent articles cover ${blogData.map(p => p.title).join(", ")}. Which topic interests you the most?`;
    }
  
    // Experience related questions
    if (normalizedQuestion.includes("experience") || normalizedQuestion.includes("background")) {
      return `I'm a Frontend Developer with 3 years of experience building scalable web applications, specializing in the React ecosystem and modern web technologies. I'm currently pursuing a bachelor's degree in Computer Science and I'm open to remote full-time, part-time, or contract roles. Would you like to know more about my experience with any specific technology?`;
    }
  
    // About Me related questions
    if (normalizedQuestion.includes("about you") || normalizedQuestion.includes("who are you") || normalizedQuestion.includes("introduction")) {
      return `${aboutYou.introduction} ${aboutYou.details.join(" ")}`;
    }
  
    // Specific technology questions
    if (normalizedQuestion.includes("react")) {
      return `I have extensive experience with React and Next.js, using them in projects like ${projectsData.filter(p => p.tech.includes("React")).map(p => p.title).join(", ")}. I also write about React development in my blog, covering topics like optimization and best practices.`;
    }
  
    // Default response for other questions
    return `I can tell you about my skills, projects, blog posts, and technical experience. What specific aspect would you like to know more about?`;
  }