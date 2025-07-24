import { useState } from 'react';
import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Progress } from '@/components/ui/progress';
import { Code, Database, Wrench, Brain, Palette, Server } from 'lucide-react';

const Skills = () => {
  const [activeCategory, setActiveCategory] = useState('languages');

  const skillCategories = {
    languages: {
      icon: Code,
      title: 'Languages',
      color: 'text-neon-cyan',
      skills: [
        { name: 'Java', level: 90, description: 'Object-oriented programming, Spring Boot' },
        { name: 'JavaScript', level: 85, description: 'ES6+, Async/Await, Functional Programming' },
        { name: 'Python', level: 80, description: 'AI/ML, Data Analysis, Automation' },
        { name: 'SQL', level: 85, description: 'Complex queries, Database optimization' },
        { name: 'HTML/CSS', level: 90, description: 'Semantic markup, Responsive design' },
      ]
    },
    frontend: {
      icon: Palette,
      title: 'Frontend',
      color: 'text-neon-purple',
      skills: [
        { name: 'React.js', level: 88, description: 'Hooks, Context API, Performance optimization' },
        { name: 'Next.js', level: 82, description: 'SSR, Static generation, API routes' },
        { name: 'Tailwind CSS', level: 90, description: 'Utility-first, Responsive design' },
        { name: 'Vite', level: 85, description: 'Build tools, Development environment' },
        { name: 'TypeScript', level: 80, description: 'Type safety, Interface design' },
      ]
    },
    backend: {
      icon: Server,
      title: 'Backend',
      color: 'text-neon-green',
      skills: [
        { name: 'Node.js', level: 85, description: 'Server-side JavaScript, Performance' },
        { name: 'Express.js', level: 88, description: 'RESTful APIs, Middleware, Authentication' },
        { name: 'MongoDB', level: 80, description: 'NoSQL, Aggregation, Indexing' },
        { name: 'MySQL', level: 82, description: 'Relational databases, Joins, Optimization' },
        { name: 'API Design', level: 85, description: 'REST, GraphQL, Documentation' },
      ]
    },
    ai: {
      icon: Brain,
      title: 'AI/ML',
      color: 'text-neon-orange',
      skills: [
        { name: 'LangChain', level: 85, description: 'LLM applications, Chain development' },
        { name: 'Groq API', level: 80, description: 'Fast inference, Model integration' },
        { name: 'ChromaDB', level: 75, description: 'Vector databases, Embeddings' },
        { name: 'NLP', level: 78, description: 'Text processing, Sentiment analysis' },
        { name: 'Machine Learning', level: 75, description: 'Algorithms, Model training' },
      ]
    },
    tools: {
      icon: Wrench,
      title: 'Tools',
      color: 'text-neon-pink',
      skills: [
        { name: 'Git', level: 90, description: 'Version control, Branching strategies' },
        { name: 'GitHub', level: 88, description: 'Collaboration, CI/CD, Actions' },
        { name: 'Postman', level: 85, description: 'API testing, Documentation' },
        { name: 'VS Code', level: 95, description: 'Extensions, Debugging, Productivity' },
        { name: 'Linux', level: 80, description: 'Command line, System administration' },
      ]
    }
  };

  return (
    <section id="skills" className="py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="syntax-comment">function </span>
            <span className="text-accent">getSkills</span>
            <span className="syntax-comment">()</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Technologies and tools I use to bring ideas to life
          </p>
        </div>

        {/* Category Tabs */}
        <div className="flex flex-wrap justify-center gap-2 mb-12">
          {Object.entries(skillCategories).map(([key, category]) => {
            const IconComponent = category.icon;
            return (
              <button
                key={key}
                onClick={() => setActiveCategory(key)}
                className={`flex items-center gap-2 px-6 py-3 rounded-lg transition-all duration-300 font-mono text-sm
                  ${activeCategory === key 
                    ? `bg-accent text-accent-foreground shadow-lg` 
                    : 'bg-card border border-border hover:border-accent/50'
                  }`}
              >
                <IconComponent className="w-4 h-4" />
                {category.title}
              </button>
            );
          })}
        </div>

        {/* Skills Display */}
        <div className="grid lg:grid-cols-2 gap-8">
          {/* Skills List */}
          <div className="space-y-6">
            {skillCategories[activeCategory as keyof typeof skillCategories].skills.map((skill, index) => (
              <Card key={skill.name} className="p-6 bg-card border-border hover:border-accent/50 transition-all duration-300">
                <div className="space-y-4">
                  <div className="flex justify-between items-center">
                    <h3 className="text-lg font-semibold text-foreground">{skill.name}</h3>
                    <Badge variant="outline" className="text-accent border-accent/50">
                      {skill.level}%
                    </Badge>
                  </div>
                  
                  <Progress value={skill.level} className="h-2" />
                  
                  <p className="text-sm text-muted-foreground">{skill.description}</p>
                </div>
              </Card>
            ))}
          </div>

          {/* Terminal Skills Display */}
          <div className="terminal-window sticky top-8">
            <div className="terminal-header">
              <div className="terminal-dot terminal-dot-red"></div>
              <div className="terminal-dot terminal-dot-yellow"></div>
              <div className="terminal-dot terminal-dot-green"></div>
              <span className="ml-4 text-xs font-mono text-muted-foreground">
                skills-{activeCategory}.js
              </span>
            </div>
            <div className="terminal-content min-h-[400px]">
              <div className="space-y-3">
                <div className="syntax-comment">// {skillCategories[activeCategory as keyof typeof skillCategories].title} Skills Overview</div>
                
                <div className="space-y-2">
                  <div>
                    <span className="syntax-keyword">const</span>{' '}
                    <span className="syntax-variable">{activeCategory}Skills</span> = {'{'}
                  </div>
                  
                  {skillCategories[activeCategory as keyof typeof skillCategories].skills.map((skill, index) => (
                    <div key={skill.name} className="ml-4">
                      <span className="syntax-string">"{skill.name}"</span>: {'{'}
                      <div className="ml-4">
                        <div><span className="syntax-string">"proficiency"</span>: <span className="text-accent">{skill.level}%</span>,</div>
                        <div><span className="syntax-string">"description"</span>: <span className="syntax-string">"{skill.description}"</span></div>
                      </div>
                      {'}'}{index < skillCategories[activeCategory as keyof typeof skillCategories].skills.length - 1 ? ',' : ''}
                    </div>
                  ))}
                  
                  <div>{'}'}</div>
                </div>

                <div className="mt-6">
                  <div className="flex">
                    <span className="text-accent mr-2">$</span>
                    <span className="syntax-function">console</span>
                    <span className="syntax-comment">.log(</span>
                    <span className="syntax-variable">{activeCategory}Skills</span>
                    <span className="syntax-comment">)</span>
                  </div>
                </div>

                <div className="mt-4 p-4 bg-muted/50 rounded border-l-4 border-accent">
                  <div className="text-sm space-y-1">
                    <div className="text-accent font-semibold">
                      Total Skills: {skillCategories[activeCategory as keyof typeof skillCategories].skills.length}
                    </div>
                    <div className="text-muted-foreground">
                      Average Proficiency: {Math.round(
                        skillCategories[activeCategory as keyof typeof skillCategories].skills.reduce((acc, skill) => acc + skill.level, 0) / 
                        skillCategories[activeCategory as keyof typeof skillCategories].skills.length
                      )}%
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;