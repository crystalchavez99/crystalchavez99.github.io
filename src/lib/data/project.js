export const projects = [
  {
    id: 1,
    title: 'Portfolio Website',
    description: 'This site! Built with SvelteKit and deployed on Vercel. Designed from scratch with a custom aesthetic — editorial typography, scroll animations, and a fully responsive layout.',
    tech: ['Svelte', 'SvelteKit', 'CSS', 'Vercel'],
    status: 'live',
    category: 'frontend',
    github: 'https://github.com',
    demo: '/',
    year: '2025',
  },
  {
    id: 2,
    title: 'Full Stack Task Manager',
    description: 'A full-stack CRUD application for managing tasks and projects. Features user authentication, real-time updates, and a clean dashboard UI. Built as a capstone during App Academy.',
    tech: ['JavaScript', 'HTML', 'CSS', 'Node.js', 'PostgreSQL'],
    status: 'rebuilding',
    category: 'fullstack',
    github: 'https://github.com',
    demo: null,
    year: '2022',
  },
  {
    id: 3,
    title: 'Cloud-Ready REST API',
    description: 'A Spring Boot REST API with full CRUD operations, built during the Netflix Pathways externship. Includes CI/CD pipeline via CircleCI and data access with MySQL and Cassandra.',
    tech: ['Java', 'Spring Boot', 'MySQL', 'Cassandra', 'CircleCI'],
    status: 'archived',
    category: 'backend',
    github: 'https://github.com',
    demo: null,
    year: '2023',
  },
  {
    id: 4,
    title: 'Angular Component Library',
    description: 'A reusable component library for enterprise .NET + Angular applications. Includes form inputs, data tables, and modals built to Wilson Language Training design standards.',
    tech: ['Angular', 'TypeScript', 'C#', 'ASP.NET Core'],
    status: 'in-progress',
    category: 'frontend',
    github: null,
    demo: null,
    year: '2024',
  },
];

export const categories = [
  { value: 'all', label: 'All Projects' },
  { value: 'frontend', label: 'Frontend' },
  { value: 'fullstack', label: 'Full Stack' },
  { value: 'backend', label: 'Backend' },
];

export const statusConfig = {
  live:           { label: 'Live',        color: '#0F6E56', bg: '#E1F5EE' },
  'in-progress':  { label: 'In Progress', color: '#854F0B', bg: '#FAEEDA' },
  rebuilding:     { label: 'Rebuilding',  color: '#185FA5', bg: '#E6F1FB' },
  archived:       { label: 'Archived',    color: '#5F5E5A', bg: '#F1EFE8' },
};
