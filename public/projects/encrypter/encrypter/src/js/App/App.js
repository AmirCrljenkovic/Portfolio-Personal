class App {
    api;
    decrypter;
    encrypter;
    cleaner;
    renderer;
    main;

    constructor() {
        this.encrypter = new Encrypter();   //hier maak je de encrypter aan
        this.decrypter = new Decrypter(); //hier maak je de decrypter aan
        this.cleaner = new Cleaner();   //je maakt een nieuwe cleaner aan
        this.renderer = new Renderer(); //hier maak je een render aan
        this.api = new API();   //je maakt hier een nieuwe api aan
        this.api.getData("src/data/data.json").then((data) => {    //hier krijg je de data terug
            this.main = new Main(data, this);  //de main heeft data nodig en dat geef je dus ook aan de main door data tussen de ()  te typen
        });
    }

    // dit is de encrypted methode
    encrypt = (textToEncrypt) => {
        //variabele met de waarde van de encrypted text
        const encrypted = this.encrypter.encrypt(textToEncrypt);
        this.main.changeEncrypter(encrypted); // Hier wordt de functie aangepast zodat changeEncrypter wordt aangeroepen met de encrypted variabelen.
    }
    // dit is de decrypt methode
    decrypt(textToDecrypt) {
        //variabele met de waarde van de decrypted text
        const decrypted = this.decrypter.decrypt(textToDecrypt);
        this.main.changeDecrypter(decrypted);   // de function waar changeDecrypter wordt aangeroepen met de decrypted variabelen
    }

}
