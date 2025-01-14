class Body {
    htmlElement;    //de section
    view;
    inputHtmlElement;   // de input 
    text;   //De tekst komt uit de JSON en kan uiteraard worden gewijzigd.
    constructor(view, object) {  //een constructor waar de view en object in wordt aangegeven voor data
        this.htmlElement = document.createElement("section");    //hier maak je een section aan
        this.htmlElement.classList.add("view__body"); //hier voeg je een style.classlist aan de section
        this.inputHtmlElement = document.createElement("textarea"); //hier maak je een tekstveld aan waar je in kan typen.
        this.inputHtmlElement.classList.add("view__input")  //hier style je de tekstveld 
        this.htmlElement.appendChild(this.inputHtmlElement); //in de section maak je een tekstveld
        this.inputHtmlElement.placeholder = object.placeholder; //Op deze manier kun je een nieuwe instantie van het object maken en de gewenste waarden toewijzen, inclusief de placeholder-tekst die uit de JSON is gehaald.
        this.inputHtmlElement.value = object.value; //Hier geef je de waarde aan die wordt opgehaald uit de JSON. Aangezien de waarde leeg is in de JSON (aangegeven als ""), heeft deze geen specifieke waarde.
        this.text = object.value;  //hier geef je de value aan dat je uit de json haalt , de value heeft geen specifieke waarde aangezien de "" in json leeg zijn.
        this.inputHtmlElement.oninput = this.typed; //de typed haalt het op uit de typed functie onderaan

        this.view = view;   //Hier wordt de variabele "view" gedeclareerd binnen dezelfde scope.
        this.view.main.app.renderer.render(this.htmlElement, this.view.htmlElement); //hier render je op de section de view elementen 
    }

    typed = (event) => { //deze functie houd de getypte text bij
        this.text = event.target.value; //Hier wordt de variabele "view" gedeclareerd met de waarde "aantal text", wat zijn doelwit en focus is.

    }

    changeBody(newText) {
        this.inputHtmlElement.value = newText;  //Hier wordt de waarde van de variabele "inputHtmlelement" vernieuwd.
    }
}