export interface ServiceItem {
  id: string;
  title: string;
  iconName: string;
  description: string;
  longDescription: string;
}

export interface ProjectItem {
  id: string;
  title: string;
  category: string;
  description: string;
  bullets: string[];
  imageUrl: string;
  projecturl: string;
  type: 'website' | 'application';
}

export interface TeamMember {
  id: string;
  name: string;
  role: string;
  description: string;
  imageUrl: string;
  linkedinUrl: string;
}

export interface Testimonial {
  id: string;
  text: string;
  author: string;
  company: string;
  stars: number;
}

export interface FAQItem {
  id: string;
  question: string;
  answer: string;
}
