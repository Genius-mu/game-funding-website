# Pixel Pledge - Game Funding Platform 🕹️💰

[![React](https://img.shields.io/badge/React-19.x-brightgreen)](https://react.dev)
[![Vite](https://img.shields.io/badge/Vite-8.x-blue)](https://vitejs.dev)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-4.x-purple)](https://tailwindcss.com)
[![React Router](https://img.shields.io/badge/React_Router-7.x-red)](https://reactrouter.com)

**Pixel Pledge** is a modern, responsive crowdfunding platform designed specifically for **indie game developers**. Help turn innovative game ideas into reality with community-driven funding. Features trending projects, featured campaigns, intelligent project discovery, and developer tools.

## ✨ Features

- 🎮 **Trending Projects** - Discover hot campaigns (Neon Prophecy, Fortnite Arena, Cyber Nexus)
- 🏆 **Featured Games** - Highlight campaigns like "Mario Kart - Kingdom Battle"
- 🔍 **Smart Search** - Find games by category, genre, studio
- 📊 **Funding Analytics** - Real-time pledge tracking, backer stats, progress bars
- 💬 **Community Tools** - Follow campaigns, community management
- 📈 **Developer Dashboard** - Campaign insights, player behavior analytics
- 📱 **Fully Responsive** - Desktop, tablet, mobile optimized
- 🎨 **Smooth Animations** - Framer Motion transitions and hover effects

## 🛠 Tech Stack

```
Frontend:
├── React 19.2.4
├── Vite 8.0.1
├── React Router DOM 7.14.1
├── Tailwind CSS 4.2.2 (@tailwindcss/vite)
├── Lucide React 1.7.0 (Icons)
└── Vanilla CSS + Modern CSS features
```

## 📁 Project Structure

```
game-funding/
├── public/                 # Static assets (favicon, icons)
├── src/
│   ├── assets/             # Images (hero.png, react.svg, vite.svg)
│   ├── components/         # Reusable UI
│   │   ├── Header.jsx      # Navigation with mobile menu
│   │   └── Footer.jsx      # Footer component
│   ├── page/               # Page components
│   │   ├── Home.jsx        # PixelPledge landing page
│   │   ├── HowItWorks.jsx  # Platform explanation
│   │   ├── Find.jsx        # Project search
│   │   ├── FollowCampaign.jsx # Campaign tracking
│   │   └── About.jsx       # About page
│   ├── App.jsx             # Router + Layout
│   ├── App.css             # Global styles
│   ├── index.css           # Tailwind imports
│   └── main.jsx            # Entry point
├── package.json            # Dependencies
├── vite.config.js          # Vite config
└── README.md              # You're reading it! 📖
```

## 🚀 Quick Start

### Prerequisites

- Node.js 18+
- npm / pnpm / yarn

### Installation

```bash
# Clone / Navigate to project
cd "c:/Users/MY PC/Documents/1st sites/game-funding"

# Install dependencies
npm install

# Start dev server
npm run dev
```

**Open [http://localhost:5173](http://localhost:5173)** 🚀

### Build Commands

```bash
npm run dev     # Development server
npm run build   # Production build
npm run preview # Preview production build
npm run lint    # Lint code
```

## 📱 Pages Overview

| Route              | Component                | Description                                          |
| ------------------ | ------------------------ | ---------------------------------------------------- |
| `/`                | `Home.jsx` (PixelPledge) | Hero, featured game, trending projects, testimonials |
| `/how-it-works`    | `HowItWorks.jsx`         | Platform mechanics & funding process                 |
| `/search`          | `Find.jsx`               | Search & discover projects                           |
| `/follow-campaign` | `FollowCampaign.jsx`     | Track specific campaigns                             |
| `/about`           | `About.jsx`              | About Pixel Pledge                                   |

## 🎨 UI/UX Highlights

- **Glassmorphism Navigation** - Backdrop blur effects
- **Gradient Cards** - Modern project showcases
- **Smooth Scroll Animations** - Intersection Observer
- **Mobile-First** - Responsive hamburger menu
- **Interactive Hover Effects** - Scale, shadows, underlines
- **Progress Bars** - Real-time funding visualization
- **Emoji Icons** - Playful gaming theme 🎮

## 🧪 Sample Data (Home Page)

**Trending Projects:**

- Neon Prophecy (Action RPG) - 62% funded
- Fortnite Arena (Battle Royale) - 45% funded
- Cyber Nexus (Puzzle Game) - 72% funded

**Featured:** Mario Kart - Kingdom Battle by Nova Studios

## 🤝 Contributing

1. Fork the repo
2. Create feature branch (`git checkout -b feature/amazing-game-campaign`)
3. Commit changes (`git commit -am 'Add amazing campaign page'`)
4. Push (`git push origin feature/amazing-game-campaign`)
5. Open Pull Request

## 📄 License

This project is [MIT](LICENSE) licensed - free to use, modify, and distribute.

---

**Made with ❤️ for indie game developers**  
_Pixel Pledge - Where game ideas meet community funding_

⭐ **Star us on GitHub if you find it useful!**
