const bg = document.getElementById("bg")
const icon = document.querySelector("img")
const aviso = document.getElementById("aviso")
var bgbool = false
var iconmoving = false

icon.onclick = () => {
     if (bgbool && !iconmoving) {
        bgRESIZE(false)
        iconmoving = true
        bgbool = false
        setTimeout(() => {
            iconmoving = false
        }, 2000);
     } else if (!bgbool && !iconmoving){
        bgRESIZE(true)
        iconmoving = true
        bgbool = true
        setTimeout(() => {
            iconmoving = false
        }, 2000);
     }
}

icon.onmouseenter = () => {
    if (!iconmoving)
    icon.classList.add("startup")
    ajustarAviso(true)

}

icon.onmouseleave = () => {
    if (icon.classList.contains("startup"))
    icon.classList.remove("startup")
    if (!iconmoving)
    icon.classList.add("ended")
    ajustarAviso(false)
    
    setTimeout(() => {
        icon.classList.remove("ended")
    }, 200)
}

function ajustarAviso(val) {
    if (val){
        aviso.classList.add("avisoOPEN")
    } else{
        if (aviso.classList.contains("avisoOPEN")) {
            aviso.classList.remove("avisoOPEN")
        }
            aviso.classList.add("avisoCLOSED")
            setTimeout(() => {
                aviso.classList.remove("avisoCLOSED")
            }, 300);
        }
    }

function bgRESIZE(val) {
    if (val) {
        bg.classList.add("bgOPEN")
        icon.classList.add("iconOPENING")
        ajustarAviso(false)
        icon.classList.remove("startup")
        setTimeout(() => {
            icon.classList.remove("iconOPENING")
        }, 2000);
    } else{
        if (bg.classList.contains("bgOPEN")){
            bg.classList.remove("bgOPEN")
            icon.classList.remove("iconOPENING")
        }
        bg.classList.add("bgCLOSED")
        icon.classList.add("iconCLOSING")
        setTimeout(() => {
            bg.classList.remove("bgCLOSED")
            icon.classList.remove("iconCLOSING")
        }, 2000);
    }
}
