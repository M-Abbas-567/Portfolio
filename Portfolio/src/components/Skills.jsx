import React from "react";
import AnimatedSection from "./AnimatedSection.jsx";

const skillCategories = [
  { title: "Frontend", skills: [{ name: "HTML5", level: 90 }, { name: "CSS3 / Tailwind", level: 85 }, { name: "JavaScript", level: 80 }, { name: "React.js", level: 75 }] },
  { title: "Tools & Others", skills: [{ name: "Git & GitHub", level: 80 }, { name: "Responsive Design", level: 90 }, { name: "VS Code", level: 85 }, { name: "Figma Basics", level: 60 }] },
];

const techIcons = [
  { name: "HTML5", emoji: "🏗️" }, { name: "CSS3", emoji: "🎨" }, { name: "JavaScript", emoji: "⚡" },
  { name: "React", emoji: "⚛️" }, { name: "Tailwind", emoji: "🌊" }, { name: "Git", emoji: "🔀" },
];

const Skills = () => (
  <section id="skills" className="py-28 px-6 relative">
    <div className="absolute inset-0 bg-secondary/30" />
    <div className="max-w-6xl mx-auto relative z-10">
      <AnimatedSection className="text-center mb-16">
        <p className="text-primary text-sm font-semibold tracking-widest uppercase mb-3">My Expertise</p>
        <h2 className="font-heading text-3xl sm:text-4xl font-bold text-foreground">Skills & Technologies</h2>
      </AnimatedSection>

      <AnimatedSection className="flex flex-wrap justify-center gap-4 mb-16">
        {techIcons.map((tech) => (
          <div key={tech.name} className="glass rounded-2xl px-5 py-3 flex items-center gap-2 hover:scale-105 transition-transform cursor-default">
            <span className="text-xl">{tech.emoji}</span>
            <span className="text-sm font-medium text-foreground">{tech.name}</span>
          </div>
        ))}
      </AnimatedSection>

      <div className="grid md:grid-cols-2 gap-10">
        {skillCategories.map((cat, ci) => (
          <AnimatedSection key={cat.title} delay={ci * 0.15}>
            <h3 className="font-heading text-xl font-semibold text-foreground mb-6">{cat.title}</h3>
            <div className="space-y-5">
              {cat.skills.map((skill) => (
                <div key={skill.name}>
                  <div className="flex justify-between text-sm mb-2">
                    <span className="text-foreground font-medium">{skill.name}</span>
                    <span className="text-muted-foreground">{skill.level}%</span>
                  </div>
                  <div className="h-2.5 rounded-full bg-secondary overflow-hidden">
                    <div className="h-full rounded-full bg-gradient-primary transition-all duration-1000" style={{ width: `${skill.level}%` }} />
                  </div>
                </div>
              ))}
            </div>
          </AnimatedSection>
        ))}
      </div>
    </div>
  </section>
);

export default Skills;
