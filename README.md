# AI-Powered Portfolio & Blog

A modern, responsive portfolio and blog website built with Next.js, React, and TypeScript. Features an AI chat assistant for interactive exploration of projects and content.

## Features

- 🤖 AI Chat Assistant for personalized interaction
- 🎨 Modern, responsive design with dark mode support
- 📱 Mobile-first approach
- 📝 Technical blog section
- 💼 Project showcase
- 🎯 About page with social links

## Tech Stack

- Next.js 13
- React
- TypeScript
- Tailwind CSS
- shadcn/ui Components
- Lucide Icons

## Getting Started

1. Clone the repository:
   ```bash
   git clone https://github.com/yourusername/ai-portfolio.git
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Run the development server:
   ```bash
   npm run dev
   ```

4. Open [http://localhost:3000](http://localhost:3000) in your browser.

## Project Structure

```
├── app/                 # Next.js app directory
│   ├── about/          # About page
│   ├── blog/           # Blog pages
│   ├── chat/           # AI chat interface
│   ├── projects/       # Projects showcase
│   └── layout.tsx      # Root layout
├── components/         # React components
│   ├── chat/          # Chat-related components
│   └── ui/            # UI components
├── lib/               # Utility functions
└── public/            # Static assets
```

## Customization

1. Update the content in `app/about/page.tsx` with your information
2. Modify projects in `app/projects/page.tsx`
3. Add blog posts in `app/blog/page.tsx`
4. Customize the theme in `app/globals.css`

## License

MIT License