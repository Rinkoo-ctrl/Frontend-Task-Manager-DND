# Task Manager App

A modern **Task Manager** built with **React** and **Vite**, featuring task management, theming, and drag-and-drop functionality using **@dnd-kit/core**.

**Live Demo:** [https://neon-tarsier-08660f.netlify.app/](https://neon-tarsier-08660f.netlify.app/)

---

## 🚀 Features

### Basic Features

- **Add Tasks**: Easily add new tasks.
- **Mark as Completed**: Toggle tasks between pending and completed.
- **Delete Tasks**: Remove tasks individually.
- **Filter Tasks**: View All, Completed, or Pending tasks.
- **Persist Tasks**: Tasks are saved in **Local Storage** to retain data across sessions.

### React Challenges

- **Custom Hooks**: `useLocalStorage` manages local storage operations efficiently.
- **Context API**: Task data is managed via React Context, avoiding prop drilling.
- **Performance Optimization**: Utilizes `React.memo`, `useCallback`, and `useMemo`.
- **Form Validation**: Prevents users from adding empty tasks.

### CSS Challenges

- **Theming**: Light/Dark mode toggle for better UX.
- **Animations**: Smooth CSS transitions for adding and removing tasks.
- **Responsive Design**: Mobile-first approach ensures usability on all devices.
- **Drag-and-Drop**: Tasks can be reordered using **@dnd-kit/core** (replaced deprecated `react-beautiful-dnd`).

---

## ⚡ Installation

```bash
# Clone the repository
git clone https://github.com/yourusername/task-manager-app.git

# Navigate into the project folder
cd task-manager-app

# Install dependencies
npm install

# Start the development server
npm run dev
```
