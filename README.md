# Landing Page Project

## Features

* [Dynamic Menu](#dynamic-menu)
* [Menu scroll to section](#menu-scroll-to-section)
* [Section get active class on scrolling](#section-get-active-class-on-scrolling)
* [Back to top](#back-to-top)
* [Menu get active class on scrolling](#menu-get-active-class-on-scrolling)



## Dynamic Menu
Navigation is built dynamically as an unordered list.

using ```data-nav``` html attribute and ```appendChild```

## Menu scroll to section
When clicking an item from the navigation menu, the link should scroll to the appropriate section.

using ```scrollIntoView``` 

## Section get active class on scrolling
It should be clear which section is being viewed while scrolling through the page.

using ```getBoundingClientRect``` inside `scroll` listener

## Back to top 
Add a scroll to top button on the page that’s only visible when the user scrolls below the fold of the page.

using `click` event listener and `window.scrollTo`

## Menu get active class on scrolling
Add an active state to your navigation items when a section is in the viewport.

using ```getBoundingClientRect``` inside `scroll` listener and using section top location.
 