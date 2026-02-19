import { Project, SkillCategory, Testimonial, ContactInfo } from '../types';

export const projects: Project[] = [
  {
    id: '1',
    title: 'AI-Powered Customer Support Automation',
    shortDescription: 'Intelligent ticket routing and response system handling 5,000+ monthly tickets',
    category: 'automation',
    problem: 'Support team was overwhelmed with repetitive inquiries, leading to slow response times and customer dissatisfaction.',
    solution: 'Built an AI-powered automation workflow in n8n that classifies, prioritizes, and auto-responds to common customer inquiries while routing complex issues to human agents.',
    techStack: ['n8n', 'OpenAI API', 'Docker', 'PostgreSQL', 'Redis'],
    impact: [
      { metric: 'Response Time', value: '80% reduction' },
      { metric: 'Tickets Handled', value: '5,000+ monthly' },
      { metric: 'Classification Accuracy', value: '95%' },
      { metric: 'Cost Savings', value: '$50,000 annually' }
    ],
    features: [
      'Natural language processing for ticket classification',
      'Smart priority assignment based on urgency keywords',
      'Automated responses for 20+ common inquiry types',
      'Seamless handoff to human agents when needed',
      'Real-time analytics dashboard'
    ]
  },
  {
    id: '2',
    title: 'Multi-Platform Social Media Orchestrator',
    shortDescription: 'Automated content distribution across 6 platforms with intelligent scheduling',
    category: 'orchestration',
    problem: 'Marketing team spent 15+ hours weekly manually posting content across multiple social platforms.',
    solution: 'Created a Make.com workflow that automatically formats, schedules, and posts content across all platforms while optimizing posting times based on engagement analytics.',
    techStack: ['Make', 'Twitter API', 'LinkedIn API', 'Facebook Graph API', 'Instagram API', 'Airtable'],
    impact: [
      { metric: 'Time Saved', value: '15 hours weekly' },
      { metric: 'Engagement Increase', value: '45%' },
      { metric: 'Platforms Managed', value: '6 simultaneously' },
      { metric: 'Posts Automated', value: '200+ monthly' }
    ],
    features: [
      'Intelligent platform-specific content formatting',
      'AI-powered optimal posting time prediction',
      'Automated hashtag research and suggestions',
      'Cross-platform engagement tracking',
      'Content calendar synchronization'
    ]
  },
  {
    id: '3',
    title: 'E-Commerce Inventory Sync System',
    shortDescription: 'Real-time inventory synchronization across 3 marketplaces and warehouse',
    category: 'integration',
    problem: 'Inventory discrepancies between warehouse and online marketplaces caused overselling and customer complaints.',
    solution: 'Developed a real-time integration system using n8n that synchronizes inventory levels across all sales channels within seconds of any update.',
    techStack: ['n8n', 'Shopify API', 'Amazon MWS', 'eBay API', 'MySQL', 'Webhooks'],
    impact: [
      { metric: 'Sync Speed', value: 'Real-time (<5 sec)' },
      { metric: 'Overselling Incidents', value: '99% reduction' },
      { metric: 'Manual Updates', value: 'Eliminated' },
      { metric: 'Products Managed', value: '10,000+' }
    ],
    features: [
      'Bidirectional inventory synchronization',
      'Automatic stock level adjustments',
      'Low inventory alerts and reorder triggers',
      'Historical inventory tracking',
      'Conflict resolution system'
    ]
  },
  {
    id: '4',
    title: 'Lead Qualification and CRM Integration',
    shortDescription: 'AI-driven lead scoring and automatic CRM data enrichment',
    category: 'automation',
    problem: 'Sales team wasted time on unqualified leads and manually entering prospect data into CRM.',
    solution: 'Built an intelligent workflow that scores leads using AI, enriches contact data from multiple sources, and automatically updates CRM with qualified prospects.',
    techStack: ['Make', 'OpenAI API', 'HubSpot API', 'Clearbit API', 'Google Sheets'],
    impact: [
      { metric: 'Lead Quality', value: '70% improvement' },
      { metric: 'Data Entry Time', value: '90% reduction' },
      { metric: 'Conversion Rate', value: '35% increase' },
      { metric: 'Leads Processed', value: '1,000+ monthly' }
    ],
    features: [
      'Multi-factor AI lead scoring',
      'Automatic company and contact enrichment',
      'Duplicate detection and merging',
      'Smart CRM field mapping',
      'Custom notification rules'
    ]
  },
  {
    id: '5',
    title: 'Automated Report Generation System',
    shortDescription: 'Daily business intelligence reports generated and distributed automatically',
    category: 'automation',
    problem: 'Executives needed daily reports from 8+ data sources, requiring 3 hours of manual compilation.',
    solution: 'Created an automated reporting system using n8n that pulls data from multiple sources, generates formatted reports, and distributes them via email and Slack.',
    techStack: ['n8n', 'Google Analytics API', 'Stripe API', 'PostgreSQL', 'Chart.js', 'PDF Generation'],
    impact: [
      { metric: 'Time Saved', value: '3 hours daily' },
      { metric: 'Reports Generated', value: '30+ monthly' },
      { metric: 'Data Sources', value: '8 integrated' },
      { metric: 'Delivery Success', value: '99.9%' }
    ],
    features: [
      'Multi-source data aggregation',
      'Custom visualization generation',
      'Scheduled and on-demand reports',
      'Role-based report customization',
      'Error handling and retry logic'
    ]
  },
  {
    id: '6',
    title: 'Full-Stack Project Management Platform',
    shortDescription: 'Custom project tracking application with team collaboration features',
    category: 'fullstack',
    problem: 'Existing project management tools lacked specific features needed for agency workflow.',
    solution: 'Developed a custom web application with real-time collaboration, custom workflows, and integration capabilities with existing tools.',
    techStack: ['React', 'TypeScript', 'Node.js', 'PostgreSQL', 'Docker', 'WebSockets'],
    impact: [
      { metric: 'Team Adoption', value: '100% in 2 weeks' },
      { metric: 'Project Visibility', value: '10x improvement' },
      { metric: 'Active Users', value: '50+ daily' },
      { metric: 'Workflows Created', value: '25+ custom' }
    ],
    features: [
      'Real-time collaborative editing',
      'Custom workflow builder',
      'Advanced filtering and search',
      'Time tracking and reporting',
      'Third-party tool integrations'
    ]
  }
];

export const skillCategories: SkillCategory[] = [
  {
    title: 'AI Automation & Workflow Orchestration',
    skills: [
      { name: 'n8n', icon: 'Workflow', description: 'Advanced workflow automation, custom nodes, complex integrations' },
      { name: 'Make (Integromat)', icon: 'GitBranch', description: 'Scenario building, API integrations, automation logic' },
      { name: 'Zapier', icon: 'Zap', description: 'Multi-app workflows, trigger-action automation' },
      { name: 'ChatGPT API', icon: 'MessageSquare', description: 'Natural language processing and generation' },
      { name: 'Claude API', icon: 'Bot', description: 'Advanced AI reasoning and content generation' },
      { name: 'OpenAI Assistant', icon: 'Brain', description: 'AI agent development and fine-tuning' }
    ]
  },
  {
    title: 'Development & Infrastructure',
    skills: [
      { name: 'Docker', icon: 'Container', description: 'Containerization, deployment, orchestration' },
      { name: 'Git & GitHub', icon: 'GitCommit', description: 'Version control, CI/CD, collaboration' },
      { name: 'Cursor AI', icon: 'Code', description: 'AI-assisted development and code generation' },
      { name: 'VS Code', icon: 'FileCode', description: 'Advanced IDE configuration and extensions' },
      { name: 'Linux/Ubuntu', icon: 'Terminal', description: 'Server management, bash scripting' },
      { name: 'Cloud Platforms', icon: 'Cloud', description: 'AWS, Google Cloud, DigitalOcean' }
    ]
  },
  {
    title: 'Technical Skills',
    skills: [
      { name: 'Web Development', icon: 'Globe', description: 'Full-stack web applications, responsive design' },
      { name: 'JavaScript/TypeScript', icon: 'FileJson', description: 'Full-stack development' },
      { name: 'Python', icon: 'Code2', description: 'Automation scripts, data processing' },
      { name: 'React', icon: 'Layout', description: 'Modern UI development' },
      { name: 'Node.js', icon: 'Server', description: 'Backend APIs and services' },
      { name: 'PostgreSQL/MySQL', icon: 'Database', description: 'Database design and optimization' },
      { name: 'REST APIs', icon: 'Network', description: 'API design, integration, documentation' },
      { name: 'Webhooks', icon: 'Webhook', description: 'Real-time event-driven architecture' },
      { name: 'Authentication', icon: 'Lock', description: 'OAuth, JWT, security best practices' }
    ]
  }
];

export const testimonials: Testimonial[] = [
  {
    id: '1',
    name: 'Sarah Johnson',
    role: 'VP of Operations',
    company: 'TechCorp Solutions',
    content: 'The automation system transformed our operations. What used to take our team 20 hours weekly now happens automatically with 99% accuracy.'
  },
  {
    id: '2',
    name: 'Michael Chen',
    role: 'CTO',
    company: 'DataFlow Inc',
    content: 'Outstanding technical expertise combined with clear communication. The integration system exceeded our expectations and was delivered ahead of schedule.'
  },
  {
    id: '3',
    name: 'Emily Rodriguez',
    role: 'Marketing Director',
    company: 'GrowthHub',
    content: 'Finally, someone who truly understands both the technical and business sides. The ROI was evident within the first month.'
  }
];

export const contactInfo: ContactInfo = {
  email: 'indrani.belchandan@gmail.com',
  linkedin: 'https://www.linkedin.com/in/indranideshmukh/',
  github: 'https://github.com/inddes',
  calendar: 'https://calendar.google.com/calendar/u/0/r',
  availability: 'Available for projects',
  responseTime: 'Usually responds within 24 hours'
};

export const aboutContent = {
  title: 'About Me',
  intro: 'I specialize in building intelligent automation systems that save time, reduce errors, and drive business growth.',
  background: "With years of experience in AI automation and full-stack development, I've helped businesses automate complex workflows, integrate disparate systems, and scale their operations efficiently. My approach combines technical expertise with a deep understanding of business processes to deliver solutions that truly make an impact.",
  philosophy: "I believe the best automation is invisible - it should work seamlessly in the background, allowing teams to focus on what humans do best: creativity, strategy, and building relationships. Every system I build is designed with maintainability, scalability, and user experience in mind.",
  interests: [
    'Exploring cutting-edge AI capabilities',
    'Contributing to open-source automation tools',
    'Mentoring aspiring automation engineers',
    'Staying current with no-code/low-code innovations'
  ]
};

export const processSteps = [
  {
    title: 'Discovery & Requirements',
    description: 'Deep dive into your processes, pain points, and goals to identify the best automation opportunities.',
    icon: 'Search'
  },
  {
    title: 'Architecture & Design',
    description: 'Design scalable, maintainable solutions with clear documentation and visual workflow diagrams.',
    icon: 'Boxes'
  },
  {
    title: 'Implementation & Testing',
    description: 'Build robust automation with comprehensive error handling and thorough testing across scenarios.',
    icon: 'Code'
  },
  {
    title: 'Deployment & Monitoring',
    description: 'Seamless deployment with monitoring, logging, and alerts to ensure reliability.',
    icon: 'Rocket'
  },
  {
    title: 'Documentation & Handoff',
    description: 'Complete documentation, training, and ongoing support to ensure long-term success.',
    icon: 'FileText'
  }
];
