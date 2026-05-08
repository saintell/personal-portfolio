import { LucideIcon } from 'lucide-react';

export interface TechItem {
  name: string;
  description: string;
}

export interface TechCategory {
  title: string;
  items: TechItem[];
  icon: LucideIcon;
}

export interface Project {
  title: string;
  description: string;
  longDescription?: string;
  tags: string[];
  category: string;
}

export interface Experience {
  role: string;
  company: string;
  period: string;
  description: string;
  type: 'work' | 'education';
}
