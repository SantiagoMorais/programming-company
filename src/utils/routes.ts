export const componentsRoutesId = {
  aboutUs: "Sobre",
  portfolio: "Portfolio",
  whyChooseUs: "Diferenciais",
  faqs: "Perguntas",
};

export interface IRoutes {
  title: string;
  path: string;
}

export const navBarRoutes: IRoutes[] = [
  {
    title: componentsRoutesId.aboutUs,
    path: `#${componentsRoutesId.aboutUs}`,
  },
  {
    title: componentsRoutesId.portfolio,
    path: `#${componentsRoutesId.portfolio}`,
  },
  {
    title: componentsRoutesId.whyChooseUs,
    path: `#${componentsRoutesId.whyChooseUs}`,
  },
  {
    title: componentsRoutesId.faqs,
    path: `#${componentsRoutesId.faqs}`,
  },
];

export const routes = {
  home: "#",
  about: "#",
  portfolio: "#",
  contacts: "#",
};
