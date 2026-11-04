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

export type ProjectFilterCategory = 'ai' | 'enterprise' | 'data';

export interface Project {
  title: string;
  description: string;
  longDescription?: string;
  tags: string[];
  category: string;
  filterCategory: ProjectFilterCategory;
  architecture: string;
  challenge: string;
  solution: string;
  impact: string;
  highlightMetric: string;
  featured?: boolean;
}

export interface Experience {
  role: string;
  company: string;
  period: string;
  description: string;
  type: 'work' | 'education';
  technologies?: string[];
}
