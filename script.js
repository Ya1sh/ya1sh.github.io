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
                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);

    document.querySelectorAll('.hidden-section').forEach(el => observer.observe(el));
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
            printLine('  polybot   - Polybot V5 diagnostics');
            printLine('  socials   - List comms channels');
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
