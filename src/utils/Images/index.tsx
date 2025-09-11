
// reservation Images 

import ReservationImg1 from "../Images/reservation1.png"
import ReservationImg2 from "../Images/reservation2.png"
import ReservationImg3 from "../Images/reservation3.png"
import ReservationImg4 from "../Images/reservation4.png"
import ReservationImg5 from "../Images/reservation5.png"

export const ReservationImages = [
    ReservationImg1,
    ReservationImg2,
    ReservationImg3,
    ReservationImg4,
    ReservationImg5
    ]



    // Testimonial 

    interface Testimonial {
  id: number;
  category: string;
  content: string;
  author: string;
  position: string;
  company?: string;
  rating: number;
  avatar?: string;
  metrics?: {
    improvement: string;
    timeframe: string;
    satisfaction: number;
  };
}

const testimonials: Testimonial[] = [
  {
    id: 1,
    category: "Product Development",
    content: "Working with this company was a game changer for us. Their full-stack development team transformed our concept into a polished product ahead of schedule. The attention to detail in UI/UX made the app intuitive, and their security expertise gave us peace of mind knowing sensitive data was safe.",
    author: "Rahul Mehta",
    position: "Healthcare Startup Founder",
    rating: 5,
    metrics: {
      improvement: "300% faster deployment",
      timeframe: "6 months",
      satisfaction: 98
    }
  },
  {
    id: 2,
    category: "Defense & Security",
    content: "In our sector, security is non-negotiable. The cybersecurity framework implemented exceeded government compliance standards and strengthened our national defense operations. Their team is highly reliable and mission-driven.",
    author: "Col. Arvind Singh",
    position: "Defense IT Director",
    rating: 5,
    metrics: {
      improvement: "Zero security breaches",
      timeframe: "2 years",
      satisfaction: 100
    }
  },
  {
    id: 3,
    category: "Healthcare Solutions",
    content: "Their digital health solutions helped us streamline patient data management and improve care delivery. The platform was secure, scalable, and easy for our staff to adopt.",
    author: "Dr. Neha Sharma",
    position: "Public Health Program Lead",
    rating: 5,
    metrics: {
      improvement: "50% efficiency boost",
      timeframe: "3 months",
      satisfaction: 96
    }
  },
  {
    id: 4,
    category: "Financial Services",
    content: "The team built a secure, compliant fintech platform for us that withstood rigorous audits. Their mix of technical skill and regulatory understanding is rare in the industry.",
    author: "James Wilson",
    position: "CFO",
    company: "Fintech Firm",
    rating: 5,
    metrics: {
      improvement: "99.9% uptime achieved",
      timeframe: "1 year",
      satisfaction: 99
    }
  },
  {
    id: 5,
    category: "Digital Modernization",
    content: "Migrating to the cloud and upgrading our legacy systems felt overwhelming until we partnered with them. They delivered a future-ready infrastructure that cut costs and improved performance across departments.",
    author: "Ananya Rao",
    position: "Government IT Head",
    rating: 5,
    metrics: {
      improvement: "60% cost reduction",
      timeframe: "8 months",
      satisfaction: 94
    }
  },
  {
    id: 6,
    category: "Technology Consulting",
    content: "Their strategic consulting helped us align technology with business goals. From assessment to optimization, they became a true partner in driving innovation.",
    author: "Mark Thompson",
    position: "CEO",
    company: "Retail Solutions",
    rating: 5,
    metrics: {
      improvement: "40% revenue growth",
      timeframe: "12 months",
      satisfaction: 97
    }
  }
];

export default testimonials;


//  AI Chatbot 

interface Message {
  id: string;
  content: string;
  sender: 'user' | 'bot';
  timestamp: Date;
  typing?: boolean;
  liked?: boolean;
  disliked?: boolean;
  copied?: boolean;
}

interface ChatbotProps {
  position?: 'bottom-right' | 'bottom-left' | 'center';
}

const predefinedResponses = {
  greeting: [
    "Hello! I'm here to help you with your technology needs. How can I assist you today?",
    "Hi there! Welcome to our platform. What can I help you explore?",
    "Greetings! I'm your AI assistant. How may I support your journey with us?"
  ],
  services: [
    "We offer comprehensive services including:\n• Custom Software Development\n• Web & Mobile Applications\n• AI/ML Solutions\n• Cloud Infrastructure\n• DevOps & Automation\n• UI/UX Design\n• Digital Marketing\n• E-commerce Solutions\n• Data Analytics\n• Cybersecurity Services\n\nWhich service interests you most?",
    "Our expertise spans:\n• Full-Stack Development (React, Node.js, Python, .NET)\n• Mobile Development (React Native, Flutter, iOS, Android)\n• Cloud Solutions (AWS, Azure, Google Cloud)\n• Database Design (MongoDB, PostgreSQL, MySQL)\n• API Development & Integration\n• DevOps & CI/CD\n\nWhat specific challenge are you looking to solve?"
  ],
  about: [
    "We're a full-service technology company with 5+ years of experience delivering innovative solutions. Our mission is to transform businesses through cutting-edge technology and exceptional service.",
    "Our team of 20+ skilled developers, designers, and consultants specializes in creating scalable, secure solutions for startups to enterprise clients. We've successfully delivered 200+ projects across various industries."
  ],
  contact: [
    "📧 Email: helpdesk@earthconntravels.com\n📞 Phone: +1 (555) 123-4567\n🌐 Website: www.earthconntravels.com\n📍 Address: Head office - 30 Summer St Hagerstown MD, 21740\n\n💬 You can also schedule a free consultation or request a quote directly through this chat!",
    "We're available 24/7 to help! You can:\n• Send us an email for detailed inquiries\n• Call us for immediate assistance\n• Schedule a video consultation\n• Request a project quote\n• Book a technical discovery session\n\nWhat works best for you?"
  ],
  pricing: [
    "Our pricing structure:\n• Hourly Rate: $50-150/hour (based on complexity)\n• Fixed Project: Starting from $5,000\n• Monthly Retainer: $3,000-15,000/month\n• Dedicated Team: $8,000-25,000/month\n\nWe offer free consultations and detailed project estimates. Would you like a custom quote for your project?",
    "We provide transparent, competitive pricing:\n• Web Development: $3,000-50,000\n• Mobile Apps: $10,000-100,000\n• E-commerce: $5,000-75,000\n• Custom Software: $15,000-200,000\n\nPricing depends on features, complexity, and timeline. Let's discuss your specific needs!"
  ],
  security: [
    "Security is our top priority! We implement:\n• SSL/TLS encryption\n• OAuth 2.0 authentication\n• Regular security audits\n• GDPR & CCPA compliance\n• Secure API development\n• Database encryption\n• Regular backups & disaster recovery\n\nWhat security requirements do you have?",
    "Our security framework includes:\n• Multi-factor authentication\n• Role-based access control\n• Regular penetration testing\n• Compliance with industry standards (SOC 2, HIPAA, PCI DSS)\n• 24/7 monitoring\n• Secure cloud infrastructure\n\nHow can we secure your project?"
  ],
  portfolio: [
    "Our recent projects include:\n• E-commerce platform serving 100k+ users\n• Healthcare management system (HIPAA compliant)\n• Financial trading dashboard\n• Educational LMS platform\n• Restaurant delivery app\n• Real estate management system\n\nWould you like to see case studies or demos?",
    "We've built amazing solutions:\n• AI-powered chatbots\n• Blockchain applications\n• IoT dashboards\n• Social networking platforms\n• Inventory management systems\n• CRM & ERP solutions\n\nI can share specific examples relevant to your industry!"
  ],
  technologies: [
    "Our tech stack includes:\n• Frontend: React, Vue.js, Angular, Next.js\n• Backend: Node.js, Python, PHP, .NET, Java\n• Mobile: React Native, Flutter, Swift, Kotlin\n• Databases: MongoDB, PostgreSQL, MySQL, Firebase\n• Cloud: AWS, Azure, Google Cloud\n• DevOps: Docker, Kubernetes, Jenkins, GitHub Actions",
    "We work with cutting-edge technologies:\n• AI/ML: TensorFlow, PyTorch, OpenAI API\n• Blockchain: Ethereum, Solidity, Web3\n• Cloud Native: Microservices, Serverless\n• Real-time: WebSockets, Socket.io\n• Analytics: Google Analytics, Mixpanel\n• Payment: Stripe, PayPal, Square integration"
  ],
  team: [
    "Our experienced team includes:\n• Senior Full-Stack Developers\n• Mobile App Specialists\n• UI/UX Designers\n• DevOps Engineers\n• Project Managers\n• QA Specialists\n• Business Analysts\n\nEach team member has 3-10 years of industry experience!",
    "Meet our experts:\n• Frontend specialists with React/Vue expertise\n• Backend developers proficient in multiple languages\n• Mobile developers for iOS & Android\n• Cloud architects certified in AWS/Azure\n• Design professionals with portfolio of 100+ projects\n\nWe'll match the perfect team to your project needs!"
  ],
  process: [
    "Our development process:\n1️⃣ Discovery & Planning (1-2 weeks)\n2️⃣ Design & Prototyping (2-3 weeks)\n3️⃣ Development & Testing (4-12 weeks)\n4️⃣ Deployment & Launch (1 week)\n5️⃣ Ongoing Support & Maintenance\n\nWe use Agile methodology with weekly updates and demos!",
    "How we work:\n• Free initial consultation\n• Detailed project roadmap\n• Regular milestone deliveries\n• Continuous client communication\n• Quality assurance testing\n• Post-launch support\n• 30-day warranty on all work\n\nTransparency and quality are our core values!"
  ],
  support: [
    "Our support includes:\n• 24/7 technical assistance\n• Bug fixes within 24 hours\n• Regular updates & maintenance\n• Performance monitoring\n• Security patches\n• Feature enhancements\n• Training & documentation\n\nWe're here to ensure your success long after launch!",
    "Post-launch support options:\n• Basic: Bug fixes + security updates\n• Standard: Above + feature updates\n• Premium: Above + priority support + monthly reviews\n• Enterprise: Dedicated support team\n\nWhich support level interests you?"
  ]
};

const quickReplies = [
  { text: "Our Services", key: "services" },
  { text: "View Portfolio", key: "portfolio" },
  { text: "Contact Us", key: "contact" },
  { text: "Pricing Info", key: "pricing" },
  { text: "Our Team", key: "team" },
  { text: "Technologies", key: "technologies" },
  { text: "Schedule Demo", key: "demo" },
  { text: "Support Options", key: "support" }
];

export { predefinedResponses, quickReplies }
  export type { Message, ChatbotProps }


    