# Task Manager App

A modern Task Manager built with **React** and **Vite**, featuring task management, theming, and drag-and-drop functionality using `@dnd-kit/core`.

---

## Features

### 1. Basic Features

- **Add Tasks**: Users can add new tasks.
- **Mark Tasks as Completed**: Toggle tasks between pending and completed.
- **Delete Tasks**: Remove tasks individually.
- **Filter Tasks**: View All, Completed, or Pending tasks.
- **Persist Tasks**: Tasks are saved in Local Storage to retain data across sessions.

### 2. React Challenges

- **Custom Hooks**: `useLocalStorage` hook manages local storage operations efficiently.
- **Context API**: Task data is managed via React Context, avoiding prop drilling.
- **Performance Optimization**: `React.memo`, `useCallback`, and `useMemo` are used to optimize performance.
- **Form Validation**: Prevent users from adding empty tasks.

### 3. CSS Challenges

- **Theming**: Light/Dark mode toggle for better UX.
- **Animations**: Smooth CSS transitions for adding and removing tasks.
- **Responsive Design**: Mobile-first approach ensures usability across devices.
- **Drag-and-Drop**: Tasks can be reordered via **@dnd-kit/core**.

---

## Installation

```bash
# Clone the repository
git clone https://github.com/yourusername/task-manager-app.git

# Navigate into project directory
cd task-manager-app

# Install dependencies
npm install

# Start the development server
npm run dev
```
