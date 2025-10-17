document.addEventListener('DOMContentLoaded', function() {
    const markdownInput = document.getElementById('markdown-input');
    const htmlOutput = document.getElementById('html-output');
    const showMarkdownButton = document.getElementById('show-markdown');
    const showHtmlButton = document.getElementById('show-html');
    const markdownSource = document.getElementById('markdown-source');
    const markdownOutput = document.getElementById('markdown-output');

    function updateOutput() {
        const markdownText = markdownInput.value;
        htmlOutput.innerHTML = marked(markdownText);
    }

    markdownInput.addEventListener('input', updateOutput);

    showMarkdownButton.addEventListener('click', function() {
        markdownSource.style.display = 'block';
        markdownOutput.style.display = 'none';
    });

    showHtmlButton.addEventListener('click', function() {
        markdownSource.style.display = 'none';
        markdownOutput.style.display = 'block';
    });

    // Initialize with markdown view
    updateOutput();
});