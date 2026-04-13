import React, { useState } from "react";
import { Send, Mail, MapPin, Github, Linkedin } from "lucide-react";
import AnimatedSection from "./AnimatedSection.jsx";

const Contact = () => {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [errors, setErrors] = useState({});
  const [submitted, setSubmitted] = useState(false);

  const validate = () => {
    const e = {};
    if (!form.name.trim()) e.name = "Name is required";
    if (!form.email.trim()) e.email = "Email is required";
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) e.email = "Invalid email";
    if (!form.message.trim()) e.message = "Message is required";
    else if (form.message.length > 1000) e.message = "Max 1000 characters";
    return e;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const v = validate();
    if (Object.keys(v).length) { setErrors(v); return; }
    setErrors({});
    setSubmitted(true);
  };

  return (
    <section id="contact" className="py-28 px-6">
      <div className="max-w-6xl mx-auto">
        <AnimatedSection className="text-center mb-16">
          <p className="text-primary text-sm font-semibold tracking-widest uppercase mb-3">Get In Touch</p>
          <h2 className="font-heading text-3xl sm:text-4xl font-bold text-foreground">Contact Me</h2>
        </AnimatedSection>

        <div className="grid lg:grid-cols-2 gap-12">
          <AnimatedSection>
            <h3 className="font-heading text-2xl font-semibold text-foreground mb-4">Let's work together</h3>
            <p className="text-muted-foreground leading-relaxed mb-8">Have a project in mind or just want to say hello? Feel free to reach out. I'm always open to discussing new opportunities and ideas.</p>
            <div className="space-y-4 mb-8">
              <div className="flex items-center gap-4">
                <div className="w-11 h-11 rounded-xl bg-gradient-primary flex items-center justify-center"><Mail size={18} className="text-primary-foreground" /></div>
                <span className="text-muted-foreground text-sm">abbas.dev@example.com</span>
              </div>
              <div className="flex items-center gap-4">
                <div className="w-11 h-11 rounded-xl bg-gradient-accent flex items-center justify-center"><MapPin size={18} className="text-accent-foreground" /></div>
                <span className="text-muted-foreground text-sm">Pakistan</span>
              </div>
            </div>
            <div className="flex gap-3">
              <a href="https://github.com/M-Abbas-567" target="_blank" rel="noopener noreferrer" className="w-11 h-11 rounded-xl glass flex items-center justify-center text-muted-foreground hover:text-foreground hover:scale-110 transition-all"><Github size={20} /></a>
              <a href="https://www.linkedin.com/in/abbas-asghar/" target="_blank" rel="noopener noreferrer" className="w-11 h-11 rounded-xl glass flex items-center justify-center text-muted-foreground hover:text-foreground hover:scale-110 transition-all"><Linkedin size={20} /></a>
            </div>
          </AnimatedSection>

          <AnimatedSection delay={0.15}>
            {submitted ? (
              <div className="glass rounded-2xl p-10 text-center">
                <div className="text-4xl mb-4">🎉</div>
                <h3 className="font-heading text-xl font-semibold text-foreground mb-2">Message Sent!</h3>
                <p className="text-muted-foreground text-sm">Thank you for reaching out. I'll get back to you soon.</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="glass rounded-2xl p-8 space-y-5">
                <div>
                  <label className="text-sm font-medium text-foreground mb-2 block">Name</label>
                  <input type="text" maxLength={100} value={form.name} onChange={(e) => setForm({ ...form, name: e.target.value })} className="w-full px-4 py-3 rounded-xl bg-secondary/50 border border-border text-foreground text-sm placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/50 transition-all" placeholder="Your name" />
                  {errors.name && <p className="text-destructive text-xs mt-1">{errors.name}</p>}
                </div>
                <div>
                  <label className="text-sm font-medium text-foreground mb-2 block">Email</label>
                  <input type="email" maxLength={255} value={form.email} onChange={(e) => setForm({ ...form, email: e.target.value })} className="w-full px-4 py-3 rounded-xl bg-secondary/50 border border-border text-foreground text-sm placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/50 transition-all" placeholder="your@email.com" />
                  {errors.email && <p className="text-destructive text-xs mt-1">{errors.email}</p>}
                </div>
                <div>
                  <label className="text-sm font-medium text-foreground mb-2 block">Message</label>
                  <textarea rows={4} maxLength={1000} value={form.message} onChange={(e) => setForm({ ...form, message: e.target.value })} className="w-full px-4 py-3 rounded-xl bg-secondary/50 border border-border text-foreground text-sm placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/50 transition-all resize-none" placeholder="Your message..." />
                  {errors.message && <p className="text-destructive text-xs mt-1">{errors.message}</p>}
                </div>
                <button type="submit" className="w-full bg-gradient-primary text-primary-foreground py-3.5 rounded-xl font-semibold hover:opacity-90 transition-all flex items-center justify-center gap-2">
                  <Send size={18} /> Send Message
                </button>
              </form>
            )}
          </AnimatedSection>
        </div>
      </div>
    </section>
  );
};

export default Contact;
