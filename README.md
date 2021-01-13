# Algorithmus

## Such-Möglichkeit

Man kann nach einem String im Text suchen. Dieser wird gelb markiert.

## Vorgang

Ich habe als erstes den Text gelesen und in einen String verwandelt.
Danach habe ich diesen String nach ' ' (Whitespace) getrennt und in ein Array namens 'words' hinzugefügt. Bei den einzelnen Wörtern habe ich noch die Kommas, Punkte etc. entfernt bzw. mit ersetzt.

Für dieses Projekt habe ich 'fastest-levenshtein' verwendet. Mit diesem kann man die Distanz zwischen zwei Strings berechnen und auch den nächsten String bzw. den ähnlichsten mit der kleinsten Distanz herausfinden.

Ich habe überprüft, ob die Distanz null sei. Wenn dies der Fall war, wird das Wort markiert. Für das Markieren habe ich 'Mark.js' verwendet.
Wenn man nach einem anderen Wort suchte, wurden die vorherigen zuerst wieder entmarkiert.

Nebenbei, da der gesammte String übereinstimmen muss und nicht nur ein Teil, habe ich eine Notification mit eingebaut. Diese zeigt den ähnlichstne String an. Damit habe ich auch den Algorihtmus recht verwendet.
