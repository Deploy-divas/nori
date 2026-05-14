// menu hamburguer

document.addEventListener('DOMContentLoaded', () => {
    const menuIcone = document.getElementById('menu-icone');
    //querySelector: seletor
    const navMenu = document.querySelector('nav');

    if(menuIcone && navMenu){
        menuIcone.onclick=()=>{
            navMenu.classList.toggle('active');
            menuIcone.classList.toggle('open');
        }
    }
    
})