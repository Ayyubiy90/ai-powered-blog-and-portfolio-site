# 🚀 AI-Powered Portfolio & Blog Platform

A modern, feature-rich portfolio and blog platform built with Next.js 13, React, and TypeScript. Featuring an AI chat assistant, multilingual support, and interactive user engagement features.

## ✨ Key Features

- 🤖 AI Chat Assistant for personalized interaction
- 🌍 Multi-language Support with i18next
- 🎨 Modern, responsive design with dark/light mode
- 📱 Mobile-first approach
- 📝 Interactive Blog Platform
  - 💫 Content Rating System
  - 🔖 Bookmark/Save Feature
  - 💭 Comments Section
  - 🔄 Related Posts
- 💼 Dynamic Project Showcase
- 🎯 About Page with Skills Display
- 🌙 Theme Customization
- 📊 Interactive Charts and Data Visualization

## 🛠️ Tech Stack

- **Framework:** Next.js 13
- **Language:** TypeScript
- **Styling:** Tailwind CSS
- **UI Components:** 
  - shadcn/ui
  - Radix UI
  - Lucide Icons
- **State Management:** Zustand
- **Charts:** Recharts
- **Forms:** React Hook Form
- **Validation:** Zod
- **Internationalization:** i18next
- **Animation:** Framer Motion

## 🚀 Getting Started

1. Clone the repository:
   ```bash
   git clone https://github.com/Ayyubiy90/ai-powered-blog-and-portfolio-site.git
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

## 📁 Project Structure

```
├── app/                    # Next.js app directory
│   ├── about/             # About page
│   ├── blog/              # Blog pages & posts
│   ├── bookmarks/         # Saved content
│   ├── chat/              # AI chat interface
│   ├── projects/          # Projects showcase
│   └── layout.tsx         # Root layout
├── components/            # React components
│   ├── about/             # About page components
│   ├── blog/              # Blog components
│   ├── chat/              # Chat components
│   ├── ui/                # UI components
│   └── providers.tsx      # Context providers
├── lib/                   # Utility functions
│   ├── store/             # Zustand stores
│   ├── translations/      # i18n configurations
│   └── utils.ts           # Helper functions
├── hooks/                 # Custom React hooks
└── public/                # Static assets
```

## 🎨 Features in Detail

### AI Chat Assistant
- Natural language interaction
- Project and content recommendations
- Context-aware responses
- Markdown support

### Blog Platform
- 📝 Rich text content
- 🔍 Content search
- 🏷️ Topic categorization
- 📊 Rating system
- 💾 Bookmark functionality
- 💬 Interactive comments
- 🔗 Social sharing

### Project Showcase
- 📸 Project screenshots:

  ![Portfolio Preview](/Screenshot%20(46).png)
- 🔗 Live demo links: [Preview](https://abdullah-ai-portfolio-blog.vercel.app/)
- 💻 GitHub repository links
- 🏷️ Technology tags

### Internationalization
- 🌐 Multiple language support
- 🔄 Dynamic content translation
- 📝 Localized UI elements

## 🛠️ Customization

1. Update personal information:
   - Modify `lib/chat-data.ts` for AI responses
   - Update `components/about/about-content.tsx` for about page
   - Edit `app/projects/page.tsx` for project showcase

2. Blog Management:
   - Add posts in `app/blog/posts/`
   - Configure related posts in `components/blog/related-posts.tsx`

3. Styling:
   - Theme customization in `app/globals.css`
   - Component styling in respective component files

4. Language:
   - Add translations in `lib/translations/`
   - Configure language settings in `lib/translation.ts`

## 📄 License

MIT License - feel free to use this project for your own portfolio!

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.
