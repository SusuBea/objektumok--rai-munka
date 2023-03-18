window.addEventListener("load",  init)
const KUTYAK = [
    {
        neve: "Dézi",
        fajta: "keverék",
        lab: 4,
        marmgassag: 52,
        nem:"szuka",
        kor:13    
    },

    {
        neve: "KIRA",
        fajta: "keverék",
        lab: 4,
        marmgassag: 52,
        nem:"szuka",
        kor:13    
    }
]

    console.log(KUTYAK[0])
    console.log(KUTYAK[1])

function init(){
    //**kulcs-érték párok
    //objektum - ez lista - nincs fix mérete 
    // const DEZI = {
    //     neve: "Dézi",
    //     fajta: "keverék",
    //     lab: 4,
    //     marmgassag: 52,
    //     nem:"szuka",
    //     kor:13    
    // };

    // const KIRA = {
    //     neve: "KIRA",
    //     fajta: "keverék",
    //     lab: 4,
    //     marmgassag: 52,
    //     nem:"szuka",
    //     kor:13    
    // };

    console.log(DEZI.neve)
    console.log(KIRA.neve)
    DEZI.neve="Béla"
    console.log(DEZI.neve)
    DEZI.oltas= "van"
    console.log(DEZI)
    delete DEZI.lab
    console.log(DEZI)

    /**Az összes kulcs bejárása */
    /*Objektum bejárása for in-nel */
    for (let index = 0; index < KUTYAK.length; index++) {
        console.log(index, ". kutya ***********")
        for (const kulcs in KUTYAK[index]){
            console.log(kulcs, KUTYAK[index][kulcs]);
        }
    }
        console.log(KUTYAK);

    }
    

