// анимации

document.addEventListener('DOMContentLoaded', function() {
    let headerTitleElement = document.querySelector('.header-title');
    if (headerTitleElement) {
        const titleText = headerTitleElement.textContent;
        headerTitleElement.setAttribute('data-text', titleText);
    }
    const connectionsContainer = document.getElementById('connections');
    
    if (connectionsContainer) {
        for (let i = 0; i < 15; i++) {
            const line = document.createElement('div');
            line.className = 'connection-line';
            line.style.left = `${Math.random() * 100}%`;
            line.style.height = `${100 + Math.random() * 200}px`;
            line.style.animationDuration = `${10 + Math.random() * 15}s`;
            line.style.animationDelay = `${Math.random() * 5}s`;
            connectionsContainer.appendChild(line);
        }
    }
    
    class Particle {
        constructor(selector) {
            this.canvas = document.createElement('canvas');
            this.context = this.canvas.getContext('2d');
            this.container = document.querySelector(selector);
            
            if (!this.container) return;
            
            this.container.appendChild(this.canvas);
            this.particles = [];
            this.particleCount = 50;
            this.maxDistance = 120;
            this.resize();
            this.init();
            this.animate();
            
            window.addEventListener('resize', () => this.resize());
        }
        
        resize() {
            this.canvas.width = this.container.offsetWidth;
            this.canvas.height = this.container.offsetHeight;
            this.width = this.canvas.width;
            this.height = this.canvas.height;
        }
        
        init() {
            for (let i = 0; i < this.particleCount; i++) {
                this.particles.push({
                    x: Math.random() * this.width,
                    y: Math.random() * this.height,
                    vx: Math.random() * 0.5 - 0.25,
                    vy: Math.random() * 0.5 - 0.25,
                    size: Math.random() * 2 + 1,
                    color: `rgba(255, 255, 255, ${Math.random() * 0.1 + 0.1})`
                });
            }
        }
        //оно работает????????
        animate() {
            this.context.clearRect(0, 0, this.width, this.height);
            
            for (let i = 0; i < this.particles.length; i++) {
                let p = this.particles[i];
                
                p.x += p.vx;
                p.y += p.vy;
                
                if (p.x < 0 || p.x > this.width) {
                    p.vx *= -1;
                }
                
                if (p.y < 0 || p.y > this.height) {
                    p.vy *= -1;
                }
                
                const gradient = this.context.createRadialGradient(
                    p.x, p.y, 0,
                    p.x, p.y, p.size * 2

                );
                gradient.addColorStop(0, 'rgba(255, 255, 255, 0.8)');
                gradient.addColorStop(1, 'rgba(255, 255, 255, 0)');
                this.context.beginPath();
                this.context.arc(p.x, p.y, p.size * 2, 0, Math.PI * 2);
                this.context.fillStyle = gradient;
                this.context.fill();
                this.context.beginPath();
                this.context.arc(p.x, p.y, p.size, 0, Math.PI * 2);
                this.context.fillStyle = 'rgba(255, 255, 255, 0.8)';
                this.context.fill();
                
                for (let j = i + 1; j < this.particles.length; j++) {
                    let p2 = this.particles[j];
                    let dx = p.x - p2.x;
                    let dy = p.y - p2.y;
                    let distance = Math.sqrt(dx * dx + dy * dy);
                    
                    if (distance < this.maxDistance) {
                        this.context.beginPath();
                        
                        const lineGradient = this.context.createLinearGradient(
                            p.x, p.y, p2.x, p2.y
                        );
                        lineGradient.addColorStop(0, `rgba(255, 255, 255, ${0.2 * (1 - distance / this.maxDistance)})`);
                        lineGradient.addColorStop(0.5, `rgba(174, 85, 247, ${0.2 * (1 - distance / this.maxDistance)})`);
                        lineGradient.addColorStop(1, `rgba(255, 255, 255, ${0.2 * (1 - distance / this.maxDistance)})`);
                        
                        this.context.strokeStyle = lineGradient;
                        this.context.lineWidth = 0.8;
                        this.context.moveTo(p.x, p.y);
                        this.context.lineTo(p2.x, p2.y);
                        this.context.stroke();
                    }
                }
            }
            
            requestAnimationFrame(() => this.animate());
        }
    }
    
    if (typeof document.createElement('canvas').getContext === 'function') {
        new Particle('.header-bg');
    }
    
    let headerTitleElement2 = document.querySelector('.header-title');
    
    if (headerTitleElement2) {
        const titleContent = headerTitleElement2.textContent;
        headerTitleElement2.textContent = '';
        headerTitleElement2.style.opacity = '1';
        
        let currentIndex = 0;
        const typingSpeed = 50; 
        
        function typeWriter() {
            if (currentIndex < titleContent.length) {
                headerTitleElement2.innerHTML += titleContent.charAt(currentIndex);
                currentIndex++;
                setTimeout(typeWriter, typingSpeed);
            }
        }
        
        window.addEventListener('load', function() {
            setTimeout(function() {
                typeWriter();
            }, 1000);
        });
    }
    
    const animateOnScroll = function() {
        const elements = document.querySelectorAll('.animate-fade-in');
        
        elements.forEach(element => {
            const position = element.getBoundingClientRect();
            
            if (position.top < window.innerHeight && position.bottom >= 0) {
                element.classList.add('active');
            }
        });
    };
    
    document.querySelectorAll('.lab-card, .about-card, .resource-card').forEach(element => {
        element.classList.add('animate-fade-in');
    });
    
    window.addEventListener('scroll', animateOnScroll);
    
    animateOnScroll();
});
