import { useEffect, useRef } from 'react';
import gsap from 'gsap';

interface Node {
  x: number;
  y: number;
  vx: number;
  vy: number;
  radius: number;
  type: 'webhook' | 'ai' | 'action' | 'trigger';
  label: string;
  pulseSpeed: number;
  angle: number;
}

export default function ParticleBackground() {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const containerRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animationFrameId: number;
    let width = window.innerWidth;
    let height = window.innerHeight;

    // Handle mouse movement
    const mouse = { x: -1000, y: -1000, active: false };

    const handleMouseMove = (e: MouseEvent) => {
      mouse.x = e.clientX;
      mouse.y = e.clientY;
      mouse.active = true;
    };

    const handleMouseLeave = () => {
      mouse.x = -1000;
      mouse.y = -1000;
      mouse.active = false;
    };

    const handleResize = () => {
      if (!canvas) return;
      width = window.innerWidth;
      height = window.innerHeight;
      canvas.width = width;
      canvas.height = height;
    };

    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('mouseleave', handleMouseLeave);
    window.addEventListener('resize', handleResize);

    // Initial sizing
    canvas.width = width;
    canvas.height = height;

    // Create workflow nodes
    const nodeCount = Math.min(Math.floor((width * height) / 30000), 40);
    const nodes: Node[] = [];

    const labels = [
      'Webhook', 'API Call', 'AI Agent', 'n8n', 'WhatsApp', 
      'Trigger', 'Router', 'Gmail', 'Claude', 'OpenAI', 
      'HubSpot', 'Stripe', 'database', 'Condition'
    ];

    const types: ('webhook' | 'ai' | 'action' | 'trigger')[] = [
      'webhook', 'ai', 'action', 'trigger'
    ];

    for (let i = 0; i < nodeCount; i++) {
      nodes.push({
        x: Math.random() * width,
        y: Math.random() * height,
        vx: (Math.random() - 0.5) * 0.4,
        vy: (Math.random() - 0.5) * 0.4,
        radius: Math.random() * 3 + 2,
        type: types[i % types.length],
        label: labels[i % labels.length],
        pulseSpeed: 0.01 + Math.random() * 0.02,
        angle: Math.random() * Math.PI * 2,
      });
    }

    // GSAP clean tracking
    const ticker = () => {
      ctx.clearRect(0, 0, width, height);

      // Draw connections
      ctx.lineWidth = 0.5;
      for (let i = 0; i < nodes.length; i++) {
        for (let j = i + 1; j < nodes.length; j++) {
          const dx = nodes[i].x - nodes[j].x;
          const dy = nodes[i].y - nodes[j].y;
          const dist = Math.sqrt(dx * dx + dy * dy);

          if (dist < 150) {
            const alpha = (1 - dist / 150) * 0.15;
            
            // Color connection based on node types
            const gradient = ctx.createLinearGradient(nodes[i].x, nodes[i].y, nodes[j].x, nodes[j].y);
            
            const getColor = (type: string) => {
              if (type === 'ai') return `rgba(16, 185, 129, ${alpha})`; // Emerald
              if (type === 'webhook') return `rgba(255, 108, 55, ${alpha})`; // n8n Orange
              return `rgba(63, 63, 70, ${alpha})`; // Zinc
            };

            gradient.addColorStop(0, getColor(nodes[i].type));
            gradient.addColorStop(1, getColor(nodes[j].type));
            
            ctx.beginPath();
            ctx.strokeStyle = gradient;
            ctx.moveTo(nodes[i].x, nodes[i].y);
            ctx.lineTo(nodes[j].x, nodes[j].y);
            ctx.stroke();
          }
        }
      }

      // Draw nodes and labels
      nodes.forEach((node) => {
        // Move nodes
        node.x += node.vx;
        node.y += node.vy;

        // Bounce on boundaries
        if (node.x < 0 || node.x > width) node.vx *= -1;
        if (node.y < 0 || node.y > height) node.vy *= -1;

        // Connect with mouse
        if (mouse.active) {
          const mdx = node.x - mouse.x;
          const mdy = node.y - mouse.y;
          const mdist = Math.sqrt(mdx * mdx + mdy * mdy);

          if (mdist < 180) {
            const malpha = (1 - mdist / 180) * 0.2;
            ctx.beginPath();
            ctx.lineWidth = 0.7;
            ctx.strokeStyle = `rgba(16, 185, 129, ${malpha})`;
            ctx.moveTo(node.x, node.y);
            ctx.lineTo(mouse.x, mouse.y);
            ctx.stroke();

            // Pull slightly towards mouse
            node.x -= mdx * 0.005;
            node.y -= mdy * 0.005;
          }
        }

        // Pulse scale
        node.angle += node.pulseSpeed;
        const scale = 1 + Math.sin(node.angle) * 0.15;

        // Draw node center
        ctx.beginPath();
        let color = 'rgba(63, 63, 70, 0.4)'; // zinc
        let glowColor = 'rgba(63, 63, 70, 0.1)';

        if (node.type === 'ai') {
          color = 'rgba(16, 185, 129, 0.7)'; // emerald
          glowColor = 'rgba(16, 185, 129, 0.2)';
        } else if (node.type === 'webhook') {
          color = 'rgba(255, 108, 55, 0.7)'; // orange
          glowColor = 'rgba(255, 108, 55, 0.2)';
        } else if (node.type === 'trigger') {
          color = 'rgba(59, 130, 246, 0.7)'; // blue
          glowColor = 'rgba(59, 130, 246, 0.2)';
        }

        ctx.shadowBlur = 10;
        ctx.shadowColor = color;
        ctx.fillStyle = color;
        ctx.arc(node.x, node.y, node.radius * scale, 0, Math.PI * 2);
        ctx.fill();
        ctx.shadowBlur = 0; // reset shadow

        // Subtle labels for big viewport screens
        if (width > 768 && node.radius > 3.5) {
          ctx.fillStyle = 'rgba(161, 161, 170, 0.4)';
          ctx.font = '8px var(--font-mono)';
          ctx.fillText(node.label, node.x + 8, node.y + 3);
        }
      });

      animationFrameId = requestAnimationFrame(ticker);
    };

    gsap.ticker.add(ticker);

    return () => {
      gsap.ticker.remove(ticker);
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('mouseleave', handleMouseLeave);
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <div id="particle-container" ref={containerRef} className="absolute inset-0 pointer-events-none overflow-hidden z-0 bg-transparent">
      <canvas ref={canvasRef} className="block w-full h-full opacity-60" />
    </div>
  );
}
