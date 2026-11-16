export interface Screenshot {
  src: string;
  alt: string;
}

export interface Project {
  slug: string;
  title: string;
  category: string;
  description: string;
  architecture?: string[];
  technologies: string[];
  github?: string;
  demo?: string;
  screenshots?: Screenshot[];
  featured: boolean;
  status: "Completed" | "In Progress";
}

export interface Experience {
  company: string;
  title: string;
  start: string;
  end: string;
  bullets: string[];
  technologies: string[];
}

export interface Education {
  degree: string;
  year: string;
  focus: string;
}

export interface SkillGroup {
  title: string;
  skills: string[];
}

export interface LearningItem {
  title: string;
  description: string;
}
