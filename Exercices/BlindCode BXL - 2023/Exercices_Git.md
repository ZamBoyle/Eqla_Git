[:arrow_left: Revenir au sommaire.](./README.md#sommaire)
<h1 class="text-center">Exercices - Git</h1>

<h1 id="Exercices" style="display: flex; align-items: center; justify-content: center;">
    <img src="/media/eqla.png" style="height:50px" alt="Logo d'Eqla">
    &nbsp;Exercices Git
</h1>


* [Exercice n°1](#ex1)
* [Exercice n°2](#ex2)

<h2 id="ex1"> Exercice n°1 - Creation / indexation / validation</h2>

<!-- Le nom du fichier zip aura la structure suivante **prenom_ex1.zip**. Par exemples: **johnny_ex1.zip** ou encore **bruno_ex1.zip**. -->

### 1.1 - Création d'un dépôt
1. Créez un répertoire nommé PremierDepot
2. Faites-en un dépôt à l'aide d'une commande git bien entendu.
3. Quelle commande utiliser pour vérifier que le répertoire est bien devenu un dépôt ?

### 1.2 - Modification (Ajouter de fichiers)

Pour éviter des alertes de sécurité de Chrome, j'ai nommé les fichiers avec l'extension .txt. Nous les renommerons plus tard avec la bonne extension.

1. Dans le répertoire que vous venez de créer, copiez les 3 fichiers suivants:
- [index.txt](https://raw.githubusercontent.com/ZamBoyle/Eqla_Git/master/Exercices/BlindCode%20BXL%20-%202023/files/index.txt)
- [produits.txt](https://raw.githubusercontent.com/ZamBoyle/Eqla_Git/master/Exercices/BlindCode%20BXL%20-%202023/files/produits.txt)
- [contact.txt](https://raw.githubusercontent.com/ZamBoyle/Eqla_Git/master/Exercices/BlindCode%20BXL%20-%202023/files/contact.txt)
- [site.txt](https://raw.githubusercontent.com/ZamBoyle/Eqla_Git/master/Exercices/BlindCode%20BXL%20-%202023/files/site.txt)

### 1.3 - Indexation

1. Indexez le fichier index.txt avec git.
2. Indexez les autres fichiers.
3. Vérifiez avec la bonne commande git si les 2 indexations se sont bien passées. (Comment le voyez-vous ?)

### 1.4 - Validation/Commit

1. Validez les fichiers présents dans la zone d'index avec le message suivant:"Commit initial" (C'est souvent le premier message que l'on donne pour le tout premier commit)
2. Faites un git status (vous voyez ce qui a changé depuis le point 1 ? Quoi ?)
3. Tapez la commande git tag v1 (Je vous expliquerai plus tard dans le cours l'utilité de git tag. Donc, comme un robot, exécutez les "ordres" et tapez git tag v1 :-) )

## 1.5 - Affichage de l'historique des commits

Affichez l'historique des commits à l'aide de la commande: git log

Vous verrez l'ensemble des commits effectués avec la date, l'heure, l'auteur et le message de commit.

Le nouveau commit que vous venez de faire doit y figurer.

### 1.6 - Modifications (Renommer des fichiers)

Ici les modifications vont porter sur le fait que l'on va renommer nos fichiers.

Pour rappel, voilà comment renommer un fichier en ligne de commandes:

1. Windows: ren fichier1 fichier2 (va renommer le fichier1 avec le nom fichier2)
2. Mac Os/Linux: mv fichier1 fichier2 (va renommer le fichier1 avec le nom fichier2)

Renommez les fichiers de la manière suivante:

1. index.txt devient index.html
2. site.txt devient site.css
3. contact.txt devient contact.html
4. produits.txt devient produits.html
5. Évidemment vérifiez avec dir (windows) ou ls (mac/linux) s'ils sont bien renommés.

### 1.7 - Indexation

1. Faites un git status
2. Indexez les fichiers modifiés.
3. Refaites un git status (vous voyez ce qui a changé depuis le point 1 ? Quoi ?)

### 1.8 - Validation/Commit

1. Faites un git status
2. Validez/Commitez vos fichiers en ajoutant comme message "Renommage d'index, site, produits et contact"
3. Faites un git status (vous voyez ce qui a changé depuis le point 1 ? Quoi ?)
4. Tapez la commande git tag v2

## 1.9 - Affichage de l'historique des commits

Affichez l'historique des commits à l'aide de la commande: git log

Vous verrez l'ensemble des commits effectués avec la date, l'heure, l'auteur et le message de commit.

Le nouveau commit que vous venez de faire doit y figurer.

### 1.10 - Modification (de code)

<u>Explication des différents fichiers</u>:

- index.html: il affichera une page très succinte.
- produits.html: il affichera une page de produits.
- contact.html: contact une page de contact.
- site.css: contient le css du site.

<u>L'exercice</u>:

Vous devez ajoutez un style css dans le fichier site.css pour les titres h1. Le titre doit être centré et en rouge.

Vous ajouterez aussi un footer comme décrit plus bas

1. Editez le fichier site.css
2. Ajoutez un style l'élément h1 pour qu'il soit centré et en rouge.
3. Editez le fichier index.html
4. Ajoutez un footer avec le texte suivant dans un paragraphe: 
    ```html
    (c) 2023 - <span class="kokonitch">Kokonitch</span> Website.
    ```
5. Testez votre programme en lançant index.html et voyez le résultat.
6. Si votre programme fonctionne allez au point suivant sinon cherchez votre erreur.
7. Faites un git status (vous voyez ce qui a changé depuis le point 1 ? Quoi ?)

### 1.11 - Indexation

1. Faites un git status
2. Indexez les fichiers modifiés.
3. Refaites un git status (vous voyez ce qui a changé depuis le point 1 ? Quoi ?)

### 1.12 - Validation

1. Faites un git status
2. Validez/Commitez vos fichiers en ajoutant comme message "Ajout d'un style css pour le titre h1 et ajout d'un footer"
3. Faites un git status (vous voyez ce qui a changé depuis le point 1 ? Quoi ?)
4. Tapez la commande git tag v3

## 1.13 - Affichage de l'historique des commits

Affichez l'historique des commits à l'aide de la commande: git log

Vous verrez l'ensemble des commits effectués avec la date, l'heure, l'auteur et le message de commit.

Le nouveau commit que vous venez de faire doit y figurer.

### 1.14 - Modification (de code)

Vous allez maintenant modifier le menu  des pages index.html et contact.html pour que les liens pointent vers les bonnes pages.

1. Editez le fichier index.html
2. Ajoutez le lien vers la page contact.html et produits.html
3. Editez le fichier contact.html
4. Ajoutez le lien vers la page index.html et produits.html
5. Editez le fichier produits.html
6. Ajoutez le lien vers la page index.html et contact.html
7. Testez les pages index.html, produits.html et contact.html et voyez le résultat. Vous devez pouvoir naviguer entre les trois pages.
6. Faites un git status (vous voyez ce qui a changé depuis le point 1 ? Quoi ?)

### 1.15 - Indexation

1. Faites un git status
2. Indexez les fichiers modifiés.
3. Refaites un git status (vous voyez ce qui a changé depuis le point 1 ? Quoi ?)

### 1.16 - Validation

1. Faites un git status
2. Validez/Commitez vos fichiers en ajoutant comme message "Ajout des liens dans le menu des pages index.html, produits.html et contact.html"
3. Faites un git status (vous voyez ce qui a changé depuis le point 1 ? Quoi ?)
4. Tapez la commande git tag v4

## 1.17 - Affichage de l'historique des commits

Affichez l'historique des commits à l'aide de la commande: git log

Vous verrez l'ensemble des commits effectués avec la date, l'heure, l'auteur et le message de commit.

Le nouveau commit que vous venez de faire doit y figurer.

<h2 id="ex2">Exercice n°2 - Creation / indexation / validation</h2>

### 2.1 - Création d'un dépôt

1. Créez un répertoire nommé Recettes
2. Allez dans le répertoire Recettes
3. Faites-en un dépôt à l'aide d'une commande git bien entendu.
4. Quelle commande utiliser pour vérifier que le répertoire est bien devenu un dépôt ?

### 2.2 - Ajout d'une recette et Indexation

1. Allez dans le répertoire Recettes
2. Copiez le fichier [omelette.txt](https://zamboyle.github.io/Cours/2022/Git/Files/omelette.txt) dans votre répertoire Recettes.
3. Faites un git status, vous verrez que git a bien détecté notre nouveau fichier.

### 2.3 - Indexation

1. Indexez notre recette à l'aide d'une commande git.
2. Vérifiez à l'aide d'une commande git que celle-ci est bien indexée.

### 2.4 - Validation

1. Faites un git status
2. Validez/Commitez votre fichier en ajoutant comme message "Ajout de la recette de base de l'omelette"
3. Faites un git status (vous voyez ce qui a changé depuis le point 1 ? Quoi ?)
4. Tapez la commande git tag v1

## 2.5 - Affichage de l'historique des commits

Affichez l'historique des commits à l'aide de la commande: git log

Vous verrez l'ensemble des commits effectués avec la date, l'heure, l'auteur et le message de commit.

Le nouveau commit que vous venez de faire doit y figurer.

### 2.6 - Modification 

Vous vous sentez l'âme d'un grand cuistot. Et vous avez trouvé que votre recette est meilleure avec du gruyère.

1. Ouvrez le fichier omelette.txt
2. Ajoutez la ligne suivante: 30g de gruyère râpé
3. Ajoutez la ligne suivante: une pincée d'origan.
2. Vous sauvegardez votre recette modifiée.

### 2.7 - Indexation

1. Faites un git status et vous verrez que git détecte bien qu'il y a eu modification dans votre recette.
2. Indexez notre recette modifiée.
2. Refaites un git status.

### 2.8 - Validation

1. Faites un git status
2. Validez/Commitez votre fichiers en ajoutant comme message "Ajout du gruyère et l'origan dans la recette de l'omelette"
3. Faites un git status (vous voyez ce qui a changé depuis le point 1 ? Quoi ?)
4. Tapez la commande git tag v2

## 2.9 - Affichage de l'historique des commits

Affichez l'historique des commits à l'aide de la commande: git log

Vous verrez l'ensemble des commits effectués avec la date, l'heure, l'auteur et le message de commit.

Le nouveau commit que vous venez de faire doit y figurer.


### 2.10 - Modification 

Votre grand-mère est de passage chez vous et goûte votre super omelette. Vous la voyez faire la grimace et vous dire:"Ne me dis pas que tu fais tes omelettes sans mettre un petit peu de lait dedans ? Tu ne savais pas que c'était meilleur ?!"

1. Ouvrez le fichier omelette.txt
2. Ajoutez la ligne suivante: un petit peu de lait.
3. Vous sauvegardez votre recette modifiée.

### 2.11 - Indexation

1. Faites un git status et vous verrez que git détecte bien qu'il y a eu modification dans votre recette.
2. Indexez notre recette modifiée.
3. Refaites un git status.

### 2.12 - Validation

1. Faites un git status
2. Validez/Commitez votre fichiers en ajoutant comme message "Ajout un peu de lait dans la recette de l'omelette"
3. Faites un git status (vous voyez ce qui a changé depuis le point 1 ? Quoi ?)
4. Tapez la commande git tag v3

## 2.13 - Affichage de l'historique des commits

Affichez l'historique des commits à l'aide de la commande: git log

Vous verrez l'ensemble des commits effectués avec la date, l'heure, l'auteur et le message de commit.

Le nouveau commit que vous venez de faire doit y figurer.

### 2.14 - Modification

Aujourd'hui, vous sentez que vous êtes parti à faire beaucoup de recettes de cuisine. C'est en vous, vous êtes un futur chef ! :)

Mais, comme tout chef, il faut être organisé avec vos recettes. C'est pourquoi chaque recette sera placée dans un répertoire de l'ingrédient principal.

1. Créez un répertoire oeufs.
2. Déplacez votre recette omelette.txt dans le répertoire oeufs.

Vous avez deux manières de déplacer ce fichier:
- soit via la commande Windows move omelettes.txt oeufs ou sous Mac mv omelettes.txt oeufs
- soit via l'explorateur de fichiers
 
### 2.15 - Indexation

1. Faites un git status et vous verrez que git détecte bien qu'un répertoire a été créé et que votre recette omelette.txt a été déplacée dans le répertoire oeufs.
2. Indexez toutes les modifications en une seule commande.
3. Refaites un git status.

### 2.16 - Validation

1. Faites un git status
2. Validez/Commitez votre fichiers en ajoutant comme message "Déplacement de la recette de l'omelette dans le répertoire oeufs"
3. Faites un git status (vous voyez ce qui a changé depuis le point 1 ? Quoi ?)
4. Tapez la commande git tag v4

## 2.17 - Affichage de l'historique des commits

Affichez l'historique des commits à l'aide de la commande: git log

Vous verrez l'ensemble des commits effectués avec la date, l'heure, l'auteur et le message de commit.

Le nouveau commit que vous venez de faire doit y figurer.

[:arrow_left: Revenir au sommaire.](./README.md#sommaire)

---
&copy; 2023 [Johnny Piette](https://github.com/ZamBoyle).  
[![Creative Commons Attribution 4.0 International License](https://i.creativecommons.org/l/by/4.0/88x31.png)](https://creativecommons.org/licenses/by/4.0/)  
Ce travail est licencié sous [Creative Commons Attribution 4.0 International License](https://creativecommons.org/licenses/by/4.0/).   
_Vous pouvez copier, modifier, distribuer et représenter ce travail, même à des fins commerciales, à condition de donner le crédit approprié, fournir un lien vers la licence, et indiquer si des modifications ont été effectuées._