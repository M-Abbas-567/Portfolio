import React from "react";
import { Code, Palette, Zap } from "lucide-react";
import AnimatedSection from "./AnimatedSection.jsx";

const cards = [
  { icon: Code, title: "Clean Code", text: "I write well-structured, maintainable code following modern best practices and standards." },
  { icon: Palette, title: "Design Sense", text: "Eye for detail and aesthetics — creating beautiful interfaces that users love to interact with." },
  { icon: Zap, title: "Fast Learner", text: "Continuously expanding my skill set and staying current with the latest web technologies." },
];

const About = () => (
  <section id="about" className="py-28 px-6">
    <div className="max-w-6xl mx-auto">
      <AnimatedSection className="text-center mb-16">
        <p className="text-primary text-sm font-semibold tracking-widest uppercase mb-3">About Me</p>
        <h2 className="font-heading text-3xl sm:text-4xl font-bold text-foreground">Who I Am</h2>
      </AnimatedSection>

      <div className="grid lg:grid-cols-2 gap-16 items-center">
        <AnimatedSection>
          <p className="text-muted-foreground text-lg leading-relaxed mb-6">
            I'm <span className="text-foreground font-semibold">Abbas</span>, a passionate Frontend Developer with a strong foundation in HTML, CSS, JavaScript, and React. I enjoy transforming ideas into responsive, performant web applications that provide exceptional user experiences.
          </p>
          <p className="text-muted-foreground text-lg leading-relaxed">
            My approach combines clean code practices with creative design thinking. I believe that great software is not just functional but also delightful to use. I'm always eager to learn new technologies and push the boundaries of what's possible on the web.
          </p>
        </AnimatedSection>

        <div className="grid gap-4">
          {cards.map((card, i) => (
            <AnimatedSection key={card.title} delay={i * 0.1}>
              <div className="glass rounded-2xl p-6 flex items-start gap-5 hover:scale-[1.02] transition-transform">
                <div className="w-12 h-12 rounded-xl bg-gradient-primary flex items-center justify-center shrink-0">
                  <card.icon className="w-6 h-6 text-primary-foreground" />
                </div>
                <div>
                  <h3 className="font-heading text-foreground font-semibold text-lg mb-1">{card.title}</h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">{card.text}</p>
                </div>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </div>
  </section>
);

export default About;
