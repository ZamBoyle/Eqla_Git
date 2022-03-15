# Exercices - GitHub

## Partie 1 - Ouvrir un invite de commandes

Pour ouvrir un invite de commandes sous Windows effectuez les actions suivantes:
a. Effectuez combinaison des touches Windows + R
b. Ecrivez cmd
c. Validez avec la touche ENTER

## Partie 2 - Affichez le répertoire en cours

a. Ouvrez un invite de commandes.
b. Tapez une commande qui vous permettra d'afficher le répertoire courant.

## Partie 3 - Affichez les fichiers / répertoires

a. Ouvrez un invite de commandes.
b. Affichez les fichiers/répertoires présents dans le répertoire courant.

## Partie 4 - Créer un répertoire

a. Ouvrez un invite de commandes.
b. Créez le répertoire MesDépôts
c. Créez le répertoire tmp
d. Créez le répertoire Programmation

## Partie 5 - Changer de répertoire

a. Ouvrez un invite de commandes.
b. Allez dans le répertoire MesDépôts
c. Revenez dans le répertoire parent. (On dit aussi remonter d'un répertoire)
d. Allez dans le répertoire tmp
e. Revenez dans le répertoire parent.
f. Allez dans le répertoire Programmation
g. Revenez dans le répertoire parent.

## Partie 6 - Supprimer un répertoire

a. Ouvrez un invite de commandes.
b. Supprimez le répertoire Programmation

## Partie 7 - Supprimer un fichier

a. Ouvrez un explorateur de fichiers.
b. Copiez un fichier de votre choix dans le répertoire tmp que vous avez créé précédemment 
c. Ouvrez un invite de commandes.
d. Allez dans le répertoire tmp
e. Affichez les fichiers présents dans le répertoire.
f. Si votre fichier n'est pas là, recommencez à l'étape a.
g. Supprimez via une commande le fichier que vous avez copié dans le répertoire tpm

## Partie 8 - Renommer un fichier
a. Ouvrez un explorateur de fichiers.
b. Copiez un fichier de votre choix dans le répertoire tmp que vous avez créé précédemment 
c. Ouvrez un invite de commandes.
d. Allez dans le répertoire tmp
e. Affichez les fichiers présents dans le répertoire.
f. Si votre fichier n'est pas là, recommencez à l'étape a.
g. Renommez le fichier copié en toto.txt

## Partie 3 - Création du dépot myjs sur GitHub

a. Ouvrez un invite de commandes/terminal.
b. Allez dans le répertoire mesdepots
b. Si vous êtes dans le répertoire cours_git, sortez de ce répertoire.
c. Créez un nouveau dépot distant ayant pour nom myjs: gh repo create myjs --public --confirm
d. Allez dans le répertoire créé: cd myjs

## Partie 2 

a. Créez un programme fonctionnel en js qui s'appelle ex1.js et qui demande le nom et le prénom d'une personne.
Exemple:
- Quel est ton prenom ? Johnny
- Quel est ton nom ? Piette

b. Faites un git status (observez ce que donne la sortie de cette commande).
c. Faites un git diff ex1.js (Observez bien les ajouts et modifications de votre programme).
d. Ajoutez ce fichier à la zone d'index: git add ex1.js
e. Commitez vos changements avec le message suivant "Initial Commit": git commit -m "Initial Commit"
f. Faites un git status (observez ce que donne la sortie de cette commande).
g. Donnez un tag à ce commit. (v1)
h. Faites un git status (observez ce que donne la sortie de cette commande).
i. Envoyez vos modifications en ligne: git push -u origin master

## Partie 3

a. Ajoutez une fonction DisplayName qui affiche le nom de la personne.
b. Appelez(=Utilisez) votre fonction DisplayName en passant le nom comme paramètre.
Exemple:
- Quel est votre prenom ? Johnny
- Quel est votre nom ? Piette
Votre nom est Piette.
c. Faites un git status (observez ce que donne la sortie de cette commande).
d. Faites un git diff ex1.js (Observez bien les ajouts et modifications de votre programme).
e. Ajoutez ce fichier à la zone d'index.
f. Commitez vos changements avec le message suivant: "Ajout de la fonction DisplayName"
g. Donnez un tag à ce commit. (v2)
h. Faites un git status (observez ce que donne la sortie de cette commande).
i. Envoyez vos modifications en ligne: git push -u origin master

## Partie 4

a. Ajoutez une fonction DisplayFirstname qui affiche le prénom de la personne.
b. Appelez(=Utilisez) votre fonction DisplayFirstname en passant le prénom comme paramètre.
Exemple:
- Quel est votre prenom ? Johnny
- Quel est votre nom ? Piette
Votre prénom est Johnny.
c. Faites un git status (observez ce que donne la sortie de cette commande).
d. Faites un git diff ex1.js (Observez bien les ajouts et modifications de votre programme).
e. Ajoutez ce fichier à la zone d'index.
f. Commitez vos changements avec le message suivant: "Ajout de la fonction DisplayFirstname".
g. Donnez un tag à ce commit. (v3)
h. Faites un git status (observez ce que donne la sortie de cette commande).
i. Envoyez vos modifications en ligne: git push -u origin master

## Partie 5

a. Ajoutez une fonction DisplayFullName qui affiche le prénom et prénom de la personne.
b. Appelez(=Utilisez) votre fonction DisplayFullName en passant le nom et le prénom comme paramètres.
Exemple:
- Quel est votre prenom ? Johnny
- Quel est votre nom ? Piette
Vous vous appelez Johnny Piette. (Si vous êtes motivé et en avance, si c'est votre nom et prénom qui sont entrés, affichez:"Bonjour Masjesté !" dans le cas contraire affichez la phrase par défaut).
c. Faites un git status (observez ce que donne la sortie de cette commande).
d. Faites un git diff ex1.js (Observez bien les ajouts et modification de votre programme).
e. Ajoutez ce fichier à la zone d'index.
f. Commitez vos changements avec le message suivant: "Ajout de la fonction GetFullName".
g. Donnez un tag à ce commit. (v4)
h. Faites un git status (observez ce que donne la sortie de cette commande).
i. Envoyez vos modifications en ligne: git push -u origin master

## Partie 6 - git clone et git pull

Je vais vous attribuer le dépot d'une personne que vous allez cloner.
1. Retournez dans le répertoire mesdepots.
2. Si vous êtes dans le répertoire myjs, faites un cd .. pour revenir à mesdepots
3. Vous allez cloner le dépot qui vous sera assigné:
Jessie prendra le dépot d'Alain     : git clone https://github.com/alduf1972/myjs.git myjsAlain
Alain prendra le dépot de Bruno     : git clone https://github.com/BrunoDefalque/myjs.git myjsBruno
Mahsum prendra le dépot d'Isaac     : git clone https://github.com/zackakyo/myjs.git myjsIsaac
Isaac prendra le dépot de Mahsum    : git clone https://github.com/Mahsum21/myjs.git myjsMahsum
Eleonor prendra le dépot de Jessie  : git clone https://github.com/jessiebak/myjs.git myjsJessie
Bruno prendra le dépot de Maxime    : git clone https://github.com/maximeborsen/myjs.git myjsMaxime
Maxime prendra le dépot d'Eleonor   : git clone https://github.com/ele-sana/myjs.git myjsEleonor
LES RESPONSABLES DE DEPOTS:
4. Chaque responsable de son dépot adressera ses salutations via le fichier Hello.txt et saluera la personne qui a cloné son dépot après qu'elle est cloné votre dépot.
5. Vous ajouterez votre fichier Hello.txt dans la zone d'index.
6. Vous commiterez vos modifications.
7. vous enverrez celles-ci sur github.
8. Vous prévenez la personne qu'elle peut récupérer les modifications que vous venez de faire.
LES UTILISATEURS DE DEPOTS CLONES:
9. Vous vérifierez les modifications quand le gestionnaire du dépot vous indiquera dès que vous pouvez le faire.

## Partie 7

Ici, nous allons cloner notre dépot myjs en myjsClone.
a. Remonter d'un répertoire cd ..
b. Vous devriez être dans le répertoire mesdepots. Pour le vérifier: cd (Sous windows) ou bien pwd sous Linux/Mac
c. clonons notre dépot distant myjs avec git: git clone https://github.com/VotreNomDutilisateur/myjs.git myjsClone



a. Affichez l'historique des commits
b. Quelle commande avez-vous utilisée ?
c. Revenez au deuxième commit.
d. Quelle commande avez-vous utilisée ?
e. Ouvrez votre programme ex1.js et constatez qu'il est bien revenu à une version antérieure.
f. Revenez au tag master.
g. Quelle commande avez-vous utilisée ?

  