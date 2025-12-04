let navbar
function CheckScrollY(){
    navbar = document.getElementById("navbar")
    if(window.scrollY > 20){
        HideNavbar()
    }
    else{
        ShowNavbar()
    }
}

function ShowNavbar(){
    navbar.removeAttribute("hidden")
}

function HideNavbar(){
    navbar.setAttribute("hidden", true)
}

//Recuperation de la position de la souris

document.addEventListener("mousemove", Navbar)


function Navbar(e){
    let MouseY = e.clientY
    console.log(e.clientX, MouseY)
    if(window.scrollY > 20){
        if(MouseY <= 50){
            ShowNavbar()
        }
        else if(navbar.getAttribute("hidden") == null || navbar.getAttribute("hidden") == ""){
            console.log('k')
            HideNavbar()
        }
    }
}

