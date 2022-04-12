const navBarBg = document.getElementById('navbar');
document.addEventListener("scroll", ()=>{
    if(window.scrollY>190){
        navBarBg.style.backgroundColor="rgba(0,0,0,0.8)";
    }
    else
    navBarBg.style.backgroundColor="transparent";
});


const parallax = document.getElementById("section1");
window.addEventListener("scroll",()=>{
    if(scrollY>=0){
        const offset = window.scrollY;
    parallax.style.backgroundPositionY = offset * 0.7 + 'px';
    }
    
})