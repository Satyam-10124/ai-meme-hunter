import { Brain, Zap, Shield, TrendingUp, Target, Clock } from "lucide-react";

const Features = () => {
  const features = [
    {
      icon: Brain,
      title: "AI Pattern Recognition",
      description: "Advanced machine learning identifies BLOB-level opportunities before they explode",
      color: "text-primary"
    },
    {
      icon: Zap,
      title: "Lightning Execution",
      description: "Sub-second analysis and trade execution to catch opportunities at $5K, not $500K",
      color: "text-accent"
    },
    {
      icon: Shield,
      title: "Rug Protection",
      description: "Multi-layer security analysis prevents scams and protects your capital",
      color: "text-secondary"
    },
    {
      icon: TrendingUp,
      title: "Performance Tracking",
      description: "Real-time profit tracking with detailed analytics and optimization insights",
      color: "text-success"
    },
    {
      icon: Target,
      title: "Smart Position Sizing",
      description: "AI-optimized allocation based on confidence levels and risk management",
      color: "text-primary"
    },
    {
      icon: Clock,
      title: "24/7 Monitoring",
      description: "Never sleep, never miss. Continuous scanning of all new token launches",
      color: "text-accent"
    }
  ];

  return (
    <section className="py-20 bg-gradient-card relative">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="bg-gradient-primary bg-clip-text text-transparent">
              AI-Powered Features
            </span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Built on the proven $6.8M bot strategies, enhanced with cutting-edge AI
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div 
              key={index}
              className="bg-card border border-border rounded-xl p-6 shadow-card hover:shadow-glow-primary transition-all duration-300 hover:transform hover:scale-105"
            >
              <div className={`w-12 h-12 rounded-lg bg-muted flex items-center justify-center mb-4`}>
                <feature.icon className={`w-6 h-6 ${feature.color}`} />
              </div>
              <h3 className="text-xl font-semibold text-foreground mb-3">
                {feature.title}
              </h3>
              <p className="text-muted-foreground">
                {feature.description}
              </p>
            </div>
          ))}
        </div>

        {/* Proof Section */}
        <div className="mt-16 text-center">
          <div className="bg-muted/50 border border-accent/20 rounded-xl p-8 max-w-4xl mx-auto">
            <h3 className="text-2xl font-bold text-foreground mb-4">
              Proven Track Record
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div>
                <div className="text-3xl font-bold text-accent mb-2">943x</div>
                <div className="text-muted-foreground">FRIC Token Return</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-primary mb-2">2,227x</div>
                <div className="text-muted-foreground">FATHA Token Return</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-success mb-2">21,320x</div>
                <div className="text-muted-foreground">BLOB Token Return</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Features;