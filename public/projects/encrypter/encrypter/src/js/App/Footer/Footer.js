class Footer {
    htmlElement;
    view;
    app;
    buttonHtmlElement;
    constructor(view, buttonText) {
        this.htmlElement = document.createElement("footer"); //hier word een footer aangemaakt
        this.htmlElement.classList.add("view__footer"); //hier geef je de footer een classlist voor styling
        this.buttonHtmlElement = document.createElement("button"); //hier maak je een button aan.
        this.buttonHtmlElement.classList.add("view__button"); //hier geef je de buttons styling
        this.buttonHtmlElement.onclick = this.buttonClicked; //Hier wordt een "onclick" gebeurtenis afgehandeld wanneer er wordt geklikt op de knop.
        this.buttonHtmlElement.innerText = buttonText; //de button text is encrypt of decrypt
        this.htmlElement.appendChild(this.buttonHtmlElement); // de button komt in de footer
        this.view = view; //Hier wordt de "view" opnieuw gedefinieerd binnen dezelfde scope.
        this.view.main.app.renderer.render(this.htmlElement, this.view.htmlElement); //hier render je de footer en daarna geef je aan waar en dat is de view element
    }

    buttonClicked = () => { //Hier wordt een functie gedefinieerd die iets uitvoert nadat er is geklikt.
        this.view.getDataFromBody();    //na het clikken haalt het data op uit de body en dan wordt het gecrypt of gedecrypt.
    }

}