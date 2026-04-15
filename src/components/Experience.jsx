import React from "react";
import { GraduationCap, Briefcase } from "lucide-react";
import AnimatedSection from "./AnimatedSection.jsx";

const timeline = [
  { type: "education", title: "Frontend Development", place: "Self-Learning & Online Courses", period: "2024 – Present", description: "Mastering modern frontend technologies including React.js, Tailwind CSS, and JavaScript through structured online courses and hands-on projects." },
  { type: "education", title: "Computer Science Fundamentals", place: "Academic Studies", period: "2023 – Present", description: "Building a strong foundation in programming, data structures, and software development principles." },
  { type: "project", title: "Personal Projects", place: "Self-Initiated", period: "2024 – Present", description: "Developed multiple web applications including interactive games, utilities, and responsive websites to apply and showcase skills." },
];

const Experience = () => (
  <section id="experience" className="py-28 px-6 relative">
    <div className="absolute inset-0 bg-secondary/30" />
    <div className="max-w-4xl mx-auto relative z-10">
      <AnimatedSection className="text-center mb-16">
        <p className="text-primary text-sm font-semibold tracking-widest uppercase mb-3">My Journey</p>
        <h2 className="font-heading text-3xl sm:text-4xl font-bold text-foreground">Experience & Education</h2>
      </AnimatedSection>

      <div className="relative">
        <div className="absolute left-6 md:left-1/2 md:-translate-x-px top-0 bottom-0 w-0.5 bg-border" />
        <div className="space-y-12">
          {timeline.map((item, i) => (
            <AnimatedSection key={i} delay={i * 0.12}>
              <div className={`relative flex flex-col md:flex-row ${i % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"} items-start gap-8`}>
                <div className="absolute left-6 md:left-1/2 -translate-x-1/2 w-4 h-4 rounded-full bg-gradient-primary border-4 border-background z-10" />
                <div className={`ml-14 md:ml-0 md:w-[45%] ${i % 2 === 0 ? "md:pr-8 md:text-right" : "md:pl-8"}`}>
                  <div className="glass rounded-2xl p-6 hover:scale-[1.02] transition-transform">
                    <div className={`flex items-center gap-2 mb-3 ${i % 2 === 0 ? "md:justify-end" : ""}`}>
                      {item.type === "education" ? <GraduationCap size={18} className="text-primary" /> : <Briefcase size={18} className="text-accent" />}
                      <span className="text-xs text-muted-foreground font-medium">{item.period}</span>
                    </div>
                    <h3 className="font-heading text-foreground font-semibold text-lg mb-1">{item.title}</h3>
                    <p className="text-primary text-sm font-medium mb-2">{item.place}</p>
                    <p className="text-muted-foreground text-sm leading-relaxed">{item.description}</p>
                  </div>
                </div>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </div>
  </section>
);

export default Experience;
