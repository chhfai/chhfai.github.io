nav = document.querySelector(".nav")

async function getTextFile(file) {
    try {    
        const response = await fetch(file);
        const text = await response.text();
        return text;
    } catch(err) {
        console.log(err);
    }
}
async function wrapper() {
    navHTML= await getTextFile("./nav.html");
    nav.innerHTML = navHTML
}

wrapper()
