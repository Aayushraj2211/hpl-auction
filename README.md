# 🏏 HPL Auction | Command Center

[![Next.js](https://img.shields.io/badge/Next.js-14.2-black?style=for-the-badge&logo=next.js)](https://nextjs.org/)
[![React](https://img.shields.io/badge/React-18-blue?style=for-the-badge&logo=react)](https://react.dev/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.0-3178C6?style=for-the-badge&logo=typescript)](https://www.typescriptlang.org/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-3.4-38B2AC?style=for-the-badge&logo=tailwind-css)](https://tailwindcss.com/)
[![Supabase](https://img.shields.io/badge/Supabase-Database%20%26%20SSR-3ECF8E?style=for-the-badge&logo=supabase)](https://supabase.com/)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg?style=for-the-badge)](https://opensource.org/licenses/MIT)

> **HPL Auction** is a full-stack, real-time command center and auction management platform built for the **Hostel Premier League (HPL)**. It streamlines live player bidding, team purse calculations, multi-sport roster tracking, and house formation with instantaneous database synchronization.

---

## 🌟 Key Features

- **⚡ Live Auction Command Center**
  - Instant lookup by **Group ID** (e.g., `G01`) or player **Registration Number**.
  - Dynamic winning bid entry with house selection and real-time purse validation.
  - One-click actions: **Confirm Sold**, **Update Sold Details**, and **Mark Unsold / Undo Sale**.
  - Automatic transitive group conflict resolution (locks overlapping multi-sport registrations).

- **🏆 House & Budget Management**
  - Live purse tracker across competing houses (*Tons Tigers, Shimsha Panther, Orsang Leopards, Ken Cheetas, Kabini Lynx, Harangi Jaguars, Arkavati Lions*).
  - Detailed house breakdown with remaining budgets, player headcounts, and sport-wise allocations.
  - Interactive roster inspection modal with sport categorization.

- **📊 Student & Roster Registry**
  - Unified view of all registered student-athletes, categorized by sports and current acquisition status.
  - Real-time status indicators (*Available, Sold, Unsold*).

- **🎾 Multi-Sport Registry**
  - Live registration counters for Cricket, Basketball, Badminton, Chess, Table Tennis, and custom tournament sports.

- **🎨 Modern Light-First UI & Theming**
  - Clean, crisp, high-contrast **Light Theme** by default with curated slate-neutral aesthetics and vibrant accent palettes.
  - Persistent **Dark Mode** toggle powered by `next/themes` local state and CSS custom properties.
  - Responsive layout optimized for auction projectors, admin desktops, and mobile displays.

- **⚙️ Tournament Controls & Settings**
  - Global base purse configuration across all participating houses.
  - Safe data reset controls with confirmation protection.

---

## 🛠️ Tech Stack

- **Framework**: [Next.js 14](https://nextjs.org/) (App Router, Server & Client Components)
- **Language**: [TypeScript](https://www.typescriptlang.org/)
- **Styling**: [Tailwind CSS](https://tailwindcss.com/) + Custom CSS Variable Design System
- **Database & Backend**: [Supabase](https://supabase.com/) (`@supabase/supabase-js`, `@supabase/ssr`)
- **Icons**: [Lucide React](https://lucide.dev/)
- **Fonts**: Inter & Oswald (via `next/font/google`)

---

## 📂 Project Structure

```text
hpl-auction/
├── app/
│   ├── auction/           # Live bidding command center
│   ├── dashboard/         # Overview metrics, house summaries & activity feed
│   ├── houses/            # House profiles, purse cards & modal rosters
│   ├── settings/          # Global budget settings & database reset tools
│   ├── special-auction/   # Marquee draft & special bidding tiers
│   ├── sports/            # Sports registry & live participant counts
│   ├── students/          # Student-athlete database & registration table
│   ├── globals.css        # CSS variables for light & dark theme tokens
│   ├── layout.tsx         # Root layout with sidebar navigation & theme provider
│   └── page.tsx           # Entry redirect to dashboard
├── components/
│   ├── PageHeader.tsx     # Reusable sticky page header with accent gradient
│   ├── Sidebar.tsx        # Navigation sidebar with theme switcher
│   └── ThemeProvider.tsx  # Light/Dark theme provider with localStorage sync
├── utils/
│   └── supabase/          # Supabase client and SSR server instances
│       ├── client.ts
│       └── server.ts
├── .env.example           # Example environment variables template
├── .eslintrc.json         # ESLint configuration
├── LICENSE                # MIT License
├── package.json           # Project manifest & scripts
├── tailwind.config.ts     # Tailwind theme and color mappings
└── tsconfig.json          # TypeScript compiler configuration
```

---

## 🚀 Getting Started

### Prerequisites

Ensure you have the following installed:
- [Node.js](https://nodejs.org/) (v18.17.0 or higher recommended)
- [npm](https://www.npmjs.com/) or [yarn](https://yarnpkg.com/) / [pnpm](https://pnpm.io/)
- A [Supabase](https://supabase.com/) project

### 1. Clone the Repository

```bash
git clone https://github.com/Aayushraj2211/hpl-auction.git
cd hpl-auction
```

### 2. Install Dependencies

```bash
npm install
```

### 3. Setup Environment Variables

Copy `.env.example` to create `.env.local`:

```bash
cp .env.example .env.local
```

Add your Supabase project credentials in `.env.local`:

```env
NEXT_PUBLIC_SUPABASE_URL=https://your-supabase-project.supabase.co
NEXT_PUBLIC_SUPABASE_ANON_KEY=your-supabase-anon-key
```

### 4. Database Schema (Supabase)

Make sure your Supabase project contains the following tables:

#### `houses`
- `id` (text, primary key) — e.g. `'tons-tigers'`, `'shimsha-panther'`, etc.
- `name` (text)
- `budget` (numeric)

#### `auction_groups`
- `id` (uuid or int, primary key)
- `group_id` (text) — e.g. `'G01'`
- `sport` (text)
- `category` (text)
- `base_price` (numeric)
- `player_1` .. `player_7` (text)
- `reg_no_1` .. `reg_no_7` (text)
- `sold_status` (text) — `'Available'`, `'Sold'`, `'Unsold'`
- `sold_to_house` (text, references `houses.id`)
- `sold_amount` (numeric)
- `sold_at` (timestamptz)

#### `students`
- `id` (uuid or int, primary key)
- `name` (text)
- `roll_no` (text)
- `sports` (text[])

### 5. Run Development Server

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser to view the application.

---

## 📜 Available Scripts

| Command | Description |
| :--- | :--- |
| `npm run dev` | Starts the Next.js local development server on port 3000 |
| `npm run build` | Builds the optimized production application |
| `npm run start` | Starts the Next.js production server |
| `npm run lint` | Runs ESLint to check for code quality and syntax issues |

---

## 🔒 Push & Security Readiness

- ✅ **License Verified**: Configured with standard **MIT License** in both `LICENSE` and `package.json`.
- ✅ **No Exposed Secrets**: Zero hardcoded API keys or private credentials. Supabase connection relies strictly on environment variables (`.env.local`).
- ✅ **Git Hygiene**: Comprehensive `.gitignore` protecting build artifacts (`.next/`), dependencies (`node_modules/`), and environment files (`.env*`).
- ✅ **Template Included**: Clean `.env.example` provided for seamless setup by collaborators.
- ✅ **Clean Type & Lint Checks**: Code checked for valid imports, state declarations, and component hierarchy.

---

## 📄 License

Distributed under the **MIT License**. See [`LICENSE`](./LICENSE) for more information.

```
Copyright (c) 2026 Aayush Raj
```

---

## 👤 Author

**Aayush Raj**
- GitHub: [@Aayushraj2211](https://github.com/Aayushraj2211)
- Project: [HPL Auction](https://github.com/Aayushraj2211/hpl-auction)
