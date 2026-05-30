/**
 * Types and Interfaces for Portfolio
 */

export interface Project {
  id: string;
  title: string;
  description: string;
  problem: string;
  solution: string;
  technologies: string[];
  businessImpact: string;
  demoUrl: string;
  githubUrl: string;
  image: string;
  category: string;
}

export interface Service {
  id: string;
  title: string;
  description: string;
  iconName: string;
  features: string[];
}

export interface Skill {
  name: string;
  category: 'core' | 'ai' | 'integration' | 'other';
  proficiency: number; // 0 to 100
  iconName: string;
}

export interface TimelineEvent {
  year: string;
  role: string;
  company: string;
  description: string;
  achievements: string[];
  iconName: string;
}

export interface Testimonial {
  name: string;
  role: string;
  company: string;
  text: string;
  avatarUrl: string;
  rating: number;
}
