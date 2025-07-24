import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Heart, Github, Linkedin, Mail, ExternalLink, Code, Coffee } from 'lucide-react';

const Footer = () => {
  const quickLinks = [
    { label: 'About', href: '#about' },
    { label: 'Skills', href: '#skills' },
    { label: 'Projects', href: '#projects' },
    { label: 'Contact', href: '#contact' },
  ];

  const socialLinks = [
    {
      icon: Github,
      label: 'GitHub',
      href: 'https://github.com/prasoon3131',
      username: '@prasoon3131'
    },
    {
      icon: Linkedin,
      label: 'LinkedIn',
      href: 'https://www.linkedin.com/in/prasoon-pandey-3aa746254/',
      username: 'Prasoon Pandey'
    },
    {
      icon: ExternalLink,
      label: 'LeetCode',
      href: 'https://leetcode.com/u/Prasoon331/',
      username: '@Prasoon331'
    },
    {
      icon: Mail,
      label: 'Email',
      href: 'mailto:itspandey3131@gmail.com',
      username: 'itspandey3131@gmail.com'
    }
  ];

  const achievements = [
    { label: 'Projects Built', count: '5+' },
    { label: 'Technologies', count: '15+' },
    { label: 'Years Coding', count: '2+' },
    { label: 'Coffee Cups', count: '∞' }
  ];

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-card/50 border-t border-border">
      <div className="max-w-7xl mx-auto px-4 py-16">
        {/* Main Footer Content */}
        <div className="grid lg:grid-cols-4 md:grid-cols-2 gap-8 mb-12">
          {/* Brand Section */}
          <div className="lg:col-span-2 space-y-6">
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 bg-accent rounded-xl flex items-center justify-center">
                <span className="text-accent-foreground font-bold font-mono text-lg">P</span>
              </div>
              <div>
                <h3 className="text-2xl font-bold text-foreground">Prasoon Pandey</h3>
                <p className="text-accent font-mono">Full Stack Developer & AI Enthusiast</p>
              </div>
            </div>
            
            <p className="text-muted-foreground leading-relaxed max-w-md">
              Passionate about building innovative solutions that make a difference. 
              Currently focused on AI/ML applications and scalable web development.
            </p>

            <div className="flex flex-wrap gap-3">
              <Badge variant="outline" className="border-accent/50 text-accent">
                🚀 Available for Projects
              </Badge>
              <Badge variant="outline" className="border-accent/50 text-accent">
                💼 Open to Opportunities
              </Badge>
            </div>

            {/* Terminal Quote */}
            <Card className="p-4 bg-muted/30 border-border font-mono text-sm">
              <div className="space-y-1">
                <div className="text-accent">$ echo "life_motto"</div>
                <div className="text-muted-foreground ml-4">
                  "Code with passion, learn continuously, build for impact"
                </div>
              </div>
            </Card>
          </div>

          {/* Quick Links */}
          <div className="space-y-6">
            <h4 className="text-lg font-semibold text-foreground flex items-center gap-2">
              <Code className="w-5 h-5 text-accent" />
              Quick Links
            </h4>
            <div className="space-y-3">
              {quickLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  className="block text-muted-foreground hover:text-accent transition-colors cursor-pointer"
                  onClick={(e) => {
                    e.preventDefault();
                    document.querySelector(link.href)?.scrollIntoView({ behavior: 'smooth' });
                  }}
                >
                  {link.label}
                </a>
              ))}
            </div>
          </div>

          {/* Connect Section */}
          <div className="space-y-6">
            <h4 className="text-lg font-semibold text-foreground flex items-center gap-2">
              <Heart className="w-5 h-5 text-accent" />
              Let's Connect
            </h4>
            <div className="space-y-4">
              {socialLinks.map((link) => {
                const IconComponent = link.icon;
                return (
                  <a
                    key={link.label}
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-3 p-3 rounded-lg bg-muted/30 hover:bg-muted/50 transition-colors group"
                  >
                    <div className="w-8 h-8 bg-accent/10 rounded-lg flex items-center justify-center group-hover:bg-accent/20 transition-colors">
                      <IconComponent className="w-4 h-4 text-accent" />
                    </div>
                    <div className="min-w-0 flex-1">
                      <div className="text-sm font-medium text-foreground group-hover:text-accent transition-colors">
                        {link.label}
                      </div>
                      <div className="text-xs text-muted-foreground truncate">
                        {link.username}
                      </div>
                    </div>
                  </a>
                );
              })}
            </div>
          </div>
        </div>

        {/* Stats Section */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 py-8 border-y border-border">
          {achievements.map((achievement) => (
            <div key={achievement.label} className="text-center">
              <div className="text-2xl md:text-3xl font-bold text-accent mb-1">
                {achievement.count}
              </div>
              <div className="text-sm text-muted-foreground">
                {achievement.label}
              </div>
            </div>
          ))}
        </div>

        {/* Bottom Footer */}
        <div className="flex flex-col md:flex-row items-center justify-between pt-8 gap-4">
          <div className="flex flex-col md:flex-row items-center gap-4 text-sm text-muted-foreground">
            <div className="flex items-center gap-2">
              <span>© 2025 Prasoon Pandey</span>
              <span className="text-accent">•</span>
              <span>Made with</span>
              <Heart className="w-4 h-4 text-red-500 animate-pulse" />
              <span>and</span>
              <Coffee className="w-4 h-4 text-amber-500" />
            </div>
            <div className="flex items-center gap-2">
              <span>Built with React, TypeScript & Tailwind CSS</span>
            </div>
          </div>

          <Button 
            variant="terminal" 
            size="sm" 
            onClick={scrollToTop}
            className="group"
          >
            <Code className="w-4 h-4 group-hover:-translate-y-1 transition-transform" />
            Back to Top
          </Button>
        </div>
      </div>
    </footer>
  );
};

export default Footer;