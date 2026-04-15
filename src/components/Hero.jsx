import React from "react";
import { ArrowDown, Github, Linkedin } from "lucide-react";
import { motion } from "framer-motion";

const Hero = () => {
  return (
    <section id="home" className="min-h-screen flex items-center relative overflow-hidden pt-20">
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 right-[10%] w-72 h-72 bg-primary/10 rounded-full blur-3xl animate-blob" />
        <div className="absolute bottom-20 left-[5%] w-96 h-96 bg-accent/10 rounded-full blur-3xl animate-blob" style={{ animationDelay: "2s" }} />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-primary/5 rounded-full blur-3xl" />
        <div className="absolute inset-0 opacity-[0.03]" style={{ backgroundImage: "linear-gradient(hsl(var(--foreground)) 1px, transparent 1px), linear-gradient(90deg, hsl(var(--foreground)) 1px, transparent 1px)", backgroundSize: "60px 60px" }} />
      </div>

      <div className="max-w-6xl mx-auto px-6 w-full relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <motion.div initial={{ opacity: 0, x: -50 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}>
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass text-sm text-muted-foreground mb-6">
              <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
              Available for work
            </div>

            <h1 className="font-heading text-5xl sm:text-6xl lg:text-7xl font-bold text-foreground leading-[1.1] mb-6">
              Hi, I'm{" "}<span className="text-gradient">Abbas</span><br />
              <span className="text-gradient-accent">Frontend</span>{" "}Developer
            </h1>

            <p className="text-muted-foreground text-lg leading-relaxed max-w-lg mb-8">
              I craft responsive, user-friendly web experiences with clean code and modern technologies. Passionate about turning ideas into pixel-perfect reality.
            </p>

            <div className="flex flex-wrap gap-4 mb-8">
              <a href="#projects" className="bg-gradient-primary text-primary-foreground px-8 py-3.5 rounded-xl font-semibold hover:opacity-90 transition-all hover:scale-105 shadow-card">
                View Projects
              </a>
              <a href="#contact" className="glass px-8 py-3.5 rounded-xl font-semibold text-foreground hover:bg-card transition-all hover:scale-105">
                Contact Me
              </a>
            </div>

            <div className="flex items-center gap-3">
              <a href="https://github.com/M-Abbas-567" target="_blank" rel="noopener noreferrer" className="w-11 h-11 rounded-xl glass flex items-center justify-center text-muted-foreground hover:text-foreground hover:scale-110 transition-all">
                <Github size={20} />
              </a>
              <a href="https://www.linkedin.com/in/abbas-asghar/" target="_blank" rel="noopener noreferrer" className="w-11 h-11 rounded-xl glass flex items-center justify-center text-muted-foreground hover:text-foreground hover:scale-110 transition-all">
                <Linkedin size={20} />
              </a>
            </div>
          </motion.div>

          <motion.div initial={{ opacity: 0, scale: 0.8 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.8, delay: 0.2, ease: [0.22, 1, 0.36, 1] }} className="flex justify-center lg:justify-end">
            <div className="relative w-full max-w-md">
              <div className="absolute -inset-4 bg-gradient-primary opacity-10 blur-2xl rounded-3xl" />
              <div className="relative glass-strong rounded-2xl overflow-hidden">
                <div className="flex items-center gap-2 px-4 py-3 border-b border-border/50">
                  <div className="w-3 h-3 rounded-full bg-destructive/70" />
                  <div className="w-3 h-3 rounded-full bg-accent/50" />
                  <div className="w-3 h-3 rounded-full bg-primary/70" />
                  <span className="text-xs text-muted-foreground ml-2 font-mono">abbas.dev</span>
                </div>
                <div className="p-5 font-mono text-sm space-y-3">
                  <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.5 }}>
                    <span className="text-primary">const</span>{" "}
                    <span className="text-foreground">developer</span>{" "}
                    <span className="text-muted-foreground">=</span>{" "}
                    <span className="text-accent">{"{"}</span>
                  </motion.div>
                  <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.7 }} className="pl-4">
                    <span className="text-foreground">name</span>
                    <span className="text-muted-foreground">:</span>{" "}
                    <span className="text-primary">"Abbas Asghar"</span>
                    <span className="text-muted-foreground">,</span>
                  </motion.div>
                  <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.9 }} className="pl-4">
                    <span className="text-foreground">role</span>
                    <span className="text-muted-foreground">:</span>{" "}
                    <span className="text-primary">"Frontend Dev"</span>
                    <span className="text-muted-foreground">,</span>
                  </motion.div>
                  <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 1.1 }} className="pl-4">
                    <span className="text-foreground">skills</span>
                    <span className="text-muted-foreground">:</span>{" "}
                    <span className="text-accent">[</span>
                    <span className="text-primary">"React"</span>
                    <span className="text-muted-foreground">,</span>{" "}
                    <span className="text-primary">"JS"</span>
                    <span className="text-muted-foreground">,</span>{" "}
                    <span className="text-primary">"CSS"</span>
                    <span className="text-accent">]</span>
                    <span className="text-muted-foreground">,</span>
                  </motion.div>
                  <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 1.3 }} className="pl-4">
                    <span className="text-foreground">passion</span>
                    <span className="text-muted-foreground">:</span>{" "}
                    <span className="text-primary">"Building UIs"</span>
                  </motion.div>
                  <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 1.5 }}>
                    <span className="text-accent">{"}"}</span>
                    <span className="text-muted-foreground">;</span>
                  </motion.div>
                  <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 1.7 }} className="flex items-center gap-1">
                    <span className="text-primary">❯</span>
                    <span className="w-2 h-4 bg-primary animate-pulse" />
                  </motion.div>
                </div>
              </div>
              <motion.div animate={{ y: [0, -8, 0] }} transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }} className="absolute -top-3 -right-3 glass rounded-2xl px-4 py-2.5 text-sm font-medium text-foreground">
                ⚛️ React
              </motion.div>
              <motion.div animate={{ y: [0, 8, 0] }} transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }} className="absolute -bottom-3 -left-3 glass rounded-2xl px-4 py-2.5 text-sm font-medium text-foreground">
                🚀 Fast Learner
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>

      <a href="#about" className="absolute bottom-8 left-1/2 -translate-x-1/2 text-muted-foreground hover:text-primary transition-colors">
        <motion.div animate={{ y: [0, 8, 0] }} transition={{ duration: 2, repeat: Infinity }}>
          <ArrowDown size={24} />
        </motion.div>
      </a>
    </section>
  );
};

export default Hero;
