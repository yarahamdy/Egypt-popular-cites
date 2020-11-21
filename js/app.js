/**
 *
 * Manipulating the DOM exercise.
 * Exercise programmatically builds navigation,
 * scrolls to anchors from navigation,
 * and highlights section in viewport upon scrolling.
 *
 * Dependencies: None
 *
 * JS Version: ES2015/ES6
 *
 * JS Standard: ESlint
 *
 */

/**
 * Define Global Variables
 *
 */


const menuElement = document.getElementById("navbar__list");
const backToTopButton = document.querySelector('.back-to-top');
const sections = document.getElementsByTagName('section');

/**
 * End Global Variables
 * Start Helper Functions
 *
 */


/**
 * End Helper Functions
 * Begin Main Functions
 *
 */

/**
 * build the navigation menu using sections from the DOM
 * I use the data nav to set the text of the menu item
 * I use the section id to creat a menu item id using this format `menu_id_${section.id}`
 */

for (let section of sections) {
    const li = document.createElement("li");
    const a = document.createElement("a");
    a.className = "menu__link";
    a.textContent = section.getAttribute('data-nav');
    a.setAttribute('id', `menu_id_${section.id}`);
    li.appendChild(a);
    menuElement.appendChild(li);
}
/**
 * Add class 'your-active-class' to section when near top of viewport
 * I listen on scroll and use getBoundingClientRect to calculate wither the section
 * is being entirely viewed
 */
document.addEventListener('scroll', function (ev) {
    for (let section of sections) {
        const {top, bottom} = section.getBoundingClientRect();
        if (top >= 0 && bottom < window.innerHeight) {
            section.classList.add('your-active-class');
        } else {
            section.classList.remove('your-active-class');
        }
        /**
         * I also check for the section top is being viewed we add a class active
         * to the menu item related to this section
         */
        const menuItem = document.getElementById(`menu_id_${section.id}`);
        if (top >= 0 && top < window.innerHeight) {
            menuItem.classList.add('active');
        } else {
            menuItem.classList.remove('active');
        }
    }

    if (document.body.scrollTop > 60 || document.documentElement.scrollTop > 60) {
        backToTopButton.style.display = "block";
    } else {
        backToTopButton.style.display = "none";
    }
});

/**
 * Scroll to anchor ID using scrollTO event
 * I added a click listener on the ul and used event target to determine what menu item is clicked
 * using data nav to get the section related to this menu item
 *scroll into view instead of scroll to for easier code§
 * https://developer.mozilla.org/en-US/docs/Web/API/Element/scrollIntoView
 */
menuElement.addEventListener('click', function (ev) {
    const section = document.querySelector(`section[data-nav='${ev.target.textContent}']`);
    section.scrollIntoView({behavior: "smooth"})

});


/**
 * add event listener to scroll to top
 */
backToTopButton.addEventListener('click', function () {
    window.scrollTo({
        top: 0,
        behavior: "smooth",
    })
});

let menuHideTimeOut;


document.addEventListener('scroll', function (ev) {
    menuElement.hidden = false;
    clearTimeout(menuHideTimeOut);

    menuHideTimeOut = setTimeout(function () {
        if (document.body.scrollTop > 60 || document.documentElement.scrollTop > 60) {
            menuElement.hidden = true;
        }
    }, 4000);

})

/**
 *
 * git init
 git add README.md
 git commit -m "first commit"
 git branch -M main
 git remote add origin https://github.com/yarahamdy/landing-page.git
 git push -u origin main
 */
