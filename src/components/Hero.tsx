import { Button } from "@/components/ui/button";
import { useState } from "react";
import { ChevronRight, Zap, TrendingUp, Bot } from "lucide-react";

const Hero = () => {
  const [email, setEmail] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // TODO: Handle email submission
    console.log("Email submitted:", email);
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center bg-gradient-hero overflow-hidden">
      {/* Floating particles animation */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-4 h-4 bg-primary/30 rounded-full animate-float"></div>
        <div className="absolute top-1/3 right-1/3 w-3 h-3 bg-accent/40 rounded-full animate-float delay-1000"></div>
        <div className="absolute bottom-1/4 left-1/3 w-2 h-2 bg-secondary/30 rounded-full animate-float delay-2000"></div>
        <div className="absolute bottom-1/3 right-1/4 w-5 h-5 bg-primary-glow/20 rounded-full animate-float delay-1500"></div>
      </div>

      <div className="container mx-auto px-4 text-center relative z-10">
        {/* Logo */}
        <div className="mb-8 animate-fade-in">
          <img 
            src="/lovable-uploads/60352080-835e-449f-87ac-2764711a13a4.png" 
            alt="LazygraphAI" 
            className="mx-auto h-32 w-auto animate-pulse-glow"
          />
        </div>

        {/* Main Headline */}
        <h1 className="text-5xl md:text-7xl font-bold mb-6 animate-slide-up">
          <span className="bg-gradient-primary bg-clip-text text-transparent">
            The Future of
          </span>
          <br />
          <span className="text-foreground">AI Crypto Trading</span>
        </h1>

        {/* Subheadline */}
        <p className="text-xl md:text-2xl text-muted-foreground mb-8 max-w-3xl mx-auto animate-slide-up delay-200">
          Never miss another <span className="text-accent font-semibold">21,320x opportunity</span> like BLOB. 
          Our AI scans 500+ tokens daily to find the next life-changing trade.
        </p>

        {/* Key Stats */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12 max-w-4xl mx-auto animate-slide-up delay-400">
          <div className="bg-card border border-border rounded-lg p-6 shadow-card">
            <div className="flex items-center justify-center mb-3">
              <Zap className="w-8 h-8 text-accent" />
            </div>
            <div className="text-2xl font-bold text-foreground mb-1">21,320x</div>
            <div className="text-muted-foreground">Max Return (BLOB)</div>
          </div>
          <div className="bg-card border border-border rounded-lg p-6 shadow-card">
            <div className="flex items-center justify-center mb-3">
              <TrendingUp className="w-8 h-8 text-primary" />
            </div>
            <div className="text-2xl font-bold text-foreground mb-1">$6.8M</div>
            <div className="text-muted-foreground">Bot Profits (30 days)</div>
          </div>
          <div className="bg-card border border-border rounded-lg p-6 shadow-card">
            <div className="flex items-center justify-center mb-3">
              <Bot className="w-8 h-8 text-secondary" />
            </div>
            <div className="text-2xl font-bold text-foreground mb-1">500+</div>
            <div className="text-muted-foreground">Tokens Scanned Daily</div>
          </div>
        </div>

        {/* Email Signup */}
        <div className="max-w-md mx-auto mb-8 animate-slide-up delay-600">
          <form onSubmit={handleSubmit} className="flex gap-3">
            <input
              type="email"
              placeholder="Enter your email for early access"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="flex-1 px-4 py-3 bg-input border border-border rounded-lg text-foreground placeholder-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary"
              required
            />
            <Button type="submit" variant="cta" size="lg" className="px-6">
              Join Waitlist
              <ChevronRight className="w-4 h-4" />
            </Button>
          </form>
        </div>

        {/* Coming Soon Badge */}
        <div className="inline-flex items-center px-6 py-3 bg-muted border border-accent/30 rounded-full text-accent font-semibold animate-pulse-glow">
          <div className="w-2 h-2 bg-accent rounded-full mr-3 animate-ping"></div>
          Coming Soon - AI Launch Imminent
        </div>

        {/* Social Proof */}
        <p className="text-sm text-muted-foreground mt-8 animate-fade-in delay-800">
          Join 50,000+ traders preparing for the AI revolution
        </p>
      </div>
    </section>
  );
};

export default Hero;