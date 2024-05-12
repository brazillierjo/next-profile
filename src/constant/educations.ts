export interface IEducation {
  company: string;
  title: string;
  years: string;
  skills: string[] | null;
}

export const enEducations: IEducation[] = [
  {
    company: "3WAcademy",
    title: "(BSc) Web and Mobile Applications Integration/Development",
    years: "2020 - 2021",
    skills: ["React", "NodeJS", "MySQL"],
  },
  {
    company: "OpenClassrooms",
    title: "Web Developer - Level 5 RNCP Certification",
    years: "2020",
    skills: ["HTML", "CSS", "JavaScript", "MySQL", "Vue"],
  },
  {
    company: "University of Toulon",
    title: "(BSc) E-commerce & Digital Marketing",
    years: "2016 - 2017",
    skills: ["Team Management", "Marketing", "Digital Marketing", "SEO", "E-commerce"],
  },
  {
    company: "Défi83 - Toulon",
    title: "(Associate's Degree) Business Unit Management",
    years: "2014 - 2016",
    skills: ["Team Management", "Marketing", "Digital Marketing"],
  },
  {
    company: "Jean Aicard - Hyères",
    title: "Baccalaureate in Business Science & Technology",
    years: "2010 - 2012",
    skills: ["Accounting"],
  },
];

export const frEducations: IEducation[] = [
  {
    company: "3WAcademy",
    title: "(BAC+3) Licence Intégrateur/Développeur Web et mobile",
    years: "2020 - 2021",
    skills: ["React", "NodeJS", "MySQL"],
  },
  {
    company: "OpenClassrooms",
    title: "Développeur Web - Diplôme de niveau 5 RNCP",
    years: "2020",
    skills: ["HTML", "CSS", "JavaScript", "MySQL", "Vue"],
  },
  {
    company: "University of Toulon",
    title: "(BAC+3) Licence E-commerce & Marketing Numérique",
    years: "2016 - 2017",
    skills: ["Team Management", "Marketing", "Digital Marketing", "SEO", "E-commerce"],
  },
  {
    company: "Défi83 - Toulon",
    title: "(BAC+2) BTS Management des Unités Commerciales",
    years: "2014 - 2016",
    skills: ["Team Management", "Marketing", "Digital Marketing"],
  },
  {
    company: "Jean Aicard - Hyères",
    title: "Baccalauréat Science & Technologies de Gestion",
    years: "2010 - 2012",
    skills: ["Accounting"],
  },
];
