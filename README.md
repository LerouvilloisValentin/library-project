# Bibliothèque - Application de Gestion de Livres

## Objectif
Développer une application Angular permettant de gérer une bibliothèque de livres. L'application doit permettre d'ajouter, de modifier et de supprimer des livres, ainsi que de consulter les détails de chaque livre.

## Fonctionnalités

1. **Affichage de la liste des livres**
   - Créer un composant `BookListComponent` qui affiche la liste des livres.
   - Chaque livre doit afficher son titre, son auteur et son statut (disponible ou emprunté).

2. **Ajout de livres**
   - Créer un composant `AddBookComponent` qui permet d'ajouter un nouveau livre.
   - Utiliser un formulaire réactif pour collecter les informations du livre (titre, auteur, description, statut).

3. **Modification de livres**
   - Créer un composant `EditBookComponent` qui permet de modifier les informations d'un livre existant.
   - Utiliser un formulaire réactif pour mettre à jour les informations du livre.

4. **Suppression de livres**
   - Ajouter une fonctionnalité pour supprimer un livre de la liste.

5. **Consultation des détails d'un livre**
   - Créer un composant `BookDetailComponent` qui affiche les détails complets d'un livre lorsque l'utilisateur clique sur un livre dans la liste.
   - Utiliser les routes pour naviguer vers la vue des détails du livre.

6. **Navigation et routes**
   - Configurer les routes pour naviguer entre les différents composants (`BookListComponent`, `AddBookComponent`, `EditBookComponent`, `BookDetailComponent`).
   - Utiliser le router d'Angular pour gérer la navigation.

## Modalités

- Tout rendu doit se faire au travers d’un dépôt git et être accessible avant la fin du cours de vendredi.
- Fournir un fichier contenant le lien vers votre dépôt, le nom des personnes ayant travaillé sur le projet (vous êtes en binôme) et quelques lignes sur les difficultés rencontrées. Le fichier est à rendre sur la plateforme spécifiée par l'instructeur.
- Utiliser une API Rest via un serveur JSON.
- Intégrer Bootstrap ou Notion.
- Le projet doit se faire en binôme.
- Mettre en pratique les concepts appris : components, routes, templates, formulaires, etc.

## Critères de notation

- Résultat de l’application.
- Fonctionnalités opérationnelles.
- Structure du code et son taux de commentaires (en mettre quand c’est nécessaire).
- Respect des normes EMACS et utilisation des fonctionnalités Angular 18.

## Déploiement et Installation

1. Cloner le dépôt :
   ```bash
   git clone https://github.com/LerouvilloisValentin/biblio-project.git
