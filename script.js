document.addEventListener('DOMContentLoaded', () => {
    const text = "init_sequence --force";
    const typewriter = document.getElementById('typewriter');
    const output = document.querySelector('.output');
    let index = 0;

    function type() {
        if (index < text.length) {
            typewriter.textContent += text.charAt(index);
            index++;
            setTimeout(type, 100);
        } else {
            setTimeout(showOutput, 500);
        }
    }

    function showOutput() {
        output.classList.remove('hidden');
        output.classList.add('visible');
    }

    // Start typing after a short delay
    setTimeout(type, 1000);
});
