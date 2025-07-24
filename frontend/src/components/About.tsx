import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Calendar, MapPin, Trophy, GraduationCap, Zap, Target } from 'lucide-react';
import profileImage from '@/assets/prasoon-profile.jpg';

const About = () => {
  const timeline = [
    {
      year: '2025',
      title: 'Software Developer Intern',
      company: 'InnovateitLabs',
      description: 'Building custom WordPress themes/plugins, handling full-stack features, SEO & performance optimizations',
      type: 'work'
    },
    {
      year: '2024',
      title: 'Hackathon Winner',
      company: 'IIT Delhi',
      description: 'Cleared 5+ rounds and won the prestigious hackathon competition',
      type: 'achievement'
    },
    {
      year: '2023-2024',
      title: 'Treasurer',
      company: 'Rotaract Club',
      description: 'Led financial operations and community service initiatives',
      type: 'leadership'
    },
    {
      year: '2022-2025',
      title: 'B.Tech Computer Science (AI/ML)',
      company: 'NIET Greater Noida',
      description: 'Specializing in Artificial Intelligence and Machine Learning',
      type: 'education'
    },
    {
      year: '2022',
      title: 'Diploma in Electrical Engineering',
      company: 'UGI Prayagraj',
      description: 'Foundation in engineering principles and problem-solving',
      type: 'education'
    }
  ];

  const getTypeColor = (type: string) => {
    switch (type) {
      case 'work': return 'text-neon-cyan border-neon-cyan';
      case 'achievement': return 'text-neon-green border-neon-green';
      case 'leadership': return 'text-neon-purple border-neon-purple';
      case 'education': return 'text-neon-orange border-neon-orange';
      default: return 'text-accent border-accent';
    }
  };

  return (
    <section id="about" className="py-20 px-4 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 animated-bg opacity-30" />
      
      <div className="max-w-7xl mx-auto relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-orbitron font-bold mb-4">
            <span className="syntax-comment">&lt;</span>
            <span className="gradient-text">About</span>
            <span className="syntax-comment">/&gt;</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Passionate developer crafting innovative solutions at the intersection of technology and creativity
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-12 items-start">
          {/* Profile Card */}
          <div className="lg:col-span-1">
            <Card className="p-8 text-center space-y-6 glass-dark border-accent/30 card-3d">
              <div className="relative mx-auto w-40 h-40">
                <div className="absolute inset-0 rounded-full bg-gradient-to-r from-accent via-purple-500 to-accent animate-glow p-1">
                  <img
                    src={profileImage}
                    alt="Prasoon Pandey"
                    className="w-full h-full rounded-full object-cover border-2 border-background"
                  />
                </div>
              </div>
              
              <div className="space-y-4">
                <h3 className="text-2xl font-orbitron font-bold gradient-text">Prasoon Pandey</h3>
                <p className="text-accent font-mono">Full Stack Developer & AI Architect</p>
                
                <div className="flex flex-wrap gap-2 justify-center">
                  <Badge variant="outline" className="border-accent/50 text-accent bg-accent/10">
                    🚀 Innovator
                  </Badge>
                  <Badge variant="outline" className="border-accent/50 text-accent bg-accent/10">
                    ⚽ Athlete
                  </Badge>
                  <Badge variant="outline" className="border-accent/50 text-accent bg-accent/10">
                    🤖 AI Enthusiast
                  </Badge>
                </div>
              </div>
            </Card>
          </div>
          {/* Content Cards */}
          <div className="lg:col-span-2 space-y-8">
            {/* Mission & Vision */}
            <div className="grid md:grid-cols-2 gap-6">
              <Card className="p-6 glass border-accent/30 hover:border-accent/50 transition-all duration-300 group">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-12 h-12 bg-gradient-to-r from-accent to-purple-500 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform">
                    <Target className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-xl font-orbitron font-semibold">Mission</h3>
                </div>
                <p className="text-muted-foreground leading-relaxed">
                  To build intelligent, scalable solutions that bridge the gap between human needs and technological possibilities, 
                  creating meaningful impact in the digital world.
                </p>
              </Card>
              
              <Card className="p-6 glass border-accent/30 hover:border-accent/50 transition-all duration-300 group">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-accent rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform">
                    <Zap className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-xl font-orbitron font-semibold">Vision</h3>
                </div>
                <p className="text-muted-foreground leading-relaxed">
                  To be at the forefront of AI and web development innovation, creating solutions that not only solve problems 
                  but anticipate future needs and possibilities.
                </p>
              </Card>
            </div>

            {/* Personal Story */}
            <Card className="p-8 holographic-border hover:border-accent/50 transition-colors">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 bg-accent/10 rounded-xl flex items-center justify-center">
                  <GraduationCap className="w-6 h-6 text-accent" />
                </div>
                <div>
                  <h3 className="text-xl font-orbitron font-semibold text-foreground">My Journey</h3>
                  <p className="text-sm text-muted-foreground">From electrical to AI/ML innovation</p>
                </div>
              </div>
              <div className="space-y-6">
                
                <p className="text-muted-foreground leading-relaxed">
                  Started my journey in Electrical Engineering, but my passion for technology and problem-solving 
                  led me to dive deep into Computer Science and AI/ML. I love building scalable backend systems, 
                  creating intuitive user experiences, and exploring the endless possibilities of artificial intelligence.
                </p>
                
                <p className="text-muted-foreground leading-relaxed">
                  When I'm not coding, you'll find me on the football field ⚽ or exploring new technologies. 
                  I believe in continuous learning and sharing knowledge with the developer community.
                </p>

                <div className="flex flex-wrap gap-2 pt-4">
                  <Badge variant="outline" className="border-accent/50 text-accent">
                    🏆 Hackathon Winner
                  </Badge>
                  <Badge variant="outline" className="border-accent/50 text-accent">
                    ⚽ State-Level Player
                  </Badge>
                  <Badge variant="outline" className="border-accent/50 text-accent">
                    🤖 AI Enthusiast
                  </Badge>
                </div>
              </div>
            </Card>

            {/* Quick Stats */}
            <div className="grid grid-cols-2 gap-4">
              <Card className="p-6 text-center bg-card border-border hover:border-accent/50 transition-colors">
                <div className="text-2xl font-bold text-accent">5+</div>
                <div className="text-sm text-muted-foreground">Projects Built</div>
              </Card>
              <Card className="p-6 text-center bg-card border-border hover:border-accent/50 transition-colors">
                <div className="text-2xl font-bold text-accent">2+</div>
                <div className="text-sm text-muted-foreground">Years Coding</div>
              </Card>
            </div>
          </div>

          {/* Timeline */}
          <div className="space-y-4">
            <h3 className="text-2xl font-semibold mb-8 flex items-center gap-3">
              <Calendar className="w-6 h-6 text-accent" />
              Timeline
            </h3>
            
            <div className="relative">
              {/* Timeline Line */}
              <div className="absolute left-8 top-0 bottom-0 w-px bg-border"></div>
              
              {timeline.map((item, index) => (
                <div key={index} className="relative flex gap-6 pb-8">
                  {/* Timeline Dot */}
                  <div className={`w-4 h-4 rounded-full border-2 bg-background z-10 ${getTypeColor(item.type)}`}></div>
                  
                  {/* Content */}
                  <Card className="flex-1 p-6 bg-card border-border hover:border-accent/50 transition-colors">
                    <div className="flex items-start justify-between mb-3">
                      <div>
                        <h4 className="font-semibold text-foreground">{item.title}</h4>
                        <p className="text-accent font-medium">{item.company}</p>
                      </div>
                      <Badge variant="outline" className={`text-xs ${getTypeColor(item.type)}`}>
                        {item.year}
                      </Badge>
                    </div>
                    <p className="text-sm text-muted-foreground">{item.description}</p>
                  </Card>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;