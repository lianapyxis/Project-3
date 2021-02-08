let icon = document.querySelector(".icon");
let menu = document.querySelector(".mobile");

icon.addEventListener("click", function() {
    menu.classList.toggle("responsive");
    if (menu.classList.contains("responsive")) {
        icon.innerHTML = "&#10060;";
    } else {
        icon.innerHTML = "&#9776;";
        document.querySelectorAll(".mobile_submenu > div").forEach(item => item.classList.add("subhidden"));
    }
});

let logo = document.querySelector(".logo");

let dropMenu = document.querySelectorAll(".drop_menu > div");
let dropMenuIn = document.querySelectorAll(".drop_menu > div > div");

let home = document.querySelector(".desktop a:first-child");
let homeMenu = document.querySelector(".home_menu")
let homeMenuIn = document.querySelectorAll(".home");

let about = document.querySelector(".desktop a:nth-child(2)")
let abMenu = document.querySelector(".about_menu");
let abMenuIn = document.querySelectorAll(".about");

let services = document.querySelector(".desktop a:nth-child(3)")
let servMenu = document.querySelector(".services_menu");
let servMenuIn = document.querySelectorAll(".services");

let testimonials = document.querySelector(".desktop a:nth-child(4)")
let testMenu = document.querySelector(".testimonials_menu");
let testMenuIn = document.querySelectorAll(".testimonials");

let portfolio = document.querySelector(".desktop a:nth-child(5)")
let portMenu = document.querySelector(".portfolio_menu");
let portMenuIn = document.querySelectorAll(".portfolio");

let contacts = document.querySelector(".desktop a:nth-child(6)")
let contMenu = document.querySelector(".contacts_menu");
let contMenuIn = document.querySelectorAll(".contacts");


function dropMenuFunc(a, b) {
    dropMenu.forEach(item => {
        if(!item.classList.contains("hidden")) {
            item.classList.add("hidden");
        }});
    dropMenuIn.forEach(item => {
        if(!item.classList.contains("hidden")) {
            item.classList.add("hidden");
        }});
    if (a.classList.contains("hidden") || b.classList.contains("hidden")) {
        a.classList.remove("hidden");
        b.forEach(item => item.classList.remove("hidden"));
    }
};

function hideMenu(a, b) {
    if (!a.classList.contains("hidden")) {
        a.classList.add("hidden");
        b.forEach(item => item.classList.add("hidden"));
    };
}

home.addEventListener('mouseenter', (event) => {
    if (event) dropMenuFunc(homeMenu, homeMenuIn);
});

homeMenu.addEventListener('mouseleave', (event) => {
    if (event) hideMenu(homeMenu, homeMenuIn);
});

about.addEventListener('mouseenter', (event) => {
    if (event) dropMenuFunc(abMenu, abMenuIn);
});

abMenu.addEventListener('mouseleave', (event) => {
    if (event) hideMenu(abMenu, abMenuIn);
});


services.addEventListener('mouseenter', (event) => {
    if (event) dropMenuFunc(servMenu, servMenuIn);
});

servMenu.addEventListener('mouseleave', (event) => {
    if (event) hideMenu(servMenu, servMenuIn);
});


testimonials.addEventListener('mouseenter', (event) => {
    if (event) dropMenuFunc(testMenu, testMenuIn);
});

testMenu.addEventListener('mouseleave', (event) => {
    if (event) hideMenu(testMenu, testMenuIn);
});


portfolio.addEventListener('mouseenter', (event) => {
    if (event) dropMenuFunc(portMenu, portMenuIn);
});

portMenu.addEventListener('mouseleave', (event) => {
    if (event) hideMenu(portMenu, portMenuIn);
});


contacts.addEventListener('mouseenter', (event) => {
    if (event) dropMenuFunc(contMenu, contMenuIn);
}); 

contMenu.addEventListener('mouseleave', (event) => {
    if (event) hideMenu(contMenu, contMenuIn);
});


logo.addEventListener('mouseover', function(){
    dropMenu.forEach(item => item.classList.add("hidden"));
    dropMenuIn.forEach(item => item.classList.add("hidden"));
});

let slider = document.querySelector(".slider");
slider.addEventListener('click', function(){
    dropMenu.forEach(item => item.classList.add("hidden"));
    dropMenuIn.forEach(item => item.classList.add("hidden"));
});

let homeMob = document.querySelector(".menu__mobile a:nth-child(2)");
let submenuHome = document.querySelector(".submenu__home");

homeMob.addEventListener('click', function() {
    if(submenuHome.classList.contains("subhidden") || submenuHome.children.classList.contains("subhidden")) {
        submenuHome.classList.remove("subhidden");
    };
});

let aboutMob = document.querySelector(".menu__mobile a:nth-child(3)");
let submenuAbout = document.querySelector(".submenu__about");

aboutMob.addEventListener('click', function() {
    if(submenuAbout.classList.contains("subhidden") || submenuAbout.children.classList.contains("subhidden")) {
        submenuAbout.classList.remove("subhidden");
    };
});

let servicesMob = document.querySelector(".menu__mobile a:nth-child(4)");
let submenuServices = document.querySelector(".submenu__services");

servicesMob.addEventListener('click', function() {
    if(submenuServices.classList.contains("subhidden") || submenuServices.children.classList.contains("subhidden")) {
        submenuServices.classList.remove("subhidden");
    };
});

let testimonialsMob = document.querySelector(".menu__mobile a:nth-child(5)");
let submenuTestimonials = document.querySelector(".submenu__testimonials");

testimonialsMob.addEventListener('click', function() {
    if(submenuTestimonials.classList.contains("subhidden") || submenuTestimonials.children.classList.contains("subhidden")) {
        submenuTestimonials.classList.remove("subhidden");
    };
});

let portfolioMob = document.querySelector(".menu__mobile a:nth-child(6)");
let submenuPortfolio = document.querySelector(".submenu__portfolio");

portfolioMob.addEventListener('click', function() {
    if(submenuPortfolio.classList.contains("subhidden") || submenuPortfolio.children.classList.contains("subhidden")) {
        submenuPortfolio.classList.remove("subhidden");
    };
});

let contactsMob = document.querySelector(".menu__mobile a:nth-child(7)");
let submenuContacts = document.querySelector(".submenu__contacts");

contactsMob.addEventListener('click', function() {
    if(submenuContacts.classList.contains("subhidden") || submenuContacts.children.classList.contains("subhidden")) {
        submenuContacts.classList.remove("subhidden");
    };
});

let backbtn = document.querySelectorAll(".mobile_submenu > div > a:first-child");

backbtn.forEach(item => item.addEventListener('click', function() {
    document.querySelectorAll(".mobile_submenu > div").forEach(item => {
        if (!item.classList.contains("subhidden")) item.classList.add("subhidden");
    });
}));