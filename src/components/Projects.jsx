import React, { useState } from "react";
import { ExternalLink, Github } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import AnimatedSection from "./AnimatedSection.jsx";

const projects = [
  { 
    title: "Tic Tac Toe", 
    description: "An interactive Tic Tac Toe game where two players can play with a clean and responsive UI, featuring score tracking and animations.", 
    tags: ["HTML", "CSS", "JavaScript"], 
    category: "game", 
    github: "https://github.com/M-Abbas-567/Portfolio-Project/blob/main/Tictactoe.html#L2" 
  },
  { 
    title: "Quiz App", 
    description: "A dynamic quiz application with multiple questions, real-time score tracking, instant feedback, and a beautiful results screen.", 
    tags: ["HTML", "CSS", "JavaScript"], 
    category: "app", 
    github: "https://github.com/M-Abbas-567/Portfolio-Project/blob/main/quiz.html" 
  },
  { 
    title: "Calculator", 
    description: "A sleek, responsive calculator for basic arithmetic operations with keyboard support and clean design.", 
    tags: ["HTML", "CSS", "JavaScript"], 
    category: "tool", 
    github: "https://github.com/M-Abbas-567/Portfolio-Project/blob/main/Calculator.html" 
  },
];
const filters = ["All", "app", "game", "tool"];

const Projects = () => {
  const [active, setActive] = useState("All");
  const filtered = active === "All" ? projects : projects.filter((p) => p.category === active);

  return (
    <section id="projects" className="py-28 px-6">
      <div className="max-w-6xl mx-auto">
        <AnimatedSection className="text-center mb-12">
          <p className="text-primary text-sm font-semibold tracking-widest uppercase mb-3">My Work</p>
          <h2 className="font-heading text-3xl sm:text-4xl font-bold text-foreground">Featured Projects</h2>
        </AnimatedSection>

        <AnimatedSection className="flex justify-center gap-3 mb-12 flex-wrap">
          {filters.map((f) => (
            <button key={f} onClick={() => setActive(f)} className={`px-5 py-2 rounded-xl text-sm font-medium transition-all capitalize ${active === f ? "bg-gradient-primary text-primary-foreground shadow-card" : "glass text-muted-foreground hover:text-foreground"}`}>
              {f}
            </button>
          ))}
        </AnimatedSection>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          <AnimatePresence mode="popLayout">
            {filtered.map((project) => (
              <motion.div key={project.title} layout initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} exit={{ opacity: 0, scale: 0.9 }} transition={{ duration: 0.3 }} className="group glass rounded-2xl p-6 hover:scale-[1.02] transition-transform flex flex-col">
                <div className="w-12 h-12 rounded-xl bg-gradient-accent flex items-center justify-center mb-5">
                  <ExternalLink className="w-6 h-6 text-accent-foreground" />
                </div>
                <h3 className="font-heading text-foreground font-semibold text-xl mb-2">{project.title}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed flex-1 mb-5">{project.description}</p>
                <div className="flex flex-wrap gap-2 mb-5">
                  {project.tags.map((tag) => (
                    <span key={tag} className="text-xs px-3 py-1 rounded-full bg-secondary text-muted-foreground font-medium">{tag}</span>
                  ))}
                </div>
                <div className="flex gap-3">
                  <a href={project.github} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors">
                    <Github size={16} /> Code
                  </a>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
};

export default Projects;