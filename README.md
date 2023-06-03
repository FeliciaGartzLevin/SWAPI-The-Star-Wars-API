# Star Wars API (SWAPI) 🌕✨💫👽👩🏽‍🚀🚀🌌🌑

## Min design
Länk till tänkt design i Figma/
Link to intended design in Figma: https://www.figma.com/file/I5OLfG5HkqEP4JwR9Ol923/SWAPI?type=design&t=T0Q7UJezwatn6Gbj-1 

## Beskrivning av uppgiften: 
BB-8 har gett dig i uppdrag att göra en StarWars-encyklopedi för att han ska slippa vara ett rullande uppslagsverk och kunna fokusera på viktigare saker, som att rulla omkring och inte svara på dumma frågor hela tiden.
Han vill att hans gäng ska lätt kunna hitta information om allt i Star Wars-universumet. Ditt viktiga uppdrag är att skapa denna encyklopedi och därmed hjälpa bringa fred till galaxen!
 
### Presentation
Se screencast från presentationen av uppgiften, där jag även demonstrerar API:et:
https://youtu.be/3Bh_d_Sw9Vs.

Såväl PDF av mina slides och en export av min Postman-collection för API:et finns bifogad längst ner.

### Hygienkrav
Nedan hygienkrav ska vara uppfyllda oavsett betygsnivå.


- Använda React (med useState, useEffect och Fetch/axios) och React Router
- Kommunikationen med API:et ska finnas i ett eget mellanlager (alltså en ”service”, där själva Fetch/axios-kommunikationen sker)
- Komponentbaserad
- Loading & felhantering (skyddar oss mot The Dark Side)
- Skriven i TypeScript (vi är inga Stormtroopers som alltid missar)
- Självklart vara versionshanterad med hjälp av git (och inte bara en enda monster-commit)
- All källkod vara korrekt indenterad (så klart!)
- Deploy:ad till Netlify/GitHub Pages (TBD, pending att jag får rätt på det)
- Vara skriven i TypeScript


### Kravspecifikation
- Kunna bläddra bland filmer och personer (inkl. enkel paginering med föregående/nästa-knappar).
- Visa all relevant tillgänglig information om resursen.
 
- Alla resursers objekt ska ha länkar till respektive relaterad resurs.
- På en person ska man till exempel kunna klicka på alla de filmer som hen varit med i och komma till den filmens detaljerade sida, och tvärtom.

### Kravspecifikation VG
- Bläddra bland alla resurser:
films, people, planets, species, starships, vehicles
 
- Paginering med hjälp av query-parametrar (ska överleva omladdning av sidan och navigering via webbläsarens bakåt/framåt-knappar)
/people/?page=2 osv.
 
### Sökfunktion på varje resurs
Samma sökformulär ska nyttjas oavsett vilken resurs som komponenten används i. Vad man sökt på ska visas (t.ex. “Search results for Yoda…”) och inte vara kopplat till vad som står i sökrutan.

### Resurser
Man ska kunna klicka in på varje ”objekt”, så på till exempel /people/ ska man kunna klicka in på Luke Skywalker (/people/1/) och se all hans information, medan om man går in på Leia Organa (/people/5/) så ser man all hennes information.

Samtliga resurser ska visa (för resursen) relevant information.

Glöm inte att lägga till paginering i översiktsvyn, så man enkelt kan bläddra mellan alla objekt!

### Endpoints
Alla endpoints stödjer paginering och sökning. Paginering sker genom att skicka ?page=X och sökning genom att skicka ?search=X.

Responsen innehåller all nödvändig information, såsom totalt antal, länk till nästa/föregående sida osv.

Länkar till alla endpoints finns på rot-URL:en https://swapi.thehiveresistance.com/api.

### Instruktioner

Acceptera inbjudan på GitHub Classroom:

Klona ner ditt repo, gå in i mappen, kör `npm create vite@latest . -- --template react-ts` (observera “.” för annars får ni en undermapp i ert repo och huvudvärk när ni ska deploya appen!) och installera nödvändiga paket som axios, bootstrap, react-bootstrap, react-router-dom och sass: `npm i axios bootstrap react-bootstrap react-router-dom sass`
