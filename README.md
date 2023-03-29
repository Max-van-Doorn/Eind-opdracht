Welkom bij de web applicatie van mijn eind project Frontend van NOVI.
Dit project was gemaakt “Create React App”
Hieronder kan je informatie vinden over hoe je de applicatie gebruikt en wat er voor nodig is om hem te runnen. De Scripts bovenaan deze ReadMe file zijn standaard teksten die worden geleverd door webstorm. Onder deze scripts staat de uitleg.

## Scripts
### `npm start`

Runt de app in developer modus.\
Open [http://localhost:3000](http://localhost:3000) om het in je browser te bekijken.

De pagina zal zichzelf refreshen als je veranderingen maakt.\
Je kan ook in de console al je errors vinden.

### `npm test`

Lanceert de test runner in de interactive bekijk modus.\ 
Bekijk [running tests](https://facebook.github.io/create-react-app/docs/running-tests) voor meer informatie.

### `npm run build`

Bouwt de app voor productie in de `build` folder.\
Het bundelt React correct in productie modus en optimaliseert de build voor de beste performance. 

De build is verkleint en de filenamen zijn geincludeert met hashes.\ 
Je app is nu klaar om gerunt te worden!

Kijk naar [deployment](https://facebook.github.io/create-react-app/docs/deployment) voor meer informatie.

## Benodigdheden
-	De Webstorm app
-	Node.js moet geïnstalleerd worden
-	Een zipfile of clone van dit project
-	Een API key. Deze staat in het PDF bestand van de volledige installatie handleiding
-	Uiteraard een verbinding met het internet 😉

## Installatie stappen (voor een uitgebreide variant kan je terecht bij de installatie handleiding die is bijgevoegd)
-	Installeer Webstorm
-	Installeer node.js
-	Gebruik de zipfile die je hebt gedownload om deze uiteindelijk toe te voegen in je webstorm project. Als je niet de zipfile gebruikt, maar wel cloned kan dit ook worden gebruikt in je project.
-	Installeer npm
-	Gebruik de API key in het project zodat alle data kan worden opgehaald.

Installatie 1: Webstorm
-	Om webstorm te installeren moet je eerst naar de website: www.jetbrains.com.
-	Zodra je via de jetbrains link op de website komt zie je een dropdown venster met “Developer Tools”. Als je hier op klikt kan je navigeren naar Webstorm.
-	Kies de juiste versie voor jou operating system en klik op download
-	Volg de instructies die worden gegeven om de installatie te voltooien
-	Je zou nu webstorm goed hebben geinstalleerd en dan ben je klaar om te beginnen!

Installatie 2: Node.js
-	Ga naar https://nodejs.org/en/download/. Vanuit daar moet je het juiste bestand downloaden voor jouw systeem. Het is aanbevolen om de LTS versie te gebruiken.
-	Volg de instructies vanuit het download & installeer venster
-	Ga naar webstorm en open de terminal in een open project. Dit is onderaan de pagina.
-	Typ het commando “node -v”. Daarmee kan je controleren of je juiste versie hebt installeert en node ook werkt. Als je het goed hebt gedaan zal je een versie nummer in je terminal zien.

Installatie 3: Het project openen via zipfile of via clonen

Zipfile
-	Open het project via de zipfile
-   Klik op "code"
-	Klik op download de zipfile
-	Klik op uitpakken en sla deze op in een folder naar keuze
-	Open je webstorm en klik op “File > open > jouw bestand die je net hebt uitgepakt.

Clonen
-	Clone het bestand via de Github repository
-	Ga naar https://github.com/Max-van-Doorn/Eind-opdracht.
-	Klik op de button “code”
-	Je ziet dan 2 tabbladen. Klik op het tabblad “local”
-	Je kan dan 3 varianten kopiëren. Https, SSH of GithubCLI. Het ligt er nou net aan wat voor Github account je hebt om tussen deze 3 te kiezen.
-	Kopieer de voor jouw toepassende link
-	Open webstorm en ga naar File > new > Project from version control
-	Kopieer de link in het vak en klik op “clone”
-	Open je terminal en run de volgende code om de originele oorsprong te verwijderen zodat je geen aanpassingen in dat project van iemand anders maakt. De code regel is “Git remote remove origin”

Installatie 4: npm
-	Omdat je nu in een project bezig bent in Webstorm kan je de npm installatie beginnen.
-	Open je terminal en typ “npm install”. Er zullen een aantal regels verschrijnen in de terminal waar je zelf niks mee hoeft te doen.
-	Om te controleren of het is gelukt typ je “npm start” of “npm run start”. De applicatie zal zichzelf dan automatisch in een browser openen. Zo makkelijk is het!
-	Als je de webpagina wilt stoppen kan je in de terminal een combinatie van toetsen typen. Druk de “ctrl” toets en de “c” toets tegelijkertijd in. Alsof je iets wilt kopiëren zo te zeggen. Er komt dan een tekst te staan met een vraag die eindigt met “Y/N”. Je kan dan “Y” typen en op “enter” drukken. De applicatie zal dan stoppen.

De API key
-	Maak een “.env” bestand aan in de root folder (buiten de src map)
-	Voeg in het .env bestand de REACT_APP_API_KEY="API key" toe (Geen spatie ertussen en ook geen " "). Deze API key staat in de volledige **installatie handleiding**.
-	Om te controleren of de website nu werkt met alle data van de API type je “npm run build”
-	Daarna kan je gewoon de command “npm start” doen.

Dat zijn de belangrijkste punten die je moet weten om de applicatie te kunnen runnen zoals het hoort. Succes ermee!