> _Fork_ deze leertaak en ga aan de slag. Onderstaande outline ga je gedurende deze taak in jouw eigen GitHub omgeving uitwerken. De instructie vind je in: [docs/INSTRUCTIONS.md](docs/INSTRUCTIONS.md)

# Red Pers project

## Inhoudsopgave

  * [Beschrijving](#beschrijving)
  * [Gebruik](#gebruik)
  * [Kenmerken](#kenmerken)
  * [Installatie](#installatie)
  * [Bronnen](#bronnen)
  * [Licentie](#licentie)

## Beschrijving
<!-- Bij Beschrijving staat kort beschreven wat voor project het is en wat je hebt gemaakt -->
<!-- Voeg een mooie poster visual toe 📸 -->
<!-- Voeg een link toe naar Github Pages 🌐-->
Sinds juni 2023 is de website gelanceerd (misschien iets te vroeg) waarbij de website is opgezet met Wordpress en Elementor. Hierbij zitten een aantal bugs en is Red Pers geinteresseerd om afstand te doen van Elementor (een plugin van Wordpress). Red pers is een toegankelijk en inclusief opleidingsplatform dat is bedoeld om jonge, aspirerende journalisten. Bij dit platform kunnen deze jonge journalisten. Het bedrijf bestaat uit circa 50 mensen, die per half jaar doorstroomt om zo meer informatie op te doen over journalistiek. Dit bedrijf is vooral bedoelt om verschillende mensen die geïnteresseerd zijn in journalistiek een plekje tunnen geven in dit platform. Waarbij zij verschillende opdrachten en workshops zijn om hierover meer informatie op te doen.

![image](https://github.com/SamaraFellaDina/the-web-is-for-everyone-interactive-functionality/assets/144009778/5a2c01cf-aaae-492a-bd3e-3315373ed0d5)

In deze repo ga ik vooral in op `post` data en kijk ik hoe de website werkt op verschillende browsers and devices

## Gebruik
<!-- Bij Gebruik staat de user story, hoe het werkt en wat je er mee kan. -->
* Ik maak gebruik van een [project board](https://github.com/users/SamaraFellaDina/projects/8), waarin een aantal user stories staan.
  * Alle user stories zijn te vinden op [FNDN Agency](https://github.com/orgs/fdnd-agency/projects/28)
 * In deze repo heb ik me vooral gefocused op het weergeven van het delen van artikelen en zien hoevaak het is gedeeld.
   * [Hier kan je de User story vinden](https://github.com/users/SamaraFellaDina/projects/8?pane=issue&itemId=56775098) 
## Kenmerken
<!-- Bij Kenmerken staat welke technieken zijn gebruikt en hoe. Wat is de HTML structuur? Wat zijn de belangrijkste dingen in CSS? Wat is er met JS gedaan en hoe? Misschien heb je iets met NodeJS gedaan, of heb je een framwork of library gebruikt? -->
* Werkt met `Node.js` & `express`
* Maakt gebruik van sever-side code.
 * Zo wordt een `post` request gemaakt
 * Word er data opgehaald van de Wordpress API
* Wordt getest diverse browsers and devices om zo de toegankelijkheid mee te krijgen
* Wordt gewerkt met een Wordpress API van Red Pers
  
  
## Installatie
<!-- Bij Instalatie staat hoe een andere developer aan jouw repo kan werken -->
1. Fork deze repository
2. Open de geforkde repository naar je lokale computer
3. **Check of je node hebt geinstalleerd** zo niet? volg stap 4 t/m ..
4.  open je teminal
5.  typ `npm install`, zo worden alle node.js bestanden geinstalleerd
6.  Je kan gebruik maken van nodemon.js. Zo ja? wanneer node.js volledig is geinstalleerd, typ je `npm install nodemon`
7.  Nu kan je volledig gebruik maken van de server. Je kan de server opstarten door in de terminal het volgende in te typen: `npm start`
8.  **Heb je nodemon geinstalleerd?** dan kan je ook nodemon opstarten. Je volgt dezelfde stappen, alleen vul je het volgende in de terminal: `npm run dev`
9.  Coderen maar!!
   
## Bronnen
* https://github.com/fdnd-agency/red-pers
* https://github.com/orgs/fdnd-agency/projects/28
* [Red Pers JSON](https://redpers.nl/wp-json/wp/v2)
* [Red Pers Website](https://redpers.nl/)

### Navigeer door de repository heen
* [Issues](https://github.com/SamaraFellaDina/server-side-rendering-server-side-website/issues)
* [Commits](https://github.com/SamaraFellaDina/server-side-rendering-server-side-website/commits/main/)
* [Project board💪](https://github.com/users/SamaraFellaDina/projects/8)
* [Wiki](https://github.com/SamaraFellaDina/server-side-rendering-server-side-website/wiki/Home)


## Licentie

This project is licensed under the terms of the [MIT license](./LICENSE).
