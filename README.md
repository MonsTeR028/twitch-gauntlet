# Twitch Gauntlet

## 📖 Introduction

**Twitch Gauntlet** est une application web développée avec le framework Symfony, destinée à enrichir l'expérience des streamers Twitch. Elle propose une série de défis basé sur une liste de jeux à terminer à la suite.

### ✨ Fonctionnalités principales

- 🎮 **Défis interactifs** : Offrez à vos spectateurs des défis en temps réel pour dynamiser vos streams.
- 🏆 **Challenge** : Arriverez vous à terminer votre Gauntlet (liste de jeux à gagner à la suite).
- ➕ **Personnalisation** Configurez à souhait votre gauntlet (différents gauntlet, nombre de jeux, jeux, disposition, fenêtre, couleurs, taille, ...) le tout stocker dans vos 🍪.
- 🎥 **Intégration avec OBS** : Compatible avec OBS pour une diffusion fluide et professionnelle.

## 👥 Auteur

- Tristan AUDINOT

---

## 🚀 Installation et Configuration

> **Note** : Le projet étant toujours en phase de tests, celui-ci n'est pas encore disponible en ligne mais vous pouvez le télécharger chez vous çi-dessous.

### 📌 Prérequis

Avant de procéder à l'installation, assurez-vous d'avoir :

- **PHP** (version 8.0 ou supérieure)
- **Composer** (gestionnaire de dépendances PHP)
- **Symfony CLI** (optionnel, mais recommandé)
- **MySQL** ou **MariaDB** (pour la base de données)
- **OBS Studio** (pour l'intégration avec le streaming)

### 📥 Installation
Clonez le dépôt et installez les dépendances :
```bash
composer install
```

### ⚙️ Configuration de l'environnement
1. Dupliquez le fichier `.env` en `.env.local`.
2. Modifiez `.env.local` avec vos identifiants :
```dotenv
DATABASE_URL="mysql://VOTRE_LOGIN:PASSWORD@mysql/VOTRE_LOGIN_pharmacie?serverVersion=10.2.25-MariaDB&charset=utf8mb4"
```
3. Créez la base de données :
```bash
composer db
```

### 🖥️ Démarrage du serveur
Lancez le serveur avec :
```bash
composer start
```
Puis accédez à : [https://127.0.0.1:8000/](https://127.0.0.1:8000/)

---

## ✅ Vérifications et Qualité du Code

### 🔍 Vérification du code
```bash
composer test:phpcs  # Vérification PHP
composer test:twigcs  # Vérification Twig
composer test  # Vérification complète
```

### 🔧 Correction automatique
```bash
composer fix:phpcs  # Correction PHP
composer fix:twigcs  # Correction Twig
composer fix  # Correction complète
```

## 📩 Contact et Support
Pour toute question, suggestion ou contribution, veuillez ouvrir une issue sur le dépôt GitHub ou contacter l'auteur principal.

### 🚀 Bon développement et amusez-vous avec Twitch Gauntlet !
