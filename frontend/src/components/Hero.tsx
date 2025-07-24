import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Download, Github, Mail, ExternalLink, Sparkles } from 'lucide-react';
import profileImage from '@/assets/prasoon-profile.jpg';
import heroBackground from '@/assets/hero-background.jpg';

const Hero = () => {
  const [displayText, setDisplayText] = useState('');
  const roles = ['Full Stack Developer', 'AI/ML Engineer', 'Innovation Architect'];
  const [currentRole, setCurrentRole] = useState(0);

  useEffect(() => {
    let timeout: NodeJS.Timeout;
    const typeRole = (text: string, index = 0) => {
      if (index <= text.length) {
        setDisplayText(text.slice(0, index));
        timeout = setTimeout(() => typeRole(text, index + 1), 100);
      } else {
        timeout = setTimeout(() => {
          eraseRole(text, text.length);
        }, 2000);
      }
    };

    const eraseRole = (text: string, index: number) => {
      if (index >= 0) {
        setDisplayText(text.slice(0, index));
        timeout = setTimeout(() => eraseRole(text, index - 1), 50);
      } else {
        setCurrentRole((prev) => (prev + 1) % roles.length);
      }
    };

    typeRole(roles[currentRole]);
    return () => clearTimeout(timeout);
  }, [currentRole]);

  return (
    <section className="relative min-h-screen flex items-center justify-center px-4 py-20 overflow-hidden">
      <div 
        className="absolute inset-0 opacity-30"
        style={{
          backgroundImage: `url(${heroBackground})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundAttachment: 'fixed'
        }}
      />
      <div className="absolute inset-0 animated-bg opacity-50" />

      {/* Floating Particles */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(20)].map((_, i) => (
          <div
            key={i}
            className="particle"
            style={{
              left: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 15}s`,
              animationDuration: `${15 + Math.random() * 10}s`
            }}
          />
        ))}
      </div>

      <div className="relative max-w-7xl mx-auto grid lg:grid-cols-2 gap-16 items-center z-10">
        {/* Left Content */}
        <div className="space-y-8 text-center lg:text-left">
          <div className="space-y-6">
            <div className="text-accent font-mono text-lg flex items-center gap-2 justify-center lg:justify-start">
              <Sparkles className="w-5 h-5 animate-pulse" />
              <span className="syntax-comment">// Welcome to the future of development</span>
            </div>

            <h1 className="text-5xl md:text-7xl lg:text-8xl font-orbitron font-bold leading-tight">
              <span className="gradient-text">Prasoon</span>
              <br />
              <span className="text-foreground">Pandey</span>
            </h1>

            <div className="h-20 flex items-center justify-center lg:justify-start">
              <div className="text-xl md:text-2xl lg:text-3xl font-mono">
                <span className="syntax-keyword">const</span>{' '}
                <span className="syntax-variable">developer</span>{' '}
                <span className="syntax-operator">=</span>{' '}
                <span className="syntax-string animate-typing-cursor">"{displayText}"</span>
              </div>
            </div>

            <p className="text-lg md:text-xl text-muted-foreground max-w-lg leading-relaxed mx-auto lg:mx-0">
              Crafting{' '}
              <span className="text-accent font-semibold">intelligent solutions</span>{' '}
              that bridge the gap between{' '}
              <span className="text-accent font-semibold">human needs</span>{' '}
              and{' '}
              <span className="text-accent font-semibold">cutting-edge technology</span>.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
            <Button variant="hero" size="lg" className="group relative overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-r from-accent via-purple-500 to-accent opacity-75 animate-gradient-x" />
              <div className="relative flex items-center gap-2">
                <Mail className="w-5 h-5 group-hover:rotate-12 transition-transform" />
                Let's Collaborate
              </div>
            </Button>

            {/* Download Resume Button (wrapped in anchor tag) */}
            <a href="/resume.pdf" download target="_blank" rel="noopener noreferrer">
              <Button variant="outline" size="lg" className="btn-holographic group">
                <Download className="w-5 h-5 group-hover:translate-y-1 transition-transform" />
                Download Resume
              </Button>
            </a>
          </div>

          <div className="flex gap-6 justify-center lg:justify-start pt-8">
            {[
              { icon: Github, href: "https://github.com/prasoon3131", label: "GitHub" },
              { icon: Mail, href: "mailto:itspandey3131@gmail.com", label: "Email" },
              { icon: ExternalLink, href: "https://www.linkedin.com/in/prasoon-pandey-3aa746254/", label: "LinkedIn" }
            ].map((social, index) => {
              const IconComponent = social.icon;
              return (
                <a
                  key={index}
                  href={social.href}
                  className="w-12 h-12 glass rounded-xl flex items-center justify-center text-muted-foreground hover:text-accent transition-all duration-300 hover:scale-110 hover:rotate-6 group"
                  aria-label={social.label}
                >
                  <IconComponent className="w-6 h-6 group-hover:scale-110 transition-transform" />
                </a>
              );
            })}
          </div>
        </div>

        {/* Right Content */}
        <div className="relative">
          <div className="absolute -top-20 -right-20 w-40 h-40 lg:w-60 lg:h-60 z-10">
            <div className="relative w-full h-full">
              <div className="absolute inset-0 rounded-full bg-gradient-to-r from-accent via-purple-500 to-accent animate-glow p-1">
                <img
                  src={profileImage}
                  alt="Prasoon Pandey"
                  className="w-full h-full rounded-full object-cover border-2 border-background"
                />
              </div>
              <div className="absolute inset-0 rounded-full bg-gradient-to-r from-accent/30 to-purple-500/30 animate-pulse" />
            </div>
          </div>

          <div className="terminal-window animate-float card-3d">
            <div className="terminal-header">
              <div className="terminal-dot terminal-dot-red"></div>
              <div className="terminal-dot terminal-dot-yellow"></div>
              <div className="terminal-dot terminal-dot-green"></div>
              <span className="ml-4 text-xs font-mono text-muted-foreground">prasoon@dev-nexus:~</span>
              <div className="ml-auto flex items-center gap-2">
                <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse" />
                <span className="text-xs text-green-400">online</span>
              </div>
            </div>

            <div className="terminal-content">
              <div className="space-y-3">
                <div className="flex items-center">
                  <span className="text-accent mr-2">❯</span>
                  <span className="syntax-function">whoami</span>
                </div>
                <div className="text-muted-foreground ml-4 font-semibold">
                  Full Stack Developer & AI Innovation Architect
                </div>

                <div className="flex items-center mt-6">
                  <span className="text-accent mr-2">❯</span>
                  <span className="syntax-function">cat</span>
                  <span className="ml-2 syntax-string">"./expertise.json"</span>
                </div>

                <div className="ml-4 text-sm space-y-1">
                  <div className="syntax-comment">// Core Technologies & Expertise</div>
                  <div className="text-accent">{`{`}</div>
                  <div className="ml-4 space-y-1">
                    <div>
                      <span className="syntax-string">"frontend"</span>
                      <span className="syntax-operator">:</span> [
                      <span className="syntax-string">"React"</span>,
                      <span className="syntax-string">"Next.js"</span>,
                      <span className="syntax-string">"TypeScript"</span>]
                    </div>
                    <div>
                      <span className="syntax-string">"backend"</span>
                      <span className="syntax-operator">:</span> [
                      <span className="syntax-string">"Node.js"</span>,
                      <span className="syntax-string">"Express"</span>,
                      <span className="syntax-string">"MongoDB"</span>]
                    </div>
                    <div>
                      <span className="syntax-string">"ai_ml"</span>
                      <span className="syntax-operator">:</span> [
                      <span className="syntax-string">"LangChain"</span>,
                      <span className="syntax-string">"LLaMA"</span>,
                      <span className="syntax-string">"Python"</span>]
                    </div>
                    <div>
                      <span className="syntax-string">"passion"</span>
                      <span className="syntax-operator">:</span> 
                      <span className="syntax-string">"Building the future"</span>
                    </div>
                  </div>
                  <div className="text-accent">{`}`}</div>
                </div>

                <div className="flex items-center mt-6">
                  <span className="text-accent mr-2">❯</span>
                  <span className="syntax-function">npm run</span>
                  <span className="ml-2 gradient-text font-bold">create-amazing-things</span>
                </div>

                <div className="ml-4 text-green-400 text-sm animate-pulse">
                  ✓ Ready to innovate and collaborate!
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
