export interface Project {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  longDescription: string;
  techStack: string[];
  keyOutcome: string;
  metrics: { label: string; value: string }[];
  type: 'automation' | 'dashboard' | 'bi';
  iconName: string;
  sampleData?: any[];
}

export interface SkillCategory {
  category: string;
  icon: string;
  description: string;
  skills: {
  name: string;
  description: string;
  badges: string[];
}[];
}

export interface Certification {
  title: string;
  issuer: string;
  date?: string;
  credentialId?: string;
  skillsCovered: string[];
  icon: string;
}

export interface ExperienceItem {
  role: string;
  company: string;
  type: string;
  period: string;
  location: string;
  responsibilities: string[];
  highlights: string[];
}

export interface EducationItem {
  degree: string;
  institution: string;
  campus: string;
  expectedGraduation: string;
  status: string;
  highlights: string[];
}

export interface AchievementStat {
  label: string;
  value: string;
  description: string;
  icon: string;
  badge: string;
}

export interface ContactInfo {
  email: string;
  github: string;
  linkedin: string;
  location: string;
}
