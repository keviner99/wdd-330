const links = [{
        label: "Week1 notes",
        url: "week1/index.html"

    },
    {
        label: "Week2 notes",
        url: "week2/index.html"
    },
    {
        label: "Week3 notes",
        url: "week3/index.html"
    },
    {
        label: "Week4 notes",
        url: "week4/index.html"
    },
    {
        label: "Week5 notes",
        url: "week5/index.html"
    },
    {
        label: "Week6 notes",
        url: "week6/index.html"
    },
    {
        label: "Week7 notes",
        url: "week7/index.html"
    }
]

function loadIndex() {
    const ol = document.querySelector("#linksList")

    links.forEach(link => {

        const li = document.createElement("li");
        const href = document.createElement("a");
        href.setAttribute("href", link.url);
        href.innerText = link.label;

        li.appendChild(href);
        ol.appendChild(li);
    })

}