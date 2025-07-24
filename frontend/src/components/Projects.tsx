import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Github, ExternalLink, Bot, Car, Calendar, Heart } from 'lucide-react';
import aiChatbotPreview from '@/assets/ai-chatbot-preview.jpg';
import carRentalPreview from '@/assets/car-rental-preview.jpg';
import portfolioPreview from '@/assets/portfolio-preview.jpg';

const Projects = () => {
  const projects = [
    {
      id: 1,
      title: 'AI-Powered Mental Health Chatbot',
      description: 'An intelligent chatbot that provides mental health support through symptom analysis and emotion-aware responses, capable of processing 500+ PDF queries for comprehensive assistance.',
      longDescription: 'Built using LangChain for conversation management, Groq API with LLaMA-4 for natural language processing, and ChromaDB for efficient document retrieval. Features include real-time symptom analysis, personalized response generation, and a user-friendly Gradio interface.',
      icon: Bot,
      image: aiChatbotPreview,
      technologies: ['LangChain', 'Groq API', 'LLaMA-4', 'Gradio', 'ChromaDB', 'Python'],
      features: [
        'Symptom analysis and tracking',
        '500+ PDF document queries',
        'Emotion-aware response system',
        'Real-time conversation management',
        'Secure and private interactions'
      ],
      github: 'https://github.com/prasoon3131/mental-health-chatbot',
      demo: 'https://mental-health-bot-demo.vercel.app',
      status: 'Completed',
      category: 'AI/ML'
    },
    {
      id: 2,
      title: 'Car Rental Management System',
      description: 'A comprehensive full-stack car rental platform with real-time booking capabilities, user dashboards, and admin panel for fleet management.',
      longDescription: 'Developed using React.js for the frontend with responsive design, Node.js and Express.js for the backend API, and MongoDB for data persistence. Features include user authentication, booking management, payment integration, and real-time availability tracking.',
      icon: Car,
      image: carRentalPreview,
      technologies: ['React.js', 'Node.js', 'Express.js', 'MongoDB', 'JWT', 'Stripe API'],
      features: [
        'Real-time booking system',
        'User authentication & profiles',
        'Admin dashboard & analytics',
        'Payment gateway integration',
        'Fleet management system'
      ],
      github: 'https://github.com/prasoon3131/car-rental-system',
      demo: 'https://car-rental-demo.vercel.app',
      status: 'Completed',
      category: 'Full Stack'
    },
    {
      id: 3,
      title: 'Task Management App',
      description: 'A modern task management application with real-time collaboration, priority tracking, and team workspace features.',
      longDescription: 'Built with Next.js and TypeScript for type safety, featuring real-time updates with Socket.io, responsive design with Tailwind CSS, and PostgreSQL for robust data management.',
      icon: Calendar,
      image: 'photo-1461749280684-dccba630e2f6',
      technologies: ['Next.js', 'TypeScript', 'Socket.io', 'PostgreSQL', 'Prisma', 'Tailwind CSS'],
      features: [
        'Real-time collaboration',
        'Priority-based task sorting',
        'Team workspace management',
        'Progress tracking & analytics',
        'Mobile-responsive design'
      ],
      github: 'https://github.com/prasoon3131/task-manager',
      demo: 'https://task-manager-demo.vercel.app',
      status: 'In Progress',
      category: 'Full Stack'
    },
    {
      id: 4,
      title: 'Portfolio Website',
      description: 'A modern, responsive developer portfolio with terminal-inspired design, dark/light mode, and interactive animations.',
      longDescription: 'Created using React.js with Vite for fast development, Tailwind CSS for styling, and Framer Motion for smooth animations. Features include terminal UI elements, typing animations, and optimized performance.',
      icon: Heart,
      image: portfolioPreview,
      technologies: ['React.js', 'Vite', 'Tailwind CSS', 'TypeScript', 'Framer Motion'],
      features: [
        'Terminal-inspired design',
        'Smooth typing animations',
        'Dark/light mode toggle',
        'Responsive layout',
        'Performance optimized'
      ],
      github: 'https://github.com/prasoon3131/portfolio',
      demo: 'https://prasoon-portfolio.vercel.app',
      status: 'Completed',
      category: 'Frontend'
    }
  ];

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'Completed': return 'text-green-500 border-green-500/50 bg-green-500/10';
      case 'In Progress': return 'text-yellow-500 border-yellow-500/50 bg-yellow-500/10';
      case 'Planning': return 'text-blue-500 border-blue-500/50 bg-blue-500/10';
      default: return 'text-muted-foreground border-border';
    }
  };

  return (
    <section id="projects" className="py-20 px-4 bg-card/30">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="syntax-comment">class </span>
            <span className="text-accent">Projects</span>
            <span className="syntax-comment"> extends Innovation</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            A showcase of my latest work in AI, full-stack development, and innovative solutions
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8">
          {projects.map((project, index) => {
            const IconComponent = project.icon;
            return (
              <Card key={project.id} className="group bg-card border-border hover:border-accent/50 transition-all duration-500 overflow-hidden">
                {/* Project Header with Image */}
                <div className="relative h-48 overflow-hidden rounded-t-lg">
                  <img 
                    src={project.image} 
                    alt={project.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-br from-accent/20 via-transparent to-background/60 opacity-80"></div>
                  <div className="absolute top-4 left-4 right-4 flex justify-between items-start z-10">
                    <div className="flex items-center gap-2">
                      <div className="w-10 h-10 glass backdrop-blur-md rounded-lg flex items-center justify-center">
                        <IconComponent className="w-5 h-5 text-accent" />
                      </div>
                      <Badge variant="outline" className={`${getStatusColor(project.status)} backdrop-blur-sm`}>
                        {project.status}
                      </Badge>
                    </div>
                    <Badge variant="outline" className="text-accent border-accent/50 bg-accent/10 backdrop-blur-sm">
                      {project.category}
                    </Badge>
                  </div>
                  
                  <div className="absolute bottom-4 left-4 right-4 z-10">
                    <h3 className="text-xl font-bold text-white mb-2 group-hover:text-accent transition-colors font-orbitron">
                      {project.title}
                    </h3>
                  </div>
                </div>

                {/* Project Content */}
                <div className="p-6 space-y-6">
                  <p className="text-muted-foreground leading-relaxed">
                    {project.description}
                  </p>

                  {/* Technologies */}
                  <div className="space-y-3">
                    <h4 className="text-sm font-semibold text-foreground font-mono">Technologies:</h4>
                    <div className="flex flex-wrap gap-2">
                      {project.technologies.map((tech) => (
                        <Badge key={tech} variant="outline" className="text-xs border-accent/30 text-accent bg-accent/5">
                          {tech}
                        </Badge>
                      ))}
                    </div>
                  </div>

                  {/* Key Features */}
                  <div className="space-y-3">
                    <h4 className="text-sm font-semibold text-foreground font-mono">Key Features:</h4>
                    <ul className="space-y-1">
                      {project.features.slice(0, 3).map((feature, idx) => (
                        <li key={idx} className="text-sm text-muted-foreground flex items-center gap-2">
                          <div className="w-1 h-1 bg-accent rounded-full"></div>
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Action Buttons */}
                  <div className="flex gap-3 pt-4">
                    <Button variant="terminal" size="sm" className="flex-1 group">
                      <Github className="w-4 h-4 group-hover:rotate-12 transition-transform" />
                      Code
                    </Button>
                    <Button variant="neon" size="sm" className="flex-1 group">
                      <ExternalLink className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                      Demo
                    </Button>
                  </div>
                </div>
              </Card>
            );
          })}
        </div>

        {/* View More Projects */}
        <div className="text-center mt-12">
          <Button variant="hero" size="lg" className="group">
            <Github className="w-5 h-5 group-hover:scale-110 transition-transform" />
            View All Projects on GitHub
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Projects;