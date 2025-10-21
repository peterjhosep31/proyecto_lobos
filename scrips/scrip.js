"use strict";

class includeNav {
    async getNav() {
        let nav = await fetch("components/nav.html");
        if (!nav.ok) return;

        let contentHtml = await nav.text();

        let contentTemporary = document.createElement("div");
        contentTemporary.innerHTML = contentHtml;

        document.querySelectorAll("body")[0].prepend(contentTemporary);

        this.setActiveNavItem(contentTemporary);
        this.managerOpctionsNav(contentTemporary.querySelectorAll("li"));
        this.setupHamburgerMenu();
    }

    setActiveNavItem(headerElement) {
        const currentPage = window.location.pathname.split('/').pop() || 'index.html';
        const navLinks = headerElement.querySelectorAll('nav a');
        navLinks.forEach(link => {
            const href = link.getAttribute('href');

            if (href === currentPage || (currentPage === '' && href === 'index.html')) {
                link.classList.add('active');
            }
        });
    }

    setupHamburgerMenu() {
        const menuToggle = document.getElementById('menuToggle');
        const navMenu = document.getElementById('navMenu');

        if (menuToggle && navMenu) { 
            menuToggle.addEventListener('click', () => {
                menuToggle.classList.toggle('active');
                navMenu.classList.toggle('active');
            });

            // Close menu when clicking on a link
            const navLinks = navMenu.querySelectorAll('a');
            navLinks.forEach(link => {
                link.addEventListener('click', () => {
                    menuToggle.classList.remove('active');
                    navMenu.classList.remove('active');
                });
            });

            // Close menu when clicking outside
            document.addEventListener('click', (e) => {
                if (!menuToggle.contains(e.target) && !navMenu.contains(e.target)) {
                    menuToggle.classList.remove('active');
                    navMenu.classList.remove('active');
                }
            });
        }
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
