import { type ReactNode } from "react";

export interface RootProps {
  children: ReactNode;
}

export interface TitleProps {
  children: ReactNode;
  filePath?: string;
  id?: string;
}

export interface Work {
  from: string;
  to: string;
  position: string;
  company: string;
  description: string;
  technologies: string[];
  workProjects: { title: string; link: string }[];
}

export interface WorkProps extends Work {}

export interface Project {
  title: string;
  description: string;
  link: { title: string; url: string };
  technologies: string[];
}

export interface ProjectProps extends Project {
  index: number;
}
