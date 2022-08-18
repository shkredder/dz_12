window.onload = function () {
    const head = document.querySelector("h3");
    const paragraph = document.querySelector("p");

    String.prototype.counter = function () {
        return this.split(/\s+/).length;
    };

    head.insertAdjacentHTML(
        "afterend",
        `<div>a number of words in the paragraph: ${paragraph.innerHTML.counter()}</div>`
    );

    paragraph.insertAdjacentHTML(
        "afterend",
        '<a href="https://forcemipsum.com/" style = "text-decoration: none; color: pink">TEXT SOURCE</a>'
    );

    const changingParag = (word) => {
        if (word.length > 8 && word.endsWith(".") === false) {
            return '<span style = "background-color: pink">' + word + "</span>";
        } else if (word.length > 9 && word.endsWith(".")) {
            return (
                '<span style = "background-color: pink">' + word.substring(0, word.length - 1) + "</span>.<div></div>"
            );
        } else if (word.endsWith(".")) {
            return word + "<div></div>";
        } else if (word.endsWith("?")) {
            return word.replace("?", "🤔");
        } else if (word.endsWith("!")) {
            return word.replace("!", "😲");
        } else {
            return word;
        }
    };

    paragraph.innerHTML = paragraph.innerText.trim().split(" ").map(changingParag).join(" ");
};
