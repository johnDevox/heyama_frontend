![Preview](/frontend/assets/images/image.png)

## Description du projet 

Ce projet est une petite application Next.js qui permet de créer, lister et supprimer des "objets" (items) enrichis d'un titre, d'une description et d'une image. Principales fonctionnalités :

- Formulaire de création d'objet avec upload d'image (multipart/form-data).
- Liste d'objets affichée en grille.
- Page de détail pour chaque objet (`/objects/[id]`).
- WebSocket (socket.io) pour recevoir en temps réel les événements : `object:created` et `object:deleted`.

Le frontend consomme une API externe (baseURL définie via la variable d'environnement `NEXT_PUBLIC_API_URL`) et se connecte à un serveur de sockets via `NEXT_PUBLIC_SOCKET_URL`.

### Points techniques

- Next.js app router (dossier `app/`).
- TypeScript pour le typage (type `AppObject` utilisé pour les objets).
- Utilisation de `next/image` pour optimisation d'images.
- Socket.io client pour les notifications temps réel.
- Composants UI réutilisables dans `components/ui`.

## Comment lancer le serveur (développement et production)



1. Installer les dépendances :

```powershell
cd c:\Users\JOHN\OneDrive\Desktop\Next\frontend
npm install
```

2. Lancer le serveur en mode développement (live reload) :

```powershell
npm run dev
# ouvre http://localhost:3000
```

3. Construire et lancer en production :

```powershell
# build (génère la version optimisée)
npm run build

# lancer la version buildée
npm start
```

4. Variables d'environnement importantes (à définir dans `.env.local` à la racine du projet) :

- `NEXT_PUBLIC_API_URL` : URL de l'API REST (ex: https://api.example.com)
- `NEXT_PUBLIC_SOCKET_URL` : URL du serveur socket.io (ex: wss://sockets.example.com)

Exemple de `.env.local` :

```text
NEXT_PUBLIC_API_URL=https://api.example.com
NEXT_PUBLIC_SOCKET_URL=https://api.example.com/socket
```

---

# Génère la migration depuis ton entité existante
npm run migration:generate -- src/migrations/InitSchema

# Vérifie que le fichier a bien été créé
ls src/migrations/