async function loadMarkdown(file, containerId) {
  const res = await fetch(file);
  const text = await res.text();

  document.getElementById(containerId).innerHTML =
    text
      .replace(/^### (.*$)/gim, "<h3>$1</h3>")
      .replace(/^## (.*$)/gim, "<h2>$1</h2>")
      .replace(/^# (.*$)/gim, "<h1>$1</h1>")
      .replace(/\*\*(.*)\*\*/gim, "<b>$1</b>")
      .replace(/\n/gim, "<br>");
}
