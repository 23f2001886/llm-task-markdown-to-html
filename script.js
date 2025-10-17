document.getElementById('convert-button').addEventListener('click', function() {
    const markdownText = document.getElementById('markdown-input').value;
    const htmlContent = marked(markdownText);
    document.getElementById('markdown-output').innerHTML = htmlContent;
    hljs.highlightAll();
});