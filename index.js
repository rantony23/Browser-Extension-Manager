let toggleButton = document.getElementsByClassName("toggle-button");
let buttonToggleMode = document.getElementById("button-toggle-mode");
let body = document.body;
let divs = document.querySelectorAll(".container-element");
let navbar = document.getElementById("nav");
let logo = document.getElementById("logo-navbar");
let mode = document.getElementById("mode-button");
let active  = false;
let exts = document.querySelectorAll(".ext");
let removeButton = document.getElementsByClassName("remove");
let activeButton = document.getElementsByClassName("used")[0];
let inactiveButton = document.getElementsByClassName("inactive")[0];
let allButton = document.getElementsByClassName("all")[0];
let containers = document.getElementsByClassName("container-element");


body.classList.add("no-transition");

window.addEventListener("load", () =>{
    document.body.classList.remove("no-transition");
})
let toggleButtonComp = Array.from(toggleButton);
let removeButtonComp = Array.from(removeButton);
let containersComp = Array.from(containers);


toggleButtonComp.forEach( (el,  index) =>{
    el.addEventListener("click", () =>{
        el.classList.toggle("active");
        containersComp[index].classList.toggle("act");
    })
}
);

console.log(toggleButtonComp);
console.log(containersComp);

//active button =>

activeButton.addEventListener("click", () =>{
    containersComp.forEach( el =>{
        if(!el.classList.contains("act")){
            el.style.display = "none";
        }else if(!el.classList.contains("removed")){
            el.style.display = "grid";
        }
    })
});

inactiveButton.addEventListener("click", () =>{
    containersComp.forEach( el =>{
        if(el.classList.contains("act")){
            el.style.display = "none";
        }else if(!el.classList.contains("removed")){
            el.style.display = "grid";
        }
    })
});

allButton.addEventListener("click", () =>{
    containersComp.forEach(el =>{
        if(!el.classList.contains("removed")){
            el.style.display = "grid";
        }
    })
})

//remove functionality

removeButtonComp.forEach( (el,index) =>{
    el.addEventListener("click", () =>{
        containersComp[index].classList = "removed";
        containersComp[index].style.display = "none";
    })
})

buttonToggleMode.addEventListener("click", () =>{
    buttonToggleMode.classList.toggle("active");
    body.classList.toggle("light");
    divs.forEach(el =>{
        el.classList.toggle("light");
    });
    exts.forEach(el =>{
        el.classList.toggle("light");
    });
    navbar.classList.toggle("light");

    removeButtonComp.forEach( el =>{
        el.classList.toggle("light");
    })

    toggleButtonComp.forEach( el =>{
        el.classList.toggle("light");
    })  

    if(!active){
        logo.src = "./browser-extensions-manager-ui-main/assets/images/logo-copy.svg";
        mode.src = "./browser-extensions-manager-ui-main/assets/images/icon-moon.svg";
        buttonToggleMode.style.backgroundColor ="hsl(0, 0%, 93%)";
        active = true;

    }else{
        logo.src = "./browser-extensions-manager-ui-main/assets/images/logo.svg";
        mode.src = "./browser-extensions-manager-ui-main/assets/images/icon-sun.svg";
        buttonToggleMode.style.backgroundColor ="hsl(225, 23%, 24%)";
        active = false;
    }
})


