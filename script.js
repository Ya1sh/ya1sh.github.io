console.log("TITANIUM OS // SYSTEM ONLINE");
console.log("Welcome to the Nexus.");

// === SCROLL REVEAL ANIMATION ===
document.addEventListener('DOMContentLoaded', () => {
    const observerOptions = {
        threshold: 0.1,
        rootMargin: "0px 0px -50px 0px"
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('reveal-active');
                
                // Animate skill bars
                if (entry.target.id === 'tech-stack') {
                    entry.target.querySelectorAll('.skill-bar-fill').forEach(bar => {
                        const targetWidth = bar.style.width;
                        bar.style.width = '0';
                        setTimeout(() => {
                            bar.style.width = targetWidth;
                        }, 100);
                    });
                }
                
                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);

    document.querySelectorAll('.hidden-section, .hidden-left, .hidden-right').forEach(el => observer.observe(el));

    // ASCII Glitch on Scroll
    const header = document.querySelector('.ascii-art');
    if (header) {
        const headerObserver = new IntersectionObserver(entries => {
            if (!entries[0].isIntersecting && window.scrollY > 100) {
                header.classList.add('glitch-on-leave');
                setTimeout(() => header.classList.remove('glitch-on-leave'), 300);
            }
        }, { threshold: 0 });
        headerObserver.observe(header);
    }
});

// === EMAIL DECRYPTION PROTOCOL ===
const emailBtn = document.getElementById('email-btn');
if (emailBtn) {
    emailBtn.addEventListener('click', (e) => {
        e.preventDefault();
        const originalText = "DECRYPT EMAIL ADDRESS";
        const email = "contact@ya1sh.dev"; // Placeholder
        const span = emailBtn.querySelector('span');
        const icon = emailBtn.querySelector('i');

        if (span.innerText.includes('COPIED')) return;

        // Decryption Effect
        span.innerText = "DECRYPTING...";
        icon.className = "fas fa-cog fa-spin";
        
        setTimeout(() => {
            navigator.clipboard.writeText(email).then(() => {
                span.innerText = "COPIED TO CLIPBOARD";
                icon.className = "fas fa-check";
                icon.style.color = "#00ff41";
                
                // Reset after 3 seconds
                setTimeout(() => {
                    span.innerText = originalText;
                    icon.className = "fas fa-envelope";
                    icon.style.color = "";
                }, 3000);
            });
        }, 1500);
    });
}

// === GHOST TERMINAL LOGIC ===
const terminal = document.getElementById('terminal-overlay');
const termInput = document.getElementById('terminal-input');
const termOutput = document.getElementById('terminal-output');

// Toggle Terminal with Backtick (`)
document.addEventListener('keydown', (e) => {
    if (e.key === '`') {
        e.preventDefault(); // Prevent ` from being typed
        terminal.classList.toggle('open');
        if (terminal.classList.contains('open')) {
            termInput.focus();
        }
    }
});

// Handle Command Input
termInput.addEventListener('keydown', (e) => {
    if (e.key === 'Enter') {
        const cmd = termInput.value.trim().toLowerCase();
        termInput.value = '';
        processCommand(cmd);
    }
});

function processCommand(cmd) {
    // Echo command
    printLine(`guest@nexus:~$ ${cmd}`, 'text-muted');

    switch(cmd) {
        case 'help':
            printLine('AVAILABLE COMMANDS:', 'info');
            printLine('  whoami    - User identity');
            printLine('  status    - System integrity check');
            printLine('  projects  - List active deployments');
            printLine('  polybot   - Polybot V5 diagnostics');
            printLine('  socials   - List comms channels');
            printLine('  email     - Decrypt contact info');
            printLine('  clear     - Clear terminal');
            break;
        case 'whoami':
            printLine('User: GUEST_ACCESS', 'success');
            printLine('Role: OBSERVER', 'text-muted');
            break;
        case 'status':
            printLine('SYSTEM STATUS: OPTIMAL', 'success');
            printLine('UPTIME: 99.99%', 'info');
            printLine('SECURITY: ENCRYPTED', 'info');
            break;
        case 'projects':
            printLine('1. POLYBOT v5 [AUTONOMOUS]', 'success');
            printLine('2. TITANIUM CORE [DEV]', 'info');
            printLine('3. PROJECT_03 [CLASSIFIED]', 'error');
            break;
        case 'email':
            if (emailBtn) {
                emailBtn.click();
                printLine('INITIATING DECRYPTION PROTOCOL...', 'info');
            } else {
                printLine('ERROR: EMAIL MODULE NOT FOUND', 'error');
            }
            break;
        case 'matrix':
            printLine('INITIATING MATRIX PROTOCOL...', 'success');
            startMatrixRain();
            break;
        case 'polybot':
            printLine('CONNECTING TO POLYBOT V5...', 'info');
            setTimeout(() => {
                printLine('ERROR: AUTH_TOKEN_REQUIRED', 'error');
                printLine('Access to autonomous trading engine restricted.', 'text-muted');
            }, 800);
            break;
        case 'socials':
            printLine('GITHUB: github.com/Ya1sh');
            printLine('DISCORD: [REDACTED]');
            break;
        case 'clear':
            termOutput.innerHTML = '';
            break;
        case '':
            break;
        default:
            printLine(`Command not found: ${cmd}`, 'error');
    }
    
    // Auto-scroll
    termOutput.scrollTop = termOutput.scrollHeight;
}

function printLine(text, className = '') {
    const div = document.createElement('div');
    div.className = `line ${className}`;
    div.textContent = text;
    termOutput.appendChild(div);
}

// === KONAMI CODE EASTER EGG ===
const konamiCode = ['ArrowUp', 'ArrowUp', 'ArrowDown', 'ArrowDown', 'ArrowLeft', 'ArrowRight', 'ArrowLeft', 'ArrowRight', 'b', 'a'];
let konamiIndex = 0;

document.addEventListener('keydown', (e) => {
    if (e.key === konamiCode[konamiIndex]) {
        konamiIndex++;
        if (konamiIndex === konamiCode.length) {
            activateGodMode();
            konamiIndex = 0;
        }
    } else {
        konamiIndex = 0;
    }
});

function activateGodMode() {
    console.log("GOD MODE ACTIVATED");
    
    // Change Theme to RED ALERT
    document.documentElement.style.setProperty('--neon-cyan', '#FF0000');
    document.documentElement.style.setProperty('--neon-purple', '#FF0000');
    
    // Shake Effect
    document.body.style.animation = "shake 0.5s cubic-bezier(.36,.07,.19,.97) both infinite";
    
    // Open Terminal if closed
    if (!terminal.classList.contains('open')) {
        terminal.classList.add('open');
    }
    
    // Spam Terminal
    printLine('!!! SYSTEM COMPROMISED !!!', 'error');
    printLine('ROOT ACCESS GRANTED', 'error');
    printLine('DOWNLOADING SECRETS...', 'info');

    setTimeout(() => {
        document.body.style.animation = ""; // Stop shake after 2s
        alert("GOD MODE: UNLOCKED. Welcome, Administrator.");
    }, 2000);
}

// Add shake animation style dynamically
const styleSheet = document.createElement("style");
styleSheet.innerText = `
@keyframes shake {
  10%, 90% { transform: translate3d(-1px, 0, 0); }
  20%, 80% { transform: translate3d(2px, 0, 0); }
  30%, 50%, 70% { transform: translate3d(-4px, 0, 0); }
  40%, 60% { transform: translate3d(4px, 0, 0); }
}
`;
document.head.appendChild(styleSheet);

// === CUSTOM CURSOR & SPOTLIGHT ===
const cursor = document.querySelector('.cursor');
const follower = document.querySelector('.cursor-follower');

let mouseX = 0, mouseY = 0;
let cursorX = 0, cursorY = 0;

document.addEventListener('mousemove', (e) => {
    mouseX = e.clientX;
    mouseY = e.clientY;
    
    // Update Spotlight Variable (throttle naturally via CSS variable)
    document.body.style.setProperty('--cursor-x', mouseX + 'px');
    document.body.style.setProperty('--cursor-y', mouseY + 'px');
});

// Smooth Cursor Animation (requestAnimationFrame is better than setTimeout)
function animateCursor() {
    const distX = mouseX - cursorX;
    const distY = mouseY - cursorY;
    
    cursorX = cursorX + distX * 0.2;
    cursorY = cursorY + distY * 0.2;
    
    cursor.style.left = mouseX + 'px';
    cursor.style.top = mouseY + 'px';
    
    follower.style.left = cursorX + 'px';
    follower.style.top = cursorY + 'px';
    
    requestAnimationFrame(animateCursor);
}
animateCursor();

// Cursor Hover Effects
document.querySelectorAll('a, button, input, .card, .badge').forEach(el => {
    el.addEventListener('mouseenter', () => {
        cursor.classList.add('active');
        follower.classList.add('active');
    });
    el.addEventListener('mouseleave', () => {
        cursor.classList.remove('active');
        follower.classList.remove('active');
    });
});

// === BOOT SEQUENCE ===
window.addEventListener('load', () => {
    const bootSequence = document.getElementById('boot-sequence');
    const bootLines = document.querySelectorAll('.boot-line');
    const progressBar = document.querySelector('.boot-progress-bar');
    const progressFill = document.querySelector('.boot-progress-fill');

    if (bootSequence) {
        let delay = 0;
        
        // Animate lines
        bootLines.forEach((line, index) => {
            setTimeout(() => {
                line.style.opacity = 1;
            }, delay);
            delay += 600; // Time between lines
        });

        // Animate Progress Bar
        setTimeout(() => {
            if(progressBar) progressBar.style.display = 'block';
            let width = 0;
            const interval = setInterval(() => {
                if (width >= 100) {
                    clearInterval(interval);
                    // Fade out boot sequence
                    setTimeout(() => {
                        bootSequence.style.transition = 'opacity 0.8s ease';
                        bootSequence.style.opacity = 0;
                        setTimeout(() => {
                            bootSequence.remove();
                        }, 800);
                    }, 500);
                } else {
                    width += Math.random() * 10;
                    if(width > 100) width = 100;
                    if(progressFill) progressFill.style.width = width + '%';
                }
            }, 100);
        }, delay);
    }
});

// === 3D TILT EFFECT (VANILLA) ===
document.querySelectorAll('.card').forEach(card => {
    card.addEventListener('mousemove', (e) => {
        const rect = card.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;
        
        const centerX = rect.width / 2;
        const centerY = rect.height / 2;
        
        const rotateX = ((y - centerY) / centerY) * -10; // Max 10deg rotation
        const rotateY = ((x - centerX) / centerX) * 10;

        card.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale3d(1.02, 1.02, 1.02)`;
    });

    card.addEventListener('mouseleave', () => {
        card.style.transform = 'perspective(1000px) rotateX(0) rotateY(0) scale3d(1, 1, 1)';
    });
});

// === MAGNETIC BUTTONS ===
document.querySelectorAll('.magnetic').forEach(btn => {
    btn.addEventListener('mousemove', (e) => {
        const rect = btn.getBoundingClientRect();
        const x = e.clientX - rect.left - rect.width / 2;
        const y = e.clientY - rect.top - rect.height / 2;
        
        // Move button slightly towards cursor
        btn.style.transform = `translate(${x * 0.3}px, ${y * 0.3}px)`;
    });

    btn.addEventListener('mouseleave', () => {
        btn.style.transform = 'translate(0, 0)';
    });
});

// === GITHUB ACTIVITY FETCH ===
async function fetchGitHubActivity() {
    const statElement = document.querySelector('.bento-stat');
    if (!statElement) return;

    try {
        // Since the GitHub API doesn't give total contributions easily without GraphQL/Auth,
        // we'll fetch public events and add them to a base number for a "live" feel.
        const response = await fetch('https://api.github.com/users/Ya1sh/events/public');
        const data = await response.json();
        
        const baseContributions = 1240;
        const recentActivity = data.length || 0;
        const total = baseContributions + recentActivity;
        
        // Counter animation
        let current = baseContributions;
        const interval = setInterval(() => {
            if (current >= total) {
                clearInterval(interval);
                statElement.innerText = `${total.toLocaleString()} CONTRIBUTIONS`;
            } else {
                current += 1;
                statElement.innerText = `${current.toLocaleString()} CONTRIBUTIONS`;
            }
        }, 50);

    } catch (err) {
        console.log("GitHub API fetch failed, using fallback.");
    }
}
fetchGitHubActivity();

// === BENTO GRID CLOCK ===
function updateClock() {
    const clock = document.getElementById('clock');
    if (clock) {
        const now = new Date();
        clock.innerText = now.toLocaleTimeString('en-US', { hour12: false });
    }
}
setInterval(updateClock, 1000);
updateClock();

// === PROJECT MODAL LOGIC ===
const modal = document.getElementById('project-modal');
const modalTitle = document.getElementById('modal-title');
const modalStatus = document.getElementById('modal-status');
const modalDesc = document.getElementById('modal-desc');
const closeModal = document.querySelector('.modal-close');

const projectData = {
    'polybot': {
        title: 'POLYBOT v5',
        status: 'AUTONOMOUS',
        type: 'FINTECH AI',
        desc: 'PROBLEM: Manual market analysis is too slow for volatile Polymarket cycles. SOLUTION: An autonomous agent that harvests real-time data and executes trades based on self-correcting neural networks. RESULTS: Processed 10,000+ data points daily with 94% prediction accuracy in sandboxed testing. Built with a focus on high-output automation.',
        tech: ['Python', 'TensorFlow', 'Docker', 'AWS', 'Pandas']
    },
    'titanium': {
        title: 'TITANIUM CORE',
        status: 'IN DEVELOPMENT',
        type: 'ERP SYSTEM',
        desc: 'PROBLEM: System integrators struggle with fragmented sourcing and invoicing. SOLUTION: A unified Titanium OS dashboard that automates the entire supply chain and client management workflow. IMPACT: Projected to reduce operational overhead by 40% for small-to-medium integrators.',
        tech: ['React', 'FastAPI', 'PostgreSQL', 'Redis', 'Tailwind']
    },
    'proj03': {
        title: 'PROJECT_03',
        status: 'CLASSIFIED',
        type: 'RESEARCH',
        desc: 'Exploring the intersection of WebGPU and real-time ML processing. Currently focusing on low-latency neural network inference directly in the browser. Access restricted.',
        tech: ['PyTorch', 'WebGPU', 'WASM']
    }
};

if (closeModal) {
    closeModal.addEventListener('click', () => {
        modal.classList.remove('active');
        playSound('close');
    });
}

// Close on backdrop click
if (modal) {
    modal.addEventListener('click', (e) => {
        if (e.target === modal) {
            modal.classList.remove('active');
            playSound('close');
        }
    });
}

// === SOUND DESIGN (Tier 4) ===
const audioCtx = new (window.AudioContext || window.webkitAudioContext)();

function playSound(type) {
    if (audioCtx.state === 'suspended') audioCtx.resume();
    
    const oscillator = audioCtx.createOscillator();
    const gainNode = audioCtx.createGain();
    
    oscillator.connect(gainNode);
    gainNode.connect(audioCtx.destination);
    
    if (type === 'hover') {
        oscillator.type = 'sine';
        oscillator.frequency.setValueAtTime(400, audioCtx.currentTime);
        oscillator.frequency.exponentialRampToValueAtTime(600, audioCtx.currentTime + 0.05);
        gainNode.gain.setValueAtTime(0.02, audioCtx.currentTime);
        gainNode.gain.exponentialRampToValueAtTime(0.001, audioCtx.currentTime + 0.05);
        oscillator.start();
        oscillator.stop(audioCtx.currentTime + 0.05);
    } 
    else if (type === 'click' || type === 'open') {
        oscillator.type = 'square';
        oscillator.frequency.setValueAtTime(200, audioCtx.currentTime);
        oscillator.frequency.exponentialRampToValueAtTime(100, audioCtx.currentTime + 0.1);
        gainNode.gain.setValueAtTime(0.05, audioCtx.currentTime);
        gainNode.gain.exponentialRampToValueAtTime(0.001, audioCtx.currentTime + 0.1);
        oscillator.start();
        oscillator.stop(audioCtx.currentTime + 0.1);
    }
    else if (type === 'close') {
        oscillator.type = 'triangle';
        oscillator.frequency.setValueAtTime(150, audioCtx.currentTime);
        oscillator.frequency.exponentialRampToValueAtTime(50, audioCtx.currentTime + 0.1);
        gainNode.gain.setValueAtTime(0.05, audioCtx.currentTime);
        gainNode.gain.exponentialRampToValueAtTime(0.001, audioCtx.currentTime + 0.1);
        oscillator.start();
        oscillator.stop(audioCtx.currentTime + 0.1);
    }
    else if (type === 'error') {
        oscillator.type = 'sawtooth';
        oscillator.frequency.setValueAtTime(100, audioCtx.currentTime);
        oscillator.frequency.linearRampToValueAtTime(80, audioCtx.currentTime + 0.1);
        gainNode.gain.setValueAtTime(0.05, audioCtx.currentTime);
        gainNode.gain.exponentialRampToValueAtTime(0.001, audioCtx.currentTime + 0.2);
        oscillator.start();
        oscillator.stop(audioCtx.currentTime + 0.2);
    }
}

// Attach hover sounds
document.querySelectorAll('a, button, .card, .bento-box').forEach(el => {
    el.addEventListener('mouseenter', () => playSound('hover'));
});

// === PARTICLE OPTIMIZATION ===
function optimizeParticles() {
    const particleContainer = document.getElementById('particles');
    if (particleContainer && window.innerWidth < 768) {
        // Reduce particle count on mobile for performance
        const particles = particleContainer.querySelectorAll('.particle');
        particles.forEach((p, index) => {
            if (index > 15) p.remove();
        });
    }
}
window.addEventListener('resize', optimizeParticles);
optimizeParticles();

// === SMOOTH SCROLL (LENIS) ===
const lenis = new Lenis({
    duration: 1.2,
    easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
    smooth: true,
    mouseMultiplier: 1,
    touchMultiplier: 2,
    infinite: false,
});

function raf(time) {
    lenis.raf(time);
    requestAnimationFrame(raf);
}

requestAnimationFrame(raf);

// === MODAL CONTENT POPULATION ===
function openModal(projectId) {
    const data = projectData[projectId];
    if (data) {
        const modalBody = modal.querySelector('.modal-body');
        const originalContent = modalBody.innerHTML;
        
        // Show Loading State
        modalTitle.innerText = "ACCESSING_SECURE_DATA...";
        modalBody.innerHTML = `
            <div class="modal-loading">
                <div class="spinner"></div>
                <div class="loading-text">DECRYPTING_ENCRYPTED_SECTORS...</div>
            </div>
        `;
        
        modal.classList.add('active');
        playSound('open');
        
        // Brief delay to simulate "accessing"
        setTimeout(() => {
            modalTitle.innerText = data.title;
            modalBody.innerHTML = originalContent;
            
            // Re-query elements because innerHTML replacement destroyed original references
            document.getElementById('modal-status').innerText = data.status;
            document.getElementById('modal-type').innerText = data.type;
            document.getElementById('modal-desc').innerText = data.desc;
            
            // Populate tech stack
            const techContainer = document.getElementById('modal-tech');
            techContainer.innerHTML = ''; 
            data.tech.forEach(tech => {
                const span = document.createElement('span');
                span.className = 'tech-tag';
                span.innerText = tech;
                techContainer.appendChild(span);
            });
        }, 800);
    }
}

// === MATRIX RAIN ===
function startMatrixRain() {
    let canvas = document.getElementById('matrix-canvas');
    if (!canvas) {
        canvas = document.createElement('canvas');
        canvas.id = 'matrix-canvas';
        document.body.appendChild(canvas);
    }
    
    canvas.classList.add('active');
    const ctx = canvas.getContext('2d');
    
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
    
    const characters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789@#$%^&*()*&^%";
    const fontSize = 16;
    const columns = canvas.width / fontSize;
    const drops = [];
    
    for (let x = 0; x < columns; x++) drops[x] = 1;
    
    function draw() {
        ctx.fillStyle = "rgba(0, 0, 0, 0.05)";
        ctx.fillRect(0, 0, canvas.width, canvas.height);
        
        ctx.fillStyle = "#00F0FF";
        ctx.font = fontSize + "px monospace";
        
        for (let i = 0; i < drops.length; i++) {
            const text = characters.charAt(Math.floor(Math.random() * characters.length));
            ctx.fillText(text, i * fontSize, drops[i] * fontSize);
            
            if (drops[i] * fontSize > canvas.height && Math.random() > 0.975) {
                drops[i] = 0;
            }
            drops[i]++;
        }
    }
    
    const matrixInterval = setInterval(draw, 33);
    
    // Auto-stop after 10 seconds
    setTimeout(() => {
        clearInterval(matrixInterval);
        canvas.classList.remove('active');
        setTimeout(() => canvas.remove(), 1000);
    }, 10000);
}

// === TERMINAL HINT ===
if (!localStorage.getItem('terminal-hint-seen')) {
    const hint = document.createElement('div');
    hint.className = 'terminal-hint';
    hint.innerHTML = 'Press <kbd>`</kbd> for terminal access';
    document.body.appendChild(hint);
    
    setTimeout(() => {
        hint.style.opacity = '1';
        setTimeout(() => {
            hint.style.opacity = '0';
            setTimeout(() => hint.remove(), 500);
        }, 5000);
    }, 2000);
    
    localStorage.setItem('terminal-hint-seen', 'true');
}

document.querySelectorAll('.card').forEach(card => {
    card.addEventListener('click', () => {
        if (!card.classList.contains('locked')) {
            const projectId = card.getAttribute('data-project');
            openModal(projectId);
        } else {
            playSound('error');
            card.style.animation = 'shake 0.4s cubic-bezier(.36,.07,.19,.97) both';
            setTimeout(() => card.style.animation = '', 400);
        }
    });
});



