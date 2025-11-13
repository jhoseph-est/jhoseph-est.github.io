const editor = document.getElementById("editor");
const preview = document.getElementById("preview");

async function renderPreview() {
	preview.innerHTML = editor.value
		.split("\n\n")
		.map((p) => `<p>${p.replace(/\n/g, "<br>")}</p>`)
		.join("\n");

	if (window.MathJax && window.MathJax.typesetPromise) {
		await MathJax.typesetPromise([preview]);
	}
}

editor.addEventListener("input", renderPreview);

// Render inicial
window.addEventListener("load", renderPreview);
