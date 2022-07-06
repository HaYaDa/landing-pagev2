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
 * Comments should be present at the beginning of each procedure and class.
 * Great to have comments before crucial code sections within the procedure.
*/

/**
 * Define Global Variables
 * 
*/
const sectionsList = document.querySelectorAll('section'); 



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

// build the nav
for (i = 0; i < sectionsList.length; i++) {
    let listItem = document.createElement('li');
    let sectionLink = document.createElement('a');
    sectionLink.setAttribute('id', `${sectionsList[i].id}Link`); 
    sectionLink.setAttribute('data-link', `${sectionsList[i].id}`) 
    sectionLink.href = ""; 
    sectionLink.style.margin = '1rem'; 
    sectionLink.innerHTML = `${sectionsList[i].dataset.nav}`; 
    listItem.appendChild(sectionLink);
    document.getElementById('navbar__list').appendChild(listItem); 
}


// Add class 'your-active-class' to section when near top of viewport
function makeActiveClass() {
    for (let section of sectionsList) {
        // define variable for the viewport
        let viewport = section.getBoundingClientRect(); 
        // define variable for the navItem for related section
        let linkClass = document.getElementById(`${section.id}Link`)
        if (viewport.top <= 150 && viewport.bottom >=150) {
            // add active class to section in the viewport
            section.classList.add('your-active-class'); 
            // add active class for the related navItem
            linkClass.classList.add('your-active-class');
        } else {
            // remove active class to section in the viewport
            section.classList.remove('your-active-class');
            // remove active class for the related navItem
            linkClass.classList.remove('your-active-class');
        }
    }
}


// Scroll to anchor ID using scrollTO event


/**
 * End Main Functions
 * Begin Events
 * 
*/

// Build menu 

// Scroll to section on link click
// Scroll to section on link click
const links2Sections = document.querySelectorAll('a');
links2Sections.forEach((item) => {
    item.addEventListener('click', ()=>{
        event.preventDefault(); 
        const el = document.getElementById(item.dataset.link);
        el.scrollIntoView({behavior: 'smooth', block: 'start'});
    })
})
// Set sections as active
document.addEventListener('scroll', () => makeActiveClass());  

//console.log(document.getElementById('section2Link').dataset.link)