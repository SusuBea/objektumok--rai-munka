window.addEventListener("load", init);

const kutyaLista=[
    {név:"Dézi", kor: "12", fajta: "foxterrier"},
    {név:"Prézli", kor: "2", fajta: "kuvasz"},
    {név:"Gombi", kor: "2", fajta: "puli"},
    {név:"Centi", kor: "8", fajta: "agár"},
    {név:"Mamut", kor: "9", fajta: "újfullandi"},
    {név:"Picúr", kor: "1", fajta: "keverék"}]


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
        
        txt += `<div> <button>Törlés</button>`              
                   
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

