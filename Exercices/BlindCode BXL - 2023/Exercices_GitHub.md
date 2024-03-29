[:arrow_left: Revenir au sommaire.](./README.md#sommaire)

<h1 id="Exercices" style="display: flex; align-items: center; justify-content: center;">
    <img src="/media/eqla.png" style="height:50px" alt="Logo d'Eqla">
    &nbsp;Exercices - GitHub
</h1>

## Partie 1 - Création du dépôt EqlaExercices sur GitHub

Nous allons ici créer un répertoire qui pourra être utilisé dans d'autres cours.

Ce sera le dépôt EqlaExercices. Je vais vous proposer de le créer dans le répertoires MesDocuments. Ce n'est pas une obligation.

Choisissez un autre répertoire si vous le désirez.

1. Ouvrez un invite de commandes/terminal.
2. Allez dans le répertoire MesDocuments.
3. Créez un nouveau dépôt distant ayant pour nom EqlaExercices: `gh repo create EqlaExercices --public --clone`
4. Allez dans le répertoire créé: `cd EqlaExercices`
5. Créez dans ce répertoire les répertoires suivants: `php` `html` `bootstrap` `css` `db` `laravel` `mysql`
6. Copiez les fichiers des Exercices HTML dans le répertoire html de votre dépôt.
7. Faites un `git status` (observez ce que donne la sortie de cette commande).
8. Ajoutez les nouveaux répertoires dans la zone d'index.
9. Commitez vos changements avec le message suivant `"Initial Commit"`
10. Faites un git status (observez ce que donne la sortie de cette commande).
11. Donnez un tag à ce commit.
12. Faites un git status (observez ce que donne la sortie de cette commande).
13. Envoyez vos modifications en ligne: `git push -u origin master` (les options origin master ne devront êtes faites qu'au premier envoi vers GitHub)
14. S'il vous est demandé de vous identifier, faites-le: Utilisez votre nom d'utilisateur et votre token. Ensuite, enregistrez globalement votre nom d'utilisateur et votre token avec la commande suivante: `git config --global credential.helper store`

## Partie 2 - Création du dépôt myhtml sur GitHub

1. Ouvrez un invite de commandes/terminal.
2. Allez dans le répertoire mesdepots
3. Créez un nouveau dépôt distant ayant pour nom myhtml: `gh repo create myhtml --public --clone`
4. Allez dans le répertoire créé: `cd myhtml`

## Partie 3

1. Créez une page web complète qui s'appelle `ex1.html` et qui affichera un tableau des jours des cours et les cours.
   Exemple:

<table>
    <thead>
        <tr>
            <th scope="col" id="jour">Jour</th>
            <th scope="col" id="moment">Moment</th>
            <th scope="col" id="cours">Cours</th>
        </tr>
    </thead>
    <tbody>
        <tr>
            <td rowspan="2" headers="jour">Mercredi</td>        
            <td headers="moment">AM</td>
            <td rowspan="2" headers="cours">GIT</td>
        </tr>
        <tr>
            <td headers="moment">PM</td>
        </tr>
        <tr>
            <td rowspan="2" headers="jour">Jeudi</td>        
            <td headers="moment">AM</td>
            <td headers="cours">HTML</td>
        </tr>
        <tr>
            <td headers="moment">PM</td>
            <td headers="cours">CSS</td>            
        </tr>
        <tr>
            <td rowspan="2" headers="jour">Vendredi</td>                
            <td headers="moment">AM</td>
            <td headers="cours">HTML</td>
        </tr>
        <tr>
            <td headers="moment">PM</td>
            <td headers="cours">CSS</td>
        </tr>
    </tbody>
</table>

Voici le code HTML de ce tableau:

```html
<table>
    <thead>
        <tr>
            <th scope="col" id="jour">Jour</th>
            <th scope="col" id="moment">Moment</th>
            <th scope="col" id="cours">Cours</th>
        </tr>
    </thead>
    <tbody>
        <tr>
            <td rowspan="2" headers="jour">Mercredi</td>        
            <td headers="moment">AM</td>
            <td rowspan="2" headers="cours">GIT</td>
        </tr>
        <tr>
            <td headers="moment">PM</td>
        </tr>
        <tr>
            <td rowspan="2" headers="jour">Jeudi</td>        
            <td headers="moment">AM</td>
            <td headers="cours">HTML</td>
        </tr>
        <tr>
            <td headers="moment">PM</td>
            <td headers="cours">CSS</td>            
        </tr>
        <tr>
            <td rowspan="2" headers="jour">Vendredi</td>                
            <td headers="moment">AM</td>
            <td headers="cours">HTML</td>
        </tr>
        <tr>
            <td headers="moment">PM</td>
            <td headers="cours">CSS</td>
        </tr>
    </tbody>
</table>
```

2. Faites un `git status` (observez ce que donne la sortie de cette commande).
3. Faites un `git diff ex1.html` (Observez bien les ajouts et modifications de votre page).
4. Ajoutez ce fichier à la zone d'index: `git add ex1.html`
5. Commitez vos changements avec le message suivant "Initial Commit": `git commit -m "Initial Commit"`
6. Faites `un git status` (observez ce que donne la sortie de cette commande).
7. Donnez un tag à ce commit. (v1)
8. Faites `un git status` (observez ce que donne la sortie de cette commande).
9. Envoyez vos modifications en ligne.<!--: `git push -u origin master`-->

## Partie 4

1. Ajoutez un titre h1 "`Exercices GitHub`" et un titre au tableau (caption) "`Horaire des cours`".
2. Faites un `git status` (observez ce que donne la sortie de cette commande).
3. Faites un `git diff ex1.html` (Observez bien les ajouts et modifications de votre page).
4. Ajoutez ce fichier à la zone d'index.
5. Commitez vos changements avec le message suivant: "Ajout de la fonction DisplayName"
6. Donnez un tag à ce commit. (v2)
7. Faites un `git status` (observez ce que donne la sortie de cette commande).
8. Envoyez vos modifications en ligne.<!--: `git push`-->

## Partie 5

1. Ajoutez un dossier nommé `css`.
2. Ajoutez un fichier nommé `style.css` dans ce dossier.
3. Mettez les entêtes du tableau en italique.
4. Mettez en gras les lignes paires du tableau.
5. Faites un `git status` (observez ce que donne la sortie de cette commande).
6. Faites un `git diff ex1.html` (Observez bien les ajouts et modifications de votre programme).
7. Ajoutez ce fichier à la zone d'index.
8. Commitez vos changements avec le message suivant: "Ajout du fichier style.css".
9. Donnez un tag à ce commit. (v3)
8. Faites un `git status` (observez ce que donne la sortie de cette commande).
9. Envoyez vos modifications en ligne.<!--: `git push -u`-->

## Partie 6

1. Avant le tableau, ajoutez un titre de niveau 2 "Rappels sur les tableaux".
2. Après le tableau, ajoutez un titre de niveau 2 "Définition des cours".
3. Ajoutez les définitions suivantes (Il y a des erreurs dans les titres des définitions. C'est normal.):

```html
<span class="subject">GITAGE</span>
```
\<p\>
    Le cours de GIT offre une plongée approfondie dans l'un des systèmes de contrôle de version les plus utilisés dans le monde du développement logiciel. Les participants apprendront comment suivre et gérer les modifications dans leurs projets de code, comment collaborer avec d'autres développeurs et comment résoudre les conflits de code. Le programme explore à la fois les concepts de base et avancés du système de gestion de version, y compris les branches, les fusions, et les workflows de collaboration. De la gestion de petits projets aux workflows complexes dans les grandes équipes, GIT s’avère un outil indispensable pour tous les développeurs.
\</p\>

```html
<span class="subject">Acheté ML</span>
```
\<p\>
    Le cours HTML initie les apprenants aux fondations du développement web, en couvrant l'un des langages de balisage les plus fondamentaux pour la création de pages web. Les étudiants exploreront comment structurer le contenu d'une page, incorporer du texte, des images, des formulaires, et d'autres médias, tout en assurant une expérience utilisateur accessible et inclusive. Tout au long du cours, les participants auront l'opportunité de construire leur propre site web, intégrant une navigation fluide et des éléments interactifs, pour appliquer pratiquement les compétences nouvellement acquises dans un projet concret.
\</p\>

```html
<span class="subject">CSSzzzz</span>
```
\<p\>
    Le cours de CSS (Cascading Style Sheets) plonge les apprenants dans le monde fascinant du style et de la mise en page web. Les participants exploreront comment appliquer des couleurs, des polices, des mises en page, et des animations pour améliorer l'expérience utilisateur et l'esthétique des sites web. En mettant l'accent sur des pratiques responsives et adaptatives, le cours guide les étudiants à travers la création de sites web qui sont non seulement visuellement attrayants mais aussi fonctionnels sur une multitude d'appareils et de tailles d'écran. L'apprentissage du CSS permet aux développeurs de transformer leurs sites HTML bruts en expériences utilisateurs immersives et engageantes.
\</p\>

3. Faites un git status (observez ce que donne la sortie de cette commande).
4. Faites un git diff  ex1.html (Observez bien les ajouts et modification de votre programme).
5. Ajoutez ce fichier à la zone d'index.
6. Commitez vos changements avec le message suivant: "Ajout d'un titre h2 et définitions".
7. Donnez un tag à ce commit. (v4)
8. Faites un git status (observez ce que donne la sortie de cette commande).
9. Envoyez vos modifications en ligne.<!--: git push -u-->

## Partie 7 - .gitignore

1. Créez un fichier nommé .gitignore
2. Ajoutez les lignes suivantes:  
   - password.txt  
   - \*.sqlite  
3. Faites un git status (observez ce que donne la sortie de cette commande).
4. Créez un fichier nommé password.txt
5. Faites un git status (password.txt ne devrait pas être affiché).
6. Ajoutez ce fichier à la zone d'index.
7. Commitez vos changements avec le message suivant: "Ajout du fichier .gitignore".
8. Donnez un tag à ce commit. (v5)
9. Faites un `git status` (observez ce que donne la sortie de cette commande).
10. Envoyez vos modifications en ligne.<!-- git push -u -->

## Partie 8 - git clone et git pull

Je vais vous attribuer le dépôt d'une personne que vous allez cloner.

1. Retournez dans le répertoire mesdepots.
2. Si vous êtes dans le répertoire myhtml, faites un cd .. pour revenir à mesdepots
3. Vous allez cloner le dépôt qui vous sera assigné:

    - Christian prendra le dépôt de Filippo : git clone https://github.com/FilyDev/myhtml.git myhtmlFilippo
    - Filippo prendra le dépôt de Amir : git clone https://github.com/Amir-Eqla/myhtml.git myhtmlAmir
    - Amir prendra le dépôt d'Anthony : git clone https://github.com/anthonyvelez1819/myhtml.git myhtmlAnthony
    - Anthony prendra le dépôt de Carmen : git clone https://github.com/carmentod/myhtml.git myhtmlCarmen
    - Carmen prendra le dépôt de Thomas : git clone https://github.com/ThArdui/myhtml.git myhtmlThomas
    - Thomas prendra le dépôt de Nabil : git clone https://github.com/nabilelrh16/myhtml.git myhtmlNabil
    - Nabil prendra le dépôt de Johnny : git clone https://github.com/ZamBoyle/myhtml.git myhtmlZamBoyle
    - Johnny prendra le dépôt de Baptiste : git clone https://github.com/BaptisteBrasseur/myhtml.git myhtmlBaptiste
    - Baptiste prendra le dépôt de Christian : git clone https://github.com/chrishonore/myhtml.git myhtmlChristian
   
LES RESPONSABLES DE DÉPÔTS:

4. Chaque responsable de son dépôt adressera ses salutations via le fichier Hello.txt et saluera la personne qui a cloné son dépôt après qu'elle est cloné votre dépôt.
5. Vous ajouterez votre fichier Hello.txt dans la zone d'index.
6. Vous commiterez vos modifications.
7. vous enverrez celles-ci sur github.
8. Vous prévenez la personne qu'elle peut récupérer les modifications que vous venez de faire.

LES UTILISATEURS DE DÉPÔTS CLONES:

9. Vous vérifierez les modifications quand le gestionnaire du dépôt vous indiquera dès que vous pouvez le faire avec un git pull.

## Partie 9

Les responsables de dépôts vont ajouter la personne avec qui elles font l'exercice comme collaborateur de leur dépôt:
- Filippo ajoutera Christian comme collaborateur de son dépôt.
- Amir ajoutera Filippo comme collaborateur de son dépôt.
- Anthony ajoutera Amir comme collaborateur de son dépôt.
- Carmen ajoutera Anthony comme collaborateur de son dépôt.
- Thomas ajoutera Carmen comme collaborateur de son dépôt.
- Nabil ajoutera Thomas comme collaborateur de son dépôt.
- Karim ajoutera Nabil comme collaborateur de son dépôt.
- Baptiste ajoutera Karim comme collaborateur de son dépôt.
- Christian ajoutera Baptiste comme collaborateur de son dépôt.

Pour pouvoir ajouter des collaborateurs à votre projet:
1. Veuillez passer par la page des settings de votre dépôt sur GitHub https://github.com/ZamBoyle/myhtml/settings
2. Cliquez sur `Collaborators` dans le menu de gauche.
3. Cliquer sur `Add People`. Remplacer ZamBoyle par le nom de votre collaborateur.

## Partie 10

1. Récupérez le fichier `index.html` et mettez-le dans votre dépôt `myhtml`.
2. Vous ajouterez votre fichier `index.html` dans la zone d'index.
3. Vous commiterez vos modifications.
4. Vous enverrez celles-ci sur github.
5. Créez un répertoire `css` dans votre dépôt `myhtml`.
6. Créez un fichier vide dans le répertoire `css` nommé `style.css`.
7. Ajoutez dans la balise `head` de votre fichier `index.html` la référence à votre fichier css:
```html
<link rel="stylesheet" href="css/style.css">
```
8. Vous ajouterez votre fichier `style.css` et `index.html`  dans la zone d'index.
9. Vous commiterez vos modifications.
10. Vous enverrez celles-ci sur github.
11. Ouvrez un autre terminal et allez dans le répertoire `myhtml` de votre gestionnaire de dépôt: par exemple `cd myhtmlFilippo`.
12. Dans le dépôt du gestionnaire, vous allez modifier le fichier style.css en ajoutant la classe `subject` qui est utilisée dans le fichier index.html pour les titres des cours via la balise span.
13. Ajoutez la référence à votre fichier css dans le fichier index.html:
14. La classe `subject` devra avoir la propriété `font-weight: bold;` et `font-style: italic;` et une couleur de votre choix:
    - Vous commiterez vos modifications.
    - vous enverrez celles-ci sur github.
    - Vous prévenez la personne qu'elle peut récupérer les modifications que vous venez de faire.

## Partie 11
- Demandez à une personne qui n'est pas collaborateur de votre dépôt.
- De faire une issue sur votre dépôt.
- Cette issue indiquera le nom des cours est erroné.
- Vous ou votre collaborateur, corrigerez:
    - "GITAGE" par "GIT".
    - "Acheté ML" par "HTML".
    - "CSSzzzz" par "CSS".
- Vous ajouterez votre fichier ex1.html dans la zone d'index.
- Vous commiterez vos modifications en utilisant le numéro de l'issue dans le message de commit: voir dans le cours sur les issues comment faire.
- vous enverrez celles-ci sur github.
- Vous prévenez la personne qu'elle peut récupérer les modifications que vous venez de faire.

## Partie 12
Ici, il faut vraiment attendre pour faire un git pull. Suivez mon exemple pas à pas.
Vous allez maintenant, vous et votre collaborateur, modifier le fichier style.css.

Voici les modifications à faire:
- Le gestionnaire du dépôt ajoutera une classe .gestionnaire qui centre le texte et qui mettra en rouge la couleur de texte.
- Le gestionnaire ajoutera le fichier dans la zone d'index.
- Le gestionnaire commitera ses modifications.
- Le gestionnaire enverra ses modifications sur github.

- Le collaborateur ne fera pas un git pull !!!!
- Le collaborateur du dépôt ajoutera une classe .collaborateur qui centre le texte et qui mettra en bleu la couleur de texte.
- Le collaborateur ajoutera le fichier dans la zone d'index.
- Le collaborateur commitera ses modifications.
- Le collaborateur enverra ses modifications sur github.




## Partie 12

1. Affichez l'historique des commits
2. Quelle commande avez-vous utilisée ?
3. Revenez au deuxième commit.
4. Quelle commande avez-vous utilisée ?
5. Ouvrez votre programme  ex1.html et constatez qu'il est bien revenu à une version antérieure.
6. Revenez au tag master.
7. Quelle commande avez-vous utilisée ?

[:arrow_left: Revenir au sommaire.](./README.md#sommaire)

---

&copy; 2023 [Johnny Piette](https://github.com/ZamBoyle).  
[![Creative Commons Attribution 4.0 International License](https://i.creativecommons.org/l/by/4.0/88x31.png)](https://creativecommons.org/licenses/by/4.0/)  
Ce travail est licencié sous [Creative Commons Attribution 4.0 International License](https://creativecommons.org/licenses/by/4.0/).  
_Vous pouvez copier, modifier, distribuer et représenter ce travail, même à des fins commerciales, à condition de donner le crédit approprié, fournir un lien vers la licence, et indiquer si des modifications ont été effectuées._
