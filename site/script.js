document.addEventListener('DOMContentLoaded', function() {
    const sourceTab = document.getElementById('source-tab');
    const outputTab = document.getElementById('output-tab');
    const markdownInput = document.getElementById('markdown-input');
    const htmlOutput = document.getElementById('html-output');
    const markdownSource = document.getElementById('markdown-source');
    const markdownOutput = document.getElementById('markdown-output');

    function updateOutput() {
        const markdownText = markdownInput.value;
        htmlOutput.innerHTML = marked(markdownText);
    }

    sourceTab.addEventListener('click', function() {
        markdownSource.classList.add('active');
        markdownOutput.classList.remove('active');
        sourceTab.classList.add('active');
        outputTab.classList.remove('active');
    });

    outputTab.addEventListener('click', function() {
        markdownSource.classList.remove('active');
        markdownOutput.classList.add('active');
        sourceTab.classList.remove('active');
        outputTab.classList.add('active');
    });

    markdownInput.addEventListener('input', updateOutput);
    updateOutput(); // Initialize output
});