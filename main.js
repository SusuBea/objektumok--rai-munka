window.addEventListener("load", init);

const kutyaLista=[
    {fajta:"Dézi", kor: "12", fajta: "foxterrier"},
    {fajta:"Prézli", kor: "2", fajta: "kuvasz"},
    {fajta:"Gombi", kor: "2", fajta: "puli"},
    {fajta:"Centi", kor: "8", fajta: "agár"},
    {fajta:"Mamut", kor: "9", fajta: "újfullandi"},
    {fajta:"Picúr", kor: "1", fajta: "keverék"}]


function init(){
    const ARTICLE = document.querySelectorAll("article")
    /**Írjuk ki divekbe és azon belül p tagbe a kuytafajtákat */
    let txt = osszeallit()
    //itt helyezzük bele az article 
    ARTICLE[0].innerHTML=txt

}

function osszeallit(){
    //összaállítjuk azt a szöveges tartlamat, ami a HTML kódot jelenti
    let txt =""
    for (let index = 0; index < kutyaLista.length; index++) {
        txt += `<div>`
                   
                    for (const kulcs in kutyaLista[index]){ 
                        txt += `  <p>
                       ${kulcs}: ${kutyaLista[index][kulcs]},    
                        </p>`
                    }
                    
                    txt += `       </div>`  
    }
    console.log(txt)
    return txt
}

