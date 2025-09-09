## GO-MAKKAH — Guide d’utilisation (démo/test, non-technique)

Bienvenue sur la démo GO‑MAKKAH (Hajj 2026). Cette version est prévue pour montrer le fonctionnement à un décideur (pas de public réel). Ci‑dessous: ce que vous pouvez cliquer et ce qui se passe.

### Ce que vous allez trouver
- **Informations Hajj 2026**: contexte, étapes, conseils pratiques, et nos offres.
- **Parcours clair**: sections pédagogiques, galerie Makkah, FAQ.
- **Contact rapide**: téléphone et adresse en haut du site.
- **Connexion Google**: pour accéder à un espace personnalisé (nom affiché dans l’en‑tête).

## Ce que vous pouvez cliquer (et ce qui se passe)

- **Téléphone (« 01 49 87 70 21 »)**: c’est un bouton cliquable.
  - Sur mobile: ouvre l’application téléphone avec le **numéro déjà rempli**.
  - Sur ordinateur: lance le lien `tel:` (selon votre configuration, il peut vous proposer une application d’appel). Aucun appel n’est passé automatiquement sans confirmation.
- **Adresse (« 32 avenue Pierre Semarde, 94200 »)**: ouvre **Google Maps dans un nouvel onglet** pour vous guider.
- **Connectez‑vous**: déclenche la **connexion Google**.
  - Google vous demande de **sélectionner un compte**.
  - Après connexion, vous êtes redirigé vers **Hajj**; votre **nom** ou **e‑mail** s’affiche en haut à droite.
  - C’est une démo: vous pouvez annuler la fenêtre Google si vous ne souhaitez pas tester la connexion.
- **Espace client**: bouton visible, **fonctionnalité en préparation** (peut ne pas ouvrir de page).
- **Menu hamburger (mobile)**: ouvre un **tiroir latéral** avec les mêmes liens que la barre de navigation.
  - Touchez un lien pour naviguer; le menu se **referme automatiquement**.
  - Touchez l’arrière‑plan ou appuyez sur **Échap** pour **fermer** le menu.

## Navigation et en‑tête

- **Bandeau rouge (haut de page)**: contient le nom GO‑MAKKAH, une accroche, le numéro de téléphone et l’adresse.
- **Barre de navigation**: liste des pages principales (Accueil, Hajj, etc.).
  - **Sélecteur animé**: quand vous cliquez/allez sur une page, la **barre indicatrice glisse** pour se placer sous le lien actif.
  - **Défilement (scroll)**: après avoir dépassé la hauteur du bandeau rouge, la **barre de navigation se cache** pour **gagner de la place** (surtout en mobile). Elle **réapparaît** dès que vous **remontez** un peu.
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
  - **FAQ**: questions cliquables avec ouverture/fermeture (une à la fois), animation fluide.

## Espace administrateur (usage interne)

Une page **/admin** est prévue pour les équipes.
- **Liste des demandes**: affichage des inscriptions avec tri, recherche (nom, e‑mail, téléphone) et filtre par type d’offre (Hajj Assistance / Hajj Sérénité).
- **Fiche détaillée**: cliquez sur une carte pour voir les détails (nom, e‑mail, téléphone, notes, identifiants, date). Fermez avec la croix ou la touche Échap.
- **Source des données**: les cartes affichent la table **`subscriptions`** (hébergée sur Supabase) triée par **date** la plus récente.

Remarques:
- Cette section s’appuie sur **Supabase** (base de données cloud).
- En **démo**, il est possible que la liste soit **vide**, c’est normal.

## Que se passe‑t‑il quand vous cliquez sur « Inscrivez‑vous vite ! » (Hajj Assistance / Sérénité)

Dans la section « Pourquoi nous », chaque carte contient un bouton **Inscrivez‑vous vite !**.

- **Si vous n’êtes pas connecté**:
  - Le site ouvre la **fenêtre Google** pour choisir votre compte.
  - Votre intention est **mémorisée** (type choisi: Assistance ou Sérénité).
  - Après connexion, vous êtes **redirigé automatiquement** sur la page Hajj et le **formulaire d’inscription se rouvre** tout seul.
- **Si vous êtes connecté**:
  - Le **formulaire** s’ouvre directement (dans une fenêtre au premier plan).
  - Vous renseignez: **Nom complet**, **Téléphone**, **Notes (optionnel)**.
  - Au clic sur **Confirmer**, une **inscription** est enregistrée dans la base de données.
  - Vous voyez un **message de confirmation**; l’équipe voit la demande **dans /admin** immédiatement.

Données enregistrées (table `subscriptions`):
- `user_id`, `user_email` (issus de Google),
- `full_name`, `phone`, `notes` (saisi),
- `package_type` = `assistance` ou `serenite`,
- `created_at` (date/heure d’enregistrement).

## Authentification

- **Connexion Google**: vous pouvez vous connecter avec votre compte Google. Le site vous demandera de choisir un compte (sélecteur Google).
- **Retour automatique**: après connexion, vous êtes redirigé vers la page Hajj.
- **Affichage du nom**: votre nom (ou e‑mail) apparaît dans l’en‑tête.

## Intégration base de données (Supabase) — aperçu

- Le site stocke les **inscriptions** dans **Supabase**.
- Côté navigateur, la connexion s’effectue via la **clé publique** et l’URL du projet.
- Variables d’environnement nécessaires pour une exécution locale (optionnel):
  - `NEXT_PUBLIC_SUPABASE_URL`
  - `NEXT_PUBLIC_SUPABASE_ANON_KEY`
- Les données apparaissent ensuite dans la page **/admin** (lecture) et sont créées depuis la modale d’inscription (écriture).

## Conseils d’utilisation (mobile et desktop)

- Si la **barre de navigation disparaît**, remontez légèrement: elle **revient** automatiquement.
- Le **menu hamburger** ouvre le menu latéral; touchez un lien pour naviguer.
- Sur certaines sections longues, faites défiler pour **tout découvrir** (steps, infos, FAQ, etc.).

## Comportements visuels et responsivité

- **Site 100% responsif**: l’interface s’adapte à tous les écrans (mobile, tablette, ordinateur).
  - L’en‑tête compacte ses éléments; la navigation devient **menu hamburger** sur mobile.
  - Les grilles (ex: **/admin**) réduisent automatiquement le nombre de colonnes.
  - Les tailles de texte et les espacements s’ajustent pour rester lisibles.
- **Effets de survol (hover)**:
  - Sur **/admin**, les **cartes** se **soulèvent légèrement** et gagnent une **ombre** au survol.
- **Animations**:
  - **Sélecteur du menu** qui **glisse** sous le lien actif.
  - **Barre de navigation** qui **se masque** en défilement descendant et **réapparaît** en remontant.
  - **Menu latéral mobile** qui **glisse** à l’ouverture/fermeture.
  - **FAQ** qui **s’agrandit/rétrécit** en douceur au clic.
  - **Modales** (admin) avec **apparition** douce et fond assombri.
- **Accessibilité pratique**:
  - Touche **Échap**: ferme le **menu mobile** et les **modales** (admin).
  - Clic sur l’**arrière‑plan**: ferme le menu/modale.

## Parcours express pour « voir » la démo (3 minutes)

1. Ouvrez la page d’accueil, puis allez sur **Hajj 2026**.
2. Faites **défiler** vers le bas: constatez que la **barre de navigation se cache**, puis **remontez** pour la revoir.
3. Appuyez sur le **numéro de téléphone**: sur mobile, l’**appel** est prêt; sur PC, un prompt peut s’ouvrir.
4. Cliquez sur l’**adresse**: **Google Maps** s’ouvre dans un nouvel onglet.
5. Essayez **Connectez‑vous**: Google affiche le sélecteur de compte; annulez si vous ne souhaitez pas vous connecter.
6. Sur mobile, ouvrez le **menu hamburger**, puis touchez un lien; le menu se **referme**.
7. (Optionnel) Allez sur **/admin**: testez la **recherche**, le **filtre**, et **cliquez** une carte pour voir la **fiche**; fermez avec **×** ou **Échap**.

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
