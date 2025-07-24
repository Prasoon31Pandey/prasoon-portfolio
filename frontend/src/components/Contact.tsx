import { useState } from 'react';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Badge } from '@/components/ui/badge';
import { Mail, Phone, MapPin, Send, Github, Linkedin, ExternalLink, MessageCircle } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 1000));

    toast({
      title: "Message sent successfully!",
      description: "Thanks for reaching out. I'll get back to you soon.",
    });

    setFormData({ name: '', email: '', subject: '', message: '' });
    setIsSubmitting(false);
  };

  const contactInfo = [
    {
      icon: Mail,
      label: 'Email',
      value: 'itspandey3131@gmail.com',
      href: 'mailto:itspandey3131@gmail.com',
      color: 'text-neon-cyan'
    },
    {
      icon: Phone,
      label: 'Phone',
      value: '+91 8303893605',
      href: 'tel:+918303893605',
      color: 'text-neon-green'
    },
    {
      icon: MapPin,
      label: 'Location',
      value: 'Delhi, India',
      href: '#',
      color: 'text-neon-purple'
    }
  ];

  const socialLinks = [
    {
      icon: Github,
      label: 'GitHub',
      href: 'https://github.com/prasoon3131',
      color: 'hover:text-neon-cyan'
    },
    {
      icon: Linkedin,
      label: 'LinkedIn',
      href: 'https://www.linkedin.com/in/prasoon-pandey-3aa746254/',
      color: 'hover:text-neon-purple'
    },
    {
      icon: ExternalLink,
      label: 'LeetCode',
      href: 'https://leetcode.com/u/Prasoon331/',
      color: 'hover:text-neon-orange'
    },
    {
      icon: ExternalLink,
      label: 'GeeksforGeeks',
      href: 'https://www.geeksforgeeks.org/user/itspandgv5d/',
      color: 'hover:text-neon-green'
    }
  ];

  return (
    <section id="contact" className="py-20 px-4 bg-background">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="syntax-comment">await </span>
            <span className="text-accent">contact</span>
            <span className="syntax-comment">.connect()</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Ready to bring your ideas to life? Let's discuss your next project
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <Card className="p-8 bg-card border-border hover:border-accent/50 transition-colors">
            <div className="space-y-6">
              <div className="flex items-center gap-3 mb-8">
                <div className="w-12 h-12 bg-accent/10 rounded-lg flex items-center justify-center">
                  <MessageCircle className="w-6 h-6 text-accent" />
                </div>
                <div>
                  <h3 className="text-2xl font-semibold text-foreground">Send a Message</h3>
                  <p className="text-sm text-muted-foreground">I'll respond within 24 hours</p>
                </div>
              </div>

              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <label className="text-sm font-medium text-foreground font-mono">Name</label>
                    <Input
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      placeholder="Your name"
                      required
                      className="bg-background border-border focus:border-accent"
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-medium text-foreground font-mono">Email</label>
                    <Input
                      name="email"
                      type="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      placeholder="your.email@example.com"
                      required
                      className="bg-background border-border focus:border-accent"
                    />
                  </div>
                </div>
                
                <div className="space-y-2">
                  <label className="text-sm font-medium text-foreground font-mono">Subject</label>
                  <Input
                    name="subject"
                    value={formData.subject}
                    onChange={handleInputChange}
                    placeholder="Project discussion / Job opportunity / General inquiry"
                    required
                    className="bg-background border-border focus:border-accent"
                  />
                </div>
                
                <div className="space-y-2">
                  <label className="text-sm font-medium text-foreground font-mono">Message</label>
                  <Textarea
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    placeholder="Tell me about your project or what you'd like to discuss..."
                    rows={6}
                    required
                    className="bg-background border-border focus:border-accent resize-none"
                  />
                </div>

                <Button 
                  type="submit" 
                  variant="hero" 
                  size="lg" 
                  className="w-full group"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? (
                    <>Sending...</>
                  ) : (
                    <>
                      <Send className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                      Send Message
                    </>
                  )}
                </Button>
              </form>
            </div>
          </Card>

          {/* Contact Info & Terminal */}
          <div className="space-y-8">
            {/* Contact Information */}
            <Card className="p-8 bg-card border-border hover:border-accent/50 transition-colors">
              <h3 className="text-2xl font-semibold mb-6 text-foreground">Get in Touch</h3>
              <div className="space-y-6">
                {contactInfo.map((item, index) => {
                  const IconComponent = item.icon;
                  return (
                    <a
                      key={index}
                      href={item.href}
                      className="flex items-center gap-4 p-4 rounded-lg bg-muted/50 hover:bg-muted transition-colors group"
                    >
                      <div className={`w-10 h-10 bg-background rounded-lg flex items-center justify-center ${item.color}`}>
                        <IconComponent className="w-5 h-5" />
                      </div>
                      <div>
                        <div className="text-sm text-muted-foreground font-mono">{item.label}</div>
                        <div className="text-foreground font-medium group-hover:text-accent transition-colors">
                          {item.value}
                        </div>
                      </div>
                    </a>
                  );
                })}
              </div>
            </Card>

            {/* Terminal Contact */}
            <div className="terminal-window">
              <div className="terminal-header">
                <div className="terminal-dot terminal-dot-red"></div>
                <div className="terminal-dot terminal-dot-yellow"></div>
                <div className="terminal-dot terminal-dot-green"></div>
                <span className="ml-4 text-xs font-mono text-muted-foreground">contact.js</span>
              </div>
              <div className="terminal-content">
                <div className="space-y-3">
                  <div className="syntax-comment">// Quick contact methods</div>
                  
                  <div className="space-y-2">
                    <div>
                      <span className="syntax-keyword">const</span>{' '}
                      <span className="syntax-variable">developer</span> = {'{'}
                    </div>
                    <div className="ml-4">
                      <div><span className="syntax-string">"name"</span>: <span className="syntax-string">"Prasoon Pandey"</span>,</div>
                      <div><span className="syntax-string">"role"</span>: <span className="syntax-string">"Full Stack Developer"</span>,</div>
                      <div><span className="syntax-string">"email"</span>: <span className="syntax-string">"itspandey3131@gmail.com"</span>,</div>
                      <div><span className="syntax-string">"phone"</span>: <span className="syntax-string">"+91 8303893605"</span>,</div>
                      <div><span className="syntax-string">"availability"</span>: <span className="text-green-400">"Open to opportunities"</span></div>
                    </div>
                    <div>{'}'}</div>
                  </div>

                  <div className="mt-6">
                    <div className="flex">
                      <span className="text-accent mr-2">$</span>
                      <span className="syntax-function">git clone</span>
                      <span className="ml-2 syntax-string">"collaboration.git"</span>
                    </div>
                  </div>

                  <div className="mt-4 p-3 bg-muted/30 rounded border-l-4 border-accent">
                    <div className="text-sm">
                      <div className="text-accent font-semibold mb-2">Current Status:</div>
                      <div className="space-y-1 text-muted-foreground">
                        <div>🟢 Available for new projects</div>
                        <div>🟢 Open to collaboration</div>
                        <div>🟢 Seeking opportunities</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Social Links */}
            <div className="flex justify-center gap-6">
              {socialLinks.map((link, index) => {
                const IconComponent = link.icon;
                return (
                  <a
                    key={index}
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`w-12 h-12 bg-card border border-border rounded-lg flex items-center justify-center text-muted-foreground transition-all duration-300 hover:border-accent hover:scale-110 ${link.color}`}
                  >
                    <IconComponent className="w-5 h-5" />
                  </a>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;