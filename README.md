# ex3-VanLoock-Jelle: Calculator (REST)

Eerst worden de dependencies geinstalleerd: express en body-parser. <br>
Hierdoor kunnen we met express een simple server opzetten op poort 4567 (localhost:4567 => app.listen(4567)). <br>
<br>
Via de GET methode kunnen we onze calculator.html laten zien op adres localhost:4567/ (request.sendFile). <br>
<br>
Als we op de = button (submit) drukken, wordt app.post uitgevoerd. Hierbij wordt de berkening uit het display (urlencoded) gehaald en berekend
(eval-function).<br>
We zenden uiteindelijk het resultaat terug in een object. <br>
<br>
We kunnen ook al onze uitkomsten raadplegen via localhost:4567/uitkomst . 

Voor deze oefening heb ik hulp gevraagd aan J. Cristens (Eerst veel opzoekwerk gedaan, ik begrijp de code nu redelijk goed)

