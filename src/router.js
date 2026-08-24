export function router() {
    const path = window.location.pathname;

    console.log("path: " + path)

    // if (path === "/") {
    //     showHome();
    //     return;
    // }

    if (path.startsWith("/posts/")) {
        const slug = path.split("/")[2];
        showPost(slug);
        return;
    }

    // if (path.startsWith("/projects/")) {
    //     const slug = path.split("/")[2];
    //     showProject(slug);
    //     return;
    // }

    // show404();
}

import MarkdownIt from 'markdown-it'
const md = new MarkdownIt()

function showPost(slug) {
    fetchAndRenderFile("app", slug)
}

async function fetchAndRenderFile(elementId, filename) {
    const folderPath = "./content/posts/"
    const path = folderPath + filename + ".md"
    const markdownFileContent = (await import(`${path}?raw`)).default;

    console.log("fetchAndRenderFile path: " + path)

    const result = md.render(markdownFileContent)
    document.getElementById(elementId).innerHTML = result
}
