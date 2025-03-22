export const NAVLINKS = [
  { title: 'Home', path: '/' },
  { title: 'About', path: '/about' },
  { title: 'Courses', path: '/courses' },
  { title: 'Contact', path: '/contact' },
];

export interface Course {
  id: string;
  title: string;
  category: string;
  categoryColor: string;
  description: string;
  duration: string;
  imageUrl: string;
  backgroundColor: string;
}

export const COURSES: Course[] = [
  {
    id: "ai-business",
    title: "AI for Business Decision Making",
    category: "AI & Machine Learning",
    categoryColor: "primary",
    description: "Students learn to leverage AI tools for enhanced business strategy, predictive analytics, and decision support.",
    duration: "8-week course",
    imageUrl: "https://images.unsplash.com/photo-1591453089816-0fbb971b454c?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80",
    backgroundColor: "bg-primary-600"
  },
  {
    id: "supply-chain",
    title: "Supply Chain Automation with Excel/VBA",
    category: "Supply Chain",
    categoryColor: "secondary",
    description: "Practical skills in automating supply chain processes using Excel and VBA for increased efficiency and analysis.",
    duration: "6-week course",
    imageUrl: "https://images.unsplash.com/photo-1566576912321-d58ddd7a6088?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80",
    backgroundColor: "bg-emerald-500"
  },
  {
    id: "international-business",
    title: "International Business Strategy",
    category: "Global Business",
    categoryColor: "accent",
    description: "Develop cross-cultural business acumen and learn to navigate global markets with real-world case studies.",
    duration: "10-week course",
    imageUrl: "https://images.unsplash.com/photo-1557804506-669a67965ba0?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80",
    backgroundColor: "bg-amber-500"
  },
  {
    id: "ml-nontechnical",
    title: "Machine Learning for Non-Technical Students",
    category: "AI & Machine Learning",
    categoryColor: "primary",
    description: "A beginner-friendly introduction to machine learning concepts and applications in business contexts.",
    duration: "8-week course",
    imageUrl: "https://images.unsplash.com/photo-1515378791036-0648a3ef77b2?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80",
    backgroundColor: "bg-indigo-600"
  },
  {
    id: "global-marketing",
    title: "Global Marketing in the AI Era",
    category: "Marketing & AI",
    categoryColor: "marketing",
    description: "Explore how AI is transforming international marketing strategies and customer engagement.",
    duration: "7-week course",
    imageUrl: "https://images.unsplash.com/photo-1551434678-e076c223a692?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80",
    backgroundColor: "bg-rose-500"
  },
  {
    id: "excel-business",
    title: "Advanced Excel for Business Analysis",
    category: "Business Analytics",
    categoryColor: "analytics",
    description: "Master complex Excel functions and tools for powerful business data analysis and visualization.",
    duration: "5-week course",
    imageUrl: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80",
    backgroundColor: "bg-cyan-600"
  }
];

export interface Testimonial {
  id: string;
  name: string;
  role: string;
  institution: string;
  imageSrc: string;
  quote: string;
  rating: number;
}

export const TESTIMONIALS: Testimonial[] = [
  {
    id: "1",
    name: "Prof. Sarah Johnson",
    role: "Business School Director",
    institution: "University of Innovation",
    imageSrc: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&auto=format&fit=crop&w=150&q=80",
    quote: "Saclai has revolutionized how we approach business education. Their AI for Business course has become one of our most popular offerings, with students consistently reporting that it gives them a competitive edge in internship and job interviews.",
    rating: 5
  },
  {
    id: "2",
    name: "Dr. Michael Chen",
    role: "Department Chair, Supply Chain Management",
    institution: "Global Business Academy",
    imageSrc: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&auto=format&fit=crop&w=150&q=80",
    quote: "The Supply Chain Automation course provided our students with highly practical skills that are in-demand across industries. The Excel/VBA automation techniques they learned are directly applicable to real business challenges.",
    rating: 5
  },
  {
    id: "3",
    name: "Prof. Elena Rodriguez",
    role: "Associate Dean",
    institution: "International Business School",
    imageSrc: "https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-1.2.1&auto=format&fit=crop&w=150&q=80",
    quote: "What sets Saclai apart is their commitment to blending AI with international business concepts. This dual focus prepares our students for the increasingly globalized and technologically advanced business landscape they'll enter.",
    rating: 5
  }
];

export const PARTNERS = [
  { id: "1", name: "University A" },
  { id: "2", name: "Business School B" },
  { id: "3", name: "College C" },
  { id: "4", name: "Institute D" }
];
