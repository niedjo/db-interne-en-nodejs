
# DB Interne en Node.js

[![GitHub license](https://img.shields.io/badge/license-MIT-blue.svg)](https://github.com/niedjo/db-interne-en-nodejs/blob/main/LICENSE)
[![Node.js](https://img.shields.io/badge/Node.js-16.x-green.svg)](https://nodejs.org/)

## Description

Ce projet est une API simple créée avec Express.js et NeDB (une base de données légère en mémoire pour Node.js). Elle permet de gérer des opérations CRUD (Create, Read, Update, Delete) sur une base de données interne. Le projet expose des routes pour créer, lire, mettre à jour et supprimer des enregistrements via des requêtes HTTP.

## Fonctionnalités

- **Créer** un nouvel enregistrement dans la base de données.
- **Lire** tous les enregistrements ou un enregistrement spécifique à partir de son identifiant.
- **Mettre à jour** un enregistrement existant.
- **Supprimer** un enregistrement à partir de son identifiant.

## Prérequis

- [Node.js](https://nodejs.org/) (version 16.x ou supérieure)

## Installation

1. Clonez le repository sur votre machine locale.

   ```bash
   git clone https://github.com/niedjo/db-interne-en-nodejs.git
   ```

2. Accédez au répertoire du projet.

   ```bash
   cd db-interne-en-nodejs
   ```

3. Installez les dépendances nécessaires.

   ```bash
   npm install
   ```

## Utilisation

1. Pour démarrer le serveur, exécutez la commande suivante :

   ```bash
   npm start
   ```

   Le serveur sera accessible à l'adresse suivante : `http://localhost:3000`

2. Utilisez les routes suivantes pour interagir avec l'API :

   - **POST** `/api/perso` : Crée un nouvel enregistrement.
   - **GET** `/api/perso` : Récupère tous les enregistrements.
   - **GET** `/api/perso/:id` : Récupère un enregistrement spécifique par son identifiant.
   - **PATCH** `/api/perso/:id` : Met à jour un enregistrement spécifique par son identifiant.
   - **DELETE** `/api/perso/:id` : Supprime un enregistrement spécifique par son identifiant.

### Exemples de requêtes

- **Créer un enregistrement** :

  ```bash
  curl -X POST http://localhost:3000/api/perso -H "Content-Type: application/json" -d '{"name": "John Doe", "age": 30}'
  ```

- **Lire tous les enregistrements** :

  ```bash
  curl http://localhost:3000/api/perso
  ```

- **Lire un enregistrement spécifique** :

  ```bash
  curl http://localhost:3000/api/perso/ID_DE_L_ENREGISTREMENT
  ```

- **Mettre à jour un enregistrement** :

  ```bash
  curl -X PATCH http://localhost:3000/api/perso/ID_DE_L_ENREGISTREMENT -H "Content-Type: application/json" -d '{"age": 31}'
  ```

- **Supprimer un enregistrement** :

  ```bash
  curl -X DELETE http://localhost:3000/api/perso/ID_DE_L_ENREGISTREMENT
  ```

## Auteur

**Niedjo**  
[GitHub](https://github.com/niedjo)

## License

Ce projet est sous licence MIT.