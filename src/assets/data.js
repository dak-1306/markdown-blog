const posts = [
  {
    id: "1",
    title: "Getting Started with React",
    content: `# Getting Started with React

React is a popular JavaScript library for building user interfaces. Here's what you need to know:

## Installation

\`\`\`bash
npx create-react-app my-app
cd my-app
npm start
\`\`\`

## Components

Components are the building blocks of React applications. You can create functional components like this:

\`\`\`javascript
function Welcome(props) {
  return <h1>Hello, {props.name}!</h1>;
}
\`\`\`

React makes it easy to create interactive UIs with reusable components.`,
    img: "https://via.placeholder.com/400x200/61DAFB/000000?text=React",
    author: "John Doe",
    date: "2024-01-15",
    tags: ["react", "javascript", "frontend"],
  },
  {
    id: "2",
    title: "Mastering CSS Grid Layout",
    content: `# Mastering CSS Grid Layout

CSS Grid is a powerful layout system that makes it easy to create complex, responsive layouts.

## Basic Grid Setup

\`\`\`css
.container {
  display: grid;
  grid-template-columns: 1fr 2fr 1fr;
  gap: 20px;
}
\`\`\`

## Grid Areas

You can define named grid areas for more semantic layouts:

\`\`\`css
.layout {
  display: grid;
  grid-template-areas: 
    "header header header"
    "sidebar content content"
    "footer footer footer";
}
\`\`\`

Grid makes responsive design much more intuitive and powerful.`,
    img: "https://via.placeholder.com/400x200/FF6B6B/ffffff?text=CSS+Grid",
    author: "Jane Smith",
    date: "2024-01-20",
    tags: ["css", "grid", "layout", "responsive"],
  },
  {
    id: "3",
    title: "Node.js Best Practices",
    content: `# Node.js Best Practices

Building robust Node.js applications requires following established patterns and practices.

## Error Handling

Always handle errors properly in your async functions:

\`\`\`javascript
async function fetchData() {
  try {
    const data = await api.getData();
    return data;
  } catch (error) {
    console.error('Failed to fetch data:', error);
    throw error;
  }
}
\`\`\`

## Environment Variables

Use environment variables for configuration:

\`\`\`javascript
const port = process.env.PORT || 3000;
const dbUrl = process.env.DATABASE_URL;
\`\`\`

Following these practices will make your Node.js applications more maintainable and reliable.`,
    img: "https://via.placeholder.com/400x200/68A063/ffffff?text=Node.js",
    author: "Mike Johnson",
    date: "2024-01-25",
    tags: ["nodejs", "backend", "javascript", "best-practices"],
  },
];
export default posts;
