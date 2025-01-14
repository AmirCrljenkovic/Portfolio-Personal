class agendaApp{
    api;
    switcher;
    month = 0;
    // dit is de geheugen
    constructor(){
        this.api = new API();
        // hier maakt hij een nieuwe api aan
        this.switcher = new switcher(this);
        // hier maken we een switcher aan
        this.api.getData().then(result => {
            this.switcher.loadAgenda(result[this.month]);
        });
        //hier word de api terug gegeven
    }
    // dit zorgt er voor dat de data naar alle classes worden gebracht

    switchMonths = (sign) =>{
        switch(sign){
            case "+":
                this.month = this.month + 1;
                break;
                // hierdoor kan je naar de volgende maand
            case "-":
                this.month = this.month - 1;
                break;
                // hierdoor kan je terug naar de vorrige maand
        }

        // Bij het klikken op een andere maand wordt de waarde in het "DATA" veld in data.json verhoogd met +1 om vooruit te gaan, en wordt het omgekeerde gedaan met - om achteruit te gaan.
    
        if(this.month === 12){
            this.month = 0;
        }
        // dit zorgt er voor dat als je na de maand 12 bent gegaan je weer terug komt bij 0
        if(this.month < 0){
            this.month = 11;
        }
        // Als je na 12 maanden bent, vernieuw de pagina. Doe hetzelfde, maar in omgekeerde volgorde.
        this.switcher.loadAgenda(this.api.dataFromAPI[this.month]);
    
    }
    
        
    }
    
    class API{
        dataFromAPI= [];
        // dit is een array
        async getData(){
           await fetch("data/data.json").then( response => {
               // in de achtergrond haalt hij data uit data.json
                return response.json();
            }).then(data => {
                this.dataFromAPI = data.months;
                // hier stopt hij het in
            });
            return this.dataFromAPI;
            // hier retourneert hij de data
        }
    }
    
    class Agenda{
        Renderer;
        header;
        month;
        htmlElement;
        agendaApp;
        constructor(data,agendaApp){
            this.agendaApp = agendaApp;
            // slaat de agendaApp op
            this.htmlElement = document.createElement("article");
            // maakt een article
            this.htmlElement.classList.add("agenda");
            // voegt een agenda class toe
            this.data = data;
            // data van de maand zet hij hier neer
            this.Renderer = new Renderer();
            // maakt een nieuwe renderer
            this.Renderer.render("body",this.htmlElement);
            // zegt render in de body mijn htmlElement (de article)
            this.header = new Header(this,data.name, this.agendaApp);
            // maakt een nieuwe header aan
            this.month = new Month(this, data.days);
        }
    
        render(placeToRender,whatToRender){
            this.Renderer.render(placeToRender, whatToRender)
        }
    }
    
    
    
    class Header{
        nameOfMonth;
        htmlElement;
        agenda;
        leftButton;
        rightButton;
        constructor(agenda,nameOfMonth, agendaApp){
            this.agenda = agenda;
            // slaat de agenda op
            this.agendaApp = agendaApp;
            // slaat de agendaApp op
            this.nameOfMonth = nameOfMonth;
            // naam van de maand
            this.htmlElement = document.createElement("header");
            // hier maakt hij een header aan
            this.htmlElement.classList.add("agenda__header");
            // hier maakt hij een classList agenda__header
            this.text = document.createElement("h2");
            // hier maakt hij een h2 aan
            this.agenda.render(".agenda",this.htmlElement);
            // hier rendert hij .agenda in mijn htmlElement
            this.leftButton = new Button("previous", "<", "agenda--left",this,this.agendaApp);
            // hier maakt hij een leftButton aan
            this.agenda.render(".agenda__header",this.text);
            // hier rendert hij de .agenda__header
            this.rightButton = new Button("next", ">", "agenda--right",this,this.agendaApp);
            // hier maakt hij een right button aan
            this.text.innerText = this.nameOfMonth;
            // de text geeft de data.name mee
        }

            render(placeToRender, whatToRender){
                this.agenda.render(placeToRender, whatToRender);
        }
        // hier word de render functie aangemaakt
    }
    
    class Button{
        htmlElement;
        innerText;
        extraClass;
        switcher;
        header;
        type;
        constructor(type,innerText,extraClass, header, agendaApp){
            // allemaal relaties met elkaar
            this.type = type;
            // previous or next
            this.agendaApp = agendaApp;
            // relatie tussen agendaApp
            this.htmlElement = document.createElement("button");
            // button aangemaakt
            this.htmlElement.classList.add("agenda__button");
            // classe word meegegeven
            this.extraClass = extraClass;

            this.htmlElement.classList.add(this.extraClass);
            // hier word een classList van extraClass toegevoegd
            this.innerText = innerText;
            // < of >
            this.htmlElement.innerText = this.innerText;
            this.header = header;
            // header object
            this.render();
            //deze functie zorgt voor de rendering
    
            this.htmlElement.onclick = this.buttonClicked;
            // als er word geklikt dan moet je buttonClicked uitvoeren
        }
    
        buttonClicked = () => {
            if(this.type === "previous"){
                this.agendaApp.switchMonths("-");
                return;
    
            }
            this.agendaApp.switchMonths("+");
            // hiermee kan je switchen tussen de maanden
        }
    
        render(){
            this.header.render("header", this.htmlElement);
            // hier zeg je wat er gerenderd moet worden in de header
        }
    }
    
    class switcher{
        agendaApp;
        agenda;
        cleaner;
        constructor(agendaApp){
            this.agendaApp = agendaApp;
            // relatie van de agendaApp
            this.cleaner = new Cleaner();
            // relatie van de Cleaner
        }
    
        loadAgenda = (data) =>{
            this.cleaner.clean("body");
            // hier cleaned hij de body
            this.agenda = new Agenda(data,this.agendaApp);
            // hier maken we een nieuwe agenda aan
        }
    
    }
    
    class Month{
        days = [];
        agenda;
        numberOfDays;
        htmlElement;
        constructor(agenda,numberOfDays){
            // de month krijgt de agenda en de numberOfDays binnen
            this.htmlElement = document.createElement("ul");
            // maak een ul
            this.htmlElement.classList.add("agenda__month");
            // geef een class
            this.numberOfDays = numberOfDays;
            // hier maak je een variable
            this.agenda = agenda;
            // hier maak je een variable
            this.agenda.render(".agenda",this.htmlElement);
            // hier geef je aan wat je wilt renderen
            for(let i = 1; i <= numberOfDays; i++){
                this.days.push(new Day(this,i));
            }
            // hoevaak numberOfDays aangemaakt moet worden
        }
    
        renderDays(placeToRender,whatToRender){
            this.agenda.render(placeToRender,whatToRender);
            // geef aan wat je wilt renderen
        }
    }
    
    class Day{
        month;
        htmlElement;
        dayNumber;
    
       constructor(month,dayNumber){
        this.dayNumber = dayNumber;
        // de day krijgt gegevens binnen
        this.htmlElement = document.createElement("li");
        // maakt een li aan
        this.htmlElement.classList.add("agenda__day");
        // geeft een class
        this.htmlElement.innerText = this.dayNumber;
        // zet de data in de dagen die hij mee krijgt
        this.month = month;
        // zet in variable
        this.month.renderDays(".agenda__month", this.htmlElement);
        // dagen worden meegegeven aan de ul
       }
    }
    
    
    

    