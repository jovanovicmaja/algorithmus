# Dokumentationsdatei

## Absicht

#### Text suchen

Ich würde ein HTML-Seite erstellen. Bei der es ein Textfeld gibt, wo man den Suchstring eingeben kann.
Ein Text sollte unterhalb dargestellt werden.
Wenn es Übereinstimmungen zwischen dem Suchstring und dem Text gibt, sollten diese irgenwie markiert werden.
Dies würde ich alles mit ReactJS machen.

## Levenshtein-Distanz-Algorithmus - Editierdistanz

Berechnet die Operationen, die benötigt werden, zwei Zeichenketten gleich zu setzten.
Dies wird mithilfe einer Tabelle berechnet. Es vergleicht immer nur einen Teil des Strings, die Zahl, die am Ende in
der Ecke steht, ist die Anzahl benötigter Operationen.
Man kann Streichen, Ersetzten oder Hinzufügen.

#### Detailierter

Man schreibt z.B. das Wort von der unteren Ecke links nach oben und nach rechts. Somit entsteht eine Tabelle. Danach vergleicht man immer den ersten Buchstaben.

##### Kleines Beispiel

|     | l   | e   | v   | e   | l     |
| --- | --- | --- | --- | --- | ----- |
| l   | 0   | 1   | 2   | 3   | 4     |
| e   | 1   | 0   | 1   | 2   | 3     |
| v   | 2   | 1   | 0   | 1   | 2     |
| e   | 3   | 2   | 1   | 0   | 1     |
| n   | 4   | 3   | 2   | 1   | 1     |
| s   | 5   | 4   | 3   | 2   | 2     |
| h   | 6   | 5   | 4   | 3   | 3     |
| t   | 7   | 6   | 5   | 4   | 4     |
| e   | 8   | 7   | 6   | 5   | 5     |
| i   | 9   | 8   | 7   | 6   | 6     |
| n   | 10  | 9   | 8   | 7   | **7** |

Bie diesem sieht man hier unten recht die _EndZahl_ somit die _Distanz_ und dies wäre 7. Man muss 7 Mal etwas löschen, hinzufügen oder löschen. Da die ersten vier Buchstaben gleich sind, verläuft es am Anfang der Tabelle recht proportional. Doch zb in der fünften Reihe sieht man, dass es sich ändert. Da man nun zb. das _n_ zu _l_ umändern kann.

Ein weitere Beispiel wäre:

|     | T   | i   | e   | r     |
| --- | --- | --- | --- | ----- |
| T   | 0   | 1   | 2   | 3     |
| o   | 1   | 1   | 2   | 3     |
| r   | 2   | 2   | 2   | **2** |

Hier wäre die Distanz 2.

### Mögliche Probleme

Ich denke, dass dies recht lange dauern wird, da es für jeden String die benötigten Operationen berechnet, jedoch könnte
ich das Berechnen abbrechen, sobald es mehr wie 0 Operationen benötigt, da ich ja den Identischen String möchte.
Ich habe noch den Aho-Corasick und den Knuth-Morris-Pratt Algorithmus angeschaut, diese würden ebenfalls gut passen,
denke ich. Jedoch sind sie um einiges schwerer zu vestehen.
Ich versuche es mal mit diesem Levenshtein.Distanz-Algorithmus und schaue, wie weit ich komme.

# Reflexion

Das Projekt an sich hat mir recht gefallen. Ich bin auch ziemlich zufrieden mit dem Resultat. Jedoch hätte ich es gerne noch besser gemacht. Mein eigentliches Ziel war, dass man auch einen Teil des Strings bzw. Wortes suchen kann. Jedoch konnte ich nicht herausfinden, wie ich mit levenshtein herausfinden kann, ob es nur Zeichen löschen muss. Ich hätte es sonst vergleichen können, doch dann hätte ich diesen Algorithmus nicht verwendet.

Am Anfang fand ich es sehr schwer, mich für einen Algorithmus zu entscheiden und eine Idee zu finden. Das Entscheiden fällt mir generell ziemlich schwer. Doch ich kam zu Ihnen und sie haben mir einen super Vorschlag gemacht.

Als ich mit dem Erstellen des Projektes angefangen habe, hatte ich recht Schwierigkeiten. Ich war die erste Woche, zwei Lektionen dran. Es hatte Probleme mit dem SSH Key etc. Am Ende habe ich es dennoch geschafft, auch ohne SSH-Key. Doch ganz klar wie es nun funktioniert, ist es mir nicht.

Ebenfalls dachte ich, dass wir den Algorithmus selbst programmieren müssen. Da habe ich angefangen diesen selbst zu schreiben und hatte immer wieder Fehlermeldungen bzw. es klappte nie wirklich. Die Tabelle konnte ich nicht wirklich so erstellen. Ich wich irgendwie immer wieder vom Algorithmus ab.
Erst in der zweiten Woche, als sie gesagt haben, wir müssten nur den Algorithmus anwenden und nicht selbst schreiben, war es um einiges einfacher. Da sah ich wieder einmal, dass ich nicht genau gelesen habe.

# Quellen

- Eigenes Projekt, an dem ich im Betrieb arbeite (meine mini IPA vom ZLI, die ich nun auf ReactJs umschreibe)
- https://www.npmjs.com/package/fastest-levenshtein
- https://markjs.io/
- https://de.wikipedia.org/wiki/Levenshtein-Distanz
- https://www.youtube.com/watch?v=qp8YwtvS3Uo
