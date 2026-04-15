import React from "react";
import { Github, Linkedin } from "lucide-react";

const Footer = () => (
  <footer className="py-10 px-6 border-t border-border/50">
    <div className="max-w-6xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
      <a href="#home" className="font-heading text-lg font-bold text-foreground">
        Abbas<span className="text-gradient">.</span>
      </a>
      <p className="text-muted-foreground text-sm">© 2026 Abbas. All rights reserved.</p>
      <div className="flex gap-3">
        <a href="https://github.com/M-Abbas-567" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-foreground transition-colors"><Github size={18} /></a>
        <a href="https://www.linkedin.com/in/abbas-asghar/" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-foreground transition-colors"><Linkedin size={18} /></a>
      </div>
    </div>
  </footer>
);

export default Footer;
