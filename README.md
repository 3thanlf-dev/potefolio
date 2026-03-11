# Portfolio d'Ethan

Site statique présentant le CV, les diplômes et d'autres pages personnelles.

## Description

Ce dépôt contient une version simple d'un portfolio personnel (site statique). Il regroupe une page d'accueil, des pages de rubriques, un CV au format PDF, un formulaire de contact de test, des scripts JavaScript, une feuille de style et des ressources (images, données).

## Structure du projet

- `index.html` — page d'accueil
- `css/stylesheet.css` — styles globaux
- `data/BD.xml` — données utilisées par le site
- `img/` — ressources images
- `page/` — pages secondaires : avis.html, diplomes.html, etudesup.html, formulaire.html, j-lycee.html, MonCVPDF.html, rubrique1.html, rubrique3.html
- `script/` — scripts JavaScript : script1.js, script2.js

## Mise en route (local)

1. Ouvrir `index.html` dans votre navigateur (double-cliquer). Pour un rendu plus fidèle aux environnements web, lancer un serveur local :

```bash
# avec Python 3
python -m http.server 8000

# puis ouvrir http://localhost:8000
```

Ou utilisez l'extension "Live Server" de VS Code pour un rechargement automatique.

## Édition
- seulement dans la branche dev
- Modifiez les pages HTML dans le dossier `page/` ou `index.html` pour changer le contenu.
- Mettez à jour les styles dans `css/stylesheet.css`.
- Les scripts sont dans `script/`.
- Les images vont dans `img/`.

## Déploiement

- Déploiement simple : hébergement statique (GitHub Pages, Netlify, Vercel, etc.). Pour GitHub Pages, poussez le contenu sur la branche `main` ou `gh-pages` selon votre configuration et activez GitHub Pages dans les settings.

## Suggestions d'amélioration

- Rendre le site responsive (méta viewport + media queries).
- Ajouter des balises meta et OpenGraph pour améliorer le référencement et le partage.
- Valider l'accessibilité (contraste, attributs alt, navigation clavier).

## Auteur

Ethan

## Licence

MIT — voir le fichier LICENSE si vous souhaitez ajouter une licence formelle.
