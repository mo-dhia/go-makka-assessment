## GO-MAKKAH — Guide d’utilisation (non-technique)

Bienvenue sur le site d’information GO‑MAKKAH dédié au Hajj 2026. Ce guide explique simplement comment naviguer, quoi trouver sur chaque page, et à quoi s’attendre côté ergonomie (ordinateur et mobile).

### Ce que vous allez trouver
- **Informations Hajj 2026**: contexte, étapes, conseils pratiques, et nos offres.
- **Parcours clair**: sections pédagogiques, galerie Makkah, FAQ.
- **Contact rapide**: téléphone et adresse en haut du site.
- **Connexion Google**: pour accéder à un espace personnalisé (nom affiché dans l’en‑tête).

## Navigation et en‑tête

- **Bandeau rouge (haut de page)**: contient le nom GO‑MAKKAH, une accroche, le numéro de téléphone et l’adresse.
- **Barre de navigation**: liste des pages principales (Accueil, Hajj, etc.).
  - **Sélecteur animé**: lorsque vous changez de page, un indicateur se déplace avec une **animation fluide** pour souligner le lien actif.
  - **Comportement au défilement (scroll)**: si vous faites défiler vers le bas et dépassez la hauteur du bandeau rouge, la **barre de navigation se masque** automatiquement pour **gagner de la place** (notamment sur mobile). Elle **réapparaît** dès que vous remontez.
  - **Menu mobile**: un bouton « hamburger » ouvre un **tiroir latéral** avec les mêmes liens. Touchez un élément pour naviguer; le menu se referme automatiquement.
- **Connexion**: le bouton « Connectez‑vous » utilise **Google**. Une fois connecté, votre **nom** (ou e‑mail) s’affiche. La déconnexion peut se faire depuis votre compte Google/sessions.
- **Espace client**: bouton visible dans l’en‑tête. S’il n’ouvre aucune page, c’est qu’il est **en préparation**.

## Pages et sections principales

- **Accueil**: courte page d’introduction qui vous redirige vers la page Hajj.
- **Hajj 2026**: page principale, organisée en sections claires:
  - **Contexte**: comprendre les enjeux actuels du Hajj.
  - **Support technique**: accompagnement, outils et assistance.
  - **Problèmes / Solutions**: difficultés fréquentes et nos réponses concrètes.
  - **Comment ça marche**: étapes du parcours et fonctionnement.
  - **Infos pratiques**: informations utiles pour préparer votre pèlerinage.
  - **Stratégie**: notre approche et nos engagements.
  - **Pourquoi nous**: ce qui différencie GO‑MAKKAH.
  - **Makkah (galerie)**: visuels pour vous projeter.
  - **Sérénité**: focus sur l’offre « Hajj Sérénité ».
  - **FAQ**: réponses aux questions récurrentes.

## Espace administrateur (usage interne)

Une page **/admin** est prévue pour les équipes.
- **Liste des demandes**: affichage des inscriptions avec tri, recherche (nom, e‑mail, téléphone) et filtre par type d’offre (Hajj Assistance / Hajj Sérénité).
- **Fiche détaillée**: cliquez sur une carte pour voir les détails (nom, e‑mail, téléphone, notes, identifiants, date). Fermez avec la croix ou la touche Échap.

Remarque: cette section nécessite une configuration Supabase côté serveur et ne concerne pas l’utilisateur final.

## Authentification

- **Connexion Google**: vous pouvez vous connecter avec votre compte Google. Le site vous demandera de choisir un compte (sélecteur Google).
- **Retour automatique**: après connexion, vous êtes redirigé vers la page Hajj.
- **Affichage du nom**: votre nom (ou e‑mail) apparaît dans l’en‑tête.

## Conseils d’utilisation (mobile et desktop)

- Si la **barre de navigation disparaît**, remontez légèrement: elle **revient** automatiquement.
- Le **menu hamburger** ouvre le menu latéral; touchez un lien pour naviguer.
- Sur certaines sections longues, faites défiler pour **tout découvrir** (steps, infos, FAQ, etc.).

## Besoin d’aide ?

- Utilisez le **numéro de téléphone** visible en haut du site pour un contact direct.
- L’**adresse** s’ouvre dans Google Maps si vous touchez/cliquez dessus.

## (Optionnel) Tester en local

Si vous souhaitez uniquement naviguer (sans être développeur), cette section n’est pas nécessaire. Sinon:

```bash
npm install
npm run dev
```

Ouvrez ensuite `http://localhost:3000` dans votre navigateur.

— L’équipe GO‑MAKKAH
