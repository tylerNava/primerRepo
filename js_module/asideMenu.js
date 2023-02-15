export default function contentMenuAside (hfive,contenmenuaAside){
    const $h5 = document.querySelector(hfive)
    let $contentMenuAside = document.querySelector(contenmenuaAside)
    
    document.addEventListener("click" ,e =>{
        // console.log(e.target.matches($h5));
        if (e.target.matches(".contendMenuh5")) {
            $contentMenuAside.style.display = "flex"
            


        }
        if (e.target.matches(".contentMenuAside-close")) {
            $contentMenuAside.style.display = "none"

            
        }
    })
}