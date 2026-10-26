let f1 = document.getElementById("op_1")
let f2 = document.getElementById("op_2")
let ris = document.getElementById("ris")
let piu = document.getElementById("piu")
let meno = document.getElementById("sott")
let per = document.getElementById("per")
let div = document.getElementById("div")
let canc = document.getElementById("canc")

f1.focus()

piu.onclick = function somma(){
    let n1 = Number(f1.value)
    let n2 = Number(f2.value)
    let r
    r=n1+n2
    ris.value=r
}

meno.onclick = function somma(){
    let n1 = Number(f1.value)
    let n2 = Number(f2.value)
    let r
    r=n1-n2
    ris.value=r
}

per.onclick = function somma(){
    let n1 = Number(f1.value)
    let n2 = Number(f2.value)
    let r
    r=n1*n2
    ris.value=r
}

div.onclick = function somma(){
    let n1 = Number(f1.value)
    let n2 = Number(f2.value)
    let r
    if(n2!=0){
        r=n1/n2
        ris.value=r
    }
    else
    ris.value="fattore 2 non può essere 0"
}

canc.onclick = function clear(){
    f1.value=""
    f2.value=""
    ris.value=""
    f1.focus()
}