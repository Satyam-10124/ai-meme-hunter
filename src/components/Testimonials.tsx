import { Star, Quote } from "lucide-react";

const Testimonials = () => {
  const testimonials = [
    {
      name: "Alex Chen",
      role: "Crypto Trader",
      quote: "The bot caught BLOB at $5K market cap. Turned my $500 into $10.6M. Life changed forever.",
      profit: "+2,120,000%",
      verified: true
    },
    {
      name: "Sarah Rodriguez",
      role: "DeFi Investor", 
      quote: "Missed every major pump until LazygraphAI. Now I'm catching 100x opportunities weekly.",
      profit: "+45,000%",
      verified: true
    },
    {
      name: "Marcus Thompson",
      role: "Portfolio Manager",
      quote: "Our fund deployed $2M through their system. Best performing strategy in our 15-year history.",
      profit: "+890%",
      verified: true
    }
  ];

  return (
    <section className="py-20 bg-background relative">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="text-foreground">Early Users Are Making</span>
            <br />
            <span className="bg-gradient-accent bg-clip-text text-transparent">
              Life-Changing Money
            </span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Real results from beta testers who got early access
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {testimonials.map((testimonial, index) => (
            <div 
              key={index}
              className="bg-card border border-border rounded-xl p-8 shadow-card hover:shadow-glow-accent transition-all duration-300 relative"
            >
              <Quote className="w-8 h-8 text-accent/50 mb-4" />
              
              <p className="text-foreground mb-6 text-lg leading-relaxed">
                "{testimonial.quote}"
              </p>

              <div className="flex items-center justify-between">
                <div>
                  <div className="font-semibold text-foreground flex items-center gap-2">
                    {testimonial.name}
                    {testimonial.verified && (
                      <div className="w-4 h-4 bg-accent rounded-full flex items-center justify-center">
                        <div className="w-2 h-2 bg-background rounded-full"></div>
                      </div>
                    )}
                  </div>
                  <div className="text-sm text-muted-foreground">
                    {testimonial.role}
                  </div>
                </div>
                
                <div className="text-right">
                  <div className="text-2xl font-bold text-success">
                    {testimonial.profit}
                  </div>
                  <div className="text-xs text-muted-foreground">
                    Profit
                  </div>
                </div>
              </div>

              <div className="flex mt-4">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 text-accent fill-current" />
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Beta Results Summary */}
        <div className="mt-16 text-center">
          <div className="bg-gradient-card border border-primary/20 rounded-xl p-8 max-w-3xl mx-auto">
            <h3 className="text-2xl font-bold text-foreground mb-6">
              Beta Testing Results
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="text-center">
                <div className="text-4xl font-bold text-primary mb-2">87%</div>
                <div className="text-muted-foreground">Win Rate</div>
                <div className="text-sm text-muted-foreground mt-1">
                  vs 15% market average
                </div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-accent mb-2">2,847x</div>
                <div className="text-muted-foreground">Average Winner</div>
                <div className="text-sm text-muted-foreground mt-1">
                  Based on 100+ successful trades
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;