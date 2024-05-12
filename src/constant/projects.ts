export interface IProject {
  title: string;
  description: string;
  image: string;
  url: string;
}

export const enProjects: IProject[] = [
  {
    title: "Walletoo - Personal Finance Manager",
    description:
      "Walletoo is a personal finance management assistant. It enables straightforward financial management by simply logging in and entering monthly income and expenses. Walletoo calculates disposable income and provides suggestions for savings, graphs, etc.",
    image: "/walletoo.webp",
    url: "https://walletoo.vercel.app/",
  },
  {
    title: "Workout Session Generator [mobile-friendly only]",
    description:
      "ma-sante.fr is a workout session generator 💪. This web app generates sessions with different exercises to optimize results. Accompanied by an animated GIF, the exercises are easy to reproduce.",
    image: "/workoutGenerator.webp",
    url: "https://ma-seance.vercel.app/",
  },
  {
    title: "Piano",
    description:
      "From recording the sound of the keys to design, this project taught me how to handle events and performance! Plus, you can spend hours on it without needing to buy one 🤓",
    image: "/piano.webp",
    url: "https://brazillierjo.github.io/piano/",
  },
  {
    title: "Vitassurance",
    description:
      "Insurance brokerage website that allows you to quickly compare offers from different insurers. Once the visitor fills out the form, their information is sent via an API to a CRM to manage the new client's file.",
    image: "/vitassurance.webp",
    url: "https://vitassurance.fr/",
  },
  {
    title: "Web Calculator",
    description:
      "Project carried out to deepen my knowledge of Vanilla JavaScript. You can choose between basic calculations or advanced calculations. Learning light/night mode.",
    image: "/calculator.webp",
    url: "https://brazillierjo.github.io/calculator/",
  },
  {
    title: "Markdown Previewer",
    description: "Markdown project created for a React training. Deployed on GitHub Pages.",
    image: "/markdown.webp",
    url: "https://brazillierjo.github.io/markdown/",
  },
];

export const frProjects: IProject[] = [
  {
    title: "Walletoo - L'assistant de gestion de finances",
    description:
      "Walletoo est un assistant de gestion de finances personnelles. Il permet de gérer ses finances en toute simplicité. Il suffit de se connecter et d'entrer ses revenus et ses charges mensuelles. Walletoo se charge de calculer le reste à vivre et de vous proposer des solutions d'épargne, des graphiques etc.",
    image: "/walletoo.webp",
    url: "https://walletoo.vercel.app/",
  },
  {
    title: "Générateur de séance de musculation [mobile-friendly only]",
    description:
      "ma-sante.fr est un gérénateur de séance de musculation 💪. Cette web app se charge de générer des séances avec des exercices toujours différents afin d'optimiser les résultats. Accompagné d'un GIF animé, les exercices sont faciles à reproduire.",
    image: "/workoutGenerator.webp",
    url: "https://ma-seance.vercel.app/",
  },
  {
    title: "Piano",
    description:
      "De l'enregistrement du son des clés jusqu'au design, ce projet m'a appris à gérer les évènements et les performances ! En plus, on peut y passer des heures sans avoir besoin d'en acheter un 🤓",
    image: "/piano.webp",
    url: "https://brazillierjo.github.io/piano/",
  },
  {
    title: "Vitassurance",
    description:
      "Site de courtage en assurances vous permettant de comparer rapidement les offres des différents assureurs. Une fois le formulaire rempli par le visiteur, ses informations sont transmises via une API à un CRM afin de gérer le dossier du nouveau client.",
    image: "/vitassurance.webp",
    url: "https://vitassurance.fr/",
  },
  {
    title: "Web Calculator",
    description:
      "Projet réalisé dans le but d'approfondir mes connaissances JavaScript Vanilla. Vous pouvez choisir entre des calculs de base ou des calculs avancés. Apprentissage du light/night mode.",
    image: "/calculator.webp",
    url: "https://brazillierjo.github.io/calculator/",
  },
  {
    title: "Markdown Previewer",
    description: "Markdown réalisé dans le but d'une formation React. Déployé sur GitHub Pages.",
    image: "/markdown.webp",
    url: "https://brazillierjo.github.io/markdown/",
  },
];
