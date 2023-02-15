export function closeSignUp (btnSingUp,menuDisplacemnt){
    const $menuSignup = document.querySelector(".menuSignup")
    document.addEventListener("click",e =>{
        if (e.target.matches(menuDisplacemnt)) {
            $menuSignup.classList.remove("is-active-menuSignup")            
        }
        if(e.target.matches(btnSingUp) || e.target.matches(`${btnSingUp} *`)){
            $menuSignup.classList.add("is-active-menuSignup")
        }
        if (e.target.matches(".menuSigupClose")) {
            $menuSignup.classList.remove("is-active-menuSignup")
        }

    })
    

}