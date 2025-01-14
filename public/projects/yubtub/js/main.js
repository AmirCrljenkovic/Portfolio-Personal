class App { //classe App
  api; // api is een eigenschap van de classe APP
  switcher; // switcher is een eigenschap van de classe APP

  constructor() { 
    this.api = new API("data/data.json"); // hier word nieuwe object aangemaakt en haalt hij de json op.

    this.api.getData().then((data) => { // hier word de data aangeroepen en word er een callback functie uitgevoerd.
      this.switcher = new Switcher(this, data); // hier word een nieuw object aangemaakt genaamd (switcher), de data word doorgegeven aan de switcher.
    });
  }
}

class API {
  url = ""; // url is een eigenschap van class API.
  data = null; // data is een andere eigenschap van API met de waarde null.

  constructor(newURL) { // constructor functie met het object newURL.
    this.url = newURL; // hiermee worden de API gegevens opgehaald
  }

  async getData() { //  een functie die wordt gebruikt om de gegevens op te halen van de opgegeven URL.
    if (this.data === null) { // controleert of de data gelijk is aan NULL (nog geen gegevens) binnen heeft.
      await fetch(this.url) // retourneert een promise. 
        .then(function (response) { // die wordt afgehandeld met behulp van de then methode.
          return response.json(); // hier word de ontvangen response omgezet naar JSON.
        })
        .then((data) => { // hier worden de JSON gegevens toegewezen aan de eigenschap van het object data
          this.data = data;
        });
    }
    return this.data; // hier retourneert hij de data 
  }
}

class Switcher { // classe Switcher
  app; // app is een eigenschap van class Switcher.
  data; // data is een eigenschap van class Switcher.
  yubtub; // yubtub is een eigenschap van class Switcher.
  cleaner; // cleaner is een eigenschap van class Switcher.
  default = 0; // default is een andere eigenschap van Switcher en heeft een waarde van 0.

  constructor(app, data) { // hier wordt een nieuwe constructor aangemaakt en accepteert alleen de eigenschappen app en data.
    this.app = app; // de waarde van app wordt toegewezen aan de app eigenschap van Switcher.
    this.videos = data.videos; // de waarde van data.videos (een array van de videos) wordt toegewezen aan de videos eigenshcap van Switcher.
    this.data = this.videos[this.default]; // de video met de zelfde waarde wordt toegewezen aan de data eigenschap van Switcher.
    this.yubtub = new YubTub(this.app, this.data); // hier wordt een nieuw object van YubTub gemaakt en toegewezen aan het object app en data en wordt doorgegeven aan de YubTub constructor.
    this.cleaner = new Cleaner(); // hier wordt een nieuw object aangemaakt van de class Cleaner.
  }

  updateDefault(newValue) { // hier word een nieuwefunctie updateDefault aangemaakt.
    this.default = newValue; // hier wijst hij de waarde van de parameter newValue toe aan default en wordt gebruikt om een bepaalde waarde te vertegenwoordigen.
    this.data = this.videos[this.default]; //  Hier wordt de waarde van this.default gebruikt om een element uit de array this.videos te halen.
    this.cleaner.clean("body"); // hier wordt de inhoud van de body verwijdert.
    this.yubtub = new YubTub(this.app, this.data); // hier wordt een nieuw object genaamd YubTub en wijst het toe aan het attribuut yubtub, de constrcutor YubTub krijgt 2 argumenten mee en dat zijn this.app en this.data.
  }
}

class Cleaner { // classe Clener
  clean(whereToClean) { // deze methode laat zien wat hij moet cleanen.
    document.querySelector(whereToClean).innerHTML = ""; // zoekt naar het eerste element dat overeenkomt met de css selector em retourneert dit element.
  }
}

class YubTub { // classe YubTub
  app; // app is een eigenschap van class YubTub.
  data; // data is een eigenschap van class YubTub.
  header; // header is een eigenschap van class YubTub.
  main; // main is een eigenschap van class YubTub.
  aside; // aside is een eigenschap van class YubTub.
  renderer; // renderer is een eigenschap van class YubTub.

  constructor(app, data) { // de constructor accepteert 2 parameters genaamd app en data en wordt geïnitialiseerd in de constructor van de klasse en accepteert alleen app en data.
    this.app = app; // hier wordt de waarde van app toegewezen naar app.
    this.data = data; // hier wordt de waarde van data toegewezen naar data.
    //this.header = new Header(this); 
    this.renderer = new Renderer(); // maakt een nieuw object aan en wijst het toe aan de eigenschap renderer.
    this.main = new Main(this, this.data); // maakt een nieuw object aan en wijst het toe aan de eigenschap main.
    this.aside = new Aside(this, this.data); //  maakt een nieuw object aan en wijst het toe aan de eigenschap aside.
  }
}

class Renderer { // classe Renderer
  render(whereToRender, whatToRender) { // methode renderer die alleen de whereToRender en whatToRender accepteerd.
    // whereToRender is een string die een CSS selector aangeeft (word aangegeven met een ID).
    // whatToRender is een HTML element dat moet worden weergegeven in het doelelement.
    document.querySelector(whereToRender).appendChild(whatToRender); // gebruikt de methode queerySelector functie van het document om het doelelement te selecteren op basis van de gegevens in whereToRender.
  }
}

//class Header{
//yubtub;
//constructor(yubtub){
//this.yubtub = yubtub;
//this.header = document.createElement("header"); // Create a <header> element
//this.header.innerText = "YubTub"; // Set the text content of the header
//this.header.classList.add("header"); // Add a CSS class for styling
//this.yubtub.renderer.render("body", this.header); // Render the header element to the body

//}
//}


class Main { // classe main.
  yubtub; // yubtub is een eigenschap van class Main.
  data; // data is een eigenschap van class Main.
  comments; // comments is een eigenschap van class Main.
  video; // video is een eigenschap van class Main.
  views; // views is een eigenschap van class Main.

  constructor(yubtub, data) { 
    this.yubtub = yubtub;
    this.data = data;
    this.mainElement = document.createElement("main");
    this.mainElement.classList.add("main");
    this.yubtub.renderer.render("body", this.mainElement);

    this.sectionElement = document.createElement("section");
    this.sectionElement.classList.add("yubtub");
    this.yubtub.renderer.render(".main", this.sectionElement);

    this.videoElement = document.createElement("figure");
    this.videoElement.classList.add("video");
    this.yubtub.renderer.render(".yubtub", this.videoElement);

    this.overlaybuttonElement = document.createElement("button");
    this.overlaybuttonElement.classList =
      "video__button video__button--star video__button--overlay";
    this.yubtub.renderer.render(".video", this.overlaybuttonElement);

    this.overlaystarElement = document.createElement("i");
    this.overlaystarElement.classList = "fa-solid fa-star";
    this.yubtub.renderer.render(
      ".video__button--overlay",
    this.overlaystarElement
    );

    // Deze code maakt HTML-elementen aan, voegt CSS-klassen toe en voegt ze dynamisch toe aan specifieke elementen 
    //op de webpagina met behulp van de "render" methode. Hierdoor kan de klasse specifieke structuur en opmaak aan de pagina toevoegen, 
    //gebaseerd op de gegeven "yubtub" en "data" waarden.

    this.videoplayerElement = document.createElement("video"); // creërt een nieuwe HTML element van het type video en wijst het toe aan de eigenschap videoplayerElement.
    this.videoplayerElement.src = "videos/" + this.data.video; // stelt de videospeler in door de padnaam van de video te combineren met het pad, en wijst het toe aan de eigenschap "videoplayerElement van het object"
    this.videoplayerElement.classList = "video__player"; // hier voeg je een CSS classe toe met de naam "video__player".
    this.videoplayerElement.controls = true; // dit zorgt er voor dat de video controls worden weergeven voor de video.
    this.videoplayerElement.poster = ""; // hier kan je een poster invoegen op de video maar ik heb hem leeg gelaten.
    this.yubtub.renderer.render(".video", this.videoplayerElement); // hiermee word de render aangeroepen, dit voegt de videospeler toe aan het element dat wordt geselecteerd door de .video in de HTML.

    this.videobarElement = document.createElement("div"); // maakt een nieuwe HTMLElement aan met het type div aan.
    this.videobarElement.classList = "video__bar"; // hiermee kun je de CSS class .video__bar stylen in de CSS.
    this.yubtub.renderer.render(".video", this.videobarElement); // hier word de videobarElement gerendert in de HTML.

    this.videodetailsElement = document.createElement("div"); // maakt een nieuwe HTMLElement aan met het type div aan.
    this.videodetailsElement.classList = "video__details"; // hiermee kun je de CSS class .video__details stylen in de CSS.
    this.yubtub.renderer.render(".video__bar", this.videodetailsElement); // hier word de videobarElement gerendert in de HTML.

    this.uploaderprofileElement = document.createElement("img"); // maakt een nieuwe HTMLElement aan met het type img aan.
    this.uploaderprofileElement.src = "images/profilepicture.webp"; // hier geeft hij het pad naar de profielfoto aan.
    this.uploaderprofileElement.alt = "Profile Picture"; // dit is de alt text voor blinde mensen aan en laat hun weten dat dit een profielfoto is.
    this.uploaderprofileElement.classList = "video__uploader"; // hier kan je de video__uploader stylen in de CSS.
    this.yubtub.renderer.render(".video__details", this.uploaderprofileElement); // verwijst naar video__details en wordt gebruikt om het doelelement te selecteren waarin this.uploaderprofileElement moet worden weergegeven en word doorgegeven aan de renderer.

    this.titleElement = document.createElement("p"); // hier maak je een p element aan.
    this.titleElement.innerText = this.data.title; // houdt de tekstuele inhoud in.
    this.titleElement.classList = "video__title"; // hier kan je de video__title stylen in de CS.
    this.yubtub.renderer.render(".video__details", this.titleElement); // hier render je de details van de video.

    this.viewsElement = document.createElement("p"); // hier maak je een p aan in de HTML.
    this.viewsElement.innerText = this.data.views; // hier wordt de innertext data.views aangegeven.
    this.viewsElement.classList = "video__views"; // hier kan je de video__views stylen.

    this.yubtub.renderer.render(".video__details", this.viewsElement); // hier worden de video__details gerenderd in de HTML.

    this.videocontrolsElement = document.createElement("div"); // hier maak je een div aan in de HTML.
    this.videocontrolsElement.classList = "video__controls"; // hier kan je de video__controls stylen in de CSS
    this.yubtub.renderer.render(".video__bar", this.videocontrolsElement); // hier wordt de video__bar gerendert in de HTML.

    this.starbuttonElement = document.createElement("button"); // hier maak je een button aan in de HTML.
    this.starbuttonElement.classList = "video__button video__button--star video__button--controls"; // hier kan je de buttons stylen.
    this.yubtub.renderer.render(".video__controls", this.starbuttonElement); // hier worden de video__controls en de buttons gerenderd.

    this.stariconElement = document.createElement("i"); // hier maak je een i element aan in de HTML.
    this.stariconElement.classList = "fa-solid fa-star"; // hier kan je de star stylen in de CSS.
    this.yubtub.renderer.render( ".video__button--controls",this.stariconElement); // hier worden de video__button--controls en de star icon gerendert in de HTML.

    const arrowButtonElement = document.createElement("button"); // hier wordt weer een button aangemaakt in de HTML.
    arrowButtonElement.classList = "video__button video__button--arrow"; // hier kan je de video__button en video__button--arrow stylen in de CSS.
    this.yubtub.renderer.render(".video__controls", arrowButtonElement); // hier worden de video__controls en arrowButtonElement gerenderd in de HTML.

    const arrowIconElement = document.createElement("i"); // hier wordt een andere i aangemaakt in de HTML.
    arrowIconElement.classList = "fa-solid fa-right-long"; // hier kan je de fa-solid fa-right-long stylen in de CSS.
    this.yubtub.renderer.render(".video__button--arrow", arrowIconElement); // hier wordt de icon gerenderd in de HTML.

    this.comments = new Comments(this, data); // hier worden de nieuwe comments gemaakt.
    this.video = new Video(); // hier wordt een nieuw object gecreëerd en slaat het op in this.video
  }
}



class Video { // classe Video.
  constructor() { } // construcot van de video.
}

class Comments { // classe van de comments
  main; // main is een eigenschap van Comments.
  data; // data is een eigenschap van Comments
  comment; // comments is een eigenschap van Comments

  constructor(main, data) { // constructor die main en data parameters hebben.
    this.main = main; // main is een eigenschap van Comments
    this.data = data; // data is een eigenschap van Comments

    this.commentsSection = document.createElement("ul"); // hier wordt een ul aangemaakt in de HTML.
    this.commentsSection.classList = "comments"; // hier kan je de comments stylen.

    this.comments = this.data.comments; // wijst de waarde data.comments toe aan de eigenschap comments.
    this.comments.forEach((commentText) => { // Dit loopt door elk item in de comments-array en voert de opgegeven code uit voor elk item.
      this.commentElement = document.createElement("li"); // hier wordt een li aangemaakt in de HTML.
      this.commentElement.classList = "comments__comment"; // hiermee kan je de comments stylen.

      this.profileImageElement = document.createElement("img"); // hier word een img in de HTML aangemaakt.
      this.profileImageElement.src = "images/profilepicture.webp"; // dit is de path naar de profielfoto.
      this.profileImageElement.alt = "Profile Picture"; // dit is een alt text voor blinde mensen.
      this.profileImageElement.classList = "comments__uploader"; // hiermee kan je de comments__uploader stylen in de CSS
      this.commentElement.appendChild(this.profileImageElement); // hier wordt de appendChild methode om een HTML element (this.profileImageElement) als kind toe te voegen aan een ander HTML-element (this.commentElement).

      this.commentTextElement = document.createTextNode(commentText); // dit creëert een nieuw tekstelement die word doorgegeven aan de createTextNode.
      this.commentElement.appendChild(this.commentTextElement); // voegt commentTextElement toe als een childElement van de commentElement, hierdoor wordt de tekstinhoud aan het commentaaritem toegevoegd.

      this.commentsSection.appendChild(this.commentElement); // dit voegt het volledige commentElement en profielfoto toe als childElement. 
      // hierdoor wordt het de comment toegevoegd aan de lijst met comments.
    });

    this.main.yubtub.renderer.render(".yubtub", this.commentsSection); // hier roep je de render aan op het renderer-object dat is gekoppeld aan yubtub.

    this.comment = new Comment(this.main); // Deze regel code creëert een nieuw object Comment en wijst het toe aan de eigenschap comment van main.
  }
}

class Comment { // classe Comment.
  constructor() { // dit is de constructor van Comment
    this.commentsList = document.querySelector(".comments"); // wordt gebruikt om een enkel element in een document te selecteren.
    this.inputField = document.createElement("input"); // maakt een input element aan inn de HTML.
    this.inputField.type = "text"; // hier zeg je dat je text in kan voeren in de inputField.
    this.inputField.placeholder = "Add a comment"; // text dat je verteld dat je hier een comment achter kan laten.
    this.inputField.classList.add("comments__input"); // hiermee kan je de comments__input stylen in de CSS.

    this.submitButton = document.createElement("button"); // hier wordt een button aangemaakt in de HTML.
    this.submitButton.type = "button"; // hier geef je aan dat het een type button is.
    this.submitButton.classList.add("comments__button"); // hiermee kan je de comments__button stylen in de CSS.

    const icon = document.createElement("i"); // de icon van het vliegtuigje is in een i gezet.
    icon.classList.add("fa-solid", "fa-paper-plane"); 

    this.submitButton.appendChild(icon); // hier wordt het element icon toegevoegd als een child aan submitButton.

    this.commentItem = document.createElement("li"); // hier wordt een li toegevoegd aan de HTML.
    this.commentItem.classList.add("comments__comment","comments__comment--add"); // hier kan je de comments__comment en de comments__comment--add stylen in de CSS.

    this.commentItem.appendChild(this.inputField); // voegt inputField toe aan de commentItem.
    this.commentItem.appendChild(this.submitButton); // voegt submitButton toe aan commentItem hiermee kan je de comment submitten.

    this.submitButton.addEventListener("click", this.addComment.bind(this)); // zorgt ervoor dat hij de addComment uitvoert als er word geklikt.

    this.commentsList.appendChild(this.commentItem); // hierdoor word de lijst met comments weergeven.
  }

  addComment() { 
    const commentText = this.inputField.value; // deze regel haalt de waarde van een invoerveld op en slaat deze op in commentText.

    if (commentText.trim() !== "") { 
      const newComment = document.createElement("li"); // hier wordt een nieuwe li aangemaakt en dat is de comment die je hebt geplaatst.
      newComment.classList.add("comments__comment"); // hier kan je de nieuwe comment stylen in de CSS

      const profileImg = document.createElement("img"); // hier maak je een img aan in de HTML.
      profileImg.src = "images/profilepicture.webp"; // dit is de src en hiermee geef je het pad naar de profielfoto.
      profileImg.alt = "Profile Picture"; // alt text voor blinde mensen
      profileImg.classList.add("comments__uploader"); // hiermee kan je de comments__uploader stylen in CSS.

      newComment.appendChild(profileImg); // de profielfoto wordt toegevoegd als een kind van het newComment.
      newComment.appendChild(document.createTextNode(commentText)); // maakt een nieuw text node aan die is opgeslagen in commentText.

      this.commentsList.insertBefore(newComment, this.commentItem); // in de classList kan je het stylen in de CSS.

      this.inputField.value = "";
    }
  }
}

class Aside { // classe Aside.
  yubtub; // yubtub is een eigenschap van Aside.
  data; // data is een eigenschap van Aside.
  nextVideo; // nextVideo is een eigenschap van Aside.
  htmlElement; // htmlElement is een eigenschap van Aside.

  constructor(yubtub, data) {
    this.yubtub = yubtub;
    this.data = data;
    this.htmlElement = document.createElement("aside");
    this.htmlElement.classList = "aside";
    this.yubtub.renderer.render("main", this.htmlElement);

    this.nextVideo = new NextVideo(this, data);
  }
}

class NextVideo { // classe NextVideo.
  aside; // aside is een eigenschap van NextVideo.
  htmlElement; // htmlElement is een eigenschap van NextVideo.

  constructor(aside, data) { // dit is de constrcutor functie van de Nextvideo en accepteert alleen aside en data.
    this.aside = aside; // wijst de waarde van de aside parameter aan de aside eigenschap van Nextvideo toe.
    this.data = data; // wijst de waarde van de data parameter aan de parameter eigenschap van Nextvideo toe.

    for (let video of this.data.similar) { // dit voert een loop uit over elke similar array die een lijst met video bestand namen bevat.
      this.similarVideo = document.createElement("video"); // hier wordt een nieuwe video toegevoegd in de HTML en word toegewezen aan de similarVideo van NextVideo.
      this.similarVideo.src = "videos/" + video; // dit stelt de bron src van similarVideo in op een pad naar een videobestand
      this.similarVideo.classList.add("aside__video"); // hiermee kan je aside__video stylen in de CSS.
      this.aside.yubtub.renderer.render("aside", this.similarVideo); // dit roept de render aan op renderer dat is gekoppeld aan yubtub binnen this.aside.
      // hiermee wordt similarVideo weergegeven in de aside.

      this.similarVideo.addEventListener("click", () => { // dit voegt een eventlistener toe aan similarVideo voor het click event.
        // Wanneer er op het element wordt geklikt, zal de opgegeven callback-functie worden uitgevoerd.
        const videoNumber = video.split("-")[1].split(".")[0]; // waarde van video wordt bewerkt, het word gesplitst op het "-" 
        // het tweede helft van de array word gesplitst op "." de eerste helft van VideoNumber wordt geselecteerd. 
        // dit resulteert in het scheiden van het nummer van de videobestandsnaam.
        this.aside.yubtub.app.switcher.updateDefault(videoNumber - 1); // updateDefault word aangeroepen op de switcher dat is gekoppeld aan de app,
        // de app is gekoppeld aan yubtub in this.aside.
        // videoNumber -1 wordt doorgegeven als een argument aan deze methode.
      });
    }
  }
}

const app = new App();
console.log(app);
