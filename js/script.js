const btn = document.getElementById("button1");
const colors = ["green", "blue", "yellow", "purple", "orange"];

btn.addEventListener("click", () => {
    let index = Math.floor(Math.random() * colors.length )

    document.body.style.background=colors[index]
}
);

