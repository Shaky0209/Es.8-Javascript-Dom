// Il tuo compito è creare un sito e-commerce per Smartphones. 
// L'homepage che stai per creare sarà la vetrina dei prodotti disponibili, con qualche informazione
// per ciascun prodotto. 
// Non sono richieste funzionalità di carrello/cassa.
// - Completa gli esercizi dall'1 al 6 SOLAMENTE con HTML
// - Completa gli altri esercizi con JS

//ESERCIZI IN HTML

// ESERCIZIO 1: Inserisci un tag h1 con il nome del tuo negozio
// ESERCIZIO 2: Aggiungi una tabella con i 5 prodotti più in vista del tuo negozio
// ESERCIZIO 3: Aggiungi per ogni prodotto un'immagine, un titolo, una descrizione e un prezzo
// ESERCIZIO 4: Per ogni elemento della tabella aggiungi un link di Amazon al prodotto esistente
// ESERCIZIO 5: Aggiungi un footer con il nome e l'indirizzo del tuo negozio
// ESERCIZIO 6: Aggiungi un campo testuale in cui l'utente può lasciare un commento su un prodotto
// (al momento non serve inserire nessuna "vera" funzionalità di POST/salvataggio!)

//ESERCIZI IN JS
// ESERCIZIO 7: Scrivi una funzione per cambiare il contenuto del tag h1 in qualcos'altro

let change = ()=>{
    let text = document.querySelector("h1.firstH1");
    text.innerText = "Aperto 24H/24";
}

// change();

// ESERCIZIO 8: Scrivi una funzione per cambiare il colore di background della pagina

let backgroundChange = ()=>{
    let body = document.getElementsByTagName("body");
    body[0].classList.add("backG");
    let myClass = body[0];
    myClass.style.backgroundColor = "lightblue";
}

// backgroundChange();

// ESERCIZIO 9: Scrivi una funzione per cambiare l'indirizzo presente nel futuro in un altro, fittizio

let addressChange = ()=>{
    let myFooter = document.querySelector("div.footer-content").children;
    myFooter[1].innerText = "Via Del Colosseo, 111"
    myFooter[2].innerText = "00100"
    myFooter[3].innerText = "ROMA"
}

// addressChange();

// ESERCIZIO 10: Scrivi una funzione per aggiungere una classe CSS ad ogni link Amazon della tabella

let addClassLink = ()=>{
    myLink = document.querySelectorAll("a");
    for(i = 0; i < myLink.length; i++){
        myLink[i].classList.add("added-class");
    }
    console.log(myLink);
}

// addClassLink();

// ESERCIZIO 11: Scrivi una funzione per aggiungere/togliere una classe CSS a tutte le immagini della tabella; questa classe deve modificare la visibilità/invisibilità dell'immagine

let displayImgToggle = ()=>{
    myImages = document.querySelectorAll("div.img");
    for(i = 0; i < myImages.length; i++){
    myImages[i].classList.toggle("imgNone");
    }
}

// ESERCIZIO 12: Scrivi una funzione per cambiare il colore del prezzo di ogni prodotto in uno differente, ogni volta che viene invocata

let count = 0;

let contentColor =  [ 
                    "red",
                    "blue",
                    "green",
                    "orange",
                    "green",
                    "grey",
                    "black",
                    "orangered",
                    "purple",
                    "yellowgreen",
                    ];


let priceColor = ()=>{
    count++

    if(count > 9){
        count = 0;
    }

    let prices = document.querySelectorAll("h2.price");
    for(i = 0; i < prices.length; i++){
        prices[i].style.color = contentColor[count];
    }
}

