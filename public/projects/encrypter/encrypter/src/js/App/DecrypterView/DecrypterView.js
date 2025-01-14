class DecrypterView {
    header;
    body;
    footer;
    htmlElement;
    main;
    type;


    constructor(main, placeholder) { //je krijgt de main mee in de constructor
        this.htmlElement = document.createElement("article");   //hier word een article gemaakt.
        this.htmlElement.classList.add("view"); //hier voeg je een view classes toe aan de article voor styling
        this.type = "DECRYPT"; //Hier wordt het type van de "decrypter" view gedefinieerd als "DECRYPT" binnen deze scope.
        this.main = main;   //hiermee definiteer je de main

        this.main.app.renderer.render(this.htmlElement, this.main.htmlElement)   //je rendered de htmlelement in de htmlelement van de main.
        this.header = new Header(this, "Decrypter"); //je geeft de header mee.
        this.body = new Body(this, placeholder); //je geeft de header mee.
        this.footer = new Footer(this, "Decrypt");   //Hier wordt de tekst voor de knop in de footer aangepast naar "Decrypt".
    }

    getDataFromBody() {
        this.main.cipher(this.body.text, this.type);     //Hier wordt de "cipher" uitgevoerd op de velden "this.body" en "this.type", zodat het tekstveld wordt versleuteld.
    }

    changeBody(decryptedText) {
        this.body.changeBody(decryptedText);    //de body wordt aangepast door de decrypted text
    }
}