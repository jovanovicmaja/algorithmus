# Dokumentationsdatei
## Text suchen
Ich würde ein HTML-Seite erstellen. Bei der es ein Textfeld gibt, wo man den Suchstring eingeben kann.
Ein Text sollte unterhalb dargestellt werden. 
Wenn es Übereinstimmungen zwischen dem Suchstring und dem Text gibt, sollten diese irgenwie markiert werden.

## Levenshtein-Distanz-Algorithmus - Editierdistanz
Berechnet die Operationen, die benötigt werden, zwei Zeichenketten gleich zu setzten.
Dies wird mithilfe einer Tabelle berechnet. Es vergleicht immer nur einen Teil, die Zahl, die am Ende in
der Ecke steht, ist die Anzahl benötigter Operationen.
Man kann Streichen, Ersetzten oder Hinzufügen.

### Probleme
Ich denke, dass dies recht lange dauern wird, da es für jeden String die benötigten Operationen berechnet, jedoch könnte
ich das Berechnen abbrechen, sobald es mehr wie 0 Operationen benötigt, da ich ja den Identischen String möchte.
Ich habe noch den Aho-Corasick und dne Knuth-Morris-Pratt Algorithmus angeschaut, diese würden ebenfalls gut passen,
denke ich. Jedoch sind sie um einiges schwerer zu vestehen.
Ich versuche es mal mit diesem Levenshtein.Distanz-Algorithmus und schaue, wie weit ich komme.