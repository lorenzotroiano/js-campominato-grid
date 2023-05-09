
// L’utente clicca su un bottone che genererà una griglia di gioco quadrata.




// Ogni cella ha un numero progressivo, da 1 a 100.


// Ci saranno quindi 10 caselle per ognuna delle 10 righe.


// Quando l’utente clicca su ogni cella, la cella cliccata si colora di azzurro ed emetto un messaggio in console con il numero della cella cliccata.





let container = document.getElementById("container");

const buttonGenera = document.getElementById("genera");





buttonGenera.addEventListener("click",
function() {

    for (let i = 1; i <= 100; i++) {

        const nuovoQuadrato = createContainerSquare("div", "square")
    
        nuovoQuadrato.addEventListener("click", 
        function() {

            nuovoQuadrato.classList.add('blue');
        })
       

        const createSpan = document.createElement('span');
        createSpan.append(i);
        
       
           
           
        
    
        nuovoQuadrato.append(createSpan);
    
        container.append(nuovoQuadrato);
 
    
    }

})










// FUNZIONI
function createContainerSquare(prendiElement, prendiClass){

    const newElement = document.createElement(prendiElement);

    newElement.classList.add(prendiClass);

    return newElement

}


// FUNZIONE PER GENERARE NUMERI
