<h1 class="text-center">Exercices - Git</h1>

Pour ces exercices, en plus de taper dans le terminal vos commandes, veuillez à me rendre cet exercice résolu sous forme numérique éditable: bloc note, document word, etc. Mais pas de pdf...

Donc à chaque étape, donnez les commandes utilisées et le résultat.

Ne faites pas toutes les commandes sans les noter ainsi que leur résultat sinon vous perdrez des informations si vous le faites après.

## Exercice n°1 - Creation / indexation / validation
### 1.1 - Création d'un dépôt
1. Créez un répertoire nommé premierDepot
2. Faites-en un dépôt.
3. Quelle commande utiliser pour vérifier que le répertoire est bien devenu un dépôt ?

### 1.2 - Modification (Ajouter de fichiers)

Pour éviter des alertes de sécurité de Chrome, j'ai nommé les fichiers avec l'extension .txt. Nous les renommerons plus tard avec la bonne extension.

1. Dans le répertoire que vous venez de créer, copiez les 3 fichiers suivants:
- <a href="http://zamboyle.github.io/Cours/2022/Git/Files/index.txt" download>index.txt</a>
- [genius.txt](http://zamboyle.github.io/Cours/2022/Git/Files/genius.txt)
- [display.txt](http://zamboyle.github.io/Cours/2022/Git/Files/display.txt)
2. Faites un git status. (Que vous dit/signale git ?)

### 1.3 - Indexation

1. Indexez le fichier index.txt avec git.
2. Indexez les autres fichiers avec une seule commande git.
3. Vérifiez avec la bonne commande git si les 2 indexations se sont bien passées. (Comment le voyez-vous ?)

### 1.4 - Validation/Commit

Validez les fichiers présents dans la zone d'index avec le message suivant:"Commit initial" (C'est souvent le premier message que l'on donne pour le tout premier commit)

### 1.5 - Modifications (Renommer des fichiers)

Ici les modifications vont porter sur le fait que l'on va renommer nos fichiers.

Pour rappel, voilà comment renommer un fichier en ligne de commandes:

A. Windows: ren fichier1 fichier2 (va renommer le fichier1 avec le nom fichier2)
B. Mac Os/Linux: mv fichier1 fichier2 (va renommer le fichier1 avec le nom fichier2)

Renommez les fichiers de la manière suivante:

1. index.txt devient index.html
2. genius.txt devient index.js
3. display.txt devient display.js
4. Évidemment vérifiez avec dir (windows) ou ls (mac/linux) s'ils sont bien renommés.

### 1.6 - Indexation

1. Faites un git status
2. Indexez les fichiers modifiés.
3. Refaites un git status (vous voyez ce qui a changé depuis le point 1 ? Quoi ?)

### 1.7 - Validation/Commit

1. Faites un git status
2. Validez/Commitez vos fichiers en ajoutant comme message "Renommage d'index, genius et display"
3. Faits un git status (vous voyez ce qui a changé depuis le point 1 ? Quoi ?)

## 1.8 - Affichage de l'historique des commits

Affichez l'historique des commits à l'aide de la commande: ??? 

### 1.9 - Modification (de code)

Explication des différents fichiers:

- genius.html: il sert à afficher une page qui affiche le résultat de calculs.
- genius.js: c'est le fichier qui contient nos fonctions javascript de mathématique: add et substract.
- display.js: il contient une fonction display qui permet d'afficher le résultat d'un calcul à l'écran. Vous ne devez pas y toucher !


L'exercice:
Vous devrez ajouter une fonction qui multiplie deux nombres dans genius.js et l'utiliser dans genius.html. Le code devra être fonctionnel. C'est à dire qu'à l'affichage dans genius.html, votre fonction calcule bien la multiplication de deux nombres et affiche à l'écran le résultat.

1. Editez le fichier genius.js 
2. Ajoutez la fonction multiply qui retourne (return) la multiplication des deux nombres donnés en paramètre dans la signature de la fonction multiply.
3. Editez le fichier genius.html
4. Appelez la fonction display pour qu'elle affiche la multiplication de a par b (a * b).
5. Pour l'utilisation de display dans genius.html, inspirez-vous des deux lignes précédentes qui font la soustraction et l'addition de a et b.
6. Testez votre programme en lançant genius.html et voyez le résultat.
7. Si votre programme fonctionne allez au point suivant sinon cherchez votre erreur.
6. Faites un git status (vous voyez ce qui a changé depuis le point 1 ? Quoi ?)

### 1.10 - Indexation

1. Faites un git status
2. Indexez les fichiers modifiés.
3. Refaites un git status (vous voyez ce qui a changé depuis le point 1 ? Quoi ?)

### 1.11 - Validation

1. Faites un git status
2. Validez/Commitez vos fichiez en ajoutant comme message "Ajout de la fonction multiply et adaptation du fichier genius.html"
3. Faites un git status (vous voyez ce qui a changé depuis le point 1 ? Quoi ?)

***
_[Eqla](http://www.eqla.be) 2022 - Formation Git_