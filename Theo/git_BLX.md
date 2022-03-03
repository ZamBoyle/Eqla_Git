# Formation Git

Il y a deux PDF (cheat sheet) pour ce cours:

1. Pour Git/GitHub: github-git-cheat-sheet.pdf

2. Pour MarkDown: markdown-cheatsheet-online.pdf

## Utiliser la ligne de commandes/du terminal

Il y a deux façons d'utiliser Git: 

- par interface graphique 

- la ligne de commandes
    Le mieux c'est l'utilisation du terminal pour utiliser au mieux git.

Nous allons voir quelques commandes de base.
Pour chaque commande on peut avoir de l'aide via la commande elle-même

- Sous Windows  
    ```cmd
commande /?
    ```  

- Sous Mac/Linux  
    ```bash
commande --help
    ```  
    ou via les man (manuels) unix s'ils sont installés:  
    ```bash
man mkdir
    ```

L'invite de commandes signifie que le terminal est en attente de commandes.
Une commande reçoit de 0 à N paramètres. Par exemple la commande:  
```bash
git version
```  
git est la commande et version est le paramètre. Vous validez cette commande et son paramètre via la touche ENTER.

### Ouvrez un terminal.

Pour connaître le répertoire courant où vous êtes:

- Windows
    On regarde ce qu'on appelle le prompt. Il est composé du chemin courant suivit du symbole >.  
    Exemple:  
    ```prompt
c:\Windows>
    ```  
    Ou bien on tape la commande:  
    ```cmd
echo %cd%
    ```  
    ou encore tout simplement:  
    ```cmd
cd 
    ```  
    sans aucun paramètre.
    ça retourne le répertoire courant.

- Mac
    on a deux manières:

    1. Le prompt est composé du nom de l'ordinateur suivit d'un symbole 
        : ensuite du chemin suivit d'un espace. Il y a ensuite le nom de l'utilisateur terminé par le symbole $.
        Il est possible que vous voyez le symbole ~ (tilde) dans le chemin. Le symbole tilde signifie le chemin vers votre répertoire utilisateur.
        Ensuite on peut utiliser la commande:  
        ```bash
pwd 
        ```  
        qui va donner le répertoire courant. 
        Si vous avez un tilde dans le prompt, vous verrez le chemin complet de l'utilisateur grâce à la commande pwd.  
        Exemple si votre prompt est:  
        ```prompt
mcfly:~/Documents john$ 
        ```  
        la commande pwd donnera le résultat suivant:  
        ```output
/home/john/Documents
        ```  

    - Linux
        Même chose que Mac sauf que le prompt est ainsi composé
        du nom de l'utilisateur suivit du symbole @ ensuite du nom de l'ordinateur d'un symbole : et enfin le chemin terminé par le symbole $.  
        Exemple:  
        ```bash
john@mcfly:~/Documents$
        ```  
        la commande pwd donnera le résultat suivant:  
        ```output
/home/john/Documents
        ```  

### Lister les fichiers

- Windows
    On utilise la commande:  
    ```cmd
dir 
    ```  
    avec comme paramètre /w.  
    Exemple:  
    ```cmd
dir /w
    ```  

- Mac/Linux
    On utilise la commande:  
    ```bash
dir
    ```  
    ou:  
    ```bash
ls
    ```  

### Créer un répertoire/dossier

- Windows
    c'est la commande:  
    ```cmd
mkdir
    ```  
    (make directory) qui peut être raccourcie par md.  
    Exemple:  
    ```cmd
mkdir cours_git  
    ```  
    ou:  
    ```cmd
md cours_git
    ```  

- Mac/Linux
    c'est la commande:  
    ```bash
mkdir
    ```  
    Exemple:  
    ```bash
mkdir cours_git
    ```  

### Changer de répertoire ou de dossier

Sur Windows et Mac/Linux, c'est la commande:  
```cmd
cd
```  
(change directory). Exemple:  
```bash
cd cours_git
```  
On peut remonter dans le répertoire parent à l'aide de la commande:  
```powershell
cd ..
```  

### Supprimer un répertoire ou un dossier

**ATTENTION** cette commande est à utiliser avec énormément de précautions.

- Windows
    C'est la commande:  
    ```cmd
rmdir
    ```  
    (remove directory). Créons le répertoire toto:  
    ```cmd
mkdir toto
    ```  
    Supprimons ce répertoire:  
    ```cmd
rmdir toto
    ```  
    Cependant si le répertoire toto n'est pas vide, Windows vous le signalera et ne fera rien.
    Il faudra alors utiliser des paramètres à la commande rmdir à savoir /s (Supprime tous répertoires et fichiers inclus dans le répertoire à supprimer).  
    Exemple:  
    ```cmd
rmdir /s toto
    ```  
    Le système demandera une confirmation.

- Mac/Linux
    C'est aussi la commande:  
    ```bash
rmdir
    ```  
    mais on utilise généralement:  
    ```bash
rm
    ```  
    on peut coupler cette commande avec les paramètres -rf:  
    Exemple:  
    ```bash
rm -rf toto
    ```  

    - le -r supprime le répertoire et sous repertoire de manière récursive.

    - Le -f ne demande aucune confirmation d'effacement et pas d'erreur si le fichier n'existe pas

    Si vous faites un rm -rf repertoire (faites très **attention** à ce que vous faites...).

### Supprimer un fichier ou un dossier

Comme pour la commande précédente faites **attention** à ce que vous effacez

- Windows
    C'est la commande:  
    ```cmd
del
    ```  
    fichier exemple:  
    ```cmd
del toto.txt
    ```  

- Mac
    C'est la commande:  
    ```bash
rm 
    ```  
    fichier exemple:  
    ```bash
rm toto.txt
    ```  

### Renommer un fichier ou un dossier

- Windows
    C'est la commande:  
    ```cmd
ren
    ```  
    pour rename. Exemple:  
    ```cmd
ren toto.txt toto2.txt
    ```  

- Mac 
    On utilise la commande:  
    ```bash
mv
    ```  
    move. Exemple:  
    ```bash
mv toto.txt toto2.txt
    ```  

### Afficher le contenu d'un fichier

- Windows  
    ```cmd
type
    ```  
    nomfichier exemple:  
    ```cmd
type toto.txt 
    ```  
    affichera le contenu du fichier toto.txt.

- Mac  
    exemple:  
    ```bash
cat toto.txt
    ```  
    affichera le contenu du fichier toto.txt

### Créer un fichier avec un contenu vide

- Windows
    La commande:  
    ```cmd
type nul > toto.txt
    ```  
    va créer un fichier vide avec comme nom toto.txt.

- Mac
    La commande:  
    ```bash
touch toto.txt
    ```  
    va créer un fichier vide avec comme nom toto.txt.

### Les redirections des commandes

On peut rediriger l'entrée standard d'une commande qui est la console vers par exemple un fichier.
On a deux types de redirections:  

1. Création du fichier:  
    ```cmd
dir > listing.txt  
    ```  
    redirige le résultat de la commande dans un nouveau fichier nommé listing.txt

2. Concaténation:  
    ```cmd
dir >> listing.txt
    ```  
    Si le fichier existe, le résultat de la commande dir est ajouté au fichier listing.txt sinon le fichier sera créé.
    Dans le temps (vieux suis, vieux je resterai), on pouvait rediriger vers une imprimante.  
    Par exemple:  
    ```cmd
dir > prn
    ```

### Customiser son prompt

Il correspond à la string(chaîne de caractères) qui se trouve à gauche du curseur dans l'invite de commandes.
Sous Windows par défaut c'est c:\RepertoireEnCours> il est défini par la commande prompt $p$g
Il est possible de customiser le prompt de l'invite de commandes:  

- Windows
    C'est la commande prompt qui le permet. Pour certains, un prompt plus succinct est sans doute intéressant.  
    Exemple:  
    ```cmd
prompt $g
    ```  
    Donnera que le symbole > pour votre invite de commandes

- Mac
    Il faut définir une variable d'environnement PS1. Exemple:  
    ```bash
PS1=">"
    ```  
    Pour Windows, il existe des variables prédéfinies que l'on peut utiliser.
    Pour les connaître faitesla commande:  
    ```cmd
prompt /?
    ```  

## Introduction

Prenons 2 exemples:  

1. Le premier: Imaginez qu’un client vous demande de faire un site de ventes en ligne : vous le faites et il fonctionne nickel.
    Pendant la période de Noël, il vous demande de faire de grosses modifications et bardaf, il ne fonctionne plus du tout : erreur 500… Le client vous demandera de remettre immédiatement le site à l’état précédent les modifications problématiques pour ne pas perdre trop de ventes en cette période très lucrative pour lui.
    Si vous n’aviez pas un backup de la précédente version ou un système de gestion de l’historique des modifications, vous risquez d’être bien embêtés…
    C’est ici qu’entre en scène l’outil git.

2. Le second:vous devez travailler sur un projet à plusieurs mais vous ne savez pas comment faire pour collaborer de manière efficace avec vos collègues pour la gestion du code et voir comment gérer/fusionner le travail fait par chacun.
    C'est ici qu'entre en scène git via l'intermédiaire d'outils comme GitHub, Gitlab, etc.

### Git c'est quoi ?

Git a été créé en 2005 par le papa de Linux (1991) : Linus Torvalds pour le développement du noyau Linux.
Il permet de faire le suivi des différentes modifications d’un projet et de revenir dans un état précédent.
Et surtout, il permet de travailler à plusieurs sur un même projet.
Git est le logiciel de versions le plus populaire, utilisé par plus de 56.000.000 de développeurs dans le monde.
Il est un incontournable des grandes sociétés de logiciel.
Grandement utilisé dans le développement de logiciels OpenSource via la plateforme GitHub qui a été rachetée par Microsoft.

###	Installation de Git

- [Windows](https://git-scm.com/downloads)

- Mac Os
    Essayez de taper en ligne de commandes:  
    ```bash
git --version 
    ```  
    S'il n'est pas installé, 
    [installez brew](https://brew.sh/index_fr)
    s'il n'est pas déjà installé.
    Après taper en ligne de commandes:  
    ```bash
brew install git
    ```  

### Qu’est-ce un dépot/repository Git ?

Un dépot Git est un en quelque sorte de livre journal où l’on peut retrouver tout l’historique des modifications.
Il vous permet d'enregistrer les différentes versions de votre code et d'y accéder au besoin.

###	Répertoire courant vs la zone d’indexation vs dépot

- Répertoire de travail = Lieu où sont stockés vos fichiers de travail.

- Zone d'indexation = La zone d’index est un simple fichier, généralement situé dans le répertoire Git, 
    qui stocke les informations concernant ce qui fera partie du prochain instantané. On l’appelle aussi des fois la zone de préparation.

- Dépot (repository) = répertoire portant le nom .git. 
    Le répertoire Git est l’endroit où Git stocke les métadonnées et la base de données des objets de votre projet.
    Vous ne devez **jamais** aller modifier manuellement ce répertoire.

### Chronologie des actions avant que vos modifications fassent partie de votre dépot

L’utilisation standard de Git se passe comme suit :  

1. Vous modifiez des fichiers dans votre répertoire de travail.

2. Vous indexez les fichiers modifiés, ce qui ajoute des instantanés (une sorte de photo si vous voulez) de ces fichiers dans la zone d’index.

3. Vous validez ces modifications qui sont en zone d'index, ce qui a pour effet de basculer les instantanés des fichiers de l’index dans la base de données du répertoire Git.

1. Si une version particulière d’un fichier est dans le répertoire Git, il est considéré comme validé.

2. S’il est modifié mais a été ajouté dans la zone d’index, il est indexé.

3. S’il a été modifié depuis le dernier instantané mais n’a pas été indexé, il est modifié.

### Configurer les informations de l'utilisateur pour tous les dépots locaux

Pour que l'on sache qui a fait une action sur un dépot, il est de mise de configurer les variables globales suivantes:

- Nom:  
    ```bash
git config --global user.name "Prenom nom"
    ```  
    Exemple:  
    ```bash
git config --global user.name "Johnny Piette"
    ```  

- e-mail  
    ```bash
git config --global user.email "adresse email"
    ```  
    Exemple:  
    ```bash
git config --global user.email "johnny.piette@gmail.com"
    ```

### Vérification de la configuration de git globale.

```bash
git config --global --list
```  

Pour supprimer une entrée de notre configuration globale, on utilise:  
```bash
git config --unset --global user.name 
```  
Ici ça va supprimer notre prénom et nom.

### Création de notre premier dépot local

1. Création d'un répertoire de travail: créer le répertoire cours_git:  
    ```bash
mkdir cours-git
    ```  

2. Lligne de commandes 
    aller dans le répertoire de travail à l'aide de la commande:  
    ```bash
cd cours-git
    ```  

3. Taper la commande:  
    ```bash
git init
    ```  

4. Taper la commande dir (Windows) ou ls (Mac/Linux) on constate qu'il n'y a rien.

5. - Windows
        Recommençons avec:  
        ```cmd
dir /ah
        ```  
        on liste les fichiers ayant l'attribut h pour hidden/caché

    - Mac:  
        ```bash
ls -al
        ```  

6. On constate que l'on a un répertoire .git caché, Git internal

### Status de notre dépot

Taper la commande:  
```bash
git status
```  
que voyez-vous ?  

```bash
git status
```  
va nous indiquer l'état de notre dépot.
Y a-t-il des fichiers modifiés/créés/supprimés qui n'ont pas été indexés ?

### Ajouter un fichier

Copiez le fichier genius.php dans le répertoire cours-git

- Windows:  
    ```cmd
copy SRC DEST
    ```  

- Mac ou Linux:  
    ```bash
cp <SRC> <DEST>
    ```  

### Indexer/désindexer ses modifications

Pour indexer un fichier on utilise la commande:  
```bash
git add
```  
```bash
git status 
```  
qu'est-ce qui a changé ? 

On voit qu'il est indiqué untracked files. Il y est indiqué notre fichier genius.php:  
```bash
git add -- genius.php
```  
on l'ajoute dans la zone d'index:  
```bash
git status
```  
il indique les changements à commiter. ici genius.php qui est marqué comme "new file"

Pour désindexer un fichier on utilise la command:  
```bash
git reset
```  
```bash
git reset -- genius.php
```  
on a retiré les modifications de la zone d'index  
```bash
git status
```

### Notre premier commit

```bash
git commit -m "Ajout  Genius library"
```  
```bash
git status
```  
```output
nothing to commit
```  
```bash
git tag v0.1 
```  
Je vous expliquerai pourquoi plus tard

### Modifications d'un fichier

Première modification:  

1. Ouvrez votre programme genius.php avec vscode

2. Ajoutez une fonctions Multiply qui multiplie deux nombres.

3. Dans la fonction Display(), ajoutez un echo s'inspirant des précédents echo pour afficher le résultat de la multiplication.

4. Testez votre programme jusqu'à ce qu'il fonctionne. :)

5. ```bash
git status
    ```  
    (git nous indique que notre fichier a été modifié)

6. ```bash
git diff genius.php
    ```  
    (Ca vous affichera les modifications: les ajouts (+) ou suppressions (-) de lignes)

7. ```bash
git add -- genius.php
    ```
    permet d'ajouter toutes les modifications du point de fichiers

8. ```bash
git commit -m "Ajout de la multiplication"
    ```  
    **Essayer** de ne pas taper des accents

9. ```bash
git status
    ```  
    essayez de toujours faire un status par précaution

10. ```bash
git tag v0.2
    ```  
    Je vous expliquerai pourquoi plus tard

Deuxième modification:

1. Ouvrez votre programme genius.php avec vscode

2. Ajoutez une fonctions Divide qui divise deux nombres.

3. Dans la fonction Display(), ajoutez un echo s'inspirant des précédents echo pour afficher le résultat de la division.

4. Testez votre programme jusqu'à ce qu'il fonctionne. :)

5. ```bash
git status
    ```  
    git nous indique que notre fichier a été modifié

6. ```bash
git diff genius.php
    ```  
    Ca vous affichera les modifications:
    les ajouts (+) ou suppressions (-) de lignes

7. ```bash
git add -- genius.php
    ```  
    permet d'ajouter toutes les modifications du point de fichiers

8. ```bash
git commit -m "Ajout de la division"
    ```  
    **essayer** de ne pas taper des accents

9. ```bash
git status
    ```  
    essayez de toujours faire un status par précaution

10. ```bash
git tag v0.3
    ```  
    Je vous expliquerai pourquoi plus tard

Troisième modification:  

1. Ouvrez votre programme genius.php avec vscode

2. Dans la fonction DisplayFormControls()

3. Modifiez les balises input et changez type="text" par type="number".
    Vous devez le faire à deux endroids. (Ca permettra de vérifier côté client que l'on a bien entré un nombre).

4. Testez votre programme jusqu'à ce qu'il fonctionne. :)

5. ```bash
git status
    ```  
    git nous indique que notre fichier a été modifié

6. ```bash
git diff genius.php
    ```  
    Ca vous affichera les modifications: les ajouts (+) ou suppressions (-) de lignes

7. ```bash
git add -- genius.php
    ```  
    permet d'ajouter toutes les modifications du point de fichiers

8. ```bash
git commit -m "Change le type d'input"
    ```  
    **essayer** de ne pas taper des accents

9. ```bash
git status
    ```  
    essayez de toujours faire un status par précaution

10. ```bash
git tag v0.3
    ```  
    Je vous expliquerai pourquoi plus tard

### Voyage dans l'historique d'un dépot

Un ensemble de commits reliés entre eux par un pointer constitue ce qu'on appelle une branche.
Ici on est sur la branche master. C'est la branche principale.

Un commit est constitué:

- d'un identifiant unique appelé SHA1 constitué de 40 caractères.

- un ensemble de modifications.

- un commentaire décrivant le commit qui vient de la commande  
    ```bash
commit -m "votre message"
    ```  

- les informations sur l'auteur.

- une date de création.

- Liste de son/ses parent/s (Allant de 0 à N parents).

Voyons l'historique de notre dépot:  

1. Tapez  
    ```bash
git log
    ```  

2. ```bash
git show SHA-1
    ```  
    Pour un commit ayant ce SHA-1.
    Certains auront peut-être des problèmes pour copier/coller le SHA1. Ce n'est pas grave car nous avons tagué/nommé nos commits: v0.1, v0.2, v0.3.

3. ```bash
git show v0.1
    ```  

4. ```bash
git show v0.2
    ```  

5. ```bash
git show v0.3
    ```  

6. ```bash
git show 
    ```  
    montre les dernières modifications la branche master

### Naviguer dans l'historique de notre dépot

1. ```bash
git log
    ```  

2. Identifier le premier commit ainsi que son SHA1.

3. ```bash
git checkout <PATHSPEC>
    ```  
    Commit ou un tag (nous nous sommes déplacés sur un commit, nous avons remonté le temps) [Musique de Retour vers le Futur]

4. ```bash
git log
    ```  
    Nous n'avons que l'histoire du tout premier commit

4. Ouvrez genius.php et regardez ce fichier qui est différent de celle de master.

5. ```bash
git checkout master
```  
(on revient sur le dernier commit appelé master).

6. Ouvrez genius.php

Essayez de revenir sur les différentes versions de notre programme genius.php et regardez si on est bien revenu dans une version précédente à l'aide des SHA1 ou des tags.

### Les tags

Certains ont remarqué qu'il est plus aisé de créer des tags pour naviguer dans l'historique et pour revenir à une version antérieur de notre dépot.
Cependant on ne crée pas des tags pour tous les commits. 
On le fait quand c'est nécessaire. Je vous ai fait créer des tags à chaque commit pour que certains aient plus facile d'utiliser des tags que des SHA1.

On peut avoir plusieurs tags pour un même commit.

Donc pour créer un tag, on utilise la commande:  
```bash
git tag montag
```  
Pour supprimer un tag, on utilise la commande:  
```bash
git tag -d montag
```  

### Le modèle distribué

Ici, nous avons travaillé sur notre dépot local: tout est stocké dans notre ordinateur.
Il existe différents modèles de gestion:  

1. Modèle centralisé (svn, cvs): Tout est stocké sur un serveur central qui contrôle toute la base du code. 

2. Modèle distribué (git, mercurial): Tous les développeurs ont une copie de base du projet.
    L'intérêt c'est que l'on ne doit pas être en permanence connecté au serveur pour travailler.
    Nous avons notre dépot git hébergé sur un serveur (GitHub, GitLab) qui comprend un certains nombres de commits.
    Si des développeurs veulent travailler sur notre dépot distant, les développeurs vont devoir dupliquer notre dépot.
    Cela va dupliquer l'intégralité du dépot et le .git et donc de l'ensemble des commits.
    Prenons deux développeurs: Sophie et Simon.
    Si Sophie travaille sur sa version locale, elle va faire un commit.
    Et envoyer sur le dépot distant, l'ensemble des commits qu'elle a réalisés.
    Simon ayant la version de base pourra se synchroniser avec le dépot distant et récevoir les modifications faites par Sophie.

### GitHub

Git est donc un outil de suivi des modifications d’un dépot : il en contient son historique.
GitHub est un hébergeur web de dépots distants.
C’est en quelque sorte un front end web Git pour des projets distants hébergés sur GitHub.

Mais il offre beaucoup plus que Git :

-	Créer un wiki pour le dépot.

-	Contient un logiciel de suivi de problèmes.

-	Possibilité de cloner le dépot hébergé sur GitHub en local.

-	Créer des gist : morceau de code que l’on peut partager, éditer, commenter, etc.

-	Suivi de bugs avec les issues.

-	Un wiki dédié au projet 

La plupart des projets open sources sont sur GitHub : En 2020, 190 millions de dépots dont 28 millions sont publics.

Racheté par Microsoft : 7 Milliards de dollars.
Certains ont quitté car Microsoft a racheté GitHub :	En 2018, 100.000 projets sur 75 millions ont quitté GitHub pour GitLab.

Il y a plus de 56 millions de développeurs et plus de 3 millions d'organisations qui l'utilisent.

Vous pouvez créer des dépots publics et des dépots privés.
Avant on avait une limitation pour les dépots privés. Maintenant GitHub permet de créer un nombre illimités de dépots privés. :)

Apparemment, vous n'auriez pas de limite de taille par dépot mais on conseille que cela soit entre 500MB et 1GB.
La taille max d'un fichier ne peut faire plus de 100MB.

### clone un dépot hébergé sur GitHub avec la commande git clone

Cloner un dépot signifie de faire une copie parfaite d'un dépot distant.
Sur GitHub, il y a énormément de dépots publics.
Nous allons dans un premier temps clone les notes de cours qui se trouvent sur GitHub.
La commande qui permet de faire un clone d'un dépot distant est la commande:  
```bash
git clone
```  
suivie du nom du dépot à clone.

1. Ouvrez un invite de commandes/terminal.

2. Créez un répertoire nommé mesdepots:  
    ```bash
mkdir mesdepots
    ```  

3. Allez dans ce répertoire:  
    ```bash
cd mesdepots
    ```  

4. Clonez le dépot distant de notre cours git:  
    ```bash
git clone https://github.com/ZamBoyle/Eqla_Git.git
    ```  

5. Faites un: 
    ```cmd
dir
    ```  
    vous devriez y voir un répertoire nommé Eqla_Git

6. Allez dans le répertoire:  
    ```bash
cd Eqla_Git
    ```  

7. Affichez les fichiers:  

    - Windows  
        ```cmd
dir
        ```  
    - Mac/Linux
        ```bash
ls
        ```  

8. Je vais créer un fichier sur le dépot GitHub.

9. Mettez à jour votre dépot:  
    ```bash
git pull
    ```  

10. Chaque semaine, vous ferez un:  
    ```bash
git pull
    ```  
    dans le dépot local de notre cours et le cours se mettra à jour depuis GitHub.

### Présentation de la commande gh

gh est un outil en ligne de commandes qui permet de gérer vos dépots sur GitHub.
L'utilisation de cet outil vient du constat qu'un stagiaire m'a dit que le site internet GitHub n'était pas dutout accessible. 
Si vous tapez:  
```bash
gh 
```  
tout seul dans la console, gh vous affichera son menu d'aide et ses différents paramètres.
Il faut voir gh comme un ensemble de commandes différentes que l'on appelle via des paramètres.
Les commandes principales sont:  

- repo  
    ```bash
gh repo   
    ```  
    pour la gestion des repos

- gist  
    ```bash
gh gist
    ```  
    pour la gestion des gists

- issue  
    ```bash
gh issue
    ```  
    pour la gestion des issues (problèmes rencontrés, demande d'amélioration, etc)

- pr  
    ```bash
gh pr
    ```  
    pour la gestion des pull requests 

- auth  
    ```bash
gh auth
    ```  
    qui permet l'authentification que nous allons voir au point suivant.

### Authentification sur GitHub via gh

La procédure d'Authentification suivante ne devra être faite qu'une fois.
Gh retiendra nos credentials(=Informations d'Authentification).

1. Ouvrez un invite de commandes/terminal.

2. Tapez:  
    ```bash
gh version
    ```  
    si gh est bien installé vous devriez avoir le numéro de version de gh. Par exemple:  
    ```output
gh version 1.8.1
    ```  

3. Tapez:  
    ```bash
gh auth login -s delete_repo
    ```  
    Normalement on utilise  gh auth login mais on va grâce -s delete_repo nous donner le droit de supprimer des repos via gh. 

4. Appuyez sur ENTER à la question "What account do you want to log into ?". Ca va sélectionner Github.

5. Appuyez sur ENTER à la question "What is your prefered protocol for Git operations ?". Ca va sélectionner HTTPS 

6. Appuyez sur ENTER à la question "Authenticate git with your GitHub credentials ? Ca va sélectionner Y pour yes. 

7. Appuyez sur ENTER à la question "How would you like to authenticate GitHub CLI ?" Ca va sélectionner "Login with a web browser"

8. Copiez le one-time code qui s'affiche: par exemple 20B6-5A57

9. Appuyez sur ENTER pour ouvrir un navigateur sur GitHub

10. Sur la page web collez le one-time code.

11. Cliquez sur Continue

12. Cliquez sur Authorize GitHub pour autoriser gh à gérer nos dépots sur GitHub:

13. Entrez votre mot de passe.

14. Cliquez sur "Confirm password".

15. Revenez dans l'invite de commandes.

16. Appuyez sur ENTER pour continuer suite à l'Authentification réussie sur GitHub.

17. Et voilà !!!!! :)

### Creation d'un gist public

Un gist est simplement un partage d'informations. Ca peut être un programme PHP, du c, un listing, du texte, etc.
Bref ça doit être du texte mais vu que l'on est sur GitHub, c'est principalement du code. ;) Via GitHub on peut directement écrire son gist.
L'intérêt d'un gist, c'est qu'il ne fait pas partie d'un dépot.
C'est du code que vous partagez par exemple avec un formateur ou une connaissance.
Si ce code est bugué, on pourra éventuellement vous aider via les commentaires.
S'il est public, tout le monde peut y accéder. S'il est privé, il faudra avoir son url pour y accéder car il ne sera pas trouvable via la recherche GitHub pour tout le monde.
Il est possible à toute personne d'ajouter un commentaire et d'y attacher des fichiers à ce commentaire.
C'est un outil vraiment fort utile.
Vous pourriez donc l'utiliser avec vos formateurs quand vous rencontrez un problème.
Vous donnez l'url de votre gist à la personne.

1. Ouvrez un invite de commandes/terminal.

2. Allez dans un répertoire où vous avez du code.

3. Tapez la commande:  
    ```bash
gh gist create <VotreFichierPHP> -d "Ceci est mon premier gist" -p
    ```  

    - Le paramètre -d donne la description

    - Le paramètre -p met le gist en public.

4. Vous recevez une url pour le partager.

5. Pour vérifier qu'il a été créé:  
    ```bash
gh gist list
    ```  
    Votre nouveau gist devrait être listé.

### clone un dépot hébergé sur GitHub avec la commande gh repo clone

Cette fois-ci nous allons le faire via la commande  
```bash
gh repo clone
```  
En fait l'intérêt principal d'utiliser gh repo clone c'est de rapidement cloner ses
repos mais il peut aussi clone d'autres repos mais autant utiliser alors la commande  
```bash
git clone
```  

1. Ouvrez un invite de commandes/terminal.

2. Allez dans le répertoire mesdepots:  
    ```bash
cd mesdepots
    ```  

3. clonez le dépot distant de notre cours:  
    ```bash
gh repo clone https://github.com/ZamBoyle/Eqla_Git.git EqlaBis
    ```  
    On va nommer le répertoire EqlaBis car nous avons déjà un répertoire Eqla_git

4. Faites un:  
    ```cmd
dir
    ```  
    vous devriez y voir un répertoire nommé EqlaBis

5. Allez dans le répertoire:  
    ```bash
cd EqlaBis
    ```  

6. Affichez les fichiers:  

- Windows:  
        ```cmd
dir
        ```  

    - Mac ou Linux:  
        ```bash
ls
        ```  

7. Je vais créer un fichier sur le dépot GitHub.

8. Mettez à jour votre dépot:  
    ```bash
git pull
    ```  

9. Chaque semaine, vous ferez un:  
    ```bash
git pull
    ```  
    dans le dépot local de notre cours et le cours se mettra à jour depuis GitHub.

### Créer un dépot sur GitHub

Ici, on va créer un dépot sur GitHub et en même temps notre dépot local.

1. Ouvrez un invite de commandes/terminal.

2. Allez dans le répertoire mesdepots:  
    ```bash
cd mesdepots
    ```  

3. Tapez la commande:  
    ```bash
gh repo create MonDepotGitHub --public --confirm
    ```  
    Cette commande va créer un dépot local et distant (GitHub) public.
    Le paramètre --confirm donne notre accord aux questions suivantes:Voulez-vous créer un dépot sur GitHub ?  Voulez-vous créer un dépot local ?

4. Vérifiez que le dépot local a été créé: la commande dir ou ls devrait nous indiquer la présence du répertoire MonDepotGitHub

5. Entrez dans le répertoire MonDepotGitHub:  
    ```bash
cd MonDepotGitHub
    ```  

6. Regardez le statut de votre dépot:  
    ```bash
git status
    ```  

7. Vérifier si GitHub a bien été configuré dans notre dépot:  
    ```bash
git remote -v
    ```  
    On constate que nous avons deux URLs une pour le fetch et un pour
    et une pour le push.

8. Ajoutez des fichiers genius.php et un autre de votre choix dans ce répertoire.

9. Regardez le statut de votre dépot:  
    ```bash
git status
    ```  

10. Ajoutez tous les fichiers dans la zone d'index:  
    ```bash
git add -- genius.php
git add -- <FICHIER2>
    ```  
    Ca copiera tous les fichiers du répertoire courant. 

11. Commitez le tout:  
    ```bash
git commit -m "Initial Commit"
    ```  

12. ```bash  
git push -u origin master
    ```  
    On envoie nos modifications sur le remote origin (ici GitHub) de la branche master.

### Le fichier .gitignore

Il peut arriver que dans votre dépot que vous travaillez sur des fichiers temporaires pour vos tests et programmes.
Il arrive aussi qu'en fonction de votre environnement de développement, celui-ci génère un nombre impressionnant de fichiers.
Il est dès lors peu intéressant, de commiter des fichiers "non utiles" pour notre projet.
Via l'interface web on peut dire qu'on veut un gitignore pour python, visual studio, Unity, R, etc.
Maintenant, il peut arriver que vous travailliez dans un répertoire temporaire.
Pour vos tests, essais et que vous n'avez pas envie de pousser ce répertoire sur GitHub. On ajoutera dans le .gitignore l'information suivante tmp/*
On pourrait aller dans le répertoire .git/info (celui dans lequel il ne faut jamais aller)
et ouvrir le fichier exclude.
L'intérêt de faire ça, c'est que personne n'est au courant que vous avez un répertoire tmp/ avec des fichiers dedans.
En effet, si une personne regarde le .gitignore elle verra la présence du répertoire.

Nous allons en créer un à la main car nous sommes maintenant des ninjas de la ligne de commandes. 

1. Ouvrez un invite de commandes/terminal.

2. Allez dans votre répertoire mesdepots

3. Créez un nouveau dépot:  
    ```bash
gh repo create gitignoreTests --public --confirm
    ```  

4. Allez dans ce répertoire:  
    ```bash
cd gitignoreTests
    ```  

5. Dans ce répertoire gitignoreTests, créez un fichier .gitignore avec visual studio code. Attention que le fichier commence par un point.

6. Ajoutez dans le fichier .gitignore les deux lignes suivantes:  
    ```git
*.temp
password.txt 
    ```  
    On ne met évidemment pas un mot de passe en clair dans un fichier mais plutot dans un gestionnaire de mot de passes: par exemple keepass

7. Sauvegardez ce fichier .gitignore

8. Créez un fichier nommé test.php:  

    - Windows:  
        ```cmd
type nul > test.php
        ```  

    - Mac ou Linux:  
        ```bash
touch test.php
        ```  

9. Vérifiez qu'il a été créé:  
    ```cmd
dir
    ```  

10. Faites un:  
    ```bash
git status
    ```  
    notre fichier test.php est indiqué comme nouveau et n'étant pas dans la zone d'index.

11. Créez un fichier nommé password.txt:  
    ```cmd
type nul > password.txt
    ```  

12. Faites un:  
    ```bash
git status
    ```  
    que constatez-vous ?

13. Créez un fichier nommé dump.tmp:  
    ```cmd
type nul > dump.tmp
    ```  

14. Faites un:  
    ```bash
git status
    ```  
    que constatez-vous ?

15. Créez un fichier nommé password.tata:  
    ```cmd
type nul > password.tata
    ```  

16. Faites un:  
    ```bash
git status
    ```  
    que constatez-vous ? Que pourrions-nous faire pour considérer tous les fichiers commençants par password ?

17. Faites un:  
    ```bash
git add -- <FICHIERS>
    ```  

18. Faites un:  
    ```bash
git commit -m "Track test files"
    ```  

19. Faites un:  
    ```bash
git push -u origin master
    ```  

### Le fichier README.md et le format Markdown

Ce fichier donne des informations sur le dépot en question.
Quand vous avez créé un fichier README.md son contenu est directement affiché sur la page du dépot.
Un peu comme un index.html sur un site internet.
Ce fichier a une structure bien particulière est se base sur Markdown.
Markdown permet de faire une belle mise en page.
L'éttude de Markdown n'entre dans pas dans ce cours.

### Pousser ses tags sur Github

Par défaut, les tags ne sont pas explicitement poussés. Il faut le faire via la commande:  
```bash
git push origin v0.11
```  
enverra le tag v0.1 sur le bon commit.
ou encore:  
```bash
git push origin --tags
```  
enverra tous les tags:  
```bash
git push --follow-tags origin master
```  
enverra les tags lies a la branche master

### Les issues

C'est une partie intéressante de GitHub. On peut signaler un bug ou une demande de fonctionalité via ce qu'on appelle les issues.
Si votre dépot est public, vous pouvez avoir des utilisateurs qui demanderont de l'aide ou une fonctionalité de votre programme PHP par exemple.
Pour créer une issue on rentre dans le dépot local où l'on veut créer une issue.

1. ```bash
cd mesdepots
    ```  

2. ```bash
gh repo create testsIssues --public --confirm
    ```  

3. ```bash
cd testsIssues
    ```  

4. La commante suivante va créer une issue directement sur GitHub pour notre dépot fraîchement créé:  
    ```bash
gh issue create -t "Fichier README.md est manquant" -b "Il manque le fichier README.md en effet !"
    ```  

5. Vérifions que l'issue à été créée:  
    ```bash
gh issue list
    ```  

6. Créer un fichier README.md

7. Mettez en titre 1 le texte suivant: dépot TestsIssues

8. Ajoutez le texte suivant: Ce depôt ne sert que pour tester les issues.

9. Enregistrez-le

10. Faites un:  
    ```bash
git status
    ```  

11. Ajoutez le fichier

12. Faites un:  
    ```bash
git commit -m "#1: Ajout du fichier README.md"  
    ```  
    Le #1 indique que le commit porte sur l'issue 1.
    Lorsque l'on consultera sur GitHub l'issue on vera une référence à notre commit

13. Poussez votre modification sur GitHub:  
    ```bash
git push -u origin master
    ```  

14. Visualisation de l'issue sur GitHub:  
    ```bash
gh issue view 1 --web
    ```  

15. cloture d'une issue via gh de notre issue:  
    ```bash
gh issue close 1
    ```  
    Notre issue sera cloturée

16. Vérifions que l'issue à été cloturée:  
    ```bash
gh issue list
    ```  
    Vous devriez avoir le message suivant:  
    ```output
There are no open issues
    ```  

### Informations de modifications d'un fichier

Pour voir toutes les modifications faites sur un fichier, on utilise la commande git blame.
Par exemple:  

1. ```bash
cd mesdepots
    ```  

2. ```bash
cd Eqla_Git
    ```  

3. ```bash
cd Theo
    ```  

4. ```bash
git blame git.txt
    ```  
    ou:  
    ```bash
git blame -l git.txt
    ```  
    pour avoir le sha1 complet du commit.
    Ca nous affiche les commits, la date de modification, l'auteur et la modification (+ ou -).

### Git stash: garder des modifications non commitées

Il peut arriver que nous ayont besoin de retourner à une version antérieure de notre dépot avec la commande:  
```bash
git checkout V0.1
```  
ou via un sha1.
Cependant, vous avez fait des modifications mais n'avez pas envie de commiter celles-ci car vous n'avez pas terminé.
Dans ce cas, si vous faites:  
```bash
git checkout V1
```  
git vous dira qu'il ne peut revenir à une version antérieure car vous avez des modifications non commitées.
Il vous indiquera que vous pouvez aussi faire un:  
```bash
git commit 
```  
ou un:  
```bash
git stash
```  
Pour le stash, vous faites un:  
```bash
git stash save "Un message portant sur vos modifications"
```  
Ca va indexer ça dans notre zone de Stash.
Heinnnn ??? Une zone de stash ?
Une zone en plus de la zone d'index ? Oui mais à la différence que la zone d'index peut être commitée et non la zone de stash.
Affichons les stashs présents:  
```bash
git stash list
```  
Ensuite, vous pouvez revenir à votre version V0.1:  
```bash
git checkout V1
```  
Revenons à notre tag v0.3:  
```bash
git checkout v3
```  
Affichons les stashs présents:  
```bash
git stash list
```  
Rechargeons nos modifications de la zone de stash:  
```bash
git stash pop 0
```  
(0 car c'est le premier stash et en informatique bcp de choses ont comme premier index le 0)
Si vous avez terminés avec vos modifications ajoutez-les à la zone d'index, commitez et envoyez sur Github si nécessaire.

### Faire un git pull avec une modification en local et distante

Lors du rapatriement du cours un élève m'a dit: monsieur je ne sais pas faire un git pull origin car ça génère une erreur !
En effet, celui-ci a modifié le fichier théorie git.txt pour sans doute corriger des éventuelles erreurs.
On verra ce que nous pourrons faire au chapitre suivant.

### Modifications conflictuelles 

Vous avez un dépot sur GitHub.
Vous bossez sur votre dépot à la maison depuis votre dépot local A sur votre ordinateur.
Votre collègue bosse sur son dépot au boulot depuis son dépot local B sur l'ordinateur de son employeur.

A la maison, vous modifiez votre dépot local A et vous poussez vos modifications sur GitHub.
Votre collègue modifie son dépot local B et il va poussez ses modifications sur GitHub.
Il va rencontrer une erreur:  
```git
hint: Updates were rejected because the remote contains work that you do
hint: not have locally. This is usually caused by another repository pushing
hint: to the same ref. You may want to first integrate the remote changes
hint: (e.g., 'git pull ...') before pushing again.
hint: See the 'Note about fast-forwards' in 'git push --help' for details.
```  

Il faut savoir que git a toujours connaissance du parent de tout commit.
Quand vous avez poussez vos modifications du dépot A sur GitHub, le dépot B n'a pas le dernier commit de GitHub.
Hors, git va constater que le dépot B n'est pas à jour. git propose de faire un git pull auparavant sur le dépot B.
Le pull s'effectue mais git nous signale qu'il va y avoir un ou des conflits et qu'il a "mergé" (fusionné) nos fichiers modifiés locaux avec les distants:  
```git
Auto-merging Theo/git.txt
CONFLICT (content): Merge conflict in Theo/git.txt
Automatic merge failed; fix conflicts and then commit the result.
```  

Deux cas se posent à vous:

- Vous ne voulez pas merger et vous voulez revenir à l'étape avant vos modifications.  
    Faites un:  
    ```bash
git merge --abort 
    ```  
    et vous reviendrez à l'étape précédente.

- Vous voulez analyser le merge effectué: éditez le/les fichiers en question.
    On va supposer que vous voulez garder le merge.
    On doit maintenant manuellement valider les merges(fusions) en éditant le fichier.
    Dans un merge il y a 5 parties:  

    - le début:  
        ```git
<<<<<<< HEAD
        ```  

    - Des modifications locales

    - une suite des caractères pour séparer les modifications locales et distantes::  
        ```git
=======
        ```  

    - Les modifications distantes.

    - la fin:  
        ```git
>>>>>>>
        ```  

A vous de voir ce qui a lieu de garder dans les modifications.
Une fois que c'est fait, vous devez aussi supprimer le:  
```git
<<<<<<< HEAD
```  
```git
=======
```  
```git
>>>>>>>
```  
Vous enregistrez vos modifications.
Vous ajoutez dans la zone d'index, vous commitez et vous poussez vos modifications sur GitHub.

Maintenant notre dépot distant est à jour.
Mais le dépôt B va avoir quelques problèmes car il va vouloir faire un git push qui va ne pas fonctionner car le dépôt A a déjà pushé ses modifs.

dépot local A : C1(A) ===> C2(B) ===> C3(A) ===> C4(A)
GitHub : C1(A) ===> C2(B) ===> C3(A) ===> C4(A)
dépot local B: C1(A) ===> C2(B) ===> C3(A) ===> C4(B)

Le dépot B: fait un git pull mais constate qu'il y a un merge et qu'il devra faire un commit qui va compliquer la lecture de la branche master.

- On fera un:  
    ```bash
git merge --abort
    ```  

- On fera ensuite un:  
    ```bash
git pull --rebase
    ```  
    comme ça le commit parent sera C4(A) et le commit du dépot B deviendra C5(B

dépot local A : C1(A) ===> C2(B) ===> C3(A) ===> C4(A)
GitHub : C1(A) ===> C2(B) ===> C3(A) ===> C4(A)
dépot local B: C1(A) ===> C2(B) ===> C3(A) ===> C4(A) ==> C5(B)    

Mais en faisant ça, on auto merge donc à vous de vérifier ce qu'il y a lieu de faire avant de faire le commit C5(B) et le push.
dépot local A : C1(A) ===> C2(B) ===> C3(A) ===> C4(A)
GitHub : C1(A) ===> C2(B) ===> C3(A) ===> C4(A) ==> C5(B)
dépot local B: C1(A) ===> C2(B) ===> C3(A) ===> C4(A) ==> C5(B)    

Et si le dépôt A fait un git pull:
dépot local A : C1(A) ===> C2(B) ===> C3(A) ===> C4(A) ==> C5(B)    
GitHub : C1(A) ===> C2(B) ===> C3(A) ===> C4(A) ==> C5(B)
dépot local B: C1(A) ===> C2(B) ===> C3(A) ===> C4(A) ==> C5(B)