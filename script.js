document.addEventListener('DOMContentLoaded', () => {
    const inputField = document.getElementById('cmd-input');
    const outputContainer = document.getElementById('terminal-output');
    const terminalBody = document.querySelector('.terminal-body');

    // Focus input on click anywhere in terminal
    document.getElementById('terminal').addEventListener('click', () => {
        inputField.focus();
    });

    inputField.addEventListener('keydown', (e) => {
        if (e.key === 'Enter') {
            const command = inputField.value.trim();
            handleCommand(command);
            inputField.value = '';
        }
    });

    function handleCommand(cmd) {
        // Create the line showing what the user typed
        const userLine = document.createElement('div');
        userLine.className = 'line';
        userLine.innerHTML = `<span class="prompt">admin@nexus:~$</span> <span class="cmd">${cmd}</span>`;
        outputContainer.appendChild(userLine);

        // Process the command
        let response = '';
        const lowerCmd = cmd.toLowerCase();

        switch (lowerCmd) {
            case 'help':
                response = `
                    <div class="line output">
                        <p>AVAILABLE COMMANDS:</p>
                        <p>&nbsp; <span class="info">whoami</span> &nbsp;&nbsp; - Display user identity & manifesto</p>
                        <p>&nbsp; <span class="info">ls</span> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; - List active projects</p>
                        <p>&nbsp; <span class="info">connect</span> &nbsp; - Show social/contact links</p>
                        <p>&nbsp; <span class="info">clear</span> &nbsp;&nbsp;&nbsp; - Clear terminal history</p>
                    </div>`;
                break;

            case 'whoami':
                response = `
                    <div class="line output">
                        <p class="info">USER: ADMIN // NEXUS</p>
                        <br>
                        <p>I don't play by the old rules.</p>
                        <p>I leverage AI to build faster than traditional workflows allow.</p>
                        <p>If it works, it works. Efficiency is the only metric.</p>
                    </div>`;
                break;

            case 'ls':
                response = `
                    <div class="line output">
                        <p class="success">DIRECTORY LISTING:</p>
                        <p>drwx------ 1 admin admin  4096 Feb 04 2026 <span class="info">POLYBOT_V3</span></p>
                        <p>drwx------ 1 admin admin  4096 Feb 01 2026 <span class="info">BUILD_SRC_MGR</span></p>
                        <p>drwx------ 1 admin admin  4096 ??? ?? ???? <span class="offline">CLASSIFIED_ML</span></p>
                        <br>
                        <p class="info">-> Scroll down for details.</p>
                    </div>`;
                break;

            case 'connect':
                response = `
                    <div class="line output">
                        <p class="success">ESTABLISHING CONNECTION...</p>
                        <p>> <a href="https://github.com/Ya1sh" target="_blank" style="color:var(--neon-cyan)">GITHUB</a></p>
                        <p>> <a href="#" style="color:var(--neon-cyan)">DISCORD (Coming Soon)</a></p>
                    </div>`;
                break;

            case 'clear':
                outputContainer.innerHTML = '';
                return; // Exit early so we don't append empty response

            case '':
                // Do nothing for empty enter
                break;

            default:
                response = `<div class="line output"><p class="offline">Command not found: ${cmd}. Type 'help' for options.</p></div>`;
        }

        if (response) {
            outputContainer.insertAdjacentHTML('beforeend', response);
        }

        // Auto-scroll to bottom
        terminalBody.scrollTop = terminalBody.scrollHeight;
    }
});