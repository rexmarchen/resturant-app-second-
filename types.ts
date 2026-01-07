export interface Testimonial {
  id: number;
  name: string;
  location: string;
  text: string;
  rating: number;
  type?: string;
}

export interface BlogPost {
  id: number;
  title: string;
  excerpt: string;
  date: string;
  category: string;
}

export interface MenuItem {
  name: string;
  description: string;
  price?: string;
}

export enum NavLinkType {
  HOME = '/',
  ABOUT = '/about',
  SERVICES = '/services',
  CONTACT = '/contact',
  TESTIMONIALS = '/testimonials',
  BLOG = '/blog'
}