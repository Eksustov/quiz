const toggleTheme = document.getElementById("toggle-theme");

const html = document.getElementById("html");

toggleTheme.addEventListener("change", toggleThemeHandler);

function toggleThemeHandler() {
    if (toggleTheme.checked){
        localStorage.setItem("theme", "dark");
        html.dataset.theme = "dark";
        console.log(localStorage);
    } else {
        localStorage.setItem("theme", "light");
        html.dataset.theme = "light";
        console.log(localStorage);
    }
};

const theme = localStorage.getItem("theme");

if (theme == "light"|| !theme){
    html.dataset.theme = "light";
} else {
    html.dataset.theme = "dark";
    document.getElementById("toggle-theme").checked = true;
}