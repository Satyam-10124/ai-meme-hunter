import { useEffect, useRef, useState } from "react";

const AnimatedGrid = () => {
  const gridRef = useRef<HTMLDivElement>(null);
  const [gridNodes, setGridNodes] = useState<Array<{x: number, y: number, delay: number}>>([]);

  useEffect(() => {
    // Generate stable grid positions
    const nodes = Array.from({ length: 25 }, (_, i) => ({
      x: (i % 5) * 20 + Math.random() * 10 + 10, // More organized positioning
      y: Math.floor(i / 5) * 20 + Math.random() * 10 + 10,
      delay: i * 0.2
    }));
    setGridNodes(nodes);

    const grid = gridRef.current;
    if (!grid) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const children = entry.target.children;
            Array.from(children).forEach((child, index) => {
              setTimeout(() => {
                child.classList.add('animate-grid-in');
              }, index * 100);
            });
          }
        });
      },
      { threshold: 0.1 }
    );

    if (grid) {
      observer.observe(grid);
    }

    return () => {
      if (grid) {
        observer.unobserve(grid);
      }
    };
  }, []);

  return (
    <div 
      ref={gridRef}
      className="absolute inset-0 opacity-20 pointer-events-none overflow-hidden"
    >
      {/* Stable Grid Background */}
      <div 
        className="absolute inset-0"
        style={{
          backgroundImage: `
            linear-gradient(hsl(var(--primary) / 0.1) 1px, transparent 1px),
            linear-gradient(90deg, hsl(var(--primary) / 0.1) 1px, transparent 1px)
          `,
          backgroundSize: '60px 60px',
          animation: 'grid-pulse 4s ease-in-out infinite'
        }}
      />
      
      {/* Animated Grid Lines */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-1/4 w-px h-full bg-gradient-to-b from-transparent via-primary/40 to-transparent animate-data-flow"></div>
        <div className="absolute top-0 right-1/3 w-px h-full bg-gradient-to-b from-transparent via-accent/40 to-transparent animate-data-flow" style={{animationDelay: '1s'}}></div>
        <div className="absolute left-0 top-1/4 h-px w-full bg-gradient-to-r from-transparent via-secondary/30 to-transparent animate-data-flow" style={{animationDelay: '2s'}}></div>
      </div>

      {/* Stable Grid Nodes */}
      {gridNodes.map((node, i) => (
        <div
          key={i}
          className="absolute w-1.5 h-1.5 bg-primary/60 rounded-full opacity-0 animate-grid-pulse"
          style={{
            left: `${node.x}%`,
            top: `${node.y}%`,
            animationDelay: `${node.delay}s`
          }}
        />
      ))}
      
      {/* Floating Data Particles */}
      <div className="absolute top-1/6 left-1/5 w-3 h-3 bg-accent/50 rounded-full animate-float-stable shadow-glow-accent"></div>
      <div className="absolute top-2/3 right-1/4 w-2 h-2 bg-primary/50 rounded-full animate-float-stable shadow-glow-primary" style={{animationDelay: '1.5s'}}></div>
      <div className="absolute bottom-1/4 left-2/3 w-2.5 h-2.5 bg-secondary/40 rounded-full animate-float-stable" style={{animationDelay: '3s'}}></div>
    </div>
  );
};

export default AnimatedGrid;