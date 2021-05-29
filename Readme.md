Border color
 "color-basic-1000": "#DBDBDB",
 "background-basic-color-3": "$color-basic-1000",

 Bacground
 "color-basic-200": "#EEEEEE",
 "background-basic-color-1": "$color-basic-200",

 icone color
 "color-basic-900": "#292929",
 "text-hint-color": "$color-basic-900",

 Text h
 color-primary-800
 "text-basic-color":"$color-primary-800",

##Texte et icônes
Outre les arrière-plans, les couleurs du texte et des icônes sont contrôlées par les nuances de base. Dans un thème sombre, les couleurs du texte utilisent la partie supérieure des nuances (couleurs blanchâtres) et les arrière-plans de la partie inférieure.

Parfois, il est nécessaire de rendre le texte plus clair ou plus sombre sans modifier la palette de base afin de ne pas casser les arrière-plans. Cela peut être fait en configurant des variables de texte supplémentaires. Jetons un coup d'œil aux plus utiles d'entre eux:

`text-basic-color` utilisé partout comme couleur de texte par défaut.
`text-hint-color` utilisé pour les espaces réservés, les étiquettes, les légendes, les sous-titres et les icônes dans son état par défaut.
`text-disabled-color` utilisé dans chaque contrôle dans un état désactivé.

`"text-basic-color": "$color-basic-400"`

##Arrière-plans et bordures
Les arrière-plans et les bordures sont contrôlés avec la couleur de base.

Il existe 11 nuances de couleur de base. Afin de changer correctement les arrière-plans, chacun d'eux doit être configuré. Pour ce faire, nous reviendrons peut-être à Eva Colors . Commencez par choisir la teinte la plus claire de l'arrière-plan (généralement, elle est complètement blanche dans les thèmes clairs) et descendez avec précision en choisissant des nuances plus sombres.
`"color-basic-100": "#FFFFFF"`
`"color-basic-..1100": "..."`
###Backgrounds
Il y a 6 nuances de transparence dans Eva. Choisissez la valeur color-basic-600 et transformez-la au format rgba en ajoutant un canal alpha. Dans Eva, on commence avec 8% de transparence et on progresse en l'augmentant sur la même valeur.
`"color-basic-transparent-100": "rgba(128, 128, 128, 0.08)",`
`"color-basic-transparent-..600": "rgba(128, 128, 128, 0.48)",`

##Typologie
À l'étape précédente, nous avons fait en sorte qu'une seule police soit utilisée globalement. Au cas où nous aurions besoin de le configurer plus précisément, nous pouvons utiliser des catégories de texte. Une seule catégorie de texte contrôle fontSize, fontWeightet fontFamily.

Il y a 13 catégories de texte dans Eva:

- Titres: h1, h2 ... h6
- Sous-titres: s1 et s2
- Paragraphes: p1 et p2
- Légendes: c1 et c2
- Étiquetes.
