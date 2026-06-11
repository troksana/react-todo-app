# Modern React Todo App

A sleek, responsive, and modern Todo application built with React, styled using Tailwind CSS, and powered by Lucide Icons. The application fetches initial tasks from an external API and features robust client-side state management, responsive designs, loading indicators, and active input validation.

##  Features

- **API Integration:** Fetches initial todo tasks dynamically from the JSONPlaceholder API.
- **Client-side State Management:** Add new tasks locally and toggle their completion status dynamically.
- **Input Validation:** Built-in safeguards that prevent adding empty items or tasks exceeding 30 characters with instant user feedback.
- **Modern UI/UX:** Features a beautiful gradient header, responsive layouts, automated loading indicators, error boundaries, and interactive custom checkboxes.
- **Responsive Layout:** Designed from the ground up using Tailwind CSS to look great on desktop and mobile viewports alike.

##  Tech Stack

- **Frontend:** React (Hooks used: `useState`, `useEffect`)
- **Styling:** Tailwind CSS & Tailwind Directives
- **Icons:** Lucide React
- **Data Source:** JSONPlaceholder API

Follow these instructions to get a copy of the project up and running on your local machine for development and testing purposes.

### Prerequisites

You need to have **Node.js** and **Yarn** (or npm) installed on your system.
- Download Node.js: [nodejs.org](https://nodejs.org/)
- Install Yarn (if not already present): `npm install --global yarn`

### Installation & Running

1. **Clone the repository:**
   
   ```bash
   git clone [https://github.com/YOUR_GITHUB_USERNAME/react-todo-app.git](https://github.com/YOUR_GITHUB_USERNAME/react-todo-app.git)

3. **Navigate into the project directory:**

   ```bash
   cd react-todoapp

2. **Install all dependencies:**
This command reads your package.json and yarn.lock files to safely install exact identical versions of packages (including React, Tailwind CSS, and Lucide Icons):

   ```bash
   yarn install
3. **Start the local development server:**

   ```bash
   yarn start
