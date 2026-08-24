console.log("Hello js")

// import MarkdownIt from 'markdown-it'
import MarkdownIt from "https://cdn.jsdelivr.net/npm/markdown-it@15.0.0/+esm";

const md = new MarkdownIt()

const path = window.location.pathname;

console.log(path)

if (path.startsWith("/posts/")) {
    const name = path.split("/")[-1]

    if (name) {
        console.log("name: ", name)
    }
    // const response = await fetch(`/content/blogs/${name}.md`);
    // const markdown = await response.text();

    // document.getElementById("content").innerHTML = md.render(markdown);

    // fetchAndRenderFile("myContent", "blog")
}

function fetchAndRenderFile(elementId, filename) {
    const folderPath = "./" // "./posts/"
    const path = folderPath + filename + ".md"

    console.log(path)

    fetch(path)
        .then(r => r.text())
        .then(text => {
            const result = md.render(text)
            document.getElementById(elementId).innerHTML = result
        })
}
