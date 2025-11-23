import React, { useEffect, useRef } from 'react';

class Particle {
    constructor(x, y) {
        this.x = x;
        this.y = y;
        this.baseX = x;
        this.baseY = y;
        this.size = Math.random() * 2 + 1;
        this.baseSize = this.size;
        this.density = Math.random() * 30 + 10;
        this.opacity = Math.random() * 0.5 + 0.3;
        this.baseOpacity = this.opacity;
        this.pulseSpeed = Math.random() * 0.02 + 0.01;
        this.pulsePhase = Math.random() * Math.PI * 2;
    }

    update(mouse, time) {
        const dx = mouse.x - this.x;
        const dy = mouse.y - this.y;
        const distance = Math.sqrt(dx * dx + dy * dy);
        const forceDirectionX = dx / distance;
        const forceDirectionY = dy / distance;
        const maxDistance = 150;
        const force = (maxDistance - distance) / maxDistance;

        if (distance < maxDistance) {
            const moveX = forceDirectionX * force * this.density;
            const moveY = forceDirectionY * force * this.density;
            this.x -= moveX;
            this.y -= moveY;

            // Increase size and opacity when close to cursor
            this.size = this.baseSize * (1 + force * 2);
            this.opacity = Math.min(1, this.baseOpacity + force * 0.7);
        } else {
            // Return to base position
            if (this.x !== this.baseX) {
                const dx = this.x - this.baseX;
                this.x -= dx * 0.05;
            }
            if (this.y !== this.baseY) {
                const dy = this.y - this.baseY;
                this.y -= dy * 0.05;
            }

            // Pulsate
            const pulse = Math.sin(time * this.pulseSpeed + this.pulsePhase);
            this.size = this.baseSize * (1 + pulse * 0.3);
            this.opacity = this.baseOpacity * (1 + pulse * 0.4);
        }
    }

    draw(ctx) {
        ctx.fillStyle = `rgba(255, 255, 255, ${this.opacity})`;
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
        ctx.fill();
    }
}

const ParticleBackground = () => {
    const canvasRef = useRef(null);
    const mouseRef = useRef({ x: null, y: null, radius: 150 });
    const particlesRef = useRef([]);
    const timeRef = useRef(0);

    useEffect(() => {
        const canvas = canvasRef.current;
        if (!canvas) return;

        const ctx = canvas.getContext('2d');
        let animationFrameId;

        const resizeCanvas = () => {
            canvas.width = window.innerWidth;
            canvas.height = window.innerHeight;
            initParticles();
        };

        const initParticles = () => {
            particlesRef.current = [];
            const numberOfParticles = Math.floor((canvas.width * canvas.height) / 12000);

            for (let i = 0; i < numberOfParticles; i++) {
                const x = Math.random() * canvas.width;
                const y = Math.random() * canvas.height;
                particlesRef.current.push(new Particle(x, y));
            }
        };

        const handleMouseMove = (e) => {
            mouseRef.current.x = e.clientX;
            mouseRef.current.y = e.clientY;
        };

        const handleMouseLeave = () => {
            mouseRef.current.x = null;
            mouseRef.current.y = null;
        };

        const drawConnections = () => {
            const maxDistance = 120;
            const maxConnectionsPerParticle = 5;

            for (let i = 0; i < particlesRef.current.length; i++) {
                let connections = 0;

                for (let j = i + 1; j < particlesRef.current.length && connections < maxConnectionsPerParticle; j++) {
                    const dx = particlesRef.current[i].x - particlesRef.current[j].x;
                    const dy = particlesRef.current[i].y - particlesRef.current[j].y;
                    const distance = Math.sqrt(dx * dx + dy * dy);

                    if (distance < maxDistance) {
                        const opacity = (1 - distance / maxDistance) * 0.3;
                        ctx.strokeStyle = `rgba(255, 255, 255, ${opacity})`;
                        ctx.lineWidth = 0.5;
                        ctx.beginPath();
                        ctx.moveTo(particlesRef.current[i].x, particlesRef.current[i].y);
                        ctx.lineTo(particlesRef.current[j].x, particlesRef.current[j].y);
                        ctx.stroke();
                        connections++;
                    }
                }
            }
        };

        const animate = () => {
            ctx.clearRect(0, 0, canvas.width, canvas.height);
            timeRef.current += 0.1;

            const mouse = mouseRef.current.x && mouseRef.current.y
                ? mouseRef.current
                : { x: canvas.width / 2, y: canvas.height / 2 };

            // Draw connections first (behind particles)
            drawConnections();

            // Then draw particles on top
            particlesRef.current.forEach(particle => {
                particle.update(mouse, timeRef.current);
                particle.draw(ctx);
            });

            animationFrameId = requestAnimationFrame(animate);
        };

        window.addEventListener('resize', resizeCanvas);
        window.addEventListener('mousemove', handleMouseMove);
        window.addEventListener('mouseleave', handleMouseLeave);

        resizeCanvas();
        animate();

        return () => {
            window.removeEventListener('resize', resizeCanvas);
            window.removeEventListener('mousemove', handleMouseMove);
            window.removeEventListener('mouseleave', handleMouseLeave);
            cancelAnimationFrame(animationFrameId);
        };
    }, []);

    return (
        <div className="fixed inset-0 z-0 pointer-events-none bg-obsidian">
            <canvas ref={canvasRef} className="block" />
            <div className="absolute inset-0 bg-gradient-to-b from-obsidian/50 via-transparent to-obsidian/80 pointer-events-none"></div>
        </div>
    );
};

export default ParticleBackground;
