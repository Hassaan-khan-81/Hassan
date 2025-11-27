import { Bot, Workflow, Cpu, Zap, Database, Globe, Layers, Mail, Linkedin, Twitter } from 'lucide-react';

export const SOCIAL_LINKS = [
  { name: 'LinkedIn', url: 'https://linkedin.com', icon: Linkedin },
  { name: 'Twitter', url: 'https://twitter.com', icon: Twitter },
  { name: 'Email', url: 'mailto:hassaan@example.com', icon: Mail },
];

export const SKILLS = [
  {
    title: "AI Agents",
    description: "Building autonomous agents that think, plan, and execute complex tasks.",
    icon: Bot,
    color: "text-cyan-400",
    bgColor: "bg-cyan-400/10"
  },
  {
    title: "n8n Automation",
    description: "Mastering n8n to connect apps and automate workflows without limits.",
    icon: Workflow,
    color: "text-pink-400",
    bgColor: "bg-pink-400/10"
  },
  {
    title: "Make.com",
    description: "Designing seamless integration scenarios on Make.com for business efficiency.",
    icon: Zap,
    color: "text-purple-400",
    bgColor: "bg-purple-400/10"
  },
  {
    title: "CRM Optimization",
    description: "Streamlining customer relationship data flows for maximum conversion.",
    icon: Database,
    color: "text-emerald-400",
    bgColor: "bg-emerald-400/10"
  }
];

// EDIT THIS ARRAY TO ADD NEW PROJECTS
export const PROJECTS = [
  {
    id: 1,
    title: "Support Agent V2",
    category: "AI Automation",
    description: "An intelligent customer support bot capable of handling 80% of Tier 1 queries autonomously using RAG.",
    image: "https://picsum.photos/seed/project1/800/600",
    tags: ["Python", "OpenAI", "Pinecone"],
    link: "https://example.com"
  },
  {
    id: 2,
    title: "Lead Gen Pipeline",
    category: "n8n Workflow",
    description: "Automated lead scraping, qualification, and outreach system built entirely on n8n.",
    image: "https://picsum.photos/seed/project2/800/600",
    tags: ["n8n", "HubSpot", "LinkedIn"],
    link: "https://example.com"
  },
  {
    id: 3,
    title: "E-com Inventory Sync",
    category: "Make.com",
    description: "Real-time inventory synchronization between Shopify, Amazon, and local ERP.",
    image: "https://picsum.photos/seed/project3/800/600",
    tags: ["Make.com", "Shopify", "Airtable"],
    link: "https://example.com"
  },
  {
    id: 4,
    title: "Content Generator",
    category: "AI Tools",
    description: "A tool that generates SEO-optimized blog posts based on trending topics.",
    image: "https://picsum.photos/seed/project4/800/600",
    tags: ["React", "Gemini API", "SEO"],
    link: "https://example.com"
  }
];