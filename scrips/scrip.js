"use strict";

class includeNav {
    async getNav() {
        let nav = await fetch("./components/nav.html");
        if (!nav.ok) return;

        let contentHtml = await nav.text();

        let contentTemporary = document.createElement("div");
        contentTemporary.innerHTML = contentHtml;
        contentTemporary.classList.add("header");

        document.querySelectorAll("body")[0].prepend(contentTemporary);

        this.managerOpctionsNav(contentTemporary.querySelectorAll("li"));
    }

    managerOpctionsNav(options) {
        options.forEach((element) => {
            element.addEventListener(
                "click",
                function (element) {
                    this.managerOpctionsNavStates(element);
                }.bind(this)
            );
        });
    }

    managerOpctionsNavStates(element) {
        window.aprime = element;
    }
}

document.addEventListener("DOMContentLoaded", function () {
    let instance = new includeNav();
    instance.getNav();
});
