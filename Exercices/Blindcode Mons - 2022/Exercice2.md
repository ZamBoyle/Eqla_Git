Exercice N°2
============
Vous allez travailler par équipe de la manière suivante:
Equipe A: Isaac(G) & Bruno(C1)
Equipe B: Jessie(G) & Mahsum(C1) & Eleonor(C2)
Equipe C: Maxime(G) & Alain(C1)

(G) correspond au gestionnaire du dépôt créé sur GitHub.

Partie 1
a. (G) va allez créer un répo sur github: qui s'appellera together. 
b. (G) donnera accès aux membres de son équipe dans GitHub.
c. Vos équipiers vont recevoir un email leurs indiquant que vous les invitez à collaborer sur votre dépôt.
d. Dans le mail, les équipiez cliqueront sur "View Invitation".
e. Ils Cliqueront ensuite sur: Accept Invitation.

Partie 2 
a. (G) va copier dans le dépôt local le fichier genius.py
b. Dans ce fichier genius.py, vous ne gardez que les fonctions Add, Substract, Divide, Multiply. Vous supprimez donc tous les inputs et les print et les affectations hors fonctions.
c. (G) pousse sont dépôt local sur GitHub (en ayant pris en compte auparavant le nouveau fichier genius.py)
d. Vos équipiés vont cloner le dépôt distant avec git clone.

Equipe A: Bruno
git clone https://github.com/zackakyo/together.git

Equipe B: Mahsum & Eleonor
git clone https://github.com/jessiebak/together.git

Equipe C: Alain
https://github.com/maximeborsen/together.git

Partie 3
a. Un de vous va faire un fichier area.py qui contiendra les fonctions de calculs pour calculer l'aire des surfaces suivante: rectangle, cercle, carré, triangle. Les noms de fonctions seront: RectangleArea, CircleArea, SquareArea, TriangleArea.
b. L'autre fera un fichier nommé perimeter.py qui contiendra les fonctions de calculs pour calculer la circonférence des surfaces suivante: rectangle, cercle, carré, triangle. Les noms de fonctions seront: RectanglePerimeter, CirclePerimeter, SquarePerimeter, TrianglePerimeter.
c. A chaque création de fonction, vous enverrez vos modifications sur Github.
d. Mettez à jour vos dépôts sans utilisez de tags.
e. Un de vous va créer le fichier main.py et ajoutera le code suivant (vive le copier/coller):
import genius
import area
import perimeter

print("Genius.py")
print("=========")
print("3 + 4 = " + str(genius.Add(4, 3)))
print("9 - 3 = " + str(genius.Substract(9, 3)))

print("area.py")
print("=======")
print("L'aire du carré de 4 cm de côté = " + str(area.SquareArea(4)))
print("L'aire du rectangle de longueur 7 cm et 4 cm de largeur = " + str(area.RectangleArea(7,4)))

f. Envoyez vos modifications sur GitHub.
g. L'autre va récupérer les modifications du dépôt distant sur son dépôt local.
h. Et il va compléter le fichier main.py avec le code suivant:

print("L'aire du cercle ayant un rayon de 4 cm = " + str(area.CircleArea(4)))
print("L'aire du triangle ayant une base de 4 cm et une hauteur de 7 cm = " + str(area.TriangleArea(4,7)))

print("perimeter.py")
print("============")
print("Le périmètre du carré de 4 cm de côté = " + str(perimeter.SquarePerimeter(4)))
print("L'aire du rectangle de longueur 7 cm et 4 cm de largeur = " + str(perimeter.RectanglePerimeter(7,4)))
print("L'aire du cercle ayant un rayon de 4 cm = " + str(perimeter.CirclePerimeter(4)))
print("L'aire du triangle ayant pour côtés 14, 7 et 9 cm  = " + str(perimeter.TrianglePerimeter(14,7,9)))

i. Vous envoyez les modifications sur GitHub et les autres mettront à jour leur dépôt local.
j. Testez tous dans votre dépôt local votre programmes.
k. Si ça ne fonctionne pas, concertez vous :)

Partie 4 - Création du fichier README.md
a. L'un de vous va créer un fichier README.md avec comme contenu: # Super Programme de Mathématique
b. Vous le pousser sur GitHub.
c. Les autres vont récuperer en local les modifications distantes.

Partie 5 - Modifications conflictuelles
a. (G) va faire une nouvelle modification et va la pousser sur GitHub: ## J'ai été ajouté par VotrePrénom
b. Aucune personne de l'équipe ne fait pas de mise à jour du dépôt local pour l'instant.
c. Un collaborateur va modifier aussi modifier le fichier README.md de son dépôt local et ajouter: # J'ai été ajouté par VotrePrénom
d. Ce collaborateur va pousser son dépôt local sur GitHub. Normalement ça devrait dire que ça ne fonctionne pas.
e. Ce collaborateur va faire un git pull: git nous dit qu'il a fait un merge.
f. Ce collaborateur va modifier le fichier README.md et voir ce qui doit être gardé entre le <<<<<<< HEAD et >>>>>>>
g. Ce collaborateur va décider ce qui devait être gardé (ça peut être tout)
h. Ce collaborateur va supprimer ensuite trois choses du fichier: <<<<<<< HEAD, ======= et >>>>>>>
i. Ce collaborateur va Envoyer ses modifications sur GitHub.
j. Tout le monde va mettre à jour son dépôt local.








