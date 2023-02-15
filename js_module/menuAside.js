export default function MenuAside(btnhamburguer,menuSections){
    const $btnhamburguer = document.querySelector(btnhamburguer),
        $menusections = document.querySelector(menuSections)
    // console.log($btnhamburguer);
    document.addEventListener("click",e =>{
        // console.log(e.target);
        if (e.target.matches(".btnaside") || e.target.matches(`${".btnaside"} *`)) {
            $btnhamburguer.classList.toggle("is-desactive-btn")
            
            $menusections.classList.toggle("is-active-menuAside")
            console.log("holas");
            
        }if (e.target.matches(".asideMenu-User")) {
            console.log(e.target);
            console.log("estamos adentro");
            $btnhamburguer.classList.remove("is-desactive-btn")

            $menusections.classList.remove("is-active-menuAside")
            
        }
        
    })
}