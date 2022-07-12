<h1 class="text-center">Exercices - GitHub</h1>


## Partie 1 - Création du dépôt EqlaExercices sur GitHub

Nous allons ici créer un répertoire qui pourra être utilisé dans d'autres cours.

Ce sera le dépôt EqlaExercices. Je vais vous proposer de le créer dans le répertoires MesDocuments. Ce n'est pas une obligation. 

Choisissez un autre répertoire si vous le désirez.

1. Ouvrez un invite de commandes/terminal.
2. Allez dans le répertoire MesDocuments.
4. Créez un nouveau dépôt distant ayant pour nom EqlaExercices: gh repo create EqlaExercices --public --clone
5. Allez dans le répertoire créé: cd EqlaExercices
6. Créez dans ce répertoire les répertoires suivants: js java php html accessibilité bootstrap css db laravel mysql
7. Faites un git status (observez ce que donne la sortie de cette commande).
8. Ajoutez les nouveaux répertoires dans la zone d'index.
9. Commitez vos changements avec le message suivant "Initial Commit"
10. Faites un git status (observez ce que donne la sortie de cette commande).
11. Donnez un tag à ce commit.
8. Faites un git status (observez ce que donne la sortie de cette commande).
9. Envoyez vos modifications en ligne: git push -u origin master   (les options origin master ne devront êtes faites qu'au premier envoi vers GitHub)

## Partie 2 - Création du dépôt myjava sur GitHub

1. Ouvrez un invite de commandes/terminal.
2. Allez dans le répertoire mesdepots
3. Créez un nouveau dépôt distant ayant pour nom myjava: gh repo create myjava --public --clone
4. Allez dans le répertoire créé: cd myjava

## Partie 3 
1. Créez un programme fonctionnel en js qui s'appelle ex1.java et qui demande le nom et le prénom d'une personne. Exemple:
    - Quel est ton prénom ? Johnny
    - Quel est ton nom ? Piette
2. Faites un git status (observez ce que donne la sortie de cette commande).
3. Faites un git diff ex1.java (Observez bien les ajouts et modifications de votre programme).
4. Ajoutez ce fichier à la zone d'index: git add ex1.java
5. Commitez vos changements avec le message suivant "Initial Commit": git commit -m "Initial Commit"
6. Faites un git status (observez ce que donne la sortie de cette commande).
7. Donnez un tag à ce commit. (v1)
8. Faites un git status (observez ce que donne la sortie de cette commande).
9. Envoyez vos modifications en ligne: git push -u origin master

## Partie 4
1. Ajoutez une fonction DisplayName qui affiche le nom de la personne.
2. Appelez(=Utilisez) votre fonction DisplayName en passant le nom comme paramètre.
    Exemple:
    - Quel est votre prénom ? Johnny
    - Quel est votre nom ? Piette

    Votre nom est Piette.
3. Faites un git status (observez ce que donne la sortie de cette commande).
4. Faites un git diff ex1.java (Observez bien les ajouts et modifications de votre programme).
5. Ajoutez ce fichier à la zone d'index.
6. Commitez vos changements avec le message suivant: "Ajout de la fonction DisplayName"
7. Donnez un tag à ce commit. (v2)
8. Faites un git status (observez ce que donne la sortie de cette commande).
9. Envoyez vos modifications en ligne: git push

## Partie 5

1. Ajoutez une fonction DisplayFirstname qui affiche le prénom de la personne.
2. Appelez(=Utilisez) votre fonction DisplayFirstname en passant le prénom comme paramètre.
    Exemple:
    - Quel est votre prénom ? Johnny
    - Quel est votre nom ? Piette

    Votre prénom est Johnny.
3. Faites un git status (observez ce que donne la sortie de cette commande).
4. Faites un git diff ex1.java (Observez bien les ajouts et modifications de votre programme).
5. Ajoutez ce fichier à la zone d'index.
6. Commitez vos changements avec le message suivant: "Ajout de la fonction DisplayFirstname".
7. Donnez un tag à ce commit. (v3)
8. Faites un git status (observez ce que donne la sortie de cette commande).
9. Envoyez vos modifications en ligne: git push -u

## Partie 6

1. Ajoutez une fonction DisplayFullName qui affiche le prénom et prénom de la personne.
2. Appelez(=Utilisez) votre fonction DisplayFullName en passant le nom et le prénom comme paramètres.
    Exemple:
    - Quel est votre prénom ? Johnny
    - Quel est votre nom ? Piette

    Vous vous appelez Johnny Piette. (Si vous êtes motivé et en avance, si c'est votre nom et prénom qui sont entrés, affichez:"Bonjour Majesté.e !" dans le cas contraire affichez la phrase par défaut).
3. Faites un git status (observez ce que donne la sortie de cette commande).
4. Faites un git diff ex1.java (Observez bien les ajouts et modification de votre programme).
5. Ajoutez ce fichier à la zone d'index.
6. Commitez vos changements avec le message suivant: "Ajout de la fonction GetFullName".
7. Donnez un tag à ce commit. (v4)
8. Faites un git status (observez ce que donne la sortie de cette commande).
9. Envoyez vos modifications en ligne: git push -u

## Partie 7 - .gitignore
1. Créez un fichier nommé .gitignore
2. Ajoutez les lignes suivantes:
    - password.txt
    - *.sqlite
3. Faites un git status (observez ce que donne la sortie de cette commande).
4. Créez un fichier nommé password.txt
5. Faites un git status (password.txt ne devrait pas être affiché).
6. Ajoutez ce fichier à la zone d'index.
7. Commitez vos changements avec le message suivant: "Ajout du fichier .gitignore".
8. Donnez un tag à ce commit. (v5)
9. Faites un git status (observez ce que donne la sortie de cette commande).
10. Envoyez vos modifications en ligne: git push -u

## Partie 8 - git clone et git pull

Je vais vous attribuer le dépôt d'une personne que vous allez cloner.

1. Retournez dans le répertoire mesdepots.
2. Si vous êtes dans le répertoire myjava, faites un cd .. pour revenir à mesdepots
3. Vous allez cloner le dépôt qui vous sera assigné:

    David prendra le dépôt de Simon     : git clone https://github.com/MattrimCotton/myjava.git myjavaSimon

    Christian prendra le dépôt de Sébastien     : git clone https://github.com/Seb7110/myjava.git mypythonSebastien

    Malcom prendra le dépôt de Johnny     : git clone https://github.com/zamboyle/myjava.git mypythonJohnny

DehoustD                : https://github.com/DehoustD  
Seb7110                 : https://github.com/Seb7110  
MattrimCotton           : https://github.com/MattrimCotton  
baoubaou                : https://github.com/Baoubaou  
joyboy94                : https://github.com/joyboy94  

LES RESPONSABLES DE DÉPÔTS:

1. Chaque responsable de son dépôt adressera ses salutations via le fichier Hello.txt et saluera la personne qui a cloné son dépôt après qu'elle est cloné votre dépôt.
2. Vous ajouterez votre fichier Hello.txt dans la zone d'index.
3. Vous commiterez vos modifications.
4. vous enverrez celles-ci sur github.
5. Vous prévenez la personne qu'elle peut récupérer les modifications que vous venez de faire.

LES UTILISATEURS DE DÉPÔTS CLONES:

9. Vous vérifierez les modifications quand le gestionnaire du dépôt vous indiquera dès que vous pouvez le faire à l'aide la commande git pull.

## Partie 9

Ici, nous allons cloner notre dépôt myjava en myjavaClone.

1. Remonter d'un répertoire cd ..
2. Vous devriez être dans le répertoire mesdepots. Pour le vérifier: cd (Sous windows) ou bien pwd sous Linux/Mac
3. clonons notre dépôt distant myjava avec git: git clone https://github.com/VotreNomDutilisateur/myjava.git myjavaClone

## Partie 10

1. Affichez l'historique des commits
2. Quelle commande avez-vous utilisée ?
3. Revenez au deuxième commit.
4. Quelle commande avez-vous utilisée ?
5. Ouvrez votre programme ex1.java et constatez qu'il est bien revenu à une version antérieure.
6. Revenez au tag master.
7. Quelle commande avez-vous utilisée ?

***
_[Eqla](http://www.eqla.be) 2022 - Formation Git_
