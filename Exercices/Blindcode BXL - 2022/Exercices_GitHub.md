<h1 class="text-center">Exercices - GitHub</h1>

## Partie 1 - Création du dépot myjs sur GitHub

1. Ouvrez un invite de commandes/terminal.
2. Allez dans le répertoire mesdepots
3. Si vous êtes dans le répertoire cours_git, sortez de ce répertoire.
4. Créez un nouveau dépot distant ayant pour nom myjs: gh repo create myjs --public --clone
5. Allez dans le répertoire créé: cd myjs

## Partie 2 
1. Créez un programme fonctionnel en js qui s'appelle ex1.js et qui demande le nom et le prénom d'une personne. Exemple:
    - Quel est ton prenom ? Johnny
    - Quel est ton nom ? Piette
2. Faites un git status (observez ce que donne la sortie de cette commande).
3. Faites un git diff ex1.js (Observez bien les ajouts et modifications de votre programme).
4. Ajoutez ce fichier à la zone d'index: git add ex1.js
5. Commitez vos changements avec le message suivant "Initial Commit": git commit -m "Initial Commit"
6. Faites un git status (observez ce que donne la sortie de cette commande).
7. Donnez un tag à ce commit. (v1)
8. Faites un git status (observez ce que donne la sortie de cette commande).
9. Envoyez vos modifications en ligne: git push -u origin master

## Partie 3

1. Ajoutez une fonction DisplayName qui affiche le nom de la personne.
2. Appelez(=Utilisez) votre fonction DisplayName en passant le nom comme paramètre.
    Exemple:
    - Quel est votre prenom ? Johnny
    - Quel est votre nom ? Piette
    
    Votre nom est Piette.
3. Faites un git status (observez ce que donne la sortie de cette commande).
4. Faites un git diff ex1.js (Observez bien les ajouts et modifications de votre programme).
5. Ajoutez ce fichier à la zone d'index.
6. Commitez vos changements avec le message suivant: "Ajout de la fonction DisplayName"
7. Donnez un tag à ce commit. (v2)
8. Faites un git status (observez ce que donne la sortie de cette commande).
9. Envoyez vos modifications en ligne: git push -u origin master

## Partie 4

1. Ajoutez une fonction DisplayFirstname qui affiche le prénom de la personne.
2. Appelez(=Utilisez) votre fonction DisplayFirstname en passant le prénom comme paramètre.
    Exemple:
    - Quel est votre prenom ? Johnny
    - Quel est votre nom ? Piette

    Votre prénom est Johnny.
3. Faites un git status (observez ce que donne la sortie de cette commande).
4. Faites un git diff ex1.js (Observez bien les ajouts et modifications de votre programme).
5. Ajoutez ce fichier à la zone d'index.
6. Commitez vos changements avec le message suivant: "Ajout de la fonction DisplayFirstname".
7. Donnez un tag à ce commit. (v3)
8. Faites un git status (observez ce que donne la sortie de cette commande).
9. Envoyez vos modifications en ligne: git push -u origin master

## Partie 5

1. Ajoutez une fonction DisplayFullName qui affiche le prénom et prénom de la personne.
2. Appelez(=Utilisez) votre fonction DisplayFullName en passant le nom et le prénom comme paramètres.
    Exemple:
    - Quel est votre prenom ? Johnny
    - Quel est votre nom ? Piette

    Vous vous appelez Johnny Piette. (Si vous êtes motivé et en avance, si c'est votre nom et prénom qui sont entrés, affichez:"Bonjour Masjesté !" dans le cas contraire affichez la phrase par défaut).
3. Faites un git status (observez ce que donne la sortie de cette commande).
4. Faites un git diff ex1.js (Observez bien les ajouts et modification de votre programme).
5. Ajoutez ce fichier à la zone d'index.
6. Commitez vos changements avec le message suivant: "Ajout de la fonction GetFullName".
7. Donnez un tag à ce commit. (v4)
8. Faites un git status (observez ce que donne la sortie de cette commande).
9. Envoyez vos modifications en ligne: git push -u origin master

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

1. Remonter d'un répertoire cd ..
2. Vous devriez être dans le répertoire mesdepots. Pour le vérifier: cd (Sous windows) ou bien pwd sous Linux/Mac
3. clonons notre dépot distant myjs avec git: git clone https://github.com/VotreNomDutilisateur/myjs.git myjsClone


## Partie 8

1. Affichez l'historique des commits
2. Quelle commande avez-vous utilisée ?
3. Revenez au deuxième commit.
4. Quelle commande avez-vous utilisée ?
5. Ouvrez votre programme ex1.js et constatez qu'il est bien revenu à une version antérieure.
6. Revenez au tag master.
7. Quelle commande avez-vous utilisée ?

***
_[Eqla](http://www.eqla.be) 2022 - Formation Git_