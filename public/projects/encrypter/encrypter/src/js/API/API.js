class API {     //Dit is een zeer herbruikbare API
    async getData(url) {    //dit loopt asynchroon
        let dataToBeReturned = {};  //data is een leeg object
        await fetch(url).then(  //De app begint pas te functioneren zodra de data beschikbaar is. 
            (response) => {  // Zonder het gebruik van een arrow functie raakt het de "this" referentie kwijt.
                return response.json();  //hier word de data terug gegeven
            }
        ).then((data) => {       //hier geef je aan wat er gebeurt met de data
            dataToBeReturned = data.data;    //this.data = data" wijst "data" toe aan het huidige object, terwijl "data.data" de data van het hele object pakt.
        });
        return dataToBeReturned; //hier returend hij de data.
    }
}


